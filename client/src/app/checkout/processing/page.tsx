"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Shield, Clock, Loader2 } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PaymentProcessingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState("Connecting to payment gateway...")

  useEffect(() => {
    const statusMessages = [
      "Connecting to payment gateway...",
      "Verifying payment information...",
      "Processing transaction...",
      "Confirming payment...",
    ]

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++

      if (currentStep < statusMessages.length) {
        setStatus(statusMessages[currentStep])
        setProgress((currentStep / statusMessages.length) * 100)
      } else {
        setProgress(100)
        clearInterval(interval)

        setTimeout(() => {
          router.push("/checkout/success")
        }, 1000)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Processing Payment
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Please wait while we securely process your transaction
            </p>
          </div>

          {/* Main Card */}
          <Card className="rounded-2xl border border-border bg-card shadow-sm">
            <CardContent className="p-8 md:p-10">
              {/* Icon */}
              <div className="mb-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-10 w-10 text-primary animate-pulse" />
                </div>

                <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                  Secure Transaction
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Do not refresh or close this page
                </p>
              </div>

              {/* Progress */}
              <div className="mb-8">
                <Progress value={progress} className="h-2 rounded-full" />

                <div className="mt-4 flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {status}
                  </span>
                </div>
              </div>

              {/* Security Info */}
              <div className="rounded-2xl bg-secondary p-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Encrypted Payment
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your card and billing information are fully encrypted and
                        protected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Processing Time
                      </p>
                      <p className="text-sm text-muted-foreground">
                        This usually takes less than 30 seconds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Percentage */}
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% completed
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}