const categoryController = require('../../../controller/category/category.controller');

module.exports = {
    createCategory: categoryController.createCategory.bind(categoryController),
    updateCategory: categoryController.updateCategory.bind(categoryController),
    toggleCategoryStatus: categoryController.toggleCategoryStatus.bind(categoryController),
    deleteCategory: categoryController.deleteCategory.bind(categoryController),
};
