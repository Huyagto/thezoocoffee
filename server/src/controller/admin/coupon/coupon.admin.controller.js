const { couponController } = require('../../../controller/coupon/coupon.controller');

module.exports = {
    getCoupons: couponController.getCoupons.bind(couponController),
    createCoupon: couponController.createCoupon.bind(couponController),
    updateCoupon: couponController.updateCoupon.bind(couponController),
    toggleCouponStatus: couponController.toggleCouponStatus.bind(couponController),
    deleteCoupon: couponController.deleteCoupon.bind(couponController),
};
