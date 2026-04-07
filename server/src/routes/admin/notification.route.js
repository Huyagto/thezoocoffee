const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const notificationAdminController = require('../../controller/admin/notification.admin.controller');

const router = express.Router();

router.use(authUser, requireAdmin);
router.get('/', asyncHandler(notificationAdminController.getNotifications));
router.patch('/:id/read', asyncHandler(notificationAdminController.markAsRead));

module.exports = router;
