const orderController = require('../../../controller/order/order.controller');

module.exports = {
    checkout: orderController.checkout.bind(orderController),
    getMyOrders: orderController.getMyOrders.bind(orderController),
    getOrderById: orderController.getOrderById.bind(orderController),
    cancelOrder: orderController.cancelOrder.bind(orderController),
};
