const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const productController = require('../../controller/product/product.controller');
const { validateCreateProduct, validateUpdateProduct } = require('../../validators/catalog.validator');

const { validateCreateProductWithRecipes } = require('../../validators/recipe.validator');

const router = express.Router();

router.get('/', asyncHandler(productController.getProducts));

router.get('/category/:category', asyncHandler(productController.getProductsByCategory));

router.post('/', authUser, requireAdmin, validateCreateProduct, asyncHandler(productController.createProduct));

router.post(
    '/with-recipes',
    authUser,
    requireAdmin,
    validateCreateProductWithRecipes,
    asyncHandler(productController.createProductWithRecipes),
);

router.put('/:id', authUser, requireAdmin, validateUpdateProduct, asyncHandler(productController.updateProduct));

router.patch('/:id/status', authUser, requireAdmin, asyncHandler(productController.toggleProductStatus));

router.delete('/:id', authUser, requireAdmin, asyncHandler(productController.deleteProduct));

module.exports = router;
