const { couponController } = require('../../../controller/coupon/coupon.controller');

module.exports = {
    validateCoupon: couponController.validateCoupon.bind(couponController),
};
