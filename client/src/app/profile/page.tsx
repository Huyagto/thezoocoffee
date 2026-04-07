'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    BadgeCheck,
    Eye,
    EyeOff,
    KeyRound,
    Loader2,
    LogOut,
    Mail,
    MapPin,
    Phone,
    User,
} from 'lucide-react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import authService from '@/services/auth.service';
import orderService from '@/services/order.service';
import shippingService from '@/services/shipping.service';
import type { Order, ShippingDistrict, ShippingProvince, ShippingWard } from '@/types/api';

const OTP_DURATION_SECONDS = 5 * 60;
const PASSWORD_RULE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,50}$/;

type WardOption = ShippingWard & {
    districtName?: string;
};

function getWardOptionValue(ward: Pick<ShippingWard, 'DistrictID' | 'WardCode'>) {
    return `${ward.DistrictID}:${ward.WardCode}`;
}

function formatCurrency(amount: number | string | null | undefined) {
    const numericAmount = Number(amount ?? 0);
    const safeAmount = Number.isFinite(numericAmount) ? numericAmount : 0;
    return `${Math.round(safeAmount).toLocaleString('vi-VN')} vnđ`;
}

function mapOrderStatus(status?: string) {
    if (status === 'pending') return 'Chờ xác nhận';
    if (status === 'confirmed') return 'Đã xác nhận';
    if (status === 'preparing') return 'Đang chuẩn bị';
    if (status === 'completed') return 'Hoàn thành';
    if (status === 'cancelled') return 'Đã hủy';
    return 'Đang cập nhật';
}

function mapPaymentStatus(status?: string) {
    if (status === 'paid') return 'Đã thanh toán';
    if (status === 'unpaid') return 'Chưa thanh toán';
    if (status === 'failed') return 'Thanh toán thất bại';
    if (status === 'refunded') return 'Đã hoàn tiền';
    return 'Đang cập nhật';
}

function ProfileField({ icon: Icon, label, value }: { icon: typeof User; label: string; value?: string }) {
    return (
        <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-1 font-medium text-foreground">{value?.trim() ? value : 'Chưa cập nhật'}</p>
            </div>
        </div>
    );
}

