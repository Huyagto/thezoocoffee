const prisma = require('../../config/prisma');
const { ConflictRequestError, NotFoundError, BadRequestError } = require('../../core/error.response');
const { Created, OK } = require('../../core/success.response');

class ProductController {
    async getProducts(req, res) {
        const { page = 1, limit = 10, sort = 'newest', search } = req.query;

        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const offset = (pageNum - 1) * limitNum;

        let orderBy = { created_at: 'desc' };
        if (sort === 'price_asc') {
            orderBy = { price: 'asc' };
        } else if (sort === 'price_desc') {
            orderBy = { price: 'desc' };
        }

        const where = search
            ? {
                  name: {
                      contains: search,
                      mode: 'insensitive',
                  },
              }
            : {};

        const [products, total] = await Promise.all([
            prisma.products.findMany({
                where,
                select: {
                    id: true,
                    name: true,
                    price: true,
                    image: true,
                    description: true,
                    sku: true,
                    status: true,
                    created_at: true,
                    updated_at: true,
                    categories: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
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
                orderBy,
                skip: offset,
                take: limitNum,
            }),
            prisma.products.count({ where }),
        ]);

        new OK({
            message: 'Lấy sản phẩm thành công',
            metadata: {
                products,
                total,
                page: pageNum,
                limit: limitNum,
            },
        }).send(res);
    }

    async getProductsByCategory(req, res) {
        const { category } = req.params;
        const { page = 1, limit = 10, sort = 'newest' } = req.query;

        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const offset = (pageNum - 1) * limitNum;

        let orderBy = { created_at: 'desc' };
        if (sort === 'price_asc') {
            orderBy = { price: 'asc' };
        } else if (sort === 'price_desc') {
            orderBy = { price: 'desc' };
        }

        const where = {
            categories: {
                name: {
                    equals: category,
                    mode: 'insensitive',
                },
            },
        };

        const [products, total] = await Promise.all([
            prisma.products.findMany({
                where,
                select: {
                    id: true,
                    name: true,
                    price: true,
                    image: true,
                    description: true,
                    sku: true,
                    status: true,
                    created_at: true,
                    updated_at: true,
                    categories: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
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
                orderBy,
                skip: offset,
                take: limitNum,
            }),
            prisma.products.count({ where }),
        ]);

        new OK({
            message: 'Lấy sản phẩm theo danh mục thành công',
            metadata: {
                products,
                total,
                page: pageNum,
                limit: limitNum,
            },
        }).send(res);
    }

    async createProduct(req, res) {
        const { name, categoryId, price, image, description, sku, status } = req.body;

        const category = await prisma.categories.findUnique({
            where: { id: Number(categoryId) },
            select: { id: true, name: true },
        });

        if (!category) {
            throw new NotFoundError('Danh mục không tồn tại');
        }

        if (sku?.trim()) {
            const existingProduct = await prisma.products.findUnique({
                where: { sku: sku.trim() },
                select: { id: true },
            });

            if (existingProduct) {
                throw new ConflictRequestError('SKU đã tồn tại');
            }
        }

        const product = await prisma.products.create({
            data: {
                name: name.trim(),
                category_id: Number(categoryId),
                price: Number(price),
                image: image?.trim() || null,
                description: description?.trim() || null,
                sku: sku?.trim() || null,
                status: status || 'available',
            },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
                sku: true,
                status: true,
                created_at: true,
                updated_at: true,
                categories: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        new Created({
            message: 'Tạo sản phẩm thành công',
            metadata: product,
        }).send(res);
    }

    async createProductWithRecipes(req, res) {
        const { name, categoryId, price, image, description, sku, status, recipes } = req.body;

        const category = await prisma.categories.findUnique({
            where: { id: Number(categoryId) },
            select: { id: true },
        });

        if (!category) {
            throw new NotFoundError('Danh mục không tồn tại');
        }

        if (sku?.trim()) {
            const existingProduct = await prisma.products.findUnique({
                where: { sku: sku.trim() },
                select: { id: true },
            });

            if (existingProduct) {
                throw new ConflictRequestError('SKU đã tồn tại');
            }
        }

        const inventoryIds = recipes.map((recipe) => Number(recipe.inventoryId));
        const inventoryItems = await prisma.inventory.findMany({
            where: {
                id: {
                    in: inventoryIds,
                },
            },
            select: {
                id: true,
                name: true,
                unit: true,
            },
        });

        if (inventoryItems.length !== inventoryIds.length) {
            throw new NotFoundError('Có nguyên liệu không tồn tại trong kho');
        }

        const createdProduct = await prisma.$transaction(async (tx) => {
            const product = await tx.products.create({
                data: {
                    name: name.trim(),
                    category_id: Number(categoryId),
                    price: Number(price),
                    image: image?.trim() || null,
                    description: description?.trim() || null,
                    sku: sku?.trim() || null,
                    status: status || 'available',
                },
            });

            await tx.recipes.createMany({
                data: recipes.map((recipe) => ({
                    product_id: product.id,
                    inventory_id: Number(recipe.inventoryId),
                    quantity_used: Number(recipe.quantityUsed),
                })),
            });

            return tx.products.findUnique({
                where: { id: product.id },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    image: true,
                    description: true,
                    sku: true,
                    status: true,
                    created_at: true,
                    updated_at: true,
                    categories: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
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
        });

        new Created({
            message: 'Tạo sản phẩm theo công thức thành công',
            metadata: createdProduct,
        }).send(res);
    }

    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, categoryId, price, image, description, sku, status } = req.body;
        const productId = Number(id);

        if (Number.isNaN(productId)) {
            throw new BadRequestError('ID sản phẩm không hợp lệ');
        }

        const existingProduct = await prisma.products.findUnique({
            where: { id: productId },
        });

        if (!existingProduct) {
            throw new NotFoundError('Sản phẩm không tồn tại');
        }

        if (categoryId && Number(categoryId) !== existingProduct.category_id) {
            const category = await prisma.categories.findUnique({
                where: { id: Number(categoryId) },
            });
            if (!category) {
                throw new NotFoundError('Danh mục không tồn tại');
            }
        }

        if (sku && sku.trim() && sku.trim() !== existingProduct.sku) {
            const skuConflict = await prisma.products.findUnique({
                where: { sku: sku.trim() },
            });
            if (skuConflict) {
                throw new ConflictRequestError('SKU đã tồn tại');
            }
        }

        const updatedProduct = await prisma.products.update({
            where: { id: productId },
            data: {
                name: name ? name.trim() : existingProduct.name,
                category_id: categoryId ? Number(categoryId) : existingProduct.category_id,
                price: price !== undefined ? Number(price) : existingProduct.price,
                image: image !== undefined ? (image ? image.trim() : null) : existingProduct.image,
                description: description !== undefined ? description.trim() || null : existingProduct.description,
                sku: sku ? sku.trim() : existingProduct.sku,
                status: status || existingProduct.status,
                updated_at: new Date(),
            },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
                sku: true,
                status: true,
                created_at: true,
                updated_at: true,
                categories: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        new OK({
            message: 'Cập nhật sản phẩm thành công',
            metadata: updatedProduct,
        }).send(res);
    }

    async toggleProductStatus(req, res) {
        const { id } = req.params;
        const productId = Number(id);

        if (Number.isNaN(productId)) {
            throw new BadRequestError('ID sản phẩm không hợp lệ');
        }

        const existingProduct = await prisma.products.findUnique({
            where: { id: productId },
        });

        if (!existingProduct) {
            throw new NotFoundError('Sản phẩm không tồn tại');
        }

        const statusMap = {
            available: 'out_of_stock',
            out_of_stock: 'discontinued',
            discontinued: 'available',
        };

        const newStatus = statusMap[existingProduct.status] || 'available';

        const updatedProduct = await prisma.products.update({
            where: { id: productId },
            data: { status: newStatus },
            select: {
                id: true,
                name: true,
                status: true,
            },
        });

        new OK({
            message: 'Chuyển trạng thái sản phẩm thành công',
            metadata: updatedProduct,
        }).send(res);
    }

    async deleteProduct(req, res) {
        const { id } = req.params;
        const productId = Number(id);

        if (Number.isNaN(productId)) {
            throw new BadRequestError('ID sản phẩm không hợp lệ');
        }

        const existingProduct = await prisma.products.findUnique({
            where: { id: productId },
        });

        if (!existingProduct) {
            throw new NotFoundError('Sản phẩm không tồn tại');
        }

        const [orderCount, cartCount] = await prisma.$transaction([
            prisma.order_items.count({ where: { product_id: productId } }),
            prisma.cart_items.count({ where: { product_id: productId } }),
        ]);

        if (orderCount > 0 || cartCount > 0) {
            throw new BadRequestError('Không thể xóa sản phẩm đang được sử dụng trong đơn hàng/giỏ hàng/công thức');
        }

        await prisma.products.delete({
            where: { id: productId },
        });

        new OK({
            message: 'Xóa sản phẩm thành công',
        }).send(res);
    }
}

module.exports = new ProductController();
