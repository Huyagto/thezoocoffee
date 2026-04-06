'use client';

import { useEffect, useState } from 'react';

import { SectionCard } from '@/components/section-card';
import { useAuth } from '@/context/auth-context';
import catalogService from '@/services/catalog.service';
import type { User } from '@/types/api';

export default function UsersPage() {
    const { user: currentUser } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await catalogService.getUsers();
                setUsers(data);
            } catch (error) {
                setErrorMessage(error instanceof Error ? error.message : 'Không thể tải danh sách người dùng.');
            } finally {
                setIsLoading(false);
            }
        };

        loadUsers();
    }, []);

    const refreshUsers = async () => {
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const data = await catalogService.getUsers();
            setUsers(data);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể làm mới danh sách người dùng.');
        }
    };

    const handleToggleRole = async (userItem: User) => {
        if (!userItem.id) return;
        if (currentUser?.id === userItem.id) {
            setErrorMessage('Bạn không thể thay đổi quyền của chính mình.');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const newRole = userItem.role === 'admin' ? 'customer' : 'admin';
            const updatedUser = await catalogService.updateUserRole(
                Number(userItem.id),
                newRole as 'customer' | 'admin',
            );
            setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
            setSuccessMessage('Cập nhật vai trò người dùng thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể cập nhật vai trò người dùng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteUser = async (userItem: User) => {
        if (!userItem.id || currentUser?.id === userItem.id) return;

        if (!confirm(`Bạn có chắc muốn xóa người dùng "${userItem.name}"?`)) {
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await catalogService.deleteUser(Number(userItem.id));
            setUsers((prev) => prev.filter((user) => user.id !== userItem.id));
            setSuccessMessage('Xóa người dùng thành công.');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Không thể xóa người dùng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionCard
            title="Người Dùng"
            description="Màn hình tổng quan người dùng để sau này mở rộng tra cứu khách hàng, phân quyền và quản lý tài khoản."
        >
            {isLoading ? (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
                    Đang tải người dùng...
                </div>
            ) : (
                <div className="space-y-4">
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

                    <div className="grid gap-3">
                        {users.map((userItem) => (
                            <div
                                key={userItem.id}
                                className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-white p-5 lg:flex-row lg:items-center lg:justify-between"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-[var(--foreground)]">{userItem.name}</p>
                                    <p className="mt-1 text-sm text-[var(--muted)]">{userItem.email}</p>
                                    {userItem.phone && (
                                        <p className="mt-1 text-sm text-[var(--muted)]">SĐT: {userItem.phone}</p>
                                    )}
                                    {userItem.address && (
                                        <p className="mt-1 text-sm text-[var(--muted)]">Địa chỉ: {userItem.address}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                                        {userItem.role === 'admin' ? 'quản trị' : 'khách hàng'}
                                    </span>
                                    <button
                                        type="button"
                                        disabled={isSubmitting || currentUser?.id === userItem.id}
                                        onClick={() => handleToggleRole(userItem)}
                                        className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--panel-strong)] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {userItem.role === 'admin' ? 'Giảm quyền' : 'Đặt làm admin'}
                                    </button>
                                    <button
                                        type="button"
                                        disabled={isSubmitting || currentUser?.id === userItem.id}
                                        onClick={() => handleDeleteUser(userItem)}
                                        className="rounded-2xl border border-[var(--danger)] bg-white px-4 py-3 text-sm font-semibold text-[var(--danger)] transition hover:bg-[rgba(157,49,49,0.08)] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}

                        {users.length === 0 ? (
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                                Chưa có người dùng nào.
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </SectionCard>
    );
}
