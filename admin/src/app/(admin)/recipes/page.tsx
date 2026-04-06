'use client';

import { useEffect, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

import { SectionCard } from '@/components/section-card';
import catalogService from '@/services/catalog.service';
import type { InventoryItem, Product, Recipe } from '@/types/api';

interface RecipeInput {
    id: string;
    inventoryId: string;
    quantityUsed: string;
}

function displayNumber(value: number | string | null | undefined) {
    if (value === null || value === undefined || value === '') {
        return '0';
    }

    return String(value);
}

export default function RecipesPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
    const [recipesList, setRecipesList] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedProductId, setSelectedProductId] = useState('');
    const [recipes, setRecipes] = useState<RecipeInput[]>([
        { id: crypto.randomUUID(), inventoryId: '', quantityUsed: '' },
    ]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [productsResponse, inventoryResponse, recipesResponse] = await Promise.all([
                    catalogService.getProducts(),
                    catalogService.getInventory(),
                    catalogService.getRecipes(),
                ]);

                setProducts(productsResponse);
                setInventoryItems(inventoryResponse);
                setRecipesList(recipesResponse);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải dữ liệu công thức.');
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const addRecipeRow = () => {
        setRecipes((prev) => [...prev, { id: crypto.randomUUID(), inventoryId: '', quantityUsed: '' }]);
    };

    const removeRecipeRow = (id: string) => {
        setRecipes((prev) => (prev.length > 1 ? prev.filter((recipe) => recipe.id !== id) : prev));
    };

    const updateRecipeRow = (id: string, field: 'inventoryId' | 'quantityUsed', value: string) => {
        setRecipes((prev) => prev.map((recipe) => (recipe.id === id ? { ...recipe, [field]: value } : recipe)));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!selectedProductId) {
            setErrorMessage('Vui lòng chọn sản phẩm trước.');
            return;
        }

        const normalizedRecipes = recipes.map((recipe) => ({
            inventoryId: Number(recipe.inventoryId),
            quantityUsed: Number(recipe.quantityUsed),
        }));

        const hasInvalidRecipe = normalizedRecipes.some(
            (recipe) =>
                Number.isNaN(recipe.inventoryId) ||
                recipe.inventoryId <= 0 ||
                Number.isNaN(recipe.quantityUsed) ||
                recipe.quantityUsed <= 0,
        );

        if (hasInvalidRecipe) {
            setErrorMessage('Vui lòng nhập đầy đủ và đúng cho từng dòng nguyên liệu.');
            return;
        }

        setIsSubmitting(true);

        try {
            const updatedProduct = await catalogService.createRecipe({
                productId: Number(selectedProductId),
                recipes: normalizedRecipes,
            });

            setProducts((prev) => prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));

            const refreshedRecipes = await catalogService.getRecipes();
            setRecipesList(refreshedRecipes);
            setRecipes([{ id: crypto.randomUUID(), inventoryId: '', quantityUsed: '' }]);
            setSuccessMessage('Lưu công thức thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể lưu công thức.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <SectionCard
                title="Tạo Công Thức"
                description="Chọn một sản phẩm đã có, sau đó khai báo các nguyên liệu cần cho một đơn vị sản phẩm."
            >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Sản phẩm</span>
                        <select
                            value={selectedProductId}
                            onChange={(event) => setSelectedProductId(event.target.value)}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                        >
                            <option value="">Chọn sản phẩm</option>
                            {products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </label>

                    <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold text-[var(--foreground)]">Nguyên liệu</p>
                                <p className="mt-1 text-sm text-[var(--muted)]">
                                    Mỗi dòng tương ứng với một nguyên liệu trong công thức.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={addRecipeRow}
                                className="flex items-center gap-2 rounded-2xl border border-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white"
                            >
                                <Plus className="h-4 w-4" />
                                Thêm Nguyên Liệu
                            </button>
                        </div>

                        <div className="mt-4 space-y-3">
                            {recipes.map((recipe, index) => (
                                <div
                                    key={recipe.id}
                                    className="grid gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_auto]"
                                >
                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                            Nguyên liệu {index + 1}
                                        </span>
                                        <select
                                            value={recipe.inventoryId}
                                            onChange={(event) =>
                                                updateRecipeRow(recipe.id, 'inventoryId', event.target.value)
                                            }
                                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm outline-none"
                                        >
                                            <option value="">Chọn nguyên liệu trong kho</option>
                                            {inventoryItems.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name} ({item.unit}) - tồn {displayNumber(item.quantity)}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                            Số lượng dùng
                                        </span>
                                        <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={recipe.quantityUsed}
                                            onChange={(event) =>
                                                updateRecipeRow(recipe.id, 'quantityUsed', event.target.value)
                                            }
                                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm outline-none"
                                        />
                                    </label>

                                    <div className="flex items-end">
                                        <button
                                            type="button"
                                            onClick={() => removeRecipeRow(recipe.id)}
                                            disabled={recipes.length === 1}
                                            className="flex items-center gap-2 rounded-2xl border border-[rgba(157,49,49,0.18)] px-4 py-3 text-sm font-semibold text-[var(--danger)] transition hover:bg-[rgba(157,49,49,0.08)] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {errorMessage ? (
                        <div className="rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">
                            {errorMessage}
                        </div>
                    ) : null}

                    {successMessage ? (
                        <div className="rounded-2xl border border-[rgba(46,125,91,0.18)] bg-[rgba(46,125,91,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
                            {successMessage}
                        </div>
                    ) : null}

                    <button
                        type="submit"
                        disabled={isSubmitting || products.length === 0 || inventoryItems.length === 0}
                        className="w-full rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? 'Đang lưu công thức...' : 'Lưu Công Thức'}
                    </button>
                </form>
            </SectionCard>

            <SectionCard
                title="Danh Sách Công Thức"
                description="Công thức được quản lý độc lập với sản phẩm và kho nguyên liệu."
            >
                {isLoading ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                        Đang tải công thức...
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {(() => {
                            const groupedRecipes = recipesList.reduce(
                                (acc, recipe) => {
                                    const productId = recipe.products?.id;
                                    if (!productId) return acc;
                                    if (!acc[productId]) {
                                        acc[productId] = {
                                            product: recipe.products,
                                            ingredients: [],
                                        };
                                    }
                                    acc[productId].ingredients.push({
                                        name: recipe.inventory.name,
                                        quantity: recipe.quantity_used,
                                        unit: recipe.inventory.unit,
                                    });
                                    return acc;
                                },
                                {} as Record<number, { product: any; ingredients: any[] }>,
                            );

                            return Object.values(groupedRecipes).map((group) => (
                                <div
                                    key={group.product.id}
                                    className="rounded-2xl border border-[var(--border)] bg-white p-4"
                                >
                                    <p className="font-medium text-[var(--foreground)]">{group.product.name}</p>
                                    <p className="mt-1 text-xs text-[var(--muted)]">
                                        SKU: {group.product.sku || 'Chưa có SKU'}
                                    </p>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium text-[var(--foreground)]">Nguyên liệu:</p>
                                        <ul className="mt-1 space-y-1">
                                            {group.ingredients.map((ingredient, idx) => (
                                                <li key={idx} className="text-sm text-[var(--muted)]">
                                                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ));
                        })()}

                        {recipesList.length === 0 ? (
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                                Chưa có công thức nào.
                            </div>
                        ) : null}
                    </div>
                )}
            </SectionCard>
        </div>
    );
}
