"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Boxes,
  FolderTree,
  ClipboardList,
  FlaskConical,
  Package,
  LayoutDashboard,
  LogOut,
  Users,
  TicketPercent,
} from "lucide-react"

import { useAuth } from "@/context/auth-context"

const navItems = [
  { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/categories", label: "Danh mục", icon: FolderTree },
  { href: "/products", label: "Sản phẩm", icon: Boxes },
  { href: "/recipes", label: "Công thức", icon: FlaskConical },
  { href: "/inventory", label: "Kho nguyên liệu", icon: Package },
  { href: "/orders", label: "Đơn hàng", icon: ClipboardList },
  { href: "/coupons", label: "Mã giảm giá", icon: TicketPercent },
  { href: "/users", label: "Người dùng", icon: Users },
]

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    router.replace("/login")
  }

  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-[32px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_24px_60px_rgba(68,45,24,0.08)]">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,#6d3f1f_0%,#a86b3b_100%)] p-5 text-[var(--primary-foreground)]">
            <p className="text-xs uppercase tracking-[0.32em] text-white/70">
              TheZooCoffee
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Trang quản trị</h1>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Khu vực riêng để quản lý vận hành, sản phẩm, công thức, đơn hàng
              và mã giảm giá.
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--foreground)] text-white shadow-[0_16px_30px_rgba(31,19,7,0.18)]"
                      : "text-[var(--foreground)] hover:bg-[var(--panel-strong)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Đang đăng nhập
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              {user?.name}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">{user?.email}</p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </aside>

        <div className="space-y-4">
          <header className="rounded-[32px] border border-[var(--border)] bg-[rgba(255,253,248,0.85)] px-6 py-5 shadow-[0_24px_60px_rgba(68,45,24,0.06)] backdrop-blur">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Trung tâm điều hành
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                  Toàn cảnh vận hành cửa hàng
                </h2>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--muted)]">
                URL quản trị:{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  localhost:3001
                </span>
              </div>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
