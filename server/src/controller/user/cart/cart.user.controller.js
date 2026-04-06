const cartController = require('../../../controller/cart/cart.controller');

module.exports = {
    getCart: cartController.getCart.bind(cartController),
    addToCart: cartController.addToCart.bind(cartController),
    updateQuantity: cartController.updateQuantity.bind(cartController),
    removeFromCart: cartController.removeFromCart.bind(cartController),
    clearCart: cartController.clearCart.bind(cartController),
};
