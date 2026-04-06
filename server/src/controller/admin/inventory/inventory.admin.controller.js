const inventoryController = require('../../../controller/inventory/inventory.controller');

module.exports = {
    getInventory: inventoryController.getInventory.bind(inventoryController),
    createInventory: inventoryController.createInventory.bind(inventoryController),
    updateInventory: inventoryController.updateInventory.bind(inventoryController),
    toggleInventoryStatus: inventoryController.toggleInventoryStatus.bind(inventoryController),
    deleteInventory: inventoryController.deleteInventory.bind(inventoryController),
};
