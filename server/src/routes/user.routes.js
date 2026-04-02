const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../auth/checkAuth');
const userController = require('../controller/user.controller');

router.post('/register', asyncHandler(userController.register));
router.post('/login', asyncHandler(userController.login));
router.post('/logout', asyncHandler(userController.logout));
router.post('/forgot-password', asyncHandler(userController.forgotPassword));

module.exports = router;
