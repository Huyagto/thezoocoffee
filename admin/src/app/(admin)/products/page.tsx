'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { SectionCard } from '@/components/section-card';
import catalogService from '@/services/catalog.service';
import uploadService from '@/services/upload.service';
import type { Category, Product } from '@/types/api';

type ProductStatus = 'available' | 'out_of_stock' | 'discontinued';
type ProductFormData = {
    name: string;
    categoryId: string;
    price: string;
    image: string;
    description: string;
    sku: string;
    status: ProductStatus;
};

const EMPTY_FORM: ProductFormData = {
    name: '',
    categoryId: '',
    price: '',
    image: '',
    description: '',
    sku: '',
    status: 'available',
};

function formatCurrency(amount: number) {
    return `${Math.round(amount).toLocaleString('vi-VN')} vnđ`;
}

function getStatusLabel(status: ProductStatus) {
    if (status === 'out_of_stock') {
        return 'Hết hàng';
    }

    if (status === 'discontinued') {
        return 'Ngừng bán';
    }

    return 'Đang bán';
}

export default function ProductsPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [formData, setFormData] = useState<ProductFormData>(EMPTY_FORM);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [editFormData, setEditFormData] = useState<ProductFormData>(EMPTY_FORM);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [categoriesResponse, productsResponse] = await Promise.all([
                    catalogService.getCategories(),
                    catalogService.getProducts(),
                ]);

                setCategories(categoriesResponse);
                setProducts(productsResponse);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách sản phẩm.');
            } finally {
                setIsLoading(false);
            }
        };

        void loadData();
    }, []);

    const resetCreateForm = () => {
        setFormData(EMPTY_FORM);
        setSelectedImageFile(null);
        setUploadedImageUrl('');
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingProduct(null);
        setEditFormData(EMPTY_FORM);
        setSelectedImageFile(null);
        setUploadedImageUrl('');
    };

    const handleImageUpload = async () => {
        if (!selectedImageFile) {
            setErrorMessage('Vui lòng chọn ảnh trước khi tải lên.');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');
        setIsUploadingImage(true);

        try {
            const uploadedImage = await uploadService.uploadProductImage(selectedImageFile);
            setUploadedImageUrl(uploadedImage.url);

            if (editingProduct) {
                setEditFormData((prev) => ({ ...prev, image: uploadedImage.url }));
            } else {
                setFormData((prev) => ({ ...prev, image: uploadedImage.url }));
            }

            setSuccessMessage('Tải ảnh lên thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể tải ảnh lên.');
        } finally {
            setIsUploadingImage(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!formData.name.trim()) {
            setErrorMessage('Vui lòng nhập tên sản phẩm.');
            return;
        }

        if (!formData.categoryId) {
            setErrorMessage('Vui lòng chọn danh mục.');
            return;
        }

        if (!formData.price || Number(formData.price) <= 0) {
            setErrorMessage('Vui lòng nhập giá hợp lệ.');
            return;
        }

        setIsSubmitting(true);

        try {
            const createdProduct = await catalogService.createProduct({
                name: formData.name.trim(),
                categoryId: Number(formData.categoryId),
                price: Number(formData.price),
                image: formData.image.trim() || undefined,
                description: formData.description.trim() || undefined,
                sku: formData.sku.trim() || undefined,
                status: formData.status,
            });

            setProducts((prev) => [createdProduct, ...prev]);
            resetCreateForm();
            setSuccessMessage('Tạo sản phẩm thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo sản phẩm.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openEditModal = (product: Product) => {
        setEditingProduct(product);
        setEditFormData({
            name: product.name,
            categoryId: product.categories?.id?.toString() ?? '',
            price: product.price.toString(),
            image: product.image ?? '',
            description: product.description ?? '',
            sku: product.sku ?? '',
            status: product.status,
        });
        setUploadedImageUrl(product.image ?? '');
        setSelectedImageFile(null);
        setShowEditModal(true);
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleEditChange = (field: keyof ProductFormData, value: string) => {
        setEditFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!editingProduct) {
            return;
        }

        if (!editFormData.name.trim()) {
            setErrorMessage('Vui lòng nhập tên sản phẩm.');
            return;
        }

        if (!editFormData.categoryId) {
            setErrorMessage('Vui lòng chọn danh mục.');
            return;
        }

        if (!editFormData.price || Number(editFormData.price) <= 0) {
            setErrorMessage('Vui lòng nhập giá hợp lệ.');
            return;
        }

        setIsSubmitting(true);

        try {
            const updatedProduct = await catalogService.updateProduct(editingProduct.id, {
                name: editFormData.name.trim(),
                categoryId: Number(editFormData.categoryId),
                price: Number(editFormData.price),
                image: editFormData.image.trim() || null,
                description: editFormData.description.trim() || null,
                sku: editFormData.sku.trim() || null,
                status: editFormData.status,
            });

            setProducts((prev) => prev.map((item) => (item.id === updatedProduct.id ? updatedProduct : item)));
            setSuccessMessage('Cập nhật sản phẩm thành công.');
            closeEditModal();
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật sản phẩm.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (product: Product) => {
        if (!confirm(`Bạn có chắc muốn xóa sản phẩm "${product.name}"?`)) {
            return;
        }

        setIsDeleting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await catalogService.deleteProduct(product.id);
            setProducts((prev) => prev.filter((item) => item.id !== product.id));
            setSuccessMessage('Xóa sản phẩm thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể xóa sản phẩm.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
            <SectionCard
                title="Tạo Sản Phẩm"
                description="Sản phẩm được tạo riêng tại đây và liên kết với danh mục đã có."
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Tên sản phẩm</span>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                        />
                    </label>

                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Danh mục</span>
                            <select
                                value={formData.categoryId}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        categoryId: event.target.value,
                                    }))
                                }
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            >
                                <option value="">Chọn danh mục</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Giá bán</span>
                            <input
                                type="number"
                                min="0"
                                value={formData.price}
                                onChange={(event) => setFormData((prev) => ({ ...prev, price: event.target.value }))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Mã SKU</span>
                            <input
                                type="text"
                                value={formData.sku}
                                onChange={(event) => setFormData((prev) => ({ ...prev, sku: event.target.value }))}
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
                                        status: event.target.value as ProductStatus,
                                    }))
                                }
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            >
                                <option value="available">Đang bán</option>
                                <option value="out_of_stock">Hết hàng</option>
                                <option value="discontinued">Ngừng bán</option>
                            </select>
                        </label>
                    </div>

                    <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Ảnh sản phẩm</p>
                        <div className="mt-3 flex flex-col gap-3">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(event) => setSelectedImageFile(event.target.files?.[0] || null)}
                                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleImageUpload}
                                disabled={!selectedImageFile || isUploadingImage}
                                className="w-fit rounded-2xl border border-[var(--foreground)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isUploadingImage ? 'Đang tải ảnh...' : 'Tải ảnh lên'}
                            </button>
                        </div>

                        {uploadedImageUrl ? (
                            <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-3">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--panel-strong)]">
                                    <Image
                                        src={uploadedImageUrl}
                                        alt="Ảnh sản phẩm"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Mô tả</span>
                        <textarea
                            value={formData.description}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    description: event.target.value,
                                }))
                            }
                            rows={4}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                        />
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
                        disabled={isSubmitting || categories.length === 0}
                        className="w-full rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? 'Đang tạo sản phẩm...' : 'Thêm Sản Phẩm'}
                    </button>
                </form>
            </SectionCard>

            <SectionCard
                title="Danh Sách Sản Phẩm"
                description="Danh sách sản phẩm được tách riêng để quản trị, chỉnh sửa và gắn công thức sau."
            >
                {isLoading ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                        Đang tải sản phẩm...
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {products.map((product) => (
                            <div key={product.id} className="rounded-2xl border border-[var(--border)] bg-white p-4">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex-1">
                                        <p className="font-medium text-[var(--foreground)]">{product.name}</p>
                                        <p className="mt-1 text-sm text-[var(--muted)]">
                                            {product.categories?.name || 'Chưa phân loại'} - {formatCurrency(product.price)}
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--muted)]">{product.sku || 'Chưa có SKU'}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                                            {getStatusLabel(product.status)}
                                        </span>
                                        <button
                                            onClick={() => openEditModal(product)}
                                            className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
                                            title="Sửa"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product)}
                                            disabled={isDeleting}
                                            className="rounded-xl px-3 py-2 text-sm text-[var(--danger)] transition hover:bg-[rgba(157,49,49,.08)] disabled:cursor-not-allowed disabled:opacity-50"
                                            title="Xóa"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {products.length === 0 ? (
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                                Chưa có sản phẩm nào.
                            </div>
                        ) : null}
                    </div>
                )}
            </SectionCard>

            {showEditModal && editingProduct ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-[var(--foreground)]">Sửa sản phẩm</h3>
                            <button
                                onClick={closeEditModal}
                                className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
                            >
                                Đóng
                            </button>
                        </div>

                        <form onSubmit={handleEditSubmit} className="mt-6 space-y-4">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                    Tên sản phẩm
                                </span>
                                <input
                                    type="text"
                                    value={editFormData.name}
                                    onChange={(event) => handleEditChange('name', event.target.value)}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                />
                            </label>

                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                        Danh mục
                                    </span>
                                    <select
                                        value={editFormData.categoryId}
                                        onChange={(event) => handleEditChange('categoryId', event.target.value)}
                                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                    >
                                        <option value="">Chọn danh mục</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                        Giá bán
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        value={editFormData.price}
                                        onChange={(event) => handleEditChange('price', event.target.value)}
                                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                    />
                                </label>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                        Mã SKU
                                    </span>
                                    <input
                                        type="text"
                                        value={editFormData.sku}
                                        onChange={(event) => handleEditChange('sku', event.target.value)}
                                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                        Trạng thái
                                    </span>
                                    <select
                                        value={editFormData.status}
                                        onChange={(event) =>
                                            handleEditChange('status', event.target.value as ProductStatus)
                                        }
                                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                    >
                                        <option value="available">Đang bán</option>
                                        <option value="out_of_stock">Hết hàng</option>
                                        <option value="discontinued">Ngừng bán</option>
                                    </select>
                                </label>
                            </div>

                            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                                <p className="text-sm font-semibold text-[var(--foreground)]">Ảnh sản phẩm</p>
                                <div className="mt-3 flex flex-col gap-3">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(event) => setSelectedImageFile(event.target.files?.[0] || null)}
                                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleImageUpload}
                                        disabled={!selectedImageFile || isUploadingImage}
                                        className="w-fit rounded-2xl border border-[var(--foreground)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isUploadingImage ? 'Đang tải ảnh...' : 'Tải ảnh mới'}
                                    </button>
                                </div>

                                {uploadedImageUrl ? (
                                    <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] p-3">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--panel-strong)]">
                                            <Image
                                                src={uploadedImageUrl}
                                                alt="Ảnh sản phẩm"
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">Mô tả</span>
                                <textarea
                                    value={editFormData.description}
                                    onChange={(event) => handleEditChange('description', event.target.value)}
                                    rows={3}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm outline-none"
                                />
                            </label>

                            {errorMessage ? (
                                <div className="rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">
                                    {errorMessage}
                                </div>
                            ) : null}

                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Đang lưu...' : 'Cập nhật'}
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
            ) : null}
        </div>
    );
}
