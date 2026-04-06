const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const adminUserController = require('../../controller/admin/user.admin.controller');
const { validateUpdateUserRole } = require('../../validators/user.validator');

const router = express.Router();

router.get('/users', authUser, requireAdmin, asyncHandler(adminUserController.getUsers));
router.patch('/users/:id', authUser, requireAdmin, validateUpdateUserRole, asyncHandler(adminUserController.updateUserRole));
router.delete('/users/:id', authUser, requireAdmin, asyncHandler(adminUserController.deleteUser));

module.exports = router;
