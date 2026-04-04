"use client"

import { useState, type ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Building2,
  Check,
  CreditCard,
  type LucideIcon,
  Smartphone,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/context/cart-context"
import orderService from "@/services/order.service"
import type { PaymentMethod } from "@/types/api"

interface PaymentOption {
  id: PaymentMethod
  name: string
  description: string
  icon: LucideIcon
}

interface LocalOrderItem {
  id: string | number
  name: string
  price: number
  quantity: number
  image: string
}

const paymentMethods: PaymentOption[] = [
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    icon: Banknote,
  },
  {
    id: "vnpay",
    name: "VNPay",
    description: "Pay with VNPay e-wallet",
    icon: Building2,
  },
  {
    id: "momo",
    name: "MoMo",
    description: "Pay with MoMo e-wallet",
    icon: Smartphone,
  },
  {
    id: "zalopay",
    name: "ZaloPay",
    description: "Pay with ZaloPay e-wallet",
    icon: CreditCard,
  },
]

const SHIPPING_FEE = 30000

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount)
}

function mapCartItems(items: ReturnType<typeof useCart>["items"]): LocalOrderItem[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }))
}

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { items: cartItems, clearCart } = useCart()
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("cod")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showProcessingModal, setShowProcessingModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  })
  const orderItems = mapCartItems(cartItems)

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const total = subtotal + SHIPPING_FEE

  const fallbackOrderId = `LOCAL-${Date.now()}`

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Validation error",
        description: "Please enter your full name.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Validation error",
        description: "Please enter your phone number.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.address.trim()) {
      toast({
        title: "Validation error",
        description: "Please enter your delivery address.",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handlePlaceOrder = async () => {
    if (!validateForm()) return
    if (orderItems.length === 0) {
      toast({
        title: "Your cart is empty",
        description: "Please add at least one item before placing an order.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

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
      })

      if (selectedPayment === "cod") {
        clearCart()
        toast({
          title: "Order placed",
          description: "Your order has been placed successfully.",
        })
        router.push(`/checkout/success?orderId=${order.id}`)
        return
      }

      setShowProcessingModal(true)
      clearCart()

      if (order.paymentUrl) {
        window.location.href = order.paymentUrl
        return
      }

      router.push(`/checkout/processing?orderId=${order.id}`)
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to place order. Please try again."

      if (selectedPayment === "cod") {
        clearCart()
        toast({
          title: "Checkout service unavailable",
          description: `${errorMessage} Continuing with demo checkout.`,
        })
        router.push(`/checkout/success?orderId=${fallbackOrderId}`)
      } else {
        setShowProcessingModal(true)
        clearCart()
        toast({
          title: "Checkout service unavailable",
          description: `${errorMessage} Redirecting to demo payment flow.`,
        })
        setTimeout(() => {
          router.push(`/checkout/processing?orderId=${fallbackOrderId}`)
        }, 1500)
      }
    } finally {
      setIsProcessing(false)
    }
  }

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
            Back to Cart
          </Link>

          <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Checkout
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-6">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-card-foreground">
                    Shipping Information
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter your delivery address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label htmlFor="note">Note</Label>
                    <Textarea
                      id="note"
                      name="note"
                      placeholder="Add delivery instructions if needed"
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
                    Payment Method
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon

                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setSelectedPayment(method.id)}
                          className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                            selectedPayment === method.id
                              ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                              : "border-border hover:border-primary/40 hover:bg-muted/40"
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
                              <p className="font-semibold text-foreground">
                                {method.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-6 font-serif text-xl font-semibold text-card-foreground">
                  Order Summary
                </h2>

                {orderItems.length === 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Your cart is empty.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/menu">Browse Menu</Link>
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
                            <p className="truncate font-medium text-foreground">
                              {item.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
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
                        <span>Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span>{formatCurrency(SHIPPING_FEE)}</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total</span>
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
                          Processing...
                        </>
                      ) : (
                        <>
                          Place Order
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <Button variant="outline" asChild className="mt-3 w-full">
                      <Link href="/cart">Back to Cart</Link>
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
            <DialogTitle className="text-center">
              Processing Payment
            </DialogTitle>
            <DialogDescription className="text-center">
              Connecting to{" "}
              {paymentMethods.find((method) => method.id === selectedPayment)
                ?.name ?? "payment provider"}
              ...
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center py-8">
            <Spinner className="h-12 w-12 text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">
              Please wait while we redirect you to the payment gateway.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}
