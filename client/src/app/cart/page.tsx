"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Your Cart
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {totalItems > 0
              ? `You have ${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">
              Your cart is empty
            </h2>
            <p className="mb-8 max-w-md text-muted-foreground">
              Looks like you haven&apos;t added any items to your cart yet. Start exploring our delicious menu!
            </p>
            <Link href="/menu">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Browse Menu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card">
                {/* Header */}
                <div className="hidden border-b border-border px-6 py-4 md:grid md:grid-cols-12 md:gap-4">
                  <div className="col-span-6 text-sm font-medium text-muted-foreground">
                    Product
                  </div>
                  <div className="col-span-2 text-center text-sm font-medium text-muted-foreground">
                    Quantity
                  </div>
                  <div className="col-span-2 text-center text-sm font-medium text-muted-foreground">
                    Price
                  </div>
                  <div className="col-span-2 text-right text-sm font-medium text-muted-foreground">
                    Subtotal
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 p-6 md:grid md:grid-cols-12 md:items-center md:gap-4"
                    >
                      {/* Product Info */}
                      <div className="col-span-6 flex gap-4">
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-serif font-semibold text-card-foreground">
                            {item.name}
                          </h3>
                          <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-2 inline-flex items-center gap-1 text-sm text-destructive hover:underline md:hidden"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex items-center justify-between md:justify-center">
                        <span className="text-sm text-muted-foreground md:hidden">
                          Quantity:
                        </span>
                        <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Unit Price */}
                      <div className="col-span-2 flex items-center justify-between md:justify-center">
                        <span className="text-sm text-muted-foreground md:hidden">
                          Price:
                        </span>
                        <span className="text-sm text-foreground">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-2 flex items-center justify-between md:justify-end">
                        <span className="text-sm text-muted-foreground md:hidden">
                          Subtotal:
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive md:flex"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart */}
                <div className="border-t border-border px-6 py-4">
                  <button
                    onClick={clearCart}
                    className="text-sm text-muted-foreground transition-colors hover:text-destructive"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-6 font-serif text-xl font-semibold text-card-foreground">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">Free</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tax (estimated)</span>
                    <span className="text-foreground">${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>

                  <div className="my-4 border-t border-border" />

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-foreground">
                      ${(totalPrice * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button
                    size="lg"
                    className="mt-6 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/menu">
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-3 w-full border-primary/30 text-foreground hover:bg-primary/5"
                  >
                    Continue Shopping
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
