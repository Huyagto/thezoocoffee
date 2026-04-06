const express = require('express');
const router = express.Router();

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const paymentController = require('../../controller/payment/payment.controller');

router.get('/callback/:provider', asyncHandler(paymentController.paymentCallback));
router.post('/callback/zalopay', asyncHandler(paymentController.zalopayCallback));
router.get('/gateway/:provider', asyncHandler(paymentController.gatewayPage));
router.get('/', authUser, requireAdmin, asyncHandler(paymentController.getPaymentsAdmin));
router.post('/:orderId/initiate', authUser, asyncHandler(paymentController.createPayment));
router.get('/:orderId', authUser, asyncHandler(paymentController.getPaymentById));
router.patch('/:orderId', authUser, requireAdmin, asyncHandler(paymentController.updatePayment));

module.exports = router;
