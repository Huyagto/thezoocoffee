const prisma = require('../../config/prisma');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../../core/error.response');
const { OK, Created } = require('../../core/success.response');
const { PAYMENT_METHOD_MAP, createTransactionCode } = require('../payment/payment.model');
const {
    findCouponByCode,
    validateCouponAvailability,
    calculateDiscount,
} = require('../coupon/coupon.controller');

const ORDER_SELECT = {
    id: true,
    coupon_id: true,
    order_code: true,
    discount_amount: true,
    total_amount: true,
    shipping_address: true,
    note: true,
    order_status: true,
    payment_status: true,
    created_at: true,
    updated_at: true,
    users: {
        select: {
            id: true,
            name: true,
            email: true,
        },
    },
    order_items: {
        select: {
            id: true,
            quantity: true,
            unit_price: true,
            subtotal: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    sku: true,
                },
            },
        },
    },
};

const CANCELLABLE_STATUSES = ['pending', 'confirmed'];
const SHIPPING_FEE = 30000;

function normalizeOrder(order) {
    if (!order) {
        return order;
    }

    return {
        ...order,
        user: order.users,
        discount_amount: Number(order.discount_amount || 0),
        total_amount: Number(order.total_amount || 0),
    };
}

function buildShippingAddress(shippingInfo) {
    return [
        shippingInfo.fullName?.trim(),
        shippingInfo.phone?.trim(),
        shippingInfo.email?.trim(),
        shippingInfo.address?.trim(),
    ]
        .filter(Boolean)
        .join(' | ');
}

function createOrderCode() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomSuffix = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `ZOO-${timestamp}-${randomSuffix}`;
}

class OrderController {
    async checkout(req, res) {
        const userId = Number(req.user?.userId || req.user?.id);
        const { shippingInfo, paymentMethod, items, couponCode } = req.body;

        if (!userId) {
            throw new BadRequestError('Khong xac dinh duoc nguoi dung dat hang');
        }

        if (!shippingInfo || typeof shippingInfo !== 'object') {
            throw new BadRequestError('Thong tin giao hang khong hop le');
        }

        if (
            !shippingInfo.fullName?.trim() ||
            !shippingInfo.phone?.trim() ||
            !shippingInfo.email?.trim() ||
            !shippingInfo.address?.trim()
        ) {
            throw new BadRequestError('Vui long nhap day du thong tin giao hang');
        }

        if (!paymentMethod || !PAYMENT_METHOD_MAP[paymentMethod]) {
            throw new BadRequestError('Phuong thuc thanh toan khong hop le');
        }

        if (!Array.isArray(items) || items.length === 0) {
            throw new BadRequestError('Don hang phai co it nhat mot san pham');
        }

        const productIds = [...new Set(items.map((item) => Number(item.productId)).filter((id) => !Number.isNaN(id)))];

        if (productIds.length === 0) {
            throw new BadRequestError('Danh sach san pham khong hop le');
        }

        const products = await prisma.products.findMany({
            where: {
                id: { in: productIds },
                status: 'available',
            },
            select: {
                id: true,
                price: true,
                status: true,
            },
        });

        if (products.length !== productIds.length) {
            throw new NotFoundError('Mot hoac nhieu san pham khong ton tai hoac da ngung ban');
        }

        const productMap = new Map(products.map((product) => [product.id, product]));

        const normalizedItems = items.map((item) => {
            const productId = Number(item.productId);
            const quantity = Number(item.quantity);
            const product = productMap.get(productId);

            if (!product || Number.isNaN(quantity) || quantity <= 0) {
                throw new BadRequestError('Thong tin san pham trong don hang khong hop le');
            }

            const unitPrice = Number(product.price);

            return {
                productId,
                quantity,
                unitPrice,
                subtotal: unitPrice * quantity,
            };
        });

        const subtotal = normalizedItems.reduce((sum, item) => sum + item.subtotal, 0);
        let coupon = null;
        let discountAmount = 0;

        if (couponCode?.trim()) {
            coupon = await findCouponByCode(couponCode);
            validateCouponAvailability(coupon);
            discountAmount = calculateDiscount(coupon, subtotal);
        }

        const totalAmount = Math.max(0, subtotal - discountAmount) + SHIPPING_FEE;

        const order = await prisma.$transaction(async (tx) => {
            const orderCode = createOrderCode();
            const paymentTransactionCode = paymentMethod === 'cod' ? null : createTransactionCode(paymentMethod, orderCode);

            const createdOrder = await tx.orders.create({
                data: {
                    user_id: userId,
                    coupon_id: coupon?.id || null,
                    order_code: orderCode,
                    discount_amount: discountAmount,
                    total_amount: totalAmount,
                    shipping_address: buildShippingAddress(shippingInfo),
                    note: shippingInfo.note?.trim() || null,
                    order_status: 'pending',
                    payment_status: 'unpaid',
                },
            });

            await tx.order_items.createMany({
                data: normalizedItems.map((item) => ({
                    order_id: createdOrder.id,
                    product_id: item.productId,
                    quantity: item.quantity,
                    unit_price: item.unitPrice,
                    subtotal: item.subtotal,
                })),
            });

            await tx.payments.create({
                data: {
                    order_id: createdOrder.id,
                    amount: totalAmount,
                    method: PAYMENT_METHOD_MAP[paymentMethod],
                    status: 'pending',
                    transaction_code: paymentTransactionCode,
                },
            });

            if (coupon?.id) {
                await tx.coupons.update({
                    where: { id: coupon.id },
                    data: {
                        used_count: {
                            increment: 1,
                        },
                        updated_at: new Date(),
                    },
                });
            }

            const hydratedOrder = await tx.orders.findUnique({
                where: { id: createdOrder.id },
                select: ORDER_SELECT,
            });

            return {
                ...hydratedOrder,
                paymentUrl: null,
            };
        });

        new Created({
            message: 'Tao don hang thanh cong',
            metadata: {
                ...normalizeOrder(order),
                paymentUrl: order.paymentUrl,
            },
        }).send(res);
    }