export default function ProfilePage() {
    const router = useRouter();
    const { user: currentUser, isLoading, logout, refreshUser, setUser } = useAuth();
    const { toast } = useToast();
    const [activeSection, setActiveSection] = useState<'orders' | 'profile'>('orders');
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [isLoadingOrders, setIsLoadingOrders] = useState(false);
    const [isLoadingAddressData, setIsLoadingAddressData] = useState(false);
    const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);
    const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
    const [isRequestingOtp, setIsRequestingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [otpRequested, setOtpRequested] = useState(false);
    const [otpTimeLeft, setOtpTimeLeft] = useState(0);
    const [orders, setOrders] = useState<Order[]>([]);
    const [provinces, setProvinces] = useState<ShippingProvince[]>([]);
    const [districts, setDistricts] = useState<ShippingDistrict[]>([]);
    const [wards, setWards] = useState<WardOption[]>([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState<number | ''>('');
    const [selectedWardValue, setSelectedWardValue] = useState('');
    const didHydrateProvince = useRef(false);
    const didHydrateWard = useRef(false);
    const [profileForm, setProfileForm] = useState({ name: '', phone: '', address: '' });
    const [passwordForm, setPasswordForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '', otp: '' });
    const [showPasswords, setShowPasswords] = useState({ oldPassword: false, newPassword: false, confirmPassword: false });

    const missingProfileFields = [
        !currentUser?.name?.trim() ? 'Họ và tên' : null,
        !currentUser?.phone?.trim() ? 'Số điện thoại' : null,
        !currentUser?.address?.trim() ? 'Địa chỉ' : null,
        !currentUser?.province_name?.trim() || !currentUser?.ward_name?.trim() ? 'Tỉnh/Phường xã' : null,
    ].filter(Boolean) as string[];

    const selectedProvince = provinces.find((province) => province.ProvinceID === Number(selectedProvinceId));
    const selectedWard = wards.find((ward) => getWardOptionValue(ward) === selectedWardValue);
    const canResendOtp = otpRequested && otpTimeLeft === 0 && !isRequestingOtp && !isVerifyingOtp;

    useEffect(() => {
        let isMounted = true;
        if (!currentUser && !isLoading) {
            refreshUser().then((user) => {
                if (!user && isMounted) {
                    router.push('/login');
                }
            });
        }
        return () => {
            isMounted = false;
        };
    }, [currentUser, isLoading, refreshUser, router]);

    useEffect(() => {
        if (!currentUser) {
            return;
        }
        setProfileForm({
            name: currentUser.name ?? '',
            phone: currentUser.phone ?? '',
            address: currentUser.address ?? '',
        });
        setSelectedWardValue('');
        didHydrateProvince.current = false;
        didHydrateWard.current = false;
    }, [currentUser]);

    useEffect(() => {
        let isMounted = true;
        setIsLoadingAddressData(true);
        shippingService
            .getProvinces()
            .then((data) => {
                if (!isMounted) return;
                setProvinces(data);
                if (currentUser?.province_name && !didHydrateProvince.current) {
                    const matchedProvince = data.find((province) => province.ProvinceName === currentUser.province_name);
                    if (matchedProvince) {
                        setSelectedProvinceId(matchedProvince.ProvinceID);
                        didHydrateProvince.current = true;
                    }
                }
            })
            .catch(() => {
                if (isMounted) setProvinces([]);
            })
            .finally(() => {
                if (isMounted) setIsLoadingAddressData(false);
            });
        return () => {
            isMounted = false;
        };
    }, [currentUser?.province_name]);

    useEffect(() => {
        if (!selectedProvinceId) {
            setDistricts([]);
            setWards([]);
            setSelectedWardValue('');
            return;
        }

        let isMounted = true;
        setIsLoadingAddressData(true);
        shippingService
            .getDistricts(Number(selectedProvinceId))
            .then(async (data) => {
                if (!isMounted) return;
                setDistricts(data);
                const wardResults = await Promise.allSettled(
                    data.map(async (district) => {
                        const districtWards = await shippingService.getWards(district.DistrictID);
                        return districtWards.map((ward) => ({ ...ward, districtName: district.DistrictName }));
                    }),
                );
                if (!isMounted) return;
                const mergedWards = wardResults
                    .reduce<WardOption[]>((accumulator, result) => {
                        if (result.status === 'fulfilled') {
                            accumulator.push(...result.value);
                        }
                        return accumulator;
                    }, [])
                    .sort((a, b) => a.WardName.localeCompare(b.WardName, 'vi'));
                setWards(mergedWards);
                if (currentUser?.to_ward_code && !didHydrateWard.current) {
                    const matchedWard = mergedWards.find(
                        (ward) => ward.WardCode === currentUser.to_ward_code && ward.DistrictID === currentUser.to_district_id,
                    );
                    if (matchedWard) {
                        setSelectedWardValue(getWardOptionValue(matchedWard));
                        didHydrateWard.current = true;
                    }
                }
            })
            .catch(() => {
                if (isMounted) {
                    setDistricts([]);
                    setWards([]);
                }
            })
            .finally(() => {
                if (isMounted) setIsLoadingAddressData(false);
            });
        return () => {
            isMounted = false;
        };
    }, [currentUser?.to_district_id, currentUser?.to_ward_code, selectedProvinceId]);

    useEffect(() => {
        if (!currentUser) {
            setOrders([]);
            return;
        }
        let isMounted = true;
        setIsLoadingOrders(true);
        orderService
            .getOrders()
            .then((response) => {
                if (isMounted) setOrders(response.orders ?? []);
            })
            .catch(() => {
                if (isMounted) setOrders([]);
            })
            .finally(() => {
                if (isMounted) setIsLoadingOrders(false);
            });
        return () => {
            isMounted = false;
        };
    }, [currentUser]);

    useEffect(() => {
        if (!otpRequested || otpTimeLeft <= 0) {
            return;
        }
        const timer = window.setInterval(() => {
            setOtpTimeLeft((prev) => {
                if (prev <= 1) {
                    window.clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => window.clearInterval(timer);
    }, [otpRequested, otpTimeLeft]);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await logout();
            router.push('/');
            router.refresh();
        } finally {
            setIsLoggingOut(false);
        }
    };

    const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPasswordForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileForm((prev) => ({ ...prev, [name]: value }));
    };

    const togglePasswordVisibility = (field: 'oldPassword' | 'newPassword' | 'confirmPassword') => {
        setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const formatOtpTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const validateNewPassword = () => {
        if (!passwordForm.newPassword.trim()) return 'Vui lòng nhập mật khẩu mới.';
        if (!PASSWORD_RULE.test(passwordForm.newPassword)) {
            return 'Mật khẩu mới phải có từ 8 đến 50 ký tự, gồm cả chữ và số.';
        }
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            return 'Mật khẩu xác nhận chưa khớp.';
        }
        return null;
    };

    const validateProfileForm = () => {
        if (!profileForm.name.trim()) return 'Vui lòng nhập họ và tên.';
        if (profileForm.name.trim().length < 2) return 'Họ và tên phải có ít nhất 2 ký tự.';
        if (profileForm.phone.trim() && !/^(0|\+84)[0-9]{9}$/.test(profileForm.phone.trim())) {
            return 'Số điện thoại chưa đúng định dạng Việt Nam.';
        }
        if (profileForm.address.trim() && profileForm.address.trim().length < 5) {
            return 'Địa chỉ cần chi tiết hơn.';
        }
        if (!selectedProvince || !selectedWard) {
            return 'Vui lòng chọn đầy đủ tỉnh/thành và phường/xã.';
        }
        return null;
    };

    const handleSaveProfile = async () => {
        const validationError = validateProfileForm();
        if (validationError) {
            toast({ title: 'Thông tin chưa hợp lệ', description: validationError, variant: 'destructive' });
            return;
        }
        setIsSavingProfile(true);
        try {
            const updatedUser = await authService.updateProfile({
                name: profileForm.name.trim(),
                phone: profileForm.phone.trim() || undefined,
                address: profileForm.address.trim() || undefined,
                provinceName: selectedProvince?.ProvinceName || undefined,
                districtName: selectedWard?.districtName || undefined,
                wardName: selectedWard?.WardName || undefined,
                toDistrictId: selectedWard?.DistrictID || undefined,
                toWardCode: selectedWard?.WardCode || undefined,
            });
            setProfileForm({
                name: updatedUser.name ?? '',
                phone: updatedUser.phone ?? '',
                address: updatedUser.address ?? '',
            });
            setUser(updatedUser);
            await refreshUser();
            setIsProfileFormOpen(false);
            toast({ title: 'Cập nhật thành công', description: 'Thông tin tài khoản của bạn đã được lưu.' });
        } catch (error) {
            toast({
                title: 'Không thể cập nhật hồ sơ',
                description: error instanceof Error ? error.message : 'Đã có lỗi xảy ra khi lưu thông tin.',
                variant: 'destructive',
            });
        } finally {
            setIsSavingProfile(false);
        }
    };

    const handleRequestOtp = async () => {
        if (!passwordForm.oldPassword.trim()) {
            toast({
                title: 'Thiếu mật khẩu hiện tại',
                description: 'Vui lòng nhập mật khẩu hiện tại để tiếp tục.',
                variant: 'destructive',
            });
            return;
        }
        const passwordValidationError = validateNewPassword();
        if (passwordValidationError) {
            toast({ title: 'Mật khẩu mới chưa hợp lệ', description: passwordValidationError, variant: 'destructive' });
            return;
        }
        setIsRequestingOtp(true);
        try {
            await authService.requestPasswordReset({
                oldPassword: passwordForm.oldPassword,
                newPassword: passwordForm.newPassword,
            });
            setOtpRequested(true);
            setOtpTimeLeft(OTP_DURATION_SECONDS);
            toast({ title: 'Đã gửi mã OTP', description: 'Vui lòng kiểm tra email để lấy mã xác thực.' });
        } catch (error) {
            toast({
                title: 'Không thể gửi OTP',
                description: error instanceof Error ? error.message : 'Yêu cầu đổi mật khẩu không thành công.',
                variant: 'destructive',
            });
        } finally {
            setIsRequestingOtp(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!passwordForm.otp.trim()) {
            toast({
                title: 'Thiếu mã OTP',
                description: 'Vui lòng nhập mã OTP đã được gửi tới email của bạn.',
                variant: 'destructive',
            });
            return;
        }
        setIsVerifyingOtp(true);
        try {
            await authService.verifyPasswordReset({ otp: passwordForm.otp.trim() });
            setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '', otp: '' });
            setOtpRequested(false);
            setOtpTimeLeft(0);
            setIsPasswordSectionOpen(false);
            toast({
                title: 'Đổi mật khẩu thành công',
                description: 'Mật khẩu của bạn đã được cập nhật. Vui lòng đăng nhập lại để tiếp tục.',
            });
            setUser(null);
            router.push('/login');
            router.refresh();
        } catch (error) {
            toast({
                title: 'Xác thực OTP thất bại',
                description: error instanceof Error ? error.message : 'Không thể xác thực mã OTP.',
                variant: 'destructive',
            });
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" />
                        Về trang chủ
                    </Link>
                    <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">Tài khoản của tôi</h1>
                    <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                        Quản lý thông tin cá nhân, địa chỉ giao hàng và trạng thái đơn hàng của bạn.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-card">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Spinner className="h-5 w-5" />
                            Đang tải thông tin tài khoản...
                        </div>
                    </div>
                ) : currentUser ? (
                    <div className="space-y-8">
                        <Card className="overflow-hidden rounded-3xl border-border">
                            <CardHeader className="border-b border-border bg-[linear-gradient(135deg,rgba(18,18,18,0.98),rgba(63,42,29,0.95))] text-white">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.28em] text-white/60">Account View</p>
                                        <CardTitle className="mt-3 font-serif text-3xl text-white">
                                            {activeSection === 'orders' ? 'Đơn hàng của bạn' : 'Hồ sơ của bạn'}
                                        </CardTitle>
                                        <CardDescription className="mt-2 max-w-2xl text-white/70">
                                            {activeSection === 'orders'
                                                ? 'Đơn mới nhất được đưa lên trên để bạn theo dõi nhanh trạng thái và thanh toán.'
                                                : 'Cập nhật hồ sơ giao hàng, thông tin liên hệ và bảo mật tài khoản ở một nơi.'}
                                        </CardDescription>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">{orders.length} đơn</div>
                                        <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">
                                            {isLoadingOrders ? 'Đang đồng bộ' : 'Đã cập nhật'}
                                        </div>
                                    </div>
                                </div>
                                <Tabs value={activeSection} onValueChange={(value) => setActiveSection(value as 'orders' | 'profile')} className="mt-6">
                                    <TabsList className="h-auto rounded-full bg-white/10 p-1">
                                        <TabsTrigger value="orders" className="rounded-full border-0 px-5 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                                            Đơn hàng
                                        </TabsTrigger>
                                        <TabsTrigger value="profile" className="rounded-full border-0 px-5 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                                            Hồ sơ
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </CardHeader>
                            <CardContent className="bg-card p-6">
                                {activeSection === 'orders' ? (
                                    isLoadingOrders ? (
                                        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5 text-sm text-muted-foreground">
                                            <Spinner className="h-4 w-4" />
                                            Đang tải đơn hàng...
                                        </div>
                                    ) : orders.length > 0 ? (
                                        <div className="grid gap-4 lg:grid-cols-2">
                                            {orders.map((order, index) => (
                                                <div
                                                    key={order.id}
                                                    className={`rounded-2xl border p-5 transition-colors hover:border-primary/40 ${index === 0 ? 'border-primary/30 bg-primary/5 lg:col-span-2' : 'border-border bg-background'}`}
                                                >
                                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                        <div>
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                                                                    {index === 0 ? 'Mới nhất' : `Đơn ${index + 1}`}
                                                                </span>
                                                                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                                                                    {mapOrderStatus(order.order_status)}
                                                                </span>
                                                            </div>
                                                            <p className="mt-3 font-semibold text-foreground">{order.order_code}</p>
                                                            <p className="mt-1 text-sm text-muted-foreground">
                                                                {order.created_at ? new Date(order.created_at).toLocaleString('vi-VN') : 'Đang cập nhật thời gian'}
                                                            </p>
                                                        </div>
                                                        <div className="text-sm sm:text-right">
                                                            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Tổng thanh toán</p>
                                                            <p className="mt-2 text-xl font-semibold text-foreground">{formatCurrency(order.total_amount)}</p>
                                                            <p className="mt-1 text-muted-foreground">{mapPaymentStatus(order.payment_status)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 rounded-2xl bg-muted/40 p-4">
                                                        <p className="text-sm font-medium text-foreground">Địa chỉ giao hàng</p>
                                                        <p className="mt-1 text-sm text-muted-foreground">{order.shipping_address}</p>
                                                        <p className="mt-3 text-sm text-muted-foreground">
                                                            Thanh toán: {order.payment_method ?? order.payment?.method ?? 'Đang cập nhật'}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="rounded-2xl border border-dashed border-border bg-background p-8 text-center">
                                            <p className="font-medium text-foreground">Bạn chưa có đơn hàng nào</p>
                                            <p className="mt-2 text-sm text-muted-foreground">Khi có đơn mới, phần này sẽ hiển thị như một feed để bạn theo dõi nhanh trạng thái.</p>
                                        </div>
                                    )
                                ) : (
                                    <div className="rounded-2xl border border-dashed border-border bg-background p-8 text-center">
                                        <p className="font-medium text-foreground">Chế độ hồ sơ đang được bật</p>
                                        <p className="mt-2 text-sm text-muted-foreground">Phần thông tin tài khoản và bảo mật hiện ở ngay bên dưới để bạn cập nhật nhanh.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {activeSection === 'profile' ? (
                            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                                <Card className="rounded-2xl border-border">
                                    <CardHeader>
                                        <CardTitle className="font-serif text-2xl">Thông tin tài khoản</CardTitle>
                                        <CardDescription>Những dữ liệu hiện đang được lưu trên hệ thống.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="flex flex-col gap-4 rounded-2xl bg-secondary/50 p-6 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Đang đăng nhập</p>
                                                <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">{currentUser.name}</h2>
                                                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm text-muted-foreground">
                                                    <BadgeCheck className="h-4 w-4 text-primary" />
                                                    Phiên đăng nhập đang hoạt động
                                                </div>
                                            </div>
                                            <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut} className="gap-2">
                                                <LogOut className="h-4 w-4" />
                                                {isLoggingOut ? 'Đang đăng xuất...' : 'Đăng xuất'}
                                            </Button>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {missingProfileFields.length > 0 ? (
                                                <div className="sm:col-span-2 rounded-xl border border-destructive/50 bg-destructive/5 p-4">
                                                    <p className="font-medium text-destructive">Thông tin còn thiếu</p>
                                                    <p className="mt-1 text-sm text-destructive">
                                                        {missingProfileFields.join(', ')} chưa được cập nhật. Vui lòng bổ sung để thanh toán và tính phí giao hàng ổn định hơn.
                                                    </p>
                                                </div>
                                            ) : null}

                                            <ProfileField icon={User} label="Họ và tên" value={currentUser.name} />
                                            <ProfileField icon={Mail} label="Email" value={currentUser.email} />
                                            <ProfileField icon={Phone} label="Số điện thoại" value={currentUser.phone} />
                                            <ProfileField icon={MapPin} label="Địa chỉ" value={currentUser.address} />
                                            <div className="sm:col-span-2">
                                                <ProfileField
                                                    icon={MapPin}
                                                    label="Khu vực giao hàng"
                                                    value={currentUser.ward_name && currentUser.province_name ? `${currentUser.ward_name}, ${currentUser.province_name}` : undefined}
                                                />
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="space-y-4">
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-foreground">Cập nhật hồ sơ</h3>
                                                    <p className="text-sm text-muted-foreground">Chỉnh sửa tên, số điện thoại, địa chỉ và khu vực nhận hàng.</p>
                                                </div>
                                                <Button variant={isProfileFormOpen ? 'secondary' : 'outline'} onClick={() => setIsProfileFormOpen((prev) => !prev)}>
                                                    {isProfileFormOpen ? 'Thu gọn' : 'Chỉnh sửa hồ sơ'}
                                                </Button>
                                            </div>

                                            {isProfileFormOpen ? (
                                                <div className="grid gap-4 rounded-2xl border border-border bg-background p-5 sm:grid-cols-2">
                                                    <div className="space-y-2 sm:col-span-2">
                                                        <Label htmlFor="name">Họ và tên</Label>
                                                        <Input id="name" name="name" value={profileForm.name} onChange={handleProfileInputChange} placeholder="Nguyễn Văn A" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Số điện thoại</Label>
                                                        <Input id="phone" name="phone" value={profileForm.phone} onChange={handleProfileInputChange} placeholder="0901234567" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="province">Tỉnh / Thành phố</Label>
                                                        <select
                                                            id="province"
                                                            value={selectedProvinceId}
                                                            onChange={(event) => {
                                                                const nextProvinceId = event.target.value ? Number(event.target.value) : '';
                                                                setSelectedProvinceId(nextProvinceId);
                                                                setSelectedWardValue('');
                                                                didHydrateWard.current = false;
                                                            }}
                                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                        >
                                                            <option value="">Chọn tỉnh / thành phố</option>
                                                            {provinces.map((province) => (
                                                                <option key={province.ProvinceID} value={province.ProvinceID}>
                                                                    {province.ProvinceName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2 sm:col-span-2">
                                                        <Label htmlFor="address">Địa chỉ chi tiết</Label>
                                                        <Input id="address" name="address" value={profileForm.address} onChange={handleProfileInputChange} placeholder="Số nhà, tên đường" />
                                                    </div>
                                                    <div className="space-y-2 sm:col-span-2">
                                                        <Label htmlFor="ward">Phường / Xã</Label>
                                                        <select
                                                            id="ward"
                                                            value={selectedWardValue}
                                                            onChange={(event) => setSelectedWardValue(event.target.value)}
                                                            disabled={!selectedProvinceId || isLoadingAddressData}
                                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                                                        >
                                                            {!selectedProvinceId ? (
                                                                <option value="">Chọn tỉnh trước</option>
                                                            ) : isLoadingAddressData ? (
                                                                <option value="">Đang tải phường / xã...</option>
                                                            ) : wards.length > 0 ? (
                                                                <>
                                                                    <option value="">Chọn phường / xã</option>
                                                                    {wards.map((ward) => (
                                                                        <option key={getWardOptionValue(ward)} value={getWardOptionValue(ward)}>
                                                                            {ward.WardName}{ward.districtName ? ` - ${ward.districtName}` : ''}
                                                                        </option>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <option value="">Không có phường / xã để chọn</option>
                                                            )}
                                                        </select>
                                                    </div>
                                                    <div className="sm:col-span-2 flex justify-end">
                                                        <Button onClick={handleSaveProfile} disabled={isSavingProfile} className="gap-2">
                                                            {isSavingProfile ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                                                            {isSavingProfile ? 'Đang lưu...' : 'Lưu thay đổi'}
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl border-border">
                                    <CardHeader>
                                        <CardTitle className="font-serif text-2xl">Bảo mật tài khoản</CardTitle>
                                        <CardDescription>Đổi mật khẩu qua OTP để tài khoản an toàn hơn.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="rounded-2xl bg-secondary/40 p-5">
                                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Mức độ hoàn thiện</p>
                                            <p className="mt-3 text-3xl font-semibold text-foreground">
                                                {missingProfileFields.length === 0 ? '100%' : `${Math.max(40, 100 - missingProfileFields.length * 20)}%`}
                                            </p>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                {missingProfileFields.length === 0
                                                    ? 'Hồ sơ của bạn đã sẵn sàng cho thanh toán và giao hàng.'
                                                    : 'Hoàn thiện hồ sơ để phí giao hàng và checkout chạy ổn định hơn.'}
                                            </p>
                                        </div>

                                        <Separator />

                                        <div className="space-y-4">
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-foreground">Đổi mật khẩu</h3>
                                                    <p className="text-sm text-muted-foreground">Nhập mật khẩu hiện tại, mật khẩu mới rồi xác thực OTP qua email.</p>
                                                </div>
                                                <Button variant={isPasswordSectionOpen ? 'secondary' : 'outline'} onClick={() => setIsPasswordSectionOpen((prev) => !prev)} className="gap-2">
                                                    <KeyRound className="h-4 w-4" />
                                                    {isPasswordSectionOpen ? 'Thu gọn' : 'Mở đổi mật khẩu'}
                                                </Button>
                                            </div>

                                            {isPasswordSectionOpen ? (
                                                <div className="space-y-4 rounded-2xl border border-border bg-background p-5">
                                                    {[
                                                        { id: 'oldPassword', label: 'Mật khẩu hiện tại', value: passwordForm.oldPassword, visible: showPasswords.oldPassword },
                                                        { id: 'newPassword', label: 'Mật khẩu mới', value: passwordForm.newPassword, visible: showPasswords.newPassword },
                                                        { id: 'confirmPassword', label: 'Xác nhận mật khẩu mới', value: passwordForm.confirmPassword, visible: showPasswords.confirmPassword },
                                                    ].map((field) => (
                                                        <div key={field.id} className="space-y-2">
                                                            <Label htmlFor={field.id}>{field.label}</Label>
                                                            <div className="relative">
                                                                <Input id={field.id} name={field.id} type={field.visible ? 'text' : 'password'} value={field.value} onChange={handlePasswordInputChange} />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => togglePasswordVisibility(field.id as 'oldPassword' | 'newPassword' | 'confirmPassword')}
                                                                    className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
                                                                >
                                                                    {field.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="flex flex-wrap gap-3">
                                                        <Button onClick={handleRequestOtp} disabled={isRequestingOtp} className="gap-2">
                                                            {isRequestingOtp ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                                                            {otpRequested ? 'Gửi lại OTP' : 'Gửi OTP'}
                                                        </Button>
                                                        {otpRequested ? (
                                                            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-2 text-sm text-muted-foreground">
                                                                {otpTimeLeft > 0 ? `OTP hết hạn sau ${formatOtpTime(otpTimeLeft)}` : 'Bạn có thể yêu cầu gửi lại OTP'}
                                                            </span>
                                                        ) : null}
                                                    </div>

                                                    {otpRequested ? (
                                                        <div className="space-y-4 rounded-xl border border-dashed border-border p-4">
                                                            <div className="space-y-2">
                                                                <Label htmlFor="otp">Mã OTP</Label>
                                                                <Input id="otp" name="otp" value={passwordForm.otp} onChange={handlePasswordInputChange} placeholder="Nhập mã OTP từ email" />
                                                            </div>
                                                            <div className="flex flex-wrap gap-3">
                                                                <Button onClick={handleVerifyOtp} disabled={isVerifyingOtp} className="gap-2">
                                                                    {isVerifyingOtp ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                                                                    {isVerifyingOtp ? 'Đang xác thực...' : 'Xác nhận đổi mật khẩu'}
                                                                </Button>
                                                                {canResendOtp ? (
                                                                    <Button variant="outline" onClick={handleRequestOtp} disabled={isRequestingOtp}>
                                                                        Gửi lại OTP
                                                                    </Button>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            ) : null}
                                        </div>

                                        <Separator />

                                        <div className="space-y-3">
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link href="/menu">Tiếp tục mua hàng</Link>
                                            </Button>
                                            <Button variant="secondary" className="w-full" asChild>
                                                <Link href="/cart">Xem giỏ hàng</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </main>
            <Footer />
        </div>
    );
}
