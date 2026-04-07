const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const shippingController = require('../../controller/shipping/shipping.controller');
const { validateShippingFeeQuote } = require('../../validators/commerce.validator');

const router = express.Router();

router.get('/provinces', asyncHandler(shippingController.getProvinces));
router.get('/districts', asyncHandler(shippingController.getDistricts));
router.get('/wards', asyncHandler(shippingController.getWards));
router.post('/fee', validateShippingFeeQuote, asyncHandler(shippingController.quoteShippingFee));

module.exports = router;
