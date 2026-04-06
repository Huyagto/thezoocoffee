'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    Banknote,
    Building2,
    Check,
    CreditCard,
    type LucideIcon,
    Smartphone,
} from 'lucide-react';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth-context';
import { useCart } from '@/context/cart-context';
import orderService from '@/services/order.service';
import paymentService from '@/services/payment.service';
import couponService from '@/services/coupon.service';
import type { Coupon, PaymentMethod } from '@/types/api';

interface PaymentOption {
    id: PaymentMethod;
    name: string;
    description: string;
    icon: LucideIcon;
}

interface LocalOrderItem {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

type AddressOption = 'saved' | 'other';

const paymentMethods: PaymentOption[] = [
    {
        id: 'cod',
        name: 'Thanh toán khi nhận hàng',
        description: 'Thanh toán trực tiếp khi bạn nhận đơn',
        icon: Banknote,
    },
    {
        id: 'vnpay',
        name: 'VNPay',
        description: 'Thanh toán qua cổng VNPay',
        icon: Building2,
    },
    {
        id: 'momo',
        name: 'MoMo',
        description: 'Thanh toán qua ví MoMo',
        icon: Smartphone,
    },
    {
        id: 'zalopay',
        name: 'ZaloPay',
        description: 'Thanh toán qua ví ZaloPay',
        icon: CreditCard,
    },
];

const SHIPPING_FEE = 30000;

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
}

function mapCartItems(items: ReturnType<typeof useCart>['items']): LocalOrderItem[] {
    return items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
    }));
}

