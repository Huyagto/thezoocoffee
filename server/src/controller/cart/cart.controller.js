const prisma = require('../../config/prisma');
const { BadRequestError, NotFoundError } = require('../../core/error.response');
const { OK, Created } = require('../../core/success.response');

const CART_SELECT = {
    id: true,
    user_id: true,
    created_at: true,
    updated_at: true,
    cart_items: {
        orderBy: { id: 'desc' },
        select: {
            id: true,
            product_id: true,
            quantity: true,
            unit_price: true,
            subtotal: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                    image: true,
                    status: true,
                },
            },
        },
    },
};

function getCurrentUserId(req) {
    return Number(req.user?.id || req.user?.userId);
}

function normalizeCart(cart) {
    const items =
        cart?.cart_items?.map((item) => ({
            id: item.products.id,
            cartItemId: item.id,
            productId: item.product_id,
            name: item.products.name,
            description: item.products.description || '',
            price: Number(item.unit_price),
            image: item.products.image || '/images/placeholder.jpg',
            quantity: item.quantity,
            product: {
                id: item.products.id,
                name: item.products.name,
                description: item.products.description || '',
                price: Number(item.products.price),
                image: item.products.image,
                status: item.products.status,
            },
        })) || [];

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
        id: String(cart.id),
        userId: String(cart.user_id),
        items,
        subtotal,
        createdAt: cart.created_at,
        updatedAt: cart.updated_at,
    };
}

async function getOrCreateCart(userId) {
    const existingCart = await prisma.carts.findUnique({
        where: { user_id: userId },
        select: CART_SELECT,
    });

    if (existingCart) {
        return existingCart;
    }

    return prisma.carts.create({
        data: { user_id: userId },
        select: CART_SELECT,
    });
}

class CartController {
    async getCart(req, res) {
        const userId = getCurrentUserId(req);
        const cart = await getOrCreateCart(userId);

        new OK({
            message: 'Lay gio hang thanh cong',
            metadata: normalizeCart(cart),
        }).send(res);
    }

    async addToCart(req, res) {
        const userId = getCurrentUserId(req);
        const productId = Number(req.body.productId);
        const quantity = Math.max(1, Number(req.body.quantity || 1));

        if (Number.isNaN(productId)) {
            throw new BadRequestError('San pham khong hop le');
        }

        const product = await prisma.products.findUnique({
            where: { id: productId },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                image: true,
                status: true,
            },
        });

        if (!product || product.status !== 'available') {
            throw new NotFoundError('San pham khong ton tai hoac khong con ban');
        }

        const cart = await getOrCreateCart(userId);
        const existingItem = cart.cart_items.find((item) => item.product_id === productId);
        const unitPrice = Number(product.price);

        if (existingItem) {
            await prisma.cart_items.update({
                where: { id: existingItem.id },
                data: {
                    quantity: existingItem.quantity + quantity,
                    subtotal: unitPrice * (existingItem.quantity + quantity),
                },
            });
        } else {
            await prisma.cart_items.create({
                data: {
                    cart_id: cart.id,
                    product_id: productId,
                    quantity,
                    unit_price: unitPrice,
                    subtotal: unitPrice * quantity,
                },
            });
        }

        const refreshedCart = await prisma.carts.findUnique({
            where: { id: cart.id },
            select: CART_SELECT,
        });

        const addedItem = normalizeCart(refreshedCart).items.find((item) => item.productId === productId);

        new Created({
            message: 'Them vao gio hang thanh cong',
            metadata: addedItem,
        }).send(res);
    }

    async updateQuantity(req, res) {
        const userId = getCurrentUserId(req);
        const productId = Number(req.params.id);
        const quantity = Number(req.body.quantity);

        if (Number.isNaN(productId) || Number.isNaN(quantity)) {
            throw new BadRequestError('Du lieu cap nhat gio hang khong hop le');
        }

        const cart = await getOrCreateCart(userId);
        const cartItem = cart.cart_items.find((item) => item.product_id === productId);

        if (!cartItem) {
            throw new NotFoundError('San pham khong co trong gio hang');
        }

        if (quantity < 1) {
            await prisma.cart_items.deleteMany({
                where: { id: cartItem.id },
            });

            return new OK({
                message: 'Da xoa san pham khoi gio hang',
                metadata: null,
            }).send(res);
        }

        await prisma.cart_items.update({
            where: { id: cartItem.id },
            data: {
                quantity,
                subtotal: Number(cartItem.unit_price) * quantity,
            },
        });

        const refreshedCart = await prisma.carts.findUnique({
            where: { id: cart.id },
            select: CART_SELECT,
        });

        const updatedItem = normalizeCart(refreshedCart).items.find((item) => item.productId === productId);

        new OK({
            message: 'Cap nhat gio hang thanh cong',
            metadata: updatedItem,
        }).send(res);
    }

    async removeFromCart(req, res) {
        const userId = getCurrentUserId(req);
        const productId = Number(req.params.id);

        if (Number.isNaN(productId)) {
            throw new BadRequestError('San pham khong hop le');
        }

        const cart = await getOrCreateCart(userId);
        const cartItem = cart.cart_items.find((item) => item.product_id === productId);

        if (!cartItem) {
            throw new NotFoundError('San pham khong co trong gio hang');
        }

        await prisma.cart_items.deleteMany({
            where: { id: cartItem.id },
        });

        new OK({
            message: 'Xoa san pham khoi gio hang thanh cong',
            metadata: true,
        }).send(res);
    }

    async clearCart(req, res) {
        const userId = getCurrentUserId(req);
        const cart = await getOrCreateCart(userId);

        await prisma.cart_items.deleteMany({
            where: { cart_id: cart.id },
        });

        new OK({
            message: 'Da xoa toan bo gio hang',
            metadata: true,
        }).send(res);
    }
}

module.exports = new CartController();
