const express = require('express');

const { asyncHandler } = require('../../../auth/checkAuth');
const { authUser } = require('../../../middleware/authUser');
const { requireAdmin } = require('../../../middleware/requireAdmin');
const orderAdminController = require('../../../controller/admin/order/order.admin.controller');
const { validateOrderStatus, validatePaymentStatus } = require('../../../validators/order.validator');

const router = express.Router();

router.use(authUser, requireAdmin);
router.get('/', asyncHandler(orderAdminController.getOrders));
router.patch('/:id/status', validateOrderStatus, asyncHandler(orderAdminController.updateOrderStatus));
router.patch('/:id/payment', validatePaymentStatus, asyncHandler(orderAdminController.updatePaymentStatus));
router.delete('/:id', asyncHandler(orderAdminController.deleteOrder));

module.exports = router;
