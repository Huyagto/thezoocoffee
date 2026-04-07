const orderController = require('../../../controller/order/order.controller');

module.exports = {
    getOrders: orderController.getOrders.bind(orderController),
    updateOrderStatus: orderController.updateOrderStatus.bind(orderController),
    updatePaymentStatus: orderController.updatePaymentStatus.bind(orderController),
};
