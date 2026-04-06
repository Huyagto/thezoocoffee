'use client';

import { useEffect, useState } from 'react';

import { SectionCard } from '@/components/section-card';
import catalogService from '@/services/catalog.service';
import type { Category } from '@/types/api';

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        status: 'active' as 'active' | 'inactive',
    });

    const [showEditModal, setShowEditModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editFormData, setEditFormData] = useState({
        name: '',
        status: 'active' as 'active' | 'inactive',
    });

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await catalogService.getCategories();
                setCategories(data);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách danh mục.');
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!formData.name.trim()) {
            setErrorMessage('Vui lòng nhập tên danh mục.');
            return;
        }

        setIsSubmitting(true);

        try {
            const createdCategory = await catalogService.createCategory({
                name: formData.name.trim(),
                status: formData.status,
            });

            setCategories((prev) => [createdCategory, ...prev]);
            setFormData({
                name: '',
                status: 'active',
            });
            setSuccessMessage('Tạo danh mục thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo danh mục.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openEditModal = (category: Category) => {
        setEditingCategory(category);
        setEditFormData({
            name: category.name,
            status: category.status,
        });
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingCategory(null);
        setEditFormData({ name: '', status: 'active' });
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleEditChange = (field: 'name' | 'status', value: string) => {
        setEditFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!editingCategory || !editFormData.name.trim()) {
            setErrorMessage('Tên danh mục không được để trống.');
            return;
        }

        try {
            const updatedCategory = await catalogService.updateCategory(editingCategory.id, editFormData);
            setCategories((prev) => prev.map((cat) => (cat.id === editingCategory.id ? updatedCategory : cat)));
            setSuccessMessage('Cập nhật danh mục thành công.');
            closeEditModal();
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật danh mục.');
        }
    };

    const handleDelete = async (category: Category) => {
        if (!confirm(`Bạn có chắc muốn xóa danh mục "${category.name}"?`)) return;

        setIsDeleting(true);

        try {
            await catalogService.deleteCategory(category.id);
            setCategories((prev) => prev.filter((cat) => cat.id !== category.id));
            setSuccessMessage('Xóa danh mục thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể xóa danh mục.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
            <SectionCard
                title="Tạo Danh Mục"
                description="Danh mục được quản lý riêng tại đây và có thể tái sử dụng khi tạo sản phẩm."
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Tên danh mục</span>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                            placeholder="Cà phê hạt"
                            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
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
                            <option value="inactive">Ngưng hoạt động</option>
                        </select>
                    </label>

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
                        {isSubmitting ? 'Đang tạo danh mục...' : 'Thêm Danh Mục'}
                    </button>
                </form>
            </SectionCard>

            <SectionCard
                title="Danh Sách Danh Mục"
                description="Danh sách này được tách riêng khỏi sản phẩm để luồng quản trị rõ ràng và dễ dùng hơn."
            >
                {isLoading ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                        Đang tải danh mục...
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-white px-4 py-4"
                            >
                                <div className="flex-1">
                                    <p className="font-medium text-[var(--foreground)]">{category.name}</p>
                                    <p className="mt-1 text-sm text-[var(--muted)]">Mã danh mục: {category.id}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                                        {category.status === 'active' ? 'đang hoạt động' : 'ngưng hoạt động'}
                                    </span>
                                    <button
                                        onClick={() => openEditModal(category)}
                                        className="grid h-9 w-9 place-items-center rounded-xl text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
                                        title="Sửa"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category)}
                                        disabled={isDeleting}
                                        className="grid h-9 w-9 place-items-center rounded-xl text-[var(--danger)] transition hover:bg-[rgba(157,49,49,.08)] hover:text-[var(--danger)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="Xóa"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}

                        {categories.length === 0 ? (
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                                Chưa có danh mục nào.
                            </div>
                        ) : null}
                    </div>
                )}
            </SectionCard>

            {showEditModal && editingCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-[var(--foreground)]">Sửa danh mục</h3>
                            <button
                                onClick={closeEditModal}
                                className="grid h-8 w-8 place-items-center text-[var(--muted)] transition hover:text-[var(--foreground)]"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleEditSubmit} className="mt-6 space-y-4">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                    Tên danh mục
                                </span>
                                <input
                                    type="text"
                                    value={editFormData.name}
                                    onChange={(e) => handleEditChange('name', e.target.value)}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none focus:border-[var(--foreground)]"
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                    Trạng thái
                                </span>
                                <select
                                    value={editFormData.status}
                                    onChange={(e) => handleEditChange('status', e.target.value)}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none focus:border-[var(--foreground)]"
                                >
                                    <option value="active">Đang hoạt động</option>
                                    <option value="inactive">Ngưng hoạt động</option>
                                </select>
                            </label>

                            {errorMessage ? (
                                <div className="rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">
                                    {errorMessage}
                                </div>
                            ) : null}

                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    className="flex-1 rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92"
                                >
                                    Cập nhật
                                </button>
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="flex-1 rounded-2xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--panel-strong)]"
                                >
                                    Hủy
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
