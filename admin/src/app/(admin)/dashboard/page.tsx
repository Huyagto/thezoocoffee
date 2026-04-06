'use client';

import { useEffect, useMemo, useState } from 'react';
import { Boxes, ClipboardCheck, Package, TrendingUp, Users } from 'lucide-react';

import { SectionCard } from '@/components/section-card';
import { StatCard } from '@/components/stat-card';
import catalogService from '@/services/catalog.service';
import type { Category, InventoryItem, Order, Product, User } from '@/types/api';

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0,
    }).format(amount);
}

function isSameDay(dateValue?: string) {
    if (!dateValue) return false;

    const inputDate = new Date(dateValue);
    const now = new Date();

    return (
        inputDate.getFullYear() === now.getFullYear() &&
        inputDate.getMonth() === now.getMonth() &&
        inputDate.getDate() === now.getDate()
    );
}

export default function DashboardPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                setIsLoading(true);
                setErrorMessage('');

                const [categoriesData, productsData, inventoryData, ordersData, usersData] = await Promise.all([
                    catalogService.getCategories(),
                    catalogService.getProducts(),
                    catalogService.getInventory(),
                    catalogService.getOrders(),
                    catalogService.getUsers(),
                ]);

                setCategories(categoriesData);
                setProducts(productsData);
                setInventoryItems(inventoryData);
                setOrders(ordersData);
                setUsers(usersData);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải dữ liệu tổng quan.');
            } finally {
                setIsLoading(false);
            }
        };

        loadDashboard();
    }, []);

    const dashboardStats = useMemo(() => {
        const todayRevenue = orders.reduce((total, order) => {
            if (!isSameDay(order.created_at) || order.payment_status !== 'paid') {
                return total;
            }

            return total + Number(order.total_amount || 0);
        }, 0);

        const pendingOrders = orders.filter((order) =>
            ['pending', 'confirmed', 'preparing'].includes(order.order_status),
        ).length;

        const activeCategories = categories.filter((category) => category.status === 'active').length;
        const availableInventory = inventoryItems.filter((item) => item.status === 'available').length;

        return [
            {
                label: 'Doanh thu hôm nay',
                value: formatCurrency(todayRevenue),
                hint: `${orders.filter((order) => isSameDay(order.created_at)).length} đơn phát sinh trong ngày.`,
                accent: 'linear-gradient(135deg,#6d3f1f,#d89d56)',
                icon: <TrendingUp className="h-5 w-5" />,
            },
            {
                label: 'Đơn chờ xử lý',
                value: pendingOrders.toString(),
                hint: `${orders.length} đơn hàng hiện có trong hệ thống.`,
                accent: 'linear-gradient(135deg,#925c1f,#d8a656)',
                icon: <ClipboardCheck className="h-5 w-5" />,
            },
            {
                label: 'Sản phẩm và danh mục',
                value: `${products.length} / ${activeCategories}`,
                hint: `${products.length} sản phẩm, ${activeCategories} danh mục đang hoạt động.`,
                accent: 'linear-gradient(135deg,#5c5f2e,#91a24b)',
                icon: <Boxes className="h-5 w-5" />,
            },
            {
                label: 'Người dùng và kho',
                value: `${users.length} / ${availableInventory}`,
                hint: `${users.length} tài khoản, ${availableInventory} nguyên liệu sẵn dùng.`,
                accent: 'linear-gradient(135deg,#255d69,#4aa7b8)',
                icon: <Users className="h-5 w-5" />,
            },
        ];
    }, [categories, inventoryItems, orders, products.length, users.length]);

    const recentOrders = useMemo(() => orders.slice(0, 5), [orders]);

    if (isLoading) {
        return (
            <SectionCard
                title="Tổng Quan"
                description="Đang tải dữ liệu dashboard từ hệ thống."
            >
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 text-sm text-[var(--muted)]">
                    Đang tải dữ liệu tổng quan...
                </div>
            </SectionCard>
        );
    }

    if (errorMessage) {
        return (
            <SectionCard
                title="Tổng Quan"
                description="Không thể lấy dữ liệu từ database hiện tại."
            >
                <div className="rounded-3xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] p-4 text-sm text-[var(--danger)]">
                    {errorMessage}
                </div>
            </SectionCard>
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((item) => (
                    <StatCard key={item.label} {...item} />
                ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <SectionCard
                    title="Đơn Hàng Gần Đây"
                    description="Dữ liệu lấy trực tiếp từ bảng đơn hàng trong database hiện tại."
                >
                    <div className="space-y-3">
                        {recentOrders.length === 0 ? (
                            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 text-sm text-[var(--muted)]">
                                Chưa có đơn hàng nào để hiển thị.
                            </div>
                        ) : (
                            recentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 lg:flex-row lg:items-center lg:justify-between"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--foreground)]">
                                            {order.order_code}
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--muted)]">
                                            {order.user?.name ?? 'Khách hàng không xác định'}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                                            {order.order_status}
                                        </span>
                                        <span className="text-sm font-semibold text-[var(--foreground)]">
                                            {formatCurrency(Number(order.total_amount || 0))}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </SectionCard>

                <SectionCard
                    title="Tóm Tắt Hệ Thống"
                    description="Snapshot nhanh từ database để bạn kiểm tra vận hành trong admin."
                >
                    <div className="space-y-3 text-sm leading-6 text-[var(--muted)]">
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                            {categories.length} danh mục, trong đó {categories.filter((item) => item.status === 'inactive').length}{' '}
                            danh mục đang tạm ngưng.
                        </div>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                            {products.filter((item) => item.status === 'out_of_stock').length} sản phẩm hết hàng và{' '}
                            {products.filter((item) => item.status === 'discontinued').length} sản phẩm ngừng bán.
                        </div>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                            {inventoryItems.filter((item) => item.status === 'out_of_stock').length} nguyên liệu đang hết
                            hàng trong kho.
                        </div>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                            {users.filter((item) => item.role === 'admin').length} tài khoản admin và{' '}
                            {users.filter((item) => item.role !== 'admin').length} tài khoản khách hàng.
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
}
