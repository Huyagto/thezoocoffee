const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const recipeController = require('../../controller/recipe/recipe.controller');
const { validateCreateRecipe, validateUpdateRecipe } = require('../../validators/recipe.validator');

const router = express.Router();

router.get('/', authUser, requireAdmin, asyncHandler(recipeController.getRecipes));

router.post('/', authUser, requireAdmin, validateCreateRecipe, asyncHandler(recipeController.createRecipe));

router.put('/:id', authUser, requireAdmin, validateUpdateRecipe, asyncHandler(recipeController.updateRecipe));

router.delete('/:id', authUser, requireAdmin, asyncHandler(recipeController.deleteRecipe));

module.exports = router;
