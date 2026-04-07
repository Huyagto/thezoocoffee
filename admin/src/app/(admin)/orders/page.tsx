'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

import { SectionCard } from '@/components/section-card';
import catalogService from '@/services/catalog.service';
import type { Order } from '@/types/api';

const ORDER_STATUS_OPTIONS = [
    { value: 'pending', label: 'Chờ xác nhận' },
    { value: 'confirmed', label: 'Đã xác nhận' },
    { value: 'preparing', label: 'Đang chuẩn bị' },
    { value: 'completed', label: 'Hoàn thành' },
    { value: 'cancelled', label: 'Đã hủy' },
];

const PAYMENT_STATUS_OPTIONS = [
    { value: 'unpaid', label: 'Chưa thanh toán' },
    { value: 'paid', label: 'Đã thanh toán' },
    { value: 'failed', label: 'Thanh toán thất bại' },
    { value: 'refunded', label: 'Hoàn trả' },
];

const ITEMS_PER_PAGE = 5;

function formatCurrency(amount: number | string | null | undefined) {
    const numericAmount = Number(amount ?? 0);
    const safeAmount = Number.isFinite(numericAmount) ? numericAmount : 0;
    return `${Math.round(safeAmount).toLocaleString('vi-VN')} vnđ`;
}

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                setOrders(await catalogService.getOrders());
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách đơn hàng.');
            } finally {
                setIsLoading(false);
            }
        };
        void loadOrders();
    }, []);

    const totalPages = Math.max(1, Math.ceil(orders.length / ITEMS_PER_PAGE));
    const paginatedOrders = useMemo(() => orders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE), [orders, currentPage]);

    const updateOrder = (updatedOrder: Order) => {
        setOrders((prev) => prev.map((order) => (order.id === updatedOrder.id ? updatedOrder : order)));
    };

    const handleChangeStatus = async (orderId: number, status: Order['order_status']) => {
        setIsSubmitting(true);
        try {
            updateOrder(await catalogService.updateOrderStatus(orderId, status));
            setSuccessMessage('Cập nhật trạng thái đơn hàng thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật trạng thái đơn hàng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChangePaymentStatus = async (orderId: number, paymentStatus: Order['payment_status']) => {
        setIsSubmitting(true);
        try {
            updateOrder(await catalogService.updateOrderPaymentStatus(orderId, paymentStatus));
            setSuccessMessage('Cập nhật trạng thái thanh toán thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật trạng thái thanh toán.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const nextPageItems = orders.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
        if (!nextPageItems.some((item) => item.id === expandedOrderId)) setExpandedOrderId(null);
    };

    return (
        <SectionCard title="Đơn Hàng" description="Có phân trang và chỉ hiện detail khi bạn bấm vào đúng đơn hàng.">
            {isLoading ? (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">Đang tải đơn hàng...</div>
            ) : errorMessage ? (
                <div className="rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">{errorMessage}</div>
            ) : (
                <div className="space-y-4">
                    {successMessage ? <div className="rounded-2xl border border-[rgba(46,125,91,0.18)] bg-[rgba(46,125,91,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">{successMessage}</div> : null}
                    <div className="grid gap-3">
                        {paginatedOrders.map((order) => {
                            const isExpanded = expandedOrderId === order.id;
                            return (
                                <div key={order.id} className="rounded-2xl border border-[var(--border)] bg-white p-4">
                                    <button type="button" onClick={() => setExpandedOrderId(isExpanded ? null : order.id)} className="flex w-full items-center justify-between gap-3 text-left">
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-[var(--foreground)]">{order.order_code}</p>
                                            <p className="mt-1 text-sm text-[var(--muted)]">Khách hàng: {order.user?.name ?? 'Không xác định'} • Tổng: {formatCurrency(order.total_amount)}</p>
                                        </div>
                                        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)]">{isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}</span>
                                    </button>
                                    {isExpanded ? (
                                        <div className="mt-3 border-t border-[var(--border)] pt-3">
                                            <div className="grid gap-2 text-sm text-[var(--muted)]">
                                                <p>Email: {order.user?.email ?? 'Chưa có'}</p>
                                                <p>Địa chỉ giao hàng: {order.shipping_address}</p>
                                                {order.note ? <p>Ghi chú: {order.note}</p> : null}
                                                <p>Hình thức: {order.payment_method ?? order.payment?.method ?? 'Chưa có'}</p>
                                            </div>
                                            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
                                                <select value={order.order_status} disabled={isSubmitting} onChange={(event) => handleChangeStatus(order.id, event.target.value as Order['order_status'])} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none">
                                                    {ORDER_STATUS_OPTIONS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                                                </select>
                                                <select value={order.payment_status} disabled={isSubmitting} onChange={(event) => handleChangePaymentStatus(order.id, event.target.value as Order['payment_status'])} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none">
                                                    {PAYMENT_STATUS_OPTIONS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                                                </select>
                                            </div>
                                            <div className="mt-4 space-y-2 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 text-sm text-[var(--muted)]">
                                                <p className="font-semibold text-[var(--foreground)]">Sản phẩm trong đơn</p>
                                                {order.order_items?.map((item) => (
                                                    <div key={item.id} className="flex flex-col gap-1 rounded-2xl bg-white p-3">
                                                        <p className="font-medium text-[var(--foreground)]">{item.products?.name ?? 'Sản phẩm không xác định'}</p>
                                                        <p>SKU: {item.products?.sku ?? '-'}</p>
                                                        <p>Số lượng: {item.quantity}</p>
                                                        <p>Giá đơn vị: {formatCurrency(item.unit_price)}</p>
                                                        <p>Tổng: {formatCurrency(item.subtotal)}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                        {orders.length > 0 ? (
                            <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3">
                                <p className="text-sm text-[var(--muted)]">Trang {currentPage}/{totalPages} • {orders.length} đơn hàng</p>
                                <div className="flex gap-2">
                                    <button type="button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50">Trang trước</button>
                                    <button type="button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50">Trang sau</button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </SectionCard>
    );
}
