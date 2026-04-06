'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';

const SHIPPING_FEE = 30000;

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    const grandTotal = totalPrice + SHIPPING_FEE;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="mb-10">
                    <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Giỏ hàng của bạn</h1>
                    <p className="mt-3 text-lg text-muted-foreground">
                        {totalItems > 0 ? `Bạn đang có ${totalItems} sản phẩm trong giỏ hàng.` : 'Giỏ hàng của bạn đang trống.'}
                    </p>
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">Chưa có sản phẩm nào</h2>
                        <p className="mb-8 max-w-md text-muted-foreground">
                            Hãy khám phá thực đơn và thêm những món bạn yêu thích vào giỏ hàng nhé.
                        </p>
                        <Link href="/menu">
                            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                Xem thực đơn
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-border bg-card">
                                <div className="hidden border-b border-border px-6 py-4 md:grid md:grid-cols-12 md:gap-4">
                                    <div className="col-span-6 text-sm font-medium text-muted-foreground">Sản phẩm</div>
                                    <div className="col-span-2 text-center text-sm font-medium text-muted-foreground">Số lượng</div>
                                    <div className="col-span-2 text-center text-sm font-medium text-muted-foreground">Đơn giá</div>
                                    <div className="col-span-2 text-right text-sm font-medium text-muted-foreground">Tạm tính</div>
                                </div>

                                <div className="divide-y divide-border">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex flex-col gap-4 p-6 md:grid md:grid-cols-12 md:items-center md:gap-4"
                                        >
                                            <div className="col-span-6 flex gap-4">
                                                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h3 className="font-serif font-semibold text-card-foreground">{item.name}</h3>
                                                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{item.description}</p>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="mt-2 inline-flex items-center gap-1 text-sm text-destructive hover:underline md:hidden"
                                                    >
                                                        <Trash2 className="h-3.5 w-3.5" />
                                                        Xóa
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-span-2 flex items-center justify-between md:justify-center">
                                                <span className="text-sm text-muted-foreground md:hidden">Số lượng:</span>
                                                <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                                        aria-label="Giảm số lượng"
                                                    >
                                                        <Minus className="h-3.5 w-3.5" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium text-foreground">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                                        aria-label="Tăng số lượng"
                                                    >
                                                        <Plus className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-span-2 flex items-center justify-between md:justify-center">
                                                <span className="text-sm text-muted-foreground md:hidden">Đơn giá:</span>
                                                <span className="text-sm text-foreground">{formatCurrency(item.price)}</span>
                                            </div>

                                            <div className="col-span-2 flex items-center justify-between md:justify-end">
                                                <span className="text-sm text-muted-foreground md:hidden">Tạm tính:</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold text-foreground">
                                                        {formatCurrency(item.price * item.quantity)}
                                                    </span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive md:flex"
                                                        aria-label="Xóa sản phẩm"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-border px-6 py-4">
                                    <button
                                        onClick={clearCart}
                                        className="text-sm text-muted-foreground transition-colors hover:text-destructive"
                                    >
                                        Xóa toàn bộ giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                                <h2 className="mb-6 font-serif text-xl font-semibold text-card-foreground">Tóm tắt đơn hàng</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Tạm tính</span>
                                        <span className="text-foreground">{formatCurrency(totalPrice)}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Phí giao hàng</span>
                                        <span className="text-foreground">{formatCurrency(SHIPPING_FEE)}</span>
                                    </div>

                                    <div className="my-4 border-t border-border" />

                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-foreground">Tổng cộng</span>
                                        <span className="text-xl font-bold text-foreground">{formatCurrency(grandTotal)}</span>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <Button size="lg" className="mt-6 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                        Tiến hành thanh toán
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>

                                <Link href="/menu">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="mt-3 w-full border-primary/30 text-foreground hover:bg-primary/5"
                                    >
                                        Tiếp tục chọn món
                                    </Button>
                                </Link>

                                <p className="mt-4 text-center text-xs text-muted-foreground">
                                    Thông tin đơn hàng sẽ được xác nhận ở bước thanh toán.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