export default function CheckoutPage() {
    const router = useRouter();
    const { toast } = useToast();
    const { user: currentUser } = useAuth();
    const { items: cartItems, clearCart } = useCart();
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('cod');
    const [selectedAddress, setSelectedAddress] = useState<AddressOption>('other');
    const [isProcessing, setIsProcessing] = useState(false);
    const [showProcessingModal, setShowProcessingModal] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        note: '',
    });

    useEffect(() => {
        if (!currentUser) {
            router.push('/login');
            return;
        }
    }, [currentUser, router]);
    const savedProfile = {
        fullName: currentUser?.name || '',
        phone: currentUser?.phone || '',
        email: currentUser?.email || '',
        address: currentUser?.address || '',
    };
    const hasSavedAddress =
        Boolean(savedProfile.fullName.trim()) &&
        Boolean(savedProfile.phone.trim()) &&
        Boolean(savedProfile.email.trim()) &&
        Boolean(savedProfile.address.trim());

    useEffect(() => {
        if (!currentUser) {
            return;
        }

        setFormData((prev) => ({
            ...prev,
            fullName: prev.fullName || currentUser.name || '',
            phone: prev.phone || currentUser.phone || '',
            email: prev.email || currentUser.email || '',
            address: prev.address || currentUser.address || '',
        }));
    }, [currentUser]);

    useEffect(() => {
        if (hasSavedAddress) {
            setSelectedAddress('saved');
            setFormData((prev) => ({
                ...prev,
                fullName: savedProfile.fullName,
                phone: savedProfile.phone,
                email: savedProfile.email,
                address: savedProfile.address,
            }));
            return;
        }

        setSelectedAddress('other');
    }, [hasSavedAddress, savedProfile.address, savedProfile.email, savedProfile.fullName, savedProfile.phone]);

    if (!currentUser) {
        return null;
    }

    const orderItems = mapCartItems(cartItems);

    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = Math.max(0, subtotal - discountAmount) + SHIPPING_FEE;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddressOptionChange = (value: string) => {
        const nextValue = value as AddressOption;
        setSelectedAddress(nextValue);

        if (nextValue === 'saved') {
            setFormData((prev) => ({
                ...prev,
                fullName: savedProfile.fullName,
                phone: savedProfile.phone,
                email: savedProfile.email,
                address: savedProfile.address,
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            fullName: currentUser?.name || '',
            phone: currentUser?.phone || '',
            email: currentUser?.email || '',
            address: '',
        }));
    };

    const handleApplyCoupon = async () => {
        if (!couponCode.trim()) {
            toast({
                title: 'Thiếu mã giảm giá',
                description: 'Vui lòng nhập mã giảm giá trước khi áp dụng.',
                variant: 'destructive',
            });
            return;
        }

        setIsApplyingCoupon(true);

        try {
            const result = await couponService.validate(couponCode.trim(), subtotal);
            setAppliedCoupon(result.coupon);
            setDiscountAmount(result.discountAmount);
            setCouponCode(result.coupon.code);
            toast({
                title: 'Áp dụng thành công',
                description: `Mã ${result.coupon.code} đã được áp dụng cho đơn hàng.`,
            });
        } catch (error) {
            setAppliedCoupon(null);
            setDiscountAmount(0);
            toast({
                title: 'Không áp dụng được mã',
                description: error instanceof Error ? error.message : 'Vui lòng thử lại.',
                variant: 'destructive',
            });
        } finally {
            setIsApplyingCoupon(false);
        }
    };

    const handleRemoveCoupon = () => {
        setCouponCode('');
        setAppliedCoupon(null);
        setDiscountAmount(0);
    };

    const validateForm = (): boolean => {
        if (!formData.fullName.trim()) {
            toast({
                title: 'Thiếu thông tin',
                description: 'Vui lòng nhập họ và tên.',
                variant: 'destructive',
            });
            return false;
        }

        if (!formData.phone.trim()) {
            toast({
                title: 'Thiếu thông tin',
                description: 'Vui lòng nhập số điện thoại.',
                variant: 'destructive',
            });
            return false;
        }

        if (!formData.email.trim()) {
            toast({
                title: 'Thiếu thông tin',
                description: 'Vui lòng nhập email.',
                variant: 'destructive',
            });
            return false;
        }

        if (!formData.address.trim()) {
            toast({
                title: 'Thiếu thông tin',
                description: 'Vui lòng nhập địa chỉ giao hàng.',
                variant: 'destructive',
            });
            return false;
        }

        return true;
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) return;
        if (orderItems.length === 0) {
            toast({
                title: 'Giỏ hàng đang trống',
                description: 'Vui lòng thêm ít nhất một sản phẩm trước khi đặt hàng.',
                variant: 'destructive',
            });
            return;
        }

        setIsProcessing(true);

        try {
            const order = await orderService.checkout({
                shippingInfo: {
                    fullName: formData.fullName.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),
                    address: formData.address.trim(),
                    note: formData.note.trim() || undefined,
                },
                paymentMethod: selectedPayment,
                items: orderItems.map((item) => ({
                    productId: Number(item.id),
                    quantity: item.quantity,
                })),
                couponCode: appliedCoupon?.code || undefined,
            });

            if (selectedPayment === 'cod') {
                await clearCart();
                toast({
                    title: 'Đặt hàng thành công',
                    description: 'Đơn hàng của bạn đã được tạo.',
                });
                router.push(`/checkout/success?orderId=${order.id}`);
                return;
            }

            setShowProcessingModal(true);
            const payment = await paymentService.initiate(
                order.id,
                selectedPayment as Exclude<PaymentMethod, 'cod'>
            );

            if (payment.paymentUrl) {
                window.location.href = payment.paymentUrl;
                return;
            }

            throw new Error('Khong tao duoc lien ket thanh toan. Vui long thu lai.');
        } catch (error) {
            setShowProcessingModal(false);
            const errorMessage = error instanceof Error ? error.message : 'Không thể đặt hàng. Vui lòng thử lại.';
            toast({
                title: 'Thanh toán thất bại',
                description: errorMessage,
                variant: 'destructive',
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="mb-10">
                    <Link
                        href="/cart"
                        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Quay lại giỏ hàng
                    </Link>

                    <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">Thanh toán</h1>
                </div>

                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <Card className="rounded-2xl border border-border bg-card">
                            <CardContent className="p-6">
                                <h2 className="mb-6 font-serif text-2xl font-semibold text-card-foreground">
                                    Thông tin giao hàng
                                </h2>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Chọn địa chỉ giao hàng</Label>
                                        <RadioGroup
                                            value={selectedAddress}
                                            onValueChange={handleAddressOptionChange}
                                            className="gap-3"
                                        >
                                            {hasSavedAddress ? (
                                                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40">
                                                    <RadioGroupItem value="saved" id="saved-address" className="mt-1" />
                                                    <div className="space-y-1">
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className="font-medium text-foreground">
                                                                {savedProfile.fullName}
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">
                                                                {savedProfile.phone}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">
                                                            {savedProfile.email}
                                                        </p>
                                                        <p className="text-sm text-foreground">
                                                            {savedProfile.address}
                                                        </p>
                                                    </div>
                                                </label>
                                            ) : null}

                                            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40">
                                                <RadioGroupItem value="other" id="other-address" className="mt-1" />
                                                <div className="space-y-1">
                                                    <p className="font-medium text-foreground">Dùng địa chỉ khác</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Nhập địa chỉ giao hàng khác cho đơn hàng này.
                                                    </p>
                                                </div>
                                            </label>
                                        </RadioGroup>
                                    </div>

                                    {selectedAddress === 'other' ? (
                                        <>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="fullName">Họ và tên *</Label>
                                                    <Input
                                                        id="fullName"
                                                        name="fullName"
                                                        placeholder="Nhập họ và tên"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Số điện thoại *</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="Nhập số điện thoại"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Nhập địa chỉ email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="address">Địa chỉ *</Label>
                                                <Textarea
                                                    id="address"
                                                    name="address"
                                                    placeholder="Nhập địa chỉ giao hàng"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                />
                                            </div>
                                        </>
                                    ) : null}
                                </div>

                                <div className="mt-4 space-y-2">
                                    <Label htmlFor="note">Ghi chú</Label>
                                    <Textarea
                                        id="note"
                                        name="note"
                                        placeholder="Thêm ghi chú giao hàng nếu cần"
                                        value={formData.note}
                                        onChange={handleInputChange}
                                        rows={3}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl border border-border bg-card">
                            <CardContent className="p-6">
                                <h2 className="mb-6 font-serif text-2xl font-semibold text-card-foreground">
                                    Phương thức thanh toán
                                </h2>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {paymentMethods.map((method) => {
                                        const Icon = method.icon;

                                        return (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setSelectedPayment(method.id)}
                                                className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                                                    selectedPayment === method.id
                                                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                                        : 'border-border hover:border-primary/40 hover:bg-muted/40'
                                                }`}
                                            >
                                                {selectedPayment === method.id ? (
                                                    <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                                        <Check className="h-3 w-3 text-primary-foreground" />
                                                    </div>
                                                ) : null}

                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                                                        <Icon className="h-5 w-5 text-primary" />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-foreground">{method.name}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {method.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl border border-border bg-card">
                            <CardContent className="p-6">
                                <h2 className="mb-4 font-serif text-2xl font-semibold text-card-foreground">
                                    Mã giảm giá
                                </h2>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Input
                                        value={couponCode}
                                        onChange={(event) => setCouponCode(event.target.value.toUpperCase())}
                                        placeholder="Nhập mã coupon"
                                    />
                                    <Button type="button" onClick={handleApplyCoupon} disabled={isApplyingCoupon}>
                                        {isApplyingCoupon ? 'Đang áp dụng...' : 'Áp dụng'}
                                    </Button>
                                </div>

                                {appliedCoupon ? (
                                    <div className="mt-4 rounded-2xl border border-[rgba(46,125,91,0.18)] bg-[rgba(46,125,91,0.08)] p-4">
                                        <div className="flex items-center justify-between gap-3">
                                            <div>
                                                <p className="font-semibold text-foreground">{appliedCoupon.code}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {appliedCoupon.name} - giảm {formatCurrency(discountAmount)}
                                                </p>
                                            </div>
                                            <Button type="button" variant="outline" onClick={handleRemoveCoupon}>
                                                Bỏ mã
                                            </Button>
                                        </div>
                                    </div>
                                ) : null}
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                            <h2 className="mb-6 font-serif text-xl font-semibold text-card-foreground">
                                Tóm tắt đơn hàng
                            </h2>

                            {orderItems.length === 0 ? (
                                <div className="space-y-4">
                                    <p className="text-sm text-muted-foreground">Giỏ hàng của bạn đang trống.</p>
                                    <Button asChild className="w-full">
                                        <Link href="/menu">Xem thực đơn</Link>
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        {orderItems.map((item) => (
                                            <div key={item.id} className="flex gap-3">
                                                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-muted">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate font-medium text-foreground">{item.name}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Số lượng: {item.quantity}
                                                    </p>
                                                    <p className="font-semibold text-primary">
                                                        {formatCurrency(item.price * item.quantity)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Separator className="my-6" />

                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Tạm tính</span>
                                            <span>{formatCurrency(subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Phí giao hàng</span>
                                            <span>{formatCurrency(SHIPPING_FEE)}</span>
                                        </div>
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Giảm giá</span>
                                            <span>-{formatCurrency(discountAmount)}</span>
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    <div className="flex justify-between text-lg font-bold text-foreground">
                                        <span>Tổng cộng</span>
                                        <span>{formatCurrency(total)}</span>
                                    </div>

                                    <Button
                                        size="lg"
                                        onClick={handlePlaceOrder}
                                        disabled={isProcessing}
                                        className="mt-6 w-full gap-2"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Spinner className="h-4 w-4" />
                                                Đang xử lý...
                                            </>
                                        ) : (
                                            <>
                                                Đặt hàng
                                                <ArrowRight className="h-4 w-4" />
                                            </>
                                        )}
                                    </Button>

                                    <Button variant="outline" asChild className="mt-3 w-full">
                                        <Link href="/cart">Quay lại giỏ hàng</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <Dialog open={showProcessingModal} onOpenChange={setShowProcessingModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-center">Đang xử lý thanh toán</DialogTitle>
                        <DialogDescription className="text-center">
                            Đang kết nối tới{' '}
                            {paymentMethods.find((method) => method.id === selectedPayment)?.name ?? 'cổng thanh toán'}
                            ...
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col items-center py-8">
                        <Spinner className="h-12 w-12 text-primary" />
                        <p className="mt-4 text-sm text-muted-foreground">
                            Vui lòng chờ trong giây lát để hệ thống chuyển bạn đến cổng thanh toán.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>

            <Toaster />
        </div>
    );
}
