const productController = require('../../../controller/product/product.controller');

module.exports = {
    createProduct: productController.createProduct.bind(productController),
    createProductWithRecipes: productController.createProductWithRecipes.bind(productController),
    updateProduct: productController.updateProduct.bind(productController),
    toggleProductStatus: productController.toggleProductStatus.bind(productController),
    deleteProduct: productController.deleteProduct.bind(productController),
};
