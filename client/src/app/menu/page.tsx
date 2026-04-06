'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { formatCurrency } from '@/lib/currency';
import { cn } from '@/lib/utils';
import { Coffee, Leaf, Cake, Package, CupSoda } from 'lucide-react';
import { productService } from '@/services/product.service';
import type { Product, Category } from '@/types/api';

const normalizeCategoryName = (value: string) =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

const getCategoryIcon = (categoryName: string) => {
    const normalized = normalizeCategoryName(categoryName);

    if (normalized.includes('ca phe') || normalized.includes('coffee') || normalized.includes('espresso')) {
        return Coffee;
    }

    if (normalized.includes('tra') || normalized.includes('tea') || normalized.includes('matcha')) {
        return Leaf;
    }

    if (
        normalized.includes('banh') ||
        normalized.includes('cake') ||
        normalized.includes('pastry') ||
        normalized.includes('dessert')
    ) {
        return Cake;
    }

    if (
        normalized.includes('da xay') ||
        normalized.includes('ice blended') ||
        normalized.includes('smoothie') ||
        normalized.includes('frappe')
    ) {
        return CupSoda;
    }

    return Package;
};

export default function MenuPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const [productsResponse, categoriesResponse] = await Promise.all([
                    productService.getAllProducts({ limit: 100 }),
                    productService.getCategories(),
                ]);

                const activeCategories = categoriesResponse.filter((category) => category.status === 'active');
                const activeCategoryIds = new Set(activeCategories.map((category) => category.id));

                setCategories(activeCategories);
                setProducts(
                    productsResponse.products.filter(
                        (product) => product.categories?.id && activeCategoryIds.has(product.categories.id),
                    ),
                );
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Không thể tải dữ liệu');
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((product) => product.categories?.id.toString() === selectedCategory);

    const categoryIcons = {
        'Cà phê': Coffee,
        Trà: Leaf,
        'Bánh ngọt': Cake,
        'Đồ uống đá xay': Package,
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">Đang tải menu...</div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-red-500">{error}</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Menu Của Chúng Tôi</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Khám phá đồ uống thủ công và món ăn ngon miệng của chúng tôi
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-2 rounded-2xl bg-secondary/50 p-2 md:inline-flex md:mx-auto md:gap-1">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={cn(
                                'relative flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out',
                                selectedCategory === 'all'
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-[1.02]'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-background/60',
                            )}
                        >
                            <Package className="h-4 w-4" />
                            <span>Tất Cả</span>
                            {selectedCategory === 'all' && (
                                <span className="absolute inset-0 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
                            )}
                        </button>
                        {categories.map((category) => {
                            const Icon = getCategoryIcon(category.name);
                            const isActive = selectedCategory === category.id.toString();
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id.toString())}
                                    className={cn(
                                        'relative flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out',
                                        isActive
                                            ? 'bg-primary text-primary-foreground shadow-lg scale-[1.02]'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-background/60',
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            'h-4 w-4 transition-transform duration-300',
                                            isActive && 'scale-110',
                                        )}
                                    />
                                    <span>{category.name}</span>
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Products Grid */}
                <div
                    key={selectedCategory}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
                >
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-in fade-in zoom-in-95 duration-300"
                            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                        >
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                description={product.description || ''}
                                price={formatCurrency(product.price)}
                                image={product.image || '/images/placeholder.jpg'}
                                badge={product.status === 'available' ? undefined : product.status}
                                priority={index < 4}
                            />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-16 text-center">
                        <p className="text-lg text-muted-foreground">Không có sản phẩm nào trong danh mục này.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
