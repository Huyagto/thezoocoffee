const prisma = require('../config/prisma');

const NOTIFICATION_AUDIENCE = {
    ADMIN: 'admin',
    USER: 'user',
};

const NOTIFICATION_TYPE = {
    ORDER_PENDING_CONFIRMATION: 'order_pending_confirmation',
    ORDER_CONFIRMED: 'order_confirmed',
    ORDER_PREPARING: 'order_preparing',
    ORDER_SHIPPING: 'order_shipping',
};

async function createNotification(data, tx = prisma) {
    return tx.notifications.create({
        data: {
            user_id: data.userId ?? null,
            order_id: data.orderId ?? null,
            audience: data.audience,
            type: data.type,
            title: data.title,
            message: data.message,
            is_read: false,
            read_at: null,
        },
    });
}

async function createAdminOrderPendingNotification(order, tx = prisma) {
    return createNotification(
        {
            audience: NOTIFICATION_AUDIENCE.ADMIN,
            type: NOTIFICATION_TYPE.ORDER_PENDING_CONFIRMATION,
            orderId: order.id,
            title: 'Có đơn hàng mới cần xác nhận',
            message: `Đơn ${order.order_code} đang chờ admin xác nhận trước khi chuẩn bị.`,
        },
        tx
    );
}

async function createUserOrderStatusNotification({ userId, orderId, orderCode, status }, tx = prisma) {
    const statusMap = {
        confirmed: {
            type: NOTIFICATION_TYPE.ORDER_CONFIRMED,
            title: 'Đơn hàng đã được xác nhận',
            message: `Đơn ${orderCode} đã được admin xác nhận.`,
        },
        preparing: {
            type: NOTIFICATION_TYPE.ORDER_PREPARING,
            title: 'Đơn hàng đang được chuẩn bị',
            message: `Đơn ${orderCode} đang được chuẩn bị.`,
        },
        shipping: {
            type: NOTIFICATION_TYPE.ORDER_SHIPPING,
            title: 'Đơn hàng đang giao vận',
            message: `Đơn ${orderCode} đã được bàn giao cho đơn vị vận chuyển.`,
        },
    };

    const config = statusMap[status];

    if (!config || !userId) {
        return null;
    }

    return createNotification(
        {
            userId,
            orderId,
            audience: NOTIFICATION_AUDIENCE.USER,
            type: config.type,
            title: config.title,
            message: config.message,
        },
        tx
    );
}

module.exports = {
    NOTIFICATION_AUDIENCE,
    NOTIFICATION_TYPE,
    createNotification,
    createAdminOrderPendingNotification,
    createUserOrderStatusNotification,
};
