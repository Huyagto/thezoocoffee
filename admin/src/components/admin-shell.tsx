"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Boxes,
  ClipboardList,
  FlaskConical,
  FolderTree,
  LayoutDashboard,
  LogOut,
  Package,
  TicketPercent,
  Users,
} from "lucide-react"

import { useAuth } from "@/context/auth-context"
import authService from "@/services/auth.service"
import shippingService from "@/services/shipping.service"

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

type ProvinceOption = {
  ProvinceID: number
  ProvinceName: string
}

type WardOption = {
  WardCode: string
  WardName: string
  DistrictID: number
  districtName?: string
}

function getWardOptionValue(ward: Pick<WardOption, "DistrictID" | "WardCode">) {
  return `${ward.DistrictID}:${ward.WardCode}`
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, refreshUser } = useAuth()
  const [pickupAddress, setPickupAddress] = useState("")
  const [provinces, setProvinces] = useState<ProvinceOption[]>([])
  const [wards, setWards] = useState<WardOption[]>([])
  const [selectedProvinceId, setSelectedProvinceId] = useState<number | "">("")
  const [selectedWardValue, setSelectedWardValue] = useState("")
  const [isLoadingAddressData, setIsLoadingAddressData] = useState(false)
  const [isSavingPickupAddress, setIsSavingPickupAddress] = useState(false)
  const [pickupMessage, setPickupMessage] = useState("")
  const [pickupError, setPickupError] = useState("")
  const didHydrateProvince = useRef(false)
  const didHydrateWard = useRef(false)

  const selectedProvince = provinces.find(
    (province) => province.ProvinceID === Number(selectedProvinceId)
  )
  const selectedWard = wards.find(
    (ward) => getWardOptionValue(ward) === selectedWardValue
  )

  useEffect(() => {
    setPickupAddress(user?.address ?? "")
    setSelectedWardValue("")
    didHydrateProvince.current = false
    didHydrateWard.current = false
  }, [user])

  useEffect(() => {
    let isMounted = true
    setIsLoadingAddressData(true)

    shippingService
      .getProvinces()
      .then((data) => {
        if (!isMounted) return
        setProvinces(data)

        if (user?.province_name && !didHydrateProvince.current) {
          const matchedProvince = data.find(
            (province) => province.ProvinceName === user.province_name
          )

          if (matchedProvince) {
            setSelectedProvinceId(matchedProvince.ProvinceID)
            didHydrateProvince.current = true
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setProvinces([])
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingAddressData(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [user?.province_name])

  useEffect(() => {
    if (!selectedProvinceId) {
      setWards([])
      setSelectedWardValue("")
      return
    }

    let isMounted = true
    setIsLoadingAddressData(true)

    shippingService
      .getDistricts(Number(selectedProvinceId))
      .then(async (districts) => {
        const wardResults = await Promise.allSettled(
          districts.map(async (district) => {
            const districtWards = await shippingService.getWards(
              district.DistrictID
            )

            return districtWards.map((ward) => ({
              ...ward,
              districtName: district.DistrictName,
            }))
          })
        )

        if (!isMounted) return

        const mergedWards = wardResults
          .reduce<WardOption[]>((accumulator, result) => {
            if (result.status === "fulfilled") {
              accumulator.push(...result.value)
            }

            return accumulator
          }, [])
          .sort((first, second) =>
            first.WardName.localeCompare(second.WardName, "vi")
          )

        setWards(mergedWards)

        if (user?.to_ward_code && !didHydrateWard.current) {
          const matchedWard = mergedWards.find(
            (ward) =>
              ward.WardCode === user.to_ward_code &&
              ward.DistrictID === user.to_district_id
          )

          if (matchedWard) {
            setSelectedWardValue(getWardOptionValue(matchedWard))
            didHydrateWard.current = true
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setWards([])
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingAddressData(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [selectedProvinceId, user?.to_district_id, user?.to_ward_code])

  const handleLogout = async () => {
    await logout()
    router.replace("/login")
  }

  const handleSavePickupAddress = async () => {
    if (!user?.name?.trim()) {
      setPickupError("Tài khoản admin cần có tên trước khi lưu địa chỉ.")
      setPickupMessage("")
      return
    }

    if (!pickupAddress.trim()) {
      setPickupError("Vui lòng nhập địa chỉ chi tiết.")
      setPickupMessage("")
      return
    }

    if (!selectedProvince || !selectedWard?.districtName) {
      setPickupError("Vui lòng chọn đầy đủ tỉnh/thành và phường/xã.")
      setPickupMessage("")
      return
    }

    setIsSavingPickupAddress(true)
    setPickupError("")
    setPickupMessage("")

    try {
      await authService.updateProfile({
        name: user.name,
        phone: user.phone ?? "",
        address: pickupAddress.trim(),
        provinceName: selectedProvince.ProvinceName,
        districtName: selectedWard.districtName,
        wardName: selectedWard.WardName,
        toDistrictId: selectedWard.DistrictID,
        toWardCode: selectedWard.WardCode,
      })

      await refreshUser()
      setPickupMessage("Đã lưu địa chỉ nhận hàng cho GHN.")
    } catch (error) {
      setPickupError(
        error instanceof Error ? error.message : "Không thể lưu địa chỉ nhận hàng."
      )
    } finally {
      setIsSavingPickupAddress(false)
    }
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
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_16px_30px_rgba(109,63,31,0.22)]"
                      : "text-[var(--foreground)] hover:bg-[var(--panel-strong)]"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition ${
                      isActive
                        ? "text-[var(--primary-foreground)]"
                        : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  />
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

          <div className="mt-4 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Địa chỉ nhận hàng
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Địa chỉ admin lưu ở đây sẽ được dùng làm điểm lấy hàng GHN thay
              cho cấu hình tay trong `.env`.
            </p>

            <div className="mt-4 space-y-3">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                  Địa chỉ chi tiết
                </span>
                <input
                  type="text"
                  value={pickupAddress}
                  onChange={(event) => setPickupAddress(event.target.value)}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Số nhà, tên đường..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                  Tỉnh / Thành
                </span>
                <select
                  value={selectedProvinceId}
                  onChange={(event) =>
                    setSelectedProvinceId(
                      event.target.value ? Number(event.target.value) : ""
                    )
                  }
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                >
                  <option value="">Chọn tỉnh/thành</option>
                  {provinces.map((province) => (
                    <option key={province.ProvinceID} value={province.ProvinceID}>
                      {province.ProvinceName}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                  Phường / Xã
                </span>
                <select
                  value={selectedWardValue}
                  onChange={(event) => setSelectedWardValue(event.target.value)}
                  disabled={!selectedProvinceId || isLoadingAddressData}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="">
                    {isLoadingAddressData
                      ? "Đang tải phường/xã..."
                      : "Chọn phường/xã"}
                  </option>
                  {wards.map((ward) => (
                    <option key={getWardOptionValue(ward)} value={getWardOptionValue(ward)}>
                      {ward.WardName} - {ward.districtName}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {pickupError ? (
              <div className="mt-4 rounded-2xl border border-[rgba(157,49,49,0.18)] bg-[rgba(157,49,49,0.08)] px-4 py-3 text-sm text-[var(--danger)]">
                {pickupError}
              </div>
            ) : null}

            {pickupMessage ? (
              <div className="mt-4 rounded-2xl border border-[rgba(46,125,91,0.18)] bg-[rgba(46,125,91,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
                {pickupMessage}
              </div>
            ) : null}

            <button
              type="button"
              onClick={handleSavePickupAddress}
              disabled={isSavingPickupAddress || isLoadingAddressData}
              className="mt-4 w-full rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSavingPickupAddress
                ? "Đang lưu địa chỉ..."
                : "Lưu địa chỉ nhận hàng"}
            </button>
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
