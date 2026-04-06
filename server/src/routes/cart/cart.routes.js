const express = require('express');
const router = express.Router();

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const cartController = require('../../controller/cart/cart.controller');

router.get('/', authUser, asyncHandler(cartController.getCart));
router.post('/items', authUser, asyncHandler(cartController.addToCart));
router.patch('/items/:id', authUser, asyncHandler(cartController.updateQuantity));
router.delete('/items/:id', authUser, asyncHandler(cartController.removeFromCart));
router.delete('/clear', authUser, asyncHandler(cartController.clearCart));

module.exports = router;
