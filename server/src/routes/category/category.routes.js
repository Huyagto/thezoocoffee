const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const categoryController = require('../../controller/category/category.controller');
const { validateCreateCategory, validateUpdateCategory } = require('../../validators/catalog.validator');

const router = express.Router();

router.get('/', asyncHandler(categoryController.getCategories));

router.get('/:id', asyncHandler(categoryController.getCategory));

router.post('/', authUser, requireAdmin, validateCreateCategory, asyncHandler(categoryController.createCategory));

router.put('/:id', authUser, requireAdmin, validateUpdateCategory, asyncHandler(categoryController.updateCategory));

router.patch('/:id/status', authUser, requireAdmin, asyncHandler(categoryController.toggleCategoryStatus));

router.delete('/:id', authUser, requireAdmin, asyncHandler(categoryController.deleteCategory));

module.exports = router;
