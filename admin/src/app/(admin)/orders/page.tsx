'use client';

import { useEffect, useState } from 'react';

import { SectionCard } from '@/components/section-card';
import { useAuth } from '@/context/auth-context';
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

function formatCurrency(amount: number | string | null | undefined) {
    const numericAmount = Number(amount ?? 0);
    const safeAmount = Number.isFinite(numericAmount) ? numericAmount : 0;

    return `${Math.round(safeAmount).toLocaleString('vi-VN')} vnđ`;
}

export default function OrdersPage() {
    const { user: currentUser } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const data = await catalogService.getOrders();
                setOrders(data);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách đơn hàng.');
            } finally {
                setIsLoading(false);
            }
        };

        loadOrders();
    }, []);

    const updateOrder = (updatedOrder: Order) => {
        setOrders((prev) => prev.map((order) => (order.id === updatedOrder.id ? updatedOrder : order)));
    };

    const handleChangeStatus = async (orderId: number, status: Order['order_status']) => {
        setErrorMessage('');
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            const updatedOrder = await catalogService.updateOrderStatus(orderId, status);
            updateOrder(updatedOrder);
            setSuccessMessage('Cập nhật trạng thái đơn hàng thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật trạng thái đơn hàng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChangePaymentStatus = async (orderId: number, paymentStatus: Order['payment_status']) => {
        setErrorMessage('');
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            const updatedOrder = await catalogService.updateOrderPaymentStatus(orderId, paymentStatus);
            updateOrder(updatedOrder);
            setSuccessMessage('Cập nhật trạng thái thanh toán thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật trạng thái thanh toán.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteOrder = async (orderId: number) => {
        if (!confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            await catalogService.deleteOrder(orderId);
            setOrders((prev) => prev.filter((order) => order.id !== orderId));
            setSuccessMessage('Xóa đơn hàng thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể xóa đơn hàng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionCard
            title="Đơn Hàng"
            description="Xem danh sách đơn, cập nhật trạng thái xử lý và thanh toán trực tiếp từ backend."
        >
            {isLoading ? (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                    Đang tải đơn hàng...
                </div>
            ) : errorMessage ? (
                <div className="rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">
                    {errorMessage}
                </div>
            ) : (
                <div className="space-y-4">
                    {successMessage ? (
                        <div className="rounded-2xl border border-[rgba(46,125,91,0.18)] bg-[rgba(46,125,91,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
                            {successMessage}
                        </div>
                    ) : null}

                    {orders.length === 0 ? (
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                            Chưa có đơn hàng nào.
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm"
                                >
                                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-[var(--foreground)]">
                                                {order.order_code}
                                            </p>
                                            <p className="mt-2 text-sm text-[var(--muted)]">
                                                Khách hàng: {order.user?.name ?? 'Không xác định'}
                                            </p>
                                            <p className="text-sm text-[var(--muted)]">
                                                Email: {order.user?.email ?? 'Chưa có'}
                                            </p>
                                            <p className="mt-2 text-sm text-[var(--muted)]">
                                                Địa chỉ giao hàng: {order.shipping_address}
                                            </p>
                                            {order.note ? (
                                                <p className="mt-2 text-sm text-[var(--muted)]">
                                                    Ghi chú: {order.note}
                                                </p>
                                            ) : null}
                                        </div>

                                        <div className="grid gap-2 text-sm text-[var(--muted)] lg:text-right">
                                            <span className="font-semibold text-[var(--foreground)]">
                                                Tổng:{' '}
                                                {formatCurrency(order.total_amount)}
                                            </span>
                                            <span>
                                                Trạng thái:{' '}
                                                {ORDER_STATUS_OPTIONS.find((item) => item.value === order.order_status)
                                                    ?.label ?? order.order_status}
                                            </span>
                                            <span>
                                                Thanh toán:{' '}
                                                {PAYMENT_STATUS_OPTIONS.find(
                                                    (item) => item.value === order.payment_status,
                                                )?.label ?? order.payment_status}
                                            </span>
                                            <span>
                                                Hình thức:{' '}
                                                {order.payment_method ?? order.payment?.method ?? 'Chưa có'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
                                        <label className="block">
                                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                                Trạng thái đơn
                                            </span>
                                            <select
                                                value={order.order_status}
                                                disabled={isSubmitting}
                                                onChange={(event) =>
                                                    handleChangeStatus(
                                                        order.id,
                                                        event.target.value as Order['order_status'],
                                                    )
                                                }
                                                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                            >
                                                {ORDER_STATUS_OPTIONS.map((item) => (
                                                    <option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>

                                        <label className="block">
                                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                                Trạng thái thanh toán
                                            </span>
                                            <select
                                                value={order.payment_status}
                                                disabled={isSubmitting}
                                                onChange={(event) =>
                                                    handleChangePaymentStatus(
                                                        order.id,
                                                        event.target.value as Order['payment_status'],
                                                    )
                                                }
                                                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                            >
                                                {PAYMENT_STATUS_OPTIONS.map((item) => (
                                                    <option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>

                                    <div className="mt-4 space-y-2 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 text-sm text-[var(--muted)]">
                                        <p className="font-semibold text-[var(--foreground)]">Sản phẩm trong đơn</p>
                                        {order.order_items?.map((item) => (
                                            <div key={item.id} className="flex flex-col gap-1 rounded-2xl bg-white p-3">
                                                <p className="font-medium text-[var(--foreground)]">
                                                    {item.products?.name ?? 'Sản phẩm không xác định'}
                                                </p>
                                                <p>SKU: {item.products?.sku ?? '-'}</p>
                                                <p>Số lượng: {item.quantity}</p>
                                                <p>
                                                    Giá đơn vị:{' '}
                                                    {formatCurrency(item.unit_price)}
                                                </p>
                                                <p>
                                                    Tổng:{' '}
                                                    {formatCurrency(item.subtotal)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteOrder(order.id)}
                                            disabled={isSubmitting || currentUser?.id === order.user?.id}
                                            className="rounded-2xl border border-[var(--danger)] bg-white px-4 py-3 text-sm font-semibold text-[var(--danger)] transition hover:bg-[rgba(157,49,49,0.08)] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            Xóa đơn hàng
                                        </button>
                                        {currentUser?.id === order.user?.id ? (
                                            <p className="text-xs text-[var(--muted)]">
                                                Không thể xóa đơn hiện tại của chính bạn.
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </SectionCard>
    );
}
