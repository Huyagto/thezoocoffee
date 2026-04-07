const prisma = require('../../config/prisma');
const { BadRequestError, NotFoundError } = require('../../core/error.response');
const { OK } = require('../../core/success.response');
const { NOTIFICATION_TYPE } = require('../../services/notification.service');

class NotificationAdminController {
    async getNotifications(req, res) {
        const pendingOrders = await prisma.orders.findMany({
            where: {
                order_status: 'pending',
            },
            select: {
                id: true,
                order_code: true,
            },
        });

        if (pendingOrders.length > 0) {
            const existingNotifications = await prisma.notifications.findMany({
                where: {
                    audience: 'admin',
                    type: NOTIFICATION_TYPE.ORDER_PENDING_CONFIRMATION,
                    order_id: {
                        in: pendingOrders.map((order) => order.id),
                    },
                },
                select: {
                    order_id: true,
                },
            });

            const existingOrderIds = new Set(
                existingNotifications.map((notification) => Number(notification.order_id))
            );
            const missingOrders = pendingOrders.filter((order) => !existingOrderIds.has(order.id));

            if (missingOrders.length > 0) {
                await prisma.notifications.createMany({
                    data: missingOrders.map((order) => ({
                        user_id: null,
                        order_id: order.id,
                        audience: 'admin',
                        type: NOTIFICATION_TYPE.ORDER_PENDING_CONFIRMATION,
                        title: 'Có đơn hàng mới cần xác nhận',
                        message: `Đơn ${order.order_code} đang chờ admin xác nhận trước khi chuẩn bị.`,
                        is_read: false,
                        read_at: null,
                    })),
                });
            }
        }

        const notifications = await prisma.notifications.findMany({
            where: {
                audience: 'admin',
            },
            orderBy: {
                created_at: 'desc',
            },
            include: {
                orders: {
                    select: {
                        id: true,
                        order_code: true,
                        order_status: true,
                        payment_status: true,
                    },
                },
            },
        });

        new OK({
            message: 'Lấy thông báo admin thành công',
            metadata: notifications,
        }).send(res);
    }

    async markAsRead(req, res) {
        const notificationId = Number(req.params.id);

        if (Number.isNaN(notificationId)) {
            throw new BadRequestError('ID thông báo không hợp lệ');
        }

        const notification = await prisma.notifications.findFirst({
            where: {
                id: notificationId,
                audience: 'admin',
            },
        });

        if (!notification) {
            throw new NotFoundError('Thông báo không tồn tại');
        }

        const updatedNotification = await prisma.notifications.update({
            where: { id: notificationId },
            data: {
                is_read: true,
                read_at: notification.read_at || new Date(),
                updated_at: new Date(),
            },
        });

        new OK({
            message: 'Đã đánh dấu thông báo đã đọc',
            metadata: updatedNotification,
        }).send(res);
    }
}

module.exports = new NotificationAdminController();
