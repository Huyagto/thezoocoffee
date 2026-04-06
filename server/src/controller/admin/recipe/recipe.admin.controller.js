const recipeController = require('../../../controller/recipe/recipe.controller');

module.exports = {
    getRecipes: recipeController.getRecipes.bind(recipeController),
    createRecipe: recipeController.createRecipe.bind(recipeController),
    updateRecipe: recipeController.updateRecipe.bind(recipeController),
    deleteRecipe: recipeController.deleteRecipe.bind(recipeController),
};
