"use client"

import Link from "next/link"
import { ShoppingBag, CheckCircle2, Package, Truck, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const orderDetails = {
  orderNumber: "ZOO-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
  items: [
    { name: "Ethiopian Yirgacheffe", quantity: 2, price: 560000 },
    { name: "Colombian Supremo", quantity: 1, price: 245000 },
    { name: "Sumatra Mandheling", quantity: 1, price: 320000 },
  ],
  subtotal: 1125000,
  shipping: 30000,
  total: 1155000,
  shippingAddress: "123 Coffee Street, District 1, Ho Chi Minh City",
  paymentMethod: "Cash on Delivery",
  estimatedDelivery: "3-5 business days",
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount)
}

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">
                TheZooCoffee
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your order. We&apos;ll send you a confirmation email
              shortly.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="text-xl font-bold text-foreground">
                    {orderDetails.orderNumber}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery
                  </p>
                  <p className="font-semibold text-foreground">
                    {orderDetails.estimatedDelivery}
                  </p>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Order Timeline */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Confirmed</p>
                </div>
                <div className="flex-1 h-1 bg-muted mx-2" />
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Package className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Packing</p>
                </div>
                <div className="flex-1 h-1 bg-muted mx-2" />
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Shipping</p>
                </div>
                <div className="flex-1 h-1 bg-muted mx-2" />
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Home className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Delivered</p>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Order Items */}
              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-foreground">Order Items</h3>
                {orderDetails.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-foreground">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="mb-4" />

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatCurrency(orderDetails.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span>{formatCurrency(orderDetails.shipping)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">
                    {formatCurrency(orderDetails.total)}
                  </span>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Shipping Address
                  </p>
                  <p className="text-sm text-foreground">
                    {orderDetails.shippingAddress}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Payment Method
                  </p>
                  <p className="text-sm text-foreground">
                    {orderDetails.paymentMethod}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/cart">View Cart</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
