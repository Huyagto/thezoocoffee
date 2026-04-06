"use client"

import { useEffect, useState } from "react"

import { SectionCard } from "@/components/section-card"
import catalogService from "@/services/catalog.service"
import type { InventoryItem } from "@/types/api"

type InventoryStatus = "available" | "out_of_stock"

function displayNumber(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === "") {
    return "0"
  }

  return String(value)
}

function getStatusLabel(status: InventoryStatus | undefined) {
  return status === "out_of_stock" ? "Het hang" : "Con hang"
}

export default function InventoryPage() {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    quantity: "",
    minQuantity: "",
    costPrice: "",
    supplierName: "",
    status: "available" as InventoryStatus,
  })

  const [showEditModal, setShowEditModal] = useState(false)
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null)
  const [editFormData, setEditFormData] = useState({
    name: "",
    unit: "",
    quantity: "",
    minQuantity: "",
    costPrice: "",
    supplierName: "",
    status: "available" as InventoryStatus,
  })

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const data = await catalogService.getInventory()
        setInventoryItems(data)
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Khong the tai kho nguyen lieu."
        )
      } finally {
        setIsLoading(false)
      }
    }

    void loadInventory()
  }, [])

  const closeEditModal = () => {
    setShowEditModal(false)
    setEditingItem(null)
    setEditFormData({
      name: "",
      unit: "",
      quantity: "",
      minQuantity: "",
      costPrice: "",
      supplierName: "",
      status: "available",
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")

    if (!formData.name.trim() || !formData.unit.trim()) {
      setErrorMessage("Vui long nhap ten nguyen lieu va don vi tinh.")
      return
    }

    setIsSubmitting(true)

    try {
      const createdItem = await catalogService.createInventory({
        name: formData.name.trim(),
        unit: formData.unit.trim(),
        quantity: formData.quantity ? Number(formData.quantity) : undefined,
        minQuantity: formData.minQuantity
          ? Number(formData.minQuantity)
          : undefined,
        costPrice: formData.costPrice ? Number(formData.costPrice) : undefined,
        supplierName: formData.supplierName.trim() || undefined,
        status: formData.status,
      })

      setInventoryItems((prev) => [createdItem, ...prev])
      setFormData({
        name: "",
        unit: "",
        quantity: "",
        minQuantity: "",
        costPrice: "",
        supplierName: "",
        status: "available",
      })
      setSuccessMessage("Tao nguyen lieu thanh cong.")
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Khong the tao nguyen lieu."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const openEditModal = (item: InventoryItem) => {
    setEditingItem(item)
    setEditFormData({
      name: item.name,
      unit: item.unit,
      quantity: displayNumber(item.quantity),
      minQuantity: displayNumber(item.min_quantity ?? item.minQuantity),
      costPrice: displayNumber(item.cost_price ?? item.costPrice),
      supplierName: item.supplier_name ?? item.supplierName ?? "",
      status: item.status ?? "available",
    })
    setShowEditModal(true)
  }

  const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!editingItem) {
      return
    }

    setErrorMessage("")
    setSuccessMessage("")
    setIsSubmitting(true)

    try {
      const updated = await catalogService.updateInventory(editingItem.id, {
        name: editFormData.name.trim(),
        unit: editFormData.unit.trim(),
        quantity: Number(editFormData.quantity || 0),
        minQuantity: Number(editFormData.minQuantity || 0),
        costPrice: Number(editFormData.costPrice || 0),
        supplierName: editFormData.supplierName.trim() || undefined,
        status: editFormData.status,
      })

      setInventoryItems((prev) =>
        prev.map((item) => (item.id === editingItem.id ? updated : item))
      )
      setSuccessMessage("Cap nhat nguyen lieu thanh cong.")
      closeEditModal()
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Khong the cap nhat nguyen lieu."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Ban co chac chan muon xoa nguyen lieu nay?")) {
      return
    }

    setErrorMessage("")
    setSuccessMessage("")
    setIsSubmitting(true)

    try {
      await catalogService.deleteInventory(id)
      setInventoryItems((prev) => prev.filter((item) => item.id !== id))
      setSuccessMessage("Xoa nguyen lieu thanh cong.")
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Khong the xoa nguyen lieu dang duoc su dung."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <SectionCard
        title="Tao Nguyen Lieu"
        description="Quan ly kho nguyen lieu rieng de cong thuc co the tham chieu du lieu on dinh."
      >
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
              Ten nguyen lieu
            </span>
            <input
              type="text"
              value={formData.name}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Hat espresso"
              className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                Don vi tinh
              </span>
              <input
                type="text"
                value={formData.unit}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, unit: event.target.value }))
                }
                placeholder="kg"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                Trang thai
              </span>
              <select
                value={formData.status}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: event.target.value as InventoryStatus,
                  }))
                }
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="available">Con hang</option>
                <option value="out_of_stock">Het hang</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                Ton kho
              </span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.quantity}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, quantity: event.target.value }))
                }
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                Ton toi thieu
              </span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.minQuantity}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    minQuantity: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                Gia nhap
              </span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.costPrice}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    costPrice: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
              Nha cung cap
            </span>
            <input
              type="text"
              value={formData.supplierName}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  supplierName: event.target.value,
                }))
              }
              placeholder="Nha cung cap ABC"
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
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Dang tao nguyen lieu..." : "Them Nguyen Lieu"}
          </button>
        </form>
      </SectionCard>

      <SectionCard
        title="Danh Sach Nguyen Lieu"
        description="Kho nguyen lieu duoc quan ly rieng de cong thuc lay du lieu tu mot nguon ro rang."
      >
        {isLoading ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-sm text-[var(--muted)]">
            Dang tai kho nguyen lieu...
          </div>
        ) : (
          <div className="grid gap-3">
            {inventoryItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-[var(--border)] bg-white p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--foreground)]">{item.name}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {displayNumber(item.quantity)} {item.unit} trong kho
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                      {getStatusLabel(item.status)}
                    </span>
                    <button
                      onClick={() => openEditModal(item)}
                      className="grid h-9 w-9 place-items-center rounded-xl text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
                      title="Sua"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="grid h-9 place-items-center rounded-xl px-3 text-sm font-medium text-[var(--danger)] transition hover:bg-red-50"
                      title="Xoa"
                    >
                      Xoa
                    </button>
                  </div>
                </div>
                <div className="mt-3 grid gap-1 text-sm text-[var(--muted)]">
                  <span>Ton toi thieu: {displayNumber(item.min_quantity ?? item.minQuantity)}</span>
                  <span>Gia nhap: {displayNumber(item.cost_price ?? item.costPrice)}</span>
                  <span>Nha cung cap: {item.supplier_name ?? item.supplierName ?? "Chua co"}</span>
                </div>
              </div>
            ))}

            {inventoryItems.length === 0 ? (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                Chua co nguyen lieu nao.
              </div>
            ) : null}
          </div>
        )}
      </SectionCard>

      {showEditModal && editingItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                Cap Nhat Nguyen Lieu
              </h3>
              <button
                type="button"
                onClick={closeEditModal}
                className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Dong
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="mt-4 space-y-4">
              <input
                className="w-full rounded-2xl border border-[var(--border)] p-3 text-sm"
                value={editFormData.name}
                onChange={(event) =>
                  setEditFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Ten nguyen lieu"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  className="rounded-2xl border border-[var(--border)] p-3 text-sm"
                  value={editFormData.unit}
                  onChange={(event) =>
                    setEditFormData((prev) => ({ ...prev, unit: event.target.value }))
                  }
                  placeholder="Don vi"
                />
                <select
                  className="rounded-2xl border border-[var(--border)] p-3 text-sm"
                  value={editFormData.status}
                  onChange={(event) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      status: event.target.value as InventoryStatus,
                    }))
                  }
                >
                  <option value="available">Con hang</option>
                  <option value="out_of_stock">Het hang</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <label className="text-xs text-[var(--muted)]">
                  Ton
                  <input
                    type="number"
                    className="mt-1 w-full rounded-xl border border-[var(--border)] p-2"
                    value={editFormData.quantity}
                    onChange={(event) =>
                      setEditFormData((prev) => ({
                        ...prev,
                        quantity: event.target.value,
                      }))
                    }
                  />
                </label>
                <label className="text-xs text-[var(--muted)]">
                  Ton toi thieu
                  <input
                    type="number"
                    className="mt-1 w-full rounded-xl border border-[var(--border)] p-2"
                    value={editFormData.minQuantity}
                    onChange={(event) =>
                      setEditFormData((prev) => ({
                        ...prev,
                        minQuantity: event.target.value,
                      }))
                    }
                  />
                </label>
                <label className="text-xs text-[var(--muted)]">
                  Gia nhap
                  <input
                    type="number"
                    className="mt-1 w-full rounded-xl border border-[var(--border)] p-2"
                    value={editFormData.costPrice}
                    onChange={(event) =>
                      setEditFormData((prev) => ({
                        ...prev,
                        costPrice: event.target.value,
                      }))
                    }
                  />
                </label>
              </div>

              <input
                className="w-full rounded-2xl border border-[var(--border)] p-3 text-sm"
                value={editFormData.supplierName}
                onChange={(event) =>
                  setEditFormData((prev) => ({
                    ...prev,
                    supplierName: event.target.value,
                  }))
                }
                placeholder="Nha cung cap"
              />

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-2xl bg-black py-3 text-sm font-semibold text-white"
                >
                  {isSubmitting ? "Dang luu..." : "Cap Nhat"}
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="flex-1 rounded-2xl border border-[var(--border)] py-3 text-sm font-semibold"
                >
                  Huy
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
