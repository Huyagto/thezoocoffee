const paymentController = require('../../../controller/payment/payment.controller');

module.exports = {
    createPayment: paymentController.createPayment.bind(paymentController),
    getPaymentById: paymentController.getPaymentById.bind(paymentController),
};
