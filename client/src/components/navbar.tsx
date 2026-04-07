'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bell, Coffee, LogOut, Menu, ShoppingCart, User, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { useCart } from '@/context/cart-context';
import { getClientSocket, SOCKET_EVENTS } from '@/lib/socket';
import notificationService from '@/services/notification.service';
import type { Notification } from '@/types/api';

const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/menu', label: 'Thực đơn' },
];

function NotificationPanel({
    notifications,
    onMarkAsRead,
    onOpenOrder,
}: {
    notifications: Notification[];
    onMarkAsRead: (id: number) => void;
    onOpenOrder: (notification: Notification) => void;
}) {
    const unreadCount = notifications.filter((notification) => !notification.is_read).length;

    return (
        <div className="w-full rounded-3xl border border-border bg-background p-4 shadow-2xl md:w-[360px]">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold text-foreground">Thông báo</p>
                    <p className="text-xs text-muted-foreground">
                        {unreadCount > 0 ? `${unreadCount} thông báo chưa đọc` : 'Bạn đã xem hết thông báo'}
                    </p>
                </div>
            </div>

            <div className="mt-4 space-y-3">
                {notifications.slice(0, 5).map((notification) => (
                    <div key={notification.id} className="flex min-h-[148px] flex-col justify-between rounded-2xl border border-border bg-card p-4">
                        <div className="space-y-2">
                            <p className="line-clamp-1 text-sm font-semibold text-foreground">{notification.title}</p>
                            <p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="mt-4 flex items-end justify-between gap-3">
                            <div className="min-w-0">
                                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Mã đơn</p>
                                <p className="truncate text-xs font-medium text-foreground">
                                    {notification.orders?.order_code ?? 'Thông báo hệ thống'}
                                </p>
                            </div>
                            <div className="flex shrink-0 items-center gap-2">
                                {notification.orders?.id ? (
                                    <button
                                        type="button"
                                        onClick={() => onOpenOrder(notification)}
                                        className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-foreground"
                                    >
                                        Xem đơn
                                    </button>
                                ) : null}
                                {!notification.is_read ? (
                                    <button
                                        type="button"
                                        onClick={() => onMarkAsRead(notification.id)}
                                        className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-foreground"
                                    >
                                        Đã xem
                                    </button>
                                ) : (
                                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                                        Đã đọc
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {notifications.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                        Chưa có thông báo nào.
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export function Navbar() {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const { user: currentUser, logout } = useAuth();
    const { totalItems } = useCart();

    const unreadNotifications = useMemo(
        () => notifications.filter((notification) => !notification.is_read),
        [notifications]
    );

    const loadNotifications = useCallback(async () => {
        if (!currentUser) {
            setNotifications([]);
            setNotificationOpen(false);
            return;
        }

        try {
            const data = await notificationService.getMyNotifications();
            setNotifications(data);
        } catch {
            setNotifications([]);
        }
    }, [currentUser]);

    useEffect(() => {
        void loadNotifications();
    }, [loadNotifications]);

    useEffect(() => {
        if (!currentUser) return;

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                void loadNotifications();
            }
        };

        const socket = getClientSocket();
        const handleRealtimeNotification = () => {
            void loadNotifications();
        };

        socket.connect();
        socket.on(SOCKET_EVENTS.USER_ORDER_STATUS_UPDATED, handleRealtimeNotification);
        socket.on(SOCKET_EVENTS.USER_NOTIFICATION_CREATED, handleRealtimeNotification);

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            socket.off(SOCKET_EVENTS.USER_ORDER_STATUS_UPDATED, handleRealtimeNotification);
            socket.off(SOCKET_EVENTS.USER_NOTIFICATION_CREATED, handleRealtimeNotification);
            socket.disconnect();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [currentUser, loadNotifications]);

    const handleLogout = async () => {
        try {
            await logout();
        } finally {
            setMobileMenuOpen(false);
            setNotificationOpen(false);
            router.push('/');
            router.refresh();
        }
    };

    const handleMarkNotificationAsRead = async (notificationId: number) => {
        try {
            const updatedNotification = await notificationService.markAsRead(notificationId);
            setNotifications((currentNotifications) =>
                currentNotifications.map((notification) =>
                    notification.id === updatedNotification.id ? updatedNotification : notification
                )
            );
        } catch {
            // Keep this action quiet in the navbar.
        }
    };

    const handleOpenOrderFromNotification = async (notification: Notification) => {
        if (!notification.orders?.id) {
            return;
        }

        if (!notification.is_read) {
            await handleMarkNotificationAsRead(notification.id);
        }

        setNotificationOpen(false);
        setMobileMenuOpen(false);
        router.push('/profile?section=orders&orderId=' + notification.orders.id);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Coffee className="h-8 w-8 text-primary" />
                    <span className="font-serif text-xl font-bold tracking-tight text-foreground">TheZooCoffee</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    {currentUser ? (
                        <>
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setNotificationOpen((currentValue) => !currentValue)}
                                    className="relative text-muted-foreground hover:text-foreground"
                                >
                                    <Bell className="h-5 w-5" />
                                    {unreadNotifications.length > 0 ? (
                                        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                                            {unreadNotifications.length > 99 ? '99+' : unreadNotifications.length}
                                        </span>
                                    ) : null}
                                    <span className="sr-only">Thông báo</span>
                                </Button>

                                {notificationOpen ? (
                                    <div className="absolute right-0 top-12 z-50">
                                        <NotificationPanel
                                            notifications={notifications}
                                            onMarkAsRead={handleMarkNotificationAsRead}
                                            onOpenOrder={handleOpenOrderFromNotification}
                                        />
                                    </div>
                                ) : null}
                            </div>

                            <Link href="/profile">
                                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                                    <User className="h-4 w-4" />
                                    {currentUser.name}
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="gap-2 text-muted-foreground hover:text-foreground"
                            >
                                <LogOut className="h-4 w-4" />
                                Đăng xuất
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                                    Đăng nhập
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5">
                                    Đăng ký
                                </Button>
                            </Link>
                        </>
                    )}

                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 ? (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    {totalItems > 99 ? '99+' : totalItems}
                                </span>
                            ) : null}
                            <span className="sr-only">Giỏ hàng ({totalItems} sản phẩm)</span>
                        </Button>
                    </Link>

                    <Link href="/menu">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Đặt hàng ngay</Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    {currentUser ? (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setNotificationOpen((currentValue) => !currentValue)}
                            className="relative text-muted-foreground"
                        >
                            <Bell className="h-5 w-5" />
                            {unreadNotifications.length > 0 ? (
                                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                                    {unreadNotifications.length > 99 ? '99+' : unreadNotifications.length}
                                </span>
                            ) : null}
                            <span className="sr-only">Thông báo</span>
                        </Button>
                    ) : null}

                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 ? (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    {totalItems > 99 ? '99+' : totalItems}
                                </span>
                            ) : null}
                            <span className="sr-only">Giỏ hàng ({totalItems} sản phẩm)</span>
                        </Button>
                    </Link>

                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Mở menu</span>
                    </Button>
                </div>
            </nav>

            {notificationOpen && currentUser ? (
                <div className="border-t border-border px-4 py-4 md:hidden">
                    <NotificationPanel
                        notifications={notifications}
                        onMarkAsRead={handleMarkNotificationAsRead}
                        onOpenOrder={handleOpenOrderFromNotification}
                    />
                </div>
            ) : null}

            {mobileMenuOpen ? (
                <div className="border-t border-border md:hidden">
                    <div className="space-y-1 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                            {currentUser ? (
                                <>
                                    <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
                                            <User className="h-4 w-4" />
                                            {currentUser.name}
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
                                        <LogOut className="h-4 w-4" />
                                        Đăng xuất
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="outline" className="w-full justify-start gap-2">
                                            <User className="h-4 w-4" />
                                            Đăng nhập
                                        </Button>
                                    </Link>
                                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
                                            Tạo tài khoản
                                        </Button>
                                    </Link>
                                </>
                            )}

                            <Link href="/menu" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full bg-primary text-primary-foreground">Đặt hàng ngay</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
