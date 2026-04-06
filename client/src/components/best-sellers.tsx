'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

import { formatCurrency } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { productService } from '@/services/product.service';
import type { Product } from '@/types/api';

export function BestSellers() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.getAllProducts({ limit: 2, sort: 'newest' });
                setProducts(response.products || []);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        void fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className="bg-secondary py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent">
                                Món Yêu Thích Của Khách Hàng
                            </span>
                            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                                Bán Chạy Nhất
                            </h2>
                        </div>
                        <Button variant="outline" className="gap-2 border-foreground/20 hover:bg-foreground/5">
                            Xem Tất Cả Sản Phẩm
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <p>Đang tải sản phẩm bán chạy...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-secondary py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent">
                            Món Yêu Thích Của Khách Hàng
                        </span>
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                            Bán Chạy Nhất
                        </h2>
                    </div>
                    <Button variant="outline" className="gap-2 border-foreground/20 hover:bg-foreground/5">
                        Xem Tất Cả Sản Phẩm
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col gap-6 overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row sm:items-center"
                        >
                            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
                                <Image
                                    src={item.image || '/images/default.jpg'}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-accent text-accent" />
                                        <span className="text-sm font-semibold text-foreground">4.8</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">(Món yêu thích)</span>
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-card-foreground">{item.name}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description || 'Đồ uống cà phê ngon miệng'}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-2">
                                    <span className="text-xl font-bold text-foreground">{formatCurrency(item.price)}</span>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Đặt Hàng Ngay
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
