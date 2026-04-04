"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Shield,
  User,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

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
        <p className="mt-1 font-medium text-foreground">
          {value?.trim() ? value : "Not provided yet"}
        </p>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { user: currentUser, isLoading, logout, refreshUser } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!currentUser) {
      refreshUser().then((user) => {
        if (!user && isMounted) {
          router.push("/login");
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [currentUser, refreshUser, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await logout();
      router.push("/");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

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
            Back to Home
          </Link>

          <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            My Profile
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            View the account information currently available from your session.
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Spinner className="h-5 w-5" />
              Loading your profile...
            </div>
          </div>
        ) : currentUser ? (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="rounded-2xl border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Account Details
                </CardTitle>
                <CardDescription>
                  Basic information returned by the backend auth session.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-col gap-4 rounded-2xl bg-secondary/50 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Signed in as
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
                      {currentUser.name}
                    </h2>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm text-muted-foreground">
                      <BadgeCheck className="h-4 w-4 text-primary" />
                      Active session
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    {isLoggingOut ? "Logging Out..." : "Logout"}
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <ProfileField
                    icon={User}
                    label="Full Name"
                    value={currentUser.name}
                  />
                  <ProfileField
                    icon={Mail}
                    label="Email Address"
                    value={currentUser.email}
                  />
                  <ProfileField
                    icon={Phone}
                    label="Phone Number"
                    value={currentUser.phone}
                  />
                  <ProfileField
                    icon={MapPin}
                    label="Address"
                    value={currentUser.address}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Account Status
                </CardTitle>
                <CardDescription>
                  A quick summary of the information your app currently tracks.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Role</p>
                      <p className="text-sm text-muted-foreground">
                        {currentUser.role || "customer"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-medium text-foreground">
                    Profile completion
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Name and email are already available. Phone and address can
                    be added once you expose an update profile API on the
                    backend.
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/menu">Continue Shopping</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/cart">View Cart</Link>
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
