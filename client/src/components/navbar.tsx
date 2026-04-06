'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ShoppingCart, User, Coffee, LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { useCart } from '@/context/cart-context';

const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/menu', label: 'Thực đơn' },
    { href: '/profile', label: 'Tài khoản' },
];

export function Navbar() {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user: currentUser, logout } = useAuth();
    const { totalItems } = useCart();

    const handleLogout = async () => {
        try {
            await logout();
        } finally {
            setMobileMenuOpen(false);
            router.push('/');
            router.refresh();
        }
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

                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Mở menu</span>
                    </Button>
                </div>
            </nav>

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
