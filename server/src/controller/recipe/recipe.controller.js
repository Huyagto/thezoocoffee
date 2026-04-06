const prisma = require('../../config/prisma');
const { NotFoundError, BadRequestError } = require('../../core/error.response');
const { Created, OK } = require('../../core/success.response');

class RecipeController {
    async getRecipes(req, res) {
        const recipes = await prisma.recipes.findMany({
            select: {
                id: true,
                quantity_used: true,
                created_at: true,
                products: {
                    select: {
                        id: true,
                        name: true,
                        sku: true,
                    },
                },
                inventory: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            },
        });

        new OK({
            message: 'Lay cong thuc thanh cong',
            metadata: recipes,
        }).send(res);
    }

    async createRecipe(req, res) {
        const { productId, recipes } = req.body;
        const normalizedProductId = Number(productId);

        const product = await prisma.products.findUnique({
            where: { id: normalizedProductId },
            select: { id: true, name: true },
        });

        if (!product) {
            throw new NotFoundError('San pham khong ton tai');
        }

        const inventoryIds = recipes.map((recipe) => Number(recipe.inventoryId));
        const inventoryItems = await prisma.inventory.findMany({
            where: {
                id: {
                    in: inventoryIds,
                },
            },
            select: { id: true },
        });

        if (inventoryItems.length !== inventoryIds.length) {
            throw new NotFoundError('Co nguyen lieu khong ton tai trong kho');
        }

        await prisma.$transaction(async (tx) => {
            await tx.recipes.deleteMany({
                where: {
                    product_id: normalizedProductId,
                },
            });

            await tx.recipes.createMany({
                data: recipes.map((recipe) => ({
                    product_id: normalizedProductId,
                    inventory_id: Number(recipe.inventoryId),
                    quantity_used: Number(recipe.quantityUsed),
                })),
            });
        });

        const createdRecipes = await prisma.products.findUnique({
            where: { id: normalizedProductId },
            select: {
                id: true,
                name: true,
                sku: true,
                recipes: {
                    select: {
                        id: true,
                        quantity_used: true,
                        inventory: {
                            select: {
                                id: true,
                                name: true,
                                unit: true,
                            },
                        },
                    },
                },
            },
        });

        new Created({
            message: 'Luu cong thuc thanh cong',
            metadata: createdRecipes,
        }).send(res);
    }

    async updateRecipe(req, res) {
        const { id } = req.params;
        const { quantity_used } = req.body;
        const recipeId = Number(id);
        const quantityUsed = Number(quantity_used);

        if (Number.isNaN(recipeId)) {
            throw new BadRequestError('ID cong thuc khong hop le');
        }

        if (Number.isNaN(quantityUsed) || quantityUsed <= 0) {
            throw new BadRequestError('So luong su dung khong hop le');
        }

        const recipe = await prisma.recipes.findUnique({
            where: { id: recipeId },
        });

        if (!recipe) {
            throw new NotFoundError('Cong thuc khong ton tai');
        }

        const updatedRecipe = await prisma.recipes.update({
            where: { id: recipeId },
            data: {
                quantity_used: quantityUsed,
            },
            select: {
                id: true,
                quantity_used: true,
                products: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                inventory: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        new OK({
            message: 'Cap nhat cong thuc thanh cong',
            metadata: updatedRecipe,
        }).send(res);
    }

    async deleteRecipe(req, res) {
        const { id } = req.params;
        const recipeId = Number(id);

        if (Number.isNaN(recipeId)) {
            throw new BadRequestError('ID cong thuc khong hop le');
        }

        const existingRecipe = await prisma.recipes.findUnique({
            where: { id: recipeId },
        });

        if (!existingRecipe) {
            throw new NotFoundError('Cong thuc khong ton tai');
        }

        await prisma.recipes.delete({
            where: { id: recipeId },
        });

        new OK({
            message: 'Xoa cong thuc thanh cong',
        }).send(res);
    }
}

module.exports = new RecipeController();