    async getOrders(req, res) {
        const orders = await prisma.orders.findMany({
            orderBy: { created_at: 'desc' },
            select: ORDER_SELECT,
        });

        new OK({
            message: 'Lay danh sach don hang thanh cong',
            metadata: orders.map(normalizeOrder),
        }).send(res);
    }

    async getMyOrders(req, res) {
        const userId = Number(req.user?.userId || req.user?.id);

        const orders = await prisma.orders.findMany({
            where: { user_id: userId },
            orderBy: { created_at: 'desc' },
            select: ORDER_SELECT,
        });

        new OK({
            message: 'Lay danh sach don hang thanh cong',
            metadata: orders.map(normalizeOrder),
        }).send(res);
    }

    async getOrderById(req, res) {
        const orderId = Number(req.params.id);
        const userId = Number(req.user?.userId || req.user?.id);
        const role = req.user?.role;

        if (Number.isNaN(orderId)) {
            throw new BadRequestError('ID don hang khong hop le');
        }

        const order = await prisma.orders.findUnique({
            where: { id: orderId },
            select: ORDER_SELECT,
        });

        if (!order) {
            throw new NotFoundError('Don hang khong ton tai');
        }

        if (role !== 'admin' && Number(order.users?.id) !== userId) {
            throw new ForbiddenError('Ban khong co quyen xem don hang nay');
        }

        new OK({
            message: 'Lay don hang thanh cong',
            metadata: normalizeOrder(order),
        }).send(res);
    }

    async cancelOrder(req, res) {
        const orderId = Number(req.params.id);
        const userId = Number(req.user?.userId || req.user?.id);
        const role = req.user?.role;

        if (Number.isNaN(orderId)) {
            throw new BadRequestError('ID don hang khong hop le');
        }

        const order = await prisma.orders.findUnique({
            where: { id: orderId },
            select: ORDER_SELECT,
        });

        if (!order) {
            throw new NotFoundError('Don hang khong ton tai');
        }

        if (role !== 'admin' && Number(order.users?.id) !== userId) {
            throw new ForbiddenError('Ban khong co quyen huy don hang nay');
        }

        if (!CANCELLABLE_STATUSES.includes(order.order_status)) {
            throw new BadRequestError('Chi co the huy don hang dang cho xu ly');
        }

        const updatedOrder = await prisma.orders.update({
            where: { id: orderId },
            data: {
                order_status: 'cancelled',
                updated_at: new Date(),
            },
            select: ORDER_SELECT,
        });

        new OK({
            message: 'Huy don hang thanh cong',
            metadata: normalizeOrder(updatedOrder),
        }).send(res);
    }

    async updateOrderStatus(req, res) {
        const orderId = Number(req.params.id);
        const { status } = req.body;

        if (Number.isNaN(orderId)) {
            throw new BadRequestError('ID don hang khong hop le');
        }

        const order = await prisma.orders.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            throw new NotFoundError('Don hang khong ton tai');
        }

        const updatedOrder = await prisma.orders.update({
            where: { id: orderId },
            data: {
                order_status: status,
                updated_at: new Date(),
            },
            select: ORDER_SELECT,
        });

        new OK({
            message: 'Cap nhat trang thai don hang thanh cong',
            metadata: normalizeOrder(updatedOrder),
        }).send(res);
    }

    async updatePaymentStatus(req, res) {
        const orderId = Number(req.params.id);
        const { paymentStatus } = req.body;

        if (Number.isNaN(orderId)) {
            throw new BadRequestError('ID don hang khong hop le');
        }

        const order = await prisma.orders.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            throw new NotFoundError('Don hang khong ton tai');
        }

        const updatedOrder = await prisma.$transaction(async (tx) => {
            await tx.orders.update({
                where: { id: orderId },
                data: {
                    payment_status: paymentStatus,
                    updated_at: new Date(),
                },
            });

            const latestPayment = await tx.payments.findFirst({
                where: { order_id: orderId },
                orderBy: { created_at: 'desc' },
            });

            if (latestPayment) {
                const paymentRecordStatus =
                    paymentStatus === 'paid'
                        ? 'success'
                        : paymentStatus === 'failed'
                          ? 'failed'
                          : paymentStatus === 'refunded'
                            ? 'refunded'
                            : 'pending';

                await tx.payments.update({
                    where: { id: latestPayment.id },
                    data: {
                        status: paymentRecordStatus,
                        paid_at: paymentStatus === 'paid' ? latestPayment.paid_at || new Date() : null,
                    },
                });
            }

            return tx.orders.findUnique({
                where: { id: orderId },
                select: ORDER_SELECT,
            });
        });

        new OK({
            message: 'Cap nhat trang thai thanh toan thanh cong',
            metadata: normalizeOrder(updatedOrder),
        }).send(res);
    }

    async deleteOrder(req, res) {
        const orderId = Number(req.params.id);

        if (Number.isNaN(orderId)) {
            throw new BadRequestError('ID don hang khong hop le');
        }

        const order = await prisma.orders.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            throw new NotFoundError('Don hang khong ton tai');
        }

        await prisma.orders.delete({
            where: { id: orderId },
        });

        new OK({
            message: 'Xoa don hang thanh cong',
            metadata: true,
        }).send(res);
    }
}

module.exports = new OrderController();
