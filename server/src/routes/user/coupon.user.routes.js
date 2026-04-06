const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const couponUserController = require('../../controller/user/coupon/coupon.user.controller');

const router = express.Router();

router.use(authUser);
router.post('/validate', asyncHandler(couponUserController.validateCoupon));

module.exports = router;
