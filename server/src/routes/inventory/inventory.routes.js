const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const inventoryController = require('../../controller/inventory/inventory.controller');
const { validateCreateInventory, validateUpdateInventory } = require('../../validators/inventory.validator');

const router = express.Router();

router.get('/', authUser, requireAdmin, asyncHandler(inventoryController.getInventory));

router.post('/', authUser, requireAdmin, validateCreateInventory, asyncHandler(inventoryController.createInventory));

router.put('/:id', authUser, requireAdmin, validateUpdateInventory, asyncHandler(inventoryController.updateInventory));

router.patch('/:id/status', authUser, requireAdmin, asyncHandler(inventoryController.toggleInventoryStatus));

router.delete('/:id', authUser, requireAdmin, asyncHandler(inventoryController.deleteInventory));

module.exports = router;
