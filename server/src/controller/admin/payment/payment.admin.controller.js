const paymentController = require('../../../controller/payment/payment.controller');

module.exports = {
    getPaymentsAdmin: paymentController.getPaymentsAdmin.bind(paymentController),
    updatePayment: paymentController.updatePayment.bind(paymentController),
};
