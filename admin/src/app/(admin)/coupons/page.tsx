'use client';

import { useEffect, useState } from 'react';

import { SectionCard } from '@/components/section-card';
import catalogService from '@/services/catalog.service';
import type { Coupon } from '@/types/api';

function formatCurrency(amount: number) {
    return `${Math.round(amount).toLocaleString('vi-VN')} vnđ`;
}

function formatDateTime(value?: string | null) {
    if (!value) return 'Không giới hạn';
    return new Date(value).toLocaleString('vi-VN');
}

export default function CouponsPage() {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        code: '',
        name: '',
        description: '',
        discountType: 'percentage' as 'percentage' | 'fixed',
        discountValue: '',
        minOrderValue: '',
        maxDiscountAmount: '',
        usageLimit: '',
        startsAt: '',
        expiresAt: '',
        status: 'active' as 'active' | 'inactive',
    });

    useEffect(() => {
        const loadCoupons = async () => {
            try {
                const response = await catalogService.getCoupons();
                setCoupons(response);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách mã giảm giá.');
            } finally {
                setIsLoading(false);
            }
        };

        loadCoupons();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!formData.code.trim() || !formData.name.trim()) {
            setErrorMessage('Vui lòng nhập mã coupon và tên chương trình.');
            return;
        }

        if (!formData.discountValue || Number(formData.discountValue) <= 0) {
            setErrorMessage('Giá trị giảm giá phải lớn hơn 0.');
            return;
        }

        setIsSubmitting(true);

        try {
            const createdCoupon = await catalogService.createCoupon({
                code: formData.code.trim().toUpperCase(),
                name: formData.name.trim(),
                description: formData.description.trim() || undefined,
                discountType: formData.discountType,
                discountValue: Number(formData.discountValue),
                minOrderValue: formData.minOrderValue ? Number(formData.minOrderValue) : undefined,
                maxDiscountAmount: formData.maxDiscountAmount ? Number(formData.maxDiscountAmount) : undefined,
                usageLimit: formData.usageLimit ? Number(formData.usageLimit) : undefined,
                startsAt: formData.startsAt || undefined,
                expiresAt: formData.expiresAt || undefined,
                status: formData.status,
            });

            setCoupons((prev) => [createdCoupon, ...prev]);
            setSuccessMessage('Tạo mã giảm giá thành công.');
            setFormData({
                code: '',
                name: '',
                description: '',
                discountType: 'percentage',
                discountValue: '',
                minOrderValue: '',
                maxDiscountAmount: '',
                usageLimit: '',
                startsAt: '',
                expiresAt: '',
                status: 'active',
            });
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo mã giảm giá.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleToggleStatus = async (coupon: Coupon) => {
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const updated = await catalogService.toggleCouponStatus(coupon.id);
            setCoupons((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
            setSuccessMessage(`Đã ${updated.status === 'active' ? 'kích hoạt' : 'tạm ngưng'} mã ${updated.code}.`);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật trạng thái coupon.');
        }
    };

    const handleDelete = async (coupon: Coupon) => {
        if (!confirm(`Bạn có chắc muốn xóa mã ${coupon.code}?`)) return;

        try {
            await catalogService.deleteCoupon(coupon.id);
            setCoupons((prev) => prev.filter((item) => item.id !== coupon.id));
            setSuccessMessage('Xóa mã giảm giá thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể xóa mã giảm giá.');
        }
    };

    return (
        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <SectionCard
                title="Tạo mã giảm giá"
                description="Admin có thể tạo coupon để người dùng áp dụng ngay tại bước thanh toán."
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Mã coupon</span>
                            <input
                                type="text"
                                value={formData.code}
                                onChange={(event) => setFormData((prev) => ({ ...prev, code: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder="VD: ZOO10"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Tên chương trình</span>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder="Giảm giá cuối tuần"
                            />
                        </label>
                    </div>

                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Mô tả</span>
                        <textarea
                            value={formData.description}
                            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
                            rows={3}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            placeholder="Mô tả ngắn cho mã giảm giá"
                        />
                    </label>

                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Loại giảm giá</span>
                            <select
                                value={formData.discountType}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        discountType: event.target.value as 'percentage' | 'fixed',
                                    }))
                                }
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            >
                                <option value="percentage">Giảm theo phần trăm</option>
                                <option value="fixed">Giảm số tiền cố định</option>
                            </select>
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Giá trị giảm</span>
                            <input
                                type="number"
                                min="0"
                                value={formData.discountValue}
                                onChange={(event) => setFormData((prev) => ({ ...prev, discountValue: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder={formData.discountType === 'percentage' ? 'VD: 10' : 'VD: 30000'}
                            />
                        </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Đơn tối thiểu</span>
                            <input
                                type="number"
                                min="0"
                                value={formData.minOrderValue}
                                onChange={(event) => setFormData((prev) => ({ ...prev, minOrderValue: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder="VD: 100000"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Giảm tối đa</span>
                            <input
                                type="number"
                                min="0"
                                value={formData.maxDiscountAmount}
                                onChange={(event) => setFormData((prev) => ({ ...prev, maxDiscountAmount: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder="Chỉ dùng cho phần trăm"
                            />
                        </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Số lượt tối đa</span>
                            <input
                                type="number"
                                min="0"
                                value={formData.usageLimit}
                                onChange={(event) => setFormData((prev) => ({ ...prev, usageLimit: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                                placeholder="Để trống nếu không giới hạn"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Trạng thái</span>
                            <select
                                value={formData.status}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        status: event.target.value as 'active' | 'inactive',
                                    }))
                                }
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            >
                                <option value="active">Đang hoạt động</option>
                                <option value="inactive">Tạm ngưng</option>
                            </select>
                        </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Bắt đầu</span>
                            <input
                                type="datetime-local"
                                value={formData.startsAt}
                                onChange={(event) => setFormData((prev) => ({ ...prev, startsAt: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Hết hạn</span>
                            <input
                                type="datetime-local"
                                value={formData.expiresAt}
                                onChange={(event) => setFormData((prev) => ({ ...prev, expiresAt: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            />
                        </label>
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
                        disabled={isSubmitting}
                        className="w-full rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? 'Đang tạo coupon...' : 'Tạo mã giảm giá'}
                    </button>
                </form>
            </SectionCard>

            <SectionCard title="Danh sách coupon" description="Các mã giảm giá hiện có và trạng thái hoạt động của chúng.">
                {isLoading ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                        Đang tải mã giảm giá...
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {coupons.map((coupon) => (
                            <div key={coupon.id} className="rounded-2xl border border-[var(--border)] bg-white p-4">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-lg font-semibold text-[var(--foreground)]">{coupon.code}</p>
                                            <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                                                {coupon.status === 'active' ? 'Hoạt động' : 'Tạm ngưng'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--foreground)]">{coupon.name}</p>
                                        <p className="text-sm text-[var(--muted)]">{coupon.description || 'Không có mô tả'}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => handleToggleStatus(coupon)}
                                            className="rounded-2xl border border-[var(--border)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--panel-strong)]"
                                        >
                                            {coupon.status === 'active' ? 'Tạm ngưng' : 'Kích hoạt'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(coupon)}
                                            className="rounded-2xl border border-[rgba(157,49,49,0.18)] px-3 py-2 text-sm font-semibold text-[var(--danger)] transition hover:bg-[rgba(157,49,49,0.08)]"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] md:grid-cols-3">
                                    <p>
                                        Loại:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {coupon.discount_type === 'percentage'
                                                ? `${Number(coupon.discount_value)}%`
                                                : formatCurrency(Number(coupon.discount_value))}
                                        </span>
                                    </p>
                                    <p>
                                        Đơn tối thiểu:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {formatCurrency(Number(coupon.min_order_value || 0))}
                                        </span>
                                    </p>
                                    <p>
                                        Đã dùng:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {coupon.used_count || 0}
                                            {coupon.usage_limit ? ` / ${coupon.usage_limit}` : ''}
                                        </span>
                                    </p>
                                    <p>
                                        Giảm tối đa:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {coupon.max_discount_amount ? formatCurrency(Number(coupon.max_discount_amount)) : 'Không giới hạn'}
                                        </span>
                                    </p>
                                    <p>
                                        Bắt đầu:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">{formatDateTime(coupon.starts_at)}</span>
                                    </p>
                                    <p>
                                        Hết hạn:{" "}
                                        <span className="font-semibold text-[var(--foreground)]">{formatDateTime(coupon.expires_at)}</span>
                                    </p>
                                </div>
                            </div>
                        ))}

                        {coupons.length === 0 ? (
                            <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                                Chưa có mã giảm giá nào.
                            </div>
                        ) : null}
                    </div>
                )}
            </SectionCard>
        </div>
    );
}
