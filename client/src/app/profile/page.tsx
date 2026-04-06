'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    BadgeCheck,
    Eye,
    EyeOff,
    Loader2,
    KeyRound,
    LogOut,
    Mail,
    MapPin,
    Phone,
    User,
} from 'lucide-react';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/hooks/use-toast';
import authService from '@/services/auth.service';

const OTP_DURATION_SECONDS = 5 * 60;
const PASSWORD_RULE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,50}$/;

function ProfileField({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof User;
    label: string;
    value?: string;
}) {
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
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [passwordForm, setPasswordForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        otp: '',
    });
    const [profileForm, setProfileForm] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const [isRequestingOtp, setIsRequestingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [otpRequested, setOtpRequested] = useState(false);
    const [otpTimeLeft, setOtpTimeLeft] = useState(0);
    const [showPasswords, setShowPasswords] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });
    const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
    const missingProfileFields = [
        !currentUser?.name?.trim() ? 'Họ và tên' : null,
        !currentUser?.phone?.trim() ? 'Số điện thoại' : null,
        !currentUser?.address?.trim() ? 'Địa chỉ' : null,
    ].filter(Boolean) as string[];

    useEffect(() => {
        let isMounted = true;

        if (!currentUser) {
            refreshUser().then((user) => {
                if (!user && isMounted) {
                    router.push('/login');
                }
            });
        }

        return () => {
            isMounted = false;
        };
    }, [currentUser, refreshUser, router]);

    useEffect(() => {
        if (!currentUser) {
            return;
        }

        setProfileForm({
            name: currentUser.name ?? '',
            phone: currentUser.phone ?? '',
            address: currentUser.address ?? '',
        });
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

    const togglePasswordVisibility = (field: 'oldPassword' | 'newPassword' | 'confirmPassword') => {
        setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleProfileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileForm((prev) => ({ ...prev, [name]: value }));
    };

    const formatOtpTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const validateNewPassword = () => {
        if (!passwordForm.newPassword.trim()) {
            return 'Vui lòng nhập mật khẩu mới.';
        }

        if (!PASSWORD_RULE.test(passwordForm.newPassword)) {
            return 'Mật khẩu mới phải có từ 8-50 ký tự, gồm cả chữ và số.';
        }

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            return 'Mật khẩu xác nhận chưa khớp.';
        }

        return null;
    };

    const validateProfileForm = () => {
        if (!profileForm.name.trim()) {
            return 'Vui lòng nhập họ và tên.';
        }

        if (profileForm.name.trim().length < 2) {
            return 'Họ và tên phải có ít nhất 2 ký tự.';
        }

        if (profileForm.phone.trim() && !/^(0|\+84)[0-9]{9}$/.test(profileForm.phone.trim())) {
            return 'Số điện thoại chưa đúng định dạng Việt Nam.';
        }

        if (profileForm.address.trim() && profileForm.address.trim().length < 5) {
            return 'Địa chỉ cần chi tiết hơn.';
        }

        return null;
    };

    const handleSaveProfile = async () => {
        const validationError = validateProfileForm();

        if (validationError) {
            toast({
                title: 'Thông tin chưa hợp lệ',
                description: validationError,
                variant: 'destructive',
            });
            return;
        }

        setIsSavingProfile(true);

        try {
            const updatedUser = await authService.updateProfile({
                name: profileForm.name.trim(),
                phone: profileForm.phone.trim() || undefined,
                address: profileForm.address.trim() || undefined,
            });

            setProfileForm({
                name: updatedUser.name ?? '',
                phone: updatedUser.phone ?? '',
                address: updatedUser.address ?? '',
            });
            refreshUser();
            toast({
                title: 'Cập nhật thành công',
                description: 'Thông tin cá nhân của bạn đã được lưu.',
            });
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
            toast({
                title: 'Mật khẩu mới chưa hợp lệ',
                description: passwordValidationError,
                variant: 'destructive',
            });
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
            toast({
                title: 'Đã gửi mã OTP',
                description: 'Vui lòng kiểm tra email để lấy mã xác thực.',
            });
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
            await authService.verifyPasswordReset({
                otp: passwordForm.otp.trim(),
            });

            setPasswordForm({
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                otp: '',
            });
            setOtpRequested(false);
            setOtpTimeLeft(0);
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

    const canResendOtp = otpRequested && otpTimeLeft === 0 && !isRequestingOtp && !isVerifyingOtp;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Về trang chủ
                    </Link>

                    <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">Tài khoản của tôi</h1>
                    <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                        Quản lý thông tin cá nhân, mật khẩu và theo dõi trạng thái tài khoản của bạn.
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
                                                {missingProfileFields.join(', ')} chưa được cập nhật. Vui lòng bổ sung để có thể thanh toán.
                                            </p>
                                        </div>
                                    ) : null}

                                    <ProfileField icon={User} label="Họ và tên" value={currentUser.name} />
                                    <ProfileField icon={Mail} label="Email" value={currentUser.email} />
                                    <ProfileField icon={Phone} label="Số điện thoại" value={currentUser.phone} />
                                    <ProfileField icon={MapPin} label="Địa chỉ" value={currentUser.address} />
                                </div>

                                <div className="rounded-2xl border border-border bg-background p-5">
                                    <div className="mb-4">
                                        <h3 className="font-medium text-foreground">Chỉnh sửa thông tin cá nhân</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Cập nhật họ tên, số điện thoại và địa chỉ để đặt hàng thuận tiện hơn.
                                        </p>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="name">Họ và tên</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={profileForm.name}
                                                onChange={handleProfileInputChange}
                                                placeholder="Nhập họ và tên"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Số điện thoại</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={profileForm.phone}
                                                onChange={handleProfileInputChange}
                                                placeholder="Nhập số điện thoại"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="address">Địa chỉ</Label>
                                            <Input
                                                id="address"
                                                name="address"
                                                value={profileForm.address}
                                                onChange={handleProfileInputChange}
                                                placeholder="Nhập địa chỉ"
                                            />
                                        </div>
                                    </div>

                                    <Button type="button" onClick={handleSaveProfile} disabled={isSavingProfile} className="mt-5 gap-2">
                                        {isSavingProfile ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Đang lưu...
                                            </>
                                        ) : (
                                            'Lưu thay đổi'
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl border-border">
                            <CardHeader>
                                <CardTitle className="font-serif text-2xl">Bảo mật tài khoản</CardTitle>
                                <CardDescription>Đổi mật khẩu và kiểm tra nhanh trạng thái hồ sơ của bạn.</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-5">
                                <div className="rounded-xl border border-border bg-background p-4">
                                    <p className="font-medium text-foreground">Mức độ hoàn thiện hồ sơ</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Hãy cập nhật đầy đủ họ tên, số điện thoại và địa chỉ để quá trình đặt hàng được nhanh chóng hơn.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-background p-4">
                                    <div className="mb-4 flex items-center gap-3">
                                        <KeyRound className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium text-foreground">Đổi mật khẩu</p>
                                            <p className="text-sm text-muted-foreground">
                                                Nhập mật khẩu hiện tại, đặt mật khẩu mới và xác thực bằng mã OTP.
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordSectionOpen((prev) => !prev)}
                                        className="mb-4 w-full rounded-lg border border-border px-4 py-3 text-left text-sm font-medium text-primary"
                                    >
                                        {isPasswordSectionOpen ? 'Thu gọn phần đổi mật khẩu' : 'Hiển thị phần đổi mật khẩu'}
                                    </button>

                                    {isPasswordSectionOpen ? <div className="space-y-3">
                                        {[
                                            { id: 'oldPassword', label: 'Mật khẩu hiện tại' },
                                            { id: 'newPassword', label: 'Mật khẩu mới' },
                                            { id: 'confirmPassword', label: 'Xác nhận mật khẩu mới' },
                                        ].map((field) => (
                                            <div key={field.id} className="space-y-2">
                                                <Label htmlFor={field.id}>{field.label}</Label>
                                                <div className="relative">
                                                    <Input
                                                        id={field.id}
                                                        name={field.id}
                                                        type={
                                                            showPasswords[field.id as keyof typeof showPasswords] ? 'text' : 'password'
                                                        }
                                                        value={passwordForm[field.id as keyof typeof passwordForm] as string}
                                                        onChange={handlePasswordInputChange}
                                                        className="pr-10"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            togglePasswordVisibility(field.id as 'oldPassword' | 'newPassword' | 'confirmPassword')
                                                        }
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                    >
                                                        {showPasswords[field.id as keyof typeof showPasswords] ? (
                                                            <EyeOff className="h-4 w-4" />
                                                        ) : (
                                                            <Eye className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                        <p className="text-xs text-muted-foreground">
                                            Mật khẩu nên dài từ 8-50 ký tự và có ít nhất một chữ cái cùng một chữ số.
                                        </p>

                                        <Button type="button" onClick={handleRequestOtp} disabled={isRequestingOtp} className="w-full">
                                            {isRequestingOtp ? 'Đang gửi OTP...' : 'Gửi mã OTP'}
                                        </Button>

                                        {otpRequested ? (
                                            <div className="space-y-3 rounded-xl border border-border/70 bg-secondary/40 p-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-muted-foreground">OTP hết hạn sau {formatOtpTime(otpTimeLeft)}</span>
                                                    <Button
                                                        type="button"
                                                        variant="link"
                                                        className="h-auto p-0"
                                                        onClick={handleRequestOtp}
                                                        disabled={!canResendOtp}
                                                    >
                                                        Gửi lại OTP
                                                    </Button>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="otp">Mã OTP</Label>
                                                    <Input
                                                        id="otp"
                                                        name="otp"
                                                        placeholder="Nhập mã OTP gồm 6 số"
                                                        value={passwordForm.otp}
                                                        onChange={handlePasswordInputChange}
                                                    />
                                                </div>

                                                <Button type="button" onClick={handleVerifyOtp} disabled={isVerifyingOtp} className="w-full">
                                                    {isVerifyingOtp ? 'Đang xác thực OTP...' : 'Xác nhận đổi mật khẩu'}
                                                </Button>
                                            </div>
                                        ) : null}
                                    </div> : null}
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <Button asChild className="w-full">
                                        <Link href="/menu">Tiếp tục chọn món</Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/cart">Xem giỏ hàng</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ) : null}
            </main>

            <Footer />
        </div>
    );
}
