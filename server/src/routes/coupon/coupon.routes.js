const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const { couponController } = require('../../controller/coupon/coupon.controller');

const router = express.Router();

router.post('/validate', authUser, asyncHandler(couponController.validateCoupon));
router.get('/', authUser, requireAdmin, asyncHandler(couponController.getCoupons));
router.post('/', authUser, requireAdmin, asyncHandler(couponController.createCoupon));
router.put('/:id', authUser, requireAdmin, asyncHandler(couponController.updateCoupon));
router.patch('/:id/status', authUser, requireAdmin, asyncHandler(couponController.toggleCouponStatus));
router.delete('/:id', authUser, requireAdmin, asyncHandler(couponController.deleteCoupon));

module.exports = router;
