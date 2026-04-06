const express = require('express');
const router = express.Router();

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const orderController = require('../../controller/order/order.controller');
const { validateOrderStatus, validatePaymentStatus } = require('../../validators/order.validator');

router.post('/checkout', authUser, asyncHandler(orderController.checkout));
router.get('/my-orders', authUser, asyncHandler(orderController.getMyOrders));
router.get('/:id', authUser, asyncHandler(orderController.getOrderById));
router.post('/:id/cancel', authUser, asyncHandler(orderController.cancelOrder));
router.get('/', authUser, requireAdmin, asyncHandler(orderController.getOrders));
router.patch(
    '/:id/status',
    authUser,
    requireAdmin,
    validateOrderStatus,
    asyncHandler(orderController.updateOrderStatus),
);
router.patch(
    '/:id/payment',
    authUser,
    requireAdmin,
    validatePaymentStatus,
    asyncHandler(orderController.updatePaymentStatus),
);
router.delete('/:id', authUser, requireAdmin, asyncHandler(orderController.deleteOrder));

module.exports = router;
