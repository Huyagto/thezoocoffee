const express = require('express');
const router = express.Router();

const { asyncHandler } = require('../../auth/checkAuth');

const { authUser } = require('../../middleware/authUser');

const { requireAdmin } = require('../../middleware/requireAdmin');

const userController = require('../../controller/user/user.controller');

const {
    validateRegister,
    validateLogin,
    validateForgotPassword,
    validateResetPassword,
    validateUpdateProfile,
    validateUpdateUserRole,
} = require('../../validators/user.validator');

router.post('/register', validateRegister, asyncHandler(userController.register));
router.post('/login', validateLogin, asyncHandler(userController.login));
router.get('/auth', authUser, asyncHandler(userController.authUser));
router.put('/profile', authUser, validateUpdateProfile, asyncHandler(userController.updateProfile));
router.get('/logout', authUser, asyncHandler(userController.logout));
router.post('/forgot-password', validateForgotPassword, asyncHandler(userController.forgotPassword));
router.post('/verify-forgot-password', asyncHandler(userController.verifyForgotPassword));
router.post('/reset-password', authUser, validateResetPassword, asyncHandler(userController.resetPassword));
router.post('/verify-reset-password', authUser, asyncHandler(userController.verifyResetPassword));
router.get('/google', asyncHandler(userController.loginOauth2Google));
router.get('/google/callback', asyncHandler(userController.Oauth2callbackGoogle));
router.get('/facebook', asyncHandler(userController.loginOauth2Facebook));
router.get('/facebook/callback', asyncHandler(userController.Oauth2callbackFacebook));
router.get('/users', authUser, requireAdmin, asyncHandler(userController.getUsers));
router.patch('/:id', authUser, requireAdmin, validateUpdateUserRole, asyncHandler(userController.updateUserRole));
router.delete('/:id', authUser, requireAdmin, asyncHandler(userController.deleteUser));

module.exports = router;
