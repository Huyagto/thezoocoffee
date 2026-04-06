'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Home, Package, ShoppingBag, Truck } from 'lucide-react';

import orderService from '@/services/order.service';
import type { Order } from '@/types/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SHIPPING_FEE = 30000;

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0,
    }).format(amount);
}

function parseAmount(value: number | string | undefined) {
    return Number(value || 0);
}

function estimateDelivery(createdAt?: string) {
    const baseDate = createdAt ? new Date(createdAt) : new Date();
    baseDate.setDate(baseDate.getDate() + 3);
    return baseDate.toLocaleDateString('vi-VN');
}

function mapPaymentStatus(status?: string) {
    if (status === 'paid') return 'Đã thanh toán';
    if (status === 'unpaid') return 'Chưa thanh toán';
    if (status === 'failed') return 'Thanh toán thất bại';
    if (status === 'refunded') return 'Đã hoàn tiền';
    return 'Đang cập nhật';
}

function OrderSuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const [order, setOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const loadOrder = async () => {
            if (!orderId) {
                setErrorMessage('Không tìm thấy mã đơn hàng.');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const data = await orderService.getOrderById(orderId);
                setOrder(data);
                setErrorMessage('');
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải thông tin đơn hàng.');
            } finally {
                setIsLoading(false);
            }
        };

        loadOrder();
    }, [orderId]);

    const subtotal = useMemo(() => {
        if (!order?.order_items?.length) {
            return 0;
        }

        return order.order_items.reduce((sum, item) => sum + parseAmount(item.subtotal), 0);
    }, [order]);

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <ShoppingBag className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold text-foreground">TheZooCoffee</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-8 text-center">
                        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                        </div>
                        <h1 className="mb-2 text-3xl font-bold text-foreground">Đặt hàng thành công</h1>
                        <p className="text-lg text-muted-foreground">
                            Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ sớm bắt đầu xử lý.
                        </p>
                    </div>

                    <Card className="mb-6">
                        <CardContent className="p-6">
                            {isLoading ? (
                                <p className="text-sm text-muted-foreground">Đang tải thông tin đơn hàng...</p>
                            ) : errorMessage ? (
                                <p className="text-sm text-destructive">{errorMessage}</p>
                            ) : order ? (
                                <>
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Mã đơn hàng</p>
                                            <p className="text-xl font-bold text-foreground">{order.order_code}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">Dự kiến giao</p>
                                            <p className="font-semibold text-foreground">{estimateDelivery(order.created_at)}</p>
                                        </div>
                                    </div>

                                    <Separator className="mb-6" />

                                    <div className="mb-8 flex items-center justify-between">
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                                                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">Đã xác nhận</p>
                                        </div>
                                        <div className="mx-2 h-1 flex-1 bg-muted" />
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                                <Package className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">Đang chuẩn bị</p>
                                        </div>
                                        <div className="mx-2 h-1 flex-1 bg-muted" />
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                                <Truck className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">Đang giao</p>
                                        </div>
                                        <div className="mx-2 h-1 flex-1 bg-muted" />
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                                <Home className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">Hoàn tất</p>
                                        </div>
                                    </div>

                                    <Separator className="mb-6" />

                                    <div className="mb-6 space-y-3">
                                        <h3 className="font-semibold text-foreground">Sản phẩm đã đặt</h3>
                                        {(order.order_items || []).map((item) => (
                                            <div key={item.id} className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">
                                                    {item.products?.name || 'Sản phẩm'} x {item.quantity}
                                                </span>
                                                <span className="text-foreground">{formatCurrency(parseAmount(item.subtotal))}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Separator className="mb-4" />

                                    <div className="mb-6 space-y-2">
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Tạm tính</span>
                                            <span>{formatCurrency(subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Phí giao hàng</span>
                                            <span>{formatCurrency(SHIPPING_FEE)}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold text-foreground">
                                            <span>Tổng cộng</span>
                                            <span className="text-primary">{formatCurrency(parseAmount(order.total_amount))}</span>
                                        </div>
                                    </div>

                                    <Separator className="mb-6" />

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <p className="mb-1 text-sm text-muted-foreground">Địa chỉ giao hàng</p>
                                            <p className="text-sm text-foreground">{order.shipping_address}</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-sm text-muted-foreground">Trạng thái thanh toán</p>
                                            <p className="text-sm text-foreground">{mapPaymentStatus(order.payment_status)}</p>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </CardContent>
                    </Card>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <Link href="/">Về trang chủ</Link>
                        </Button>
                        <Button variant="outline" asChild size="lg">
                            <Link href="/menu">Tiếp tục chọn món</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function OrderSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <OrderSuccessContent />
        </Suspense>
    );
}
