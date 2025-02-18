"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PremiumPlan {
  duration: string
  discount: string
  price: number
  originalPrice: number
  period: string
}

const plans: PremiumPlan[] = [
  {
    duration: "12 Months",
    discount: "70% OFF",
    price: 5.99,
    originalPrice: 19.99,
    period: "month",
  },
  {
    duration: "3 Months",
    discount: "50% OFF",
    price: 9.99,
    originalPrice: 19.99,
    period: "month",
  },
  {
    duration: "1 Month",
    discount: "35% OFF",
    price: 12.99,
    originalPrice: 19.99,
    period: "month",
  },
]

const benefits = [
  "Create your own AI Girlfriend(s)",
  "Unlimited text messages",
  "Get 100 FREE tokens / month",
  "Remove image blur",
  "Generate images",
  "Make AI phone calls",
  "Fast response time",
]

export function PremiumModal() {
  const [selectedPlan, setSelectedPlan] = useState<PremiumPlan>(plans[0])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="premium" className="bg-pink-500 hover:bg-pink-600 text-white w-full">
          Nify Premium
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-auto max-h-screen" aria-describedby="plan-description">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl text-center font-bold">Choose your Plan</DialogTitle>
            <DialogDescription id="plan-description" className="text-center text-muted-foreground">
              100% anonymous. You can cancel anytime.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 grid md:grid-cols-[1fr,1.5fr,1fr] gap-6">
            {/* Left Section - Promo */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-pink-500">Get An Exclusive Discount Only Today!</h3>
                <p className="text-lg">
                  Up to <span className="text-pink-500 font-bold">70%</span> off for first subscription
                </p>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rj04aUJ8c8sHtPNcXBrUkJTPA5dwoT.png"
                  alt="Premium Character"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Middle Section - Plans */}
            <div className="space-y-4">
              {plans.map((plan) => (
                <button
                  key={plan.duration}
                  className={`w-full p-4 rounded-lg transition-colors ${
                    selectedPlan === plan ? "bg-pink-500 text-white" : "bg-[#2A1A24] hover:bg-[#351f2d]"
                  }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{plan.duration}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            selectedPlan === plan ? "bg-white text-pink-500" : "bg-pink-500 text-white"
                          }`}
                        >
                          {plan.discount}
                        </span>
                      </div>
                      <div className={`text-sm ${selectedPlan === plan ? "text-white/80" : "text-muted-foreground"}`}>
                        Was €{plan.originalPrice}/{plan.period}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        €{plan.price}
                        <span
                          className={`text-sm font-normal ${selectedPlan === plan ? "text-white/80" : "text-muted-foreground"}`}
                        >
                          /{plan.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No adult transaction in your bank statement</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No hidden fees • Cancel subscription at any time</span>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <Button className="w-full bg-pink-500 hover:bg-pink-600" size="lg">
                  Pay with Credit / Debit Card
                  <div className="flex items-center gap-2 ml-2">
                    <Image src="/placeholder.svg?height=20&width=28" alt="Visa" width={28} height={20} />
                    <Image src="/placeholder.svg?height=20&width=28" alt="Mastercard" width={28} height={20} />
                  </div>
                </Button>
                <Button variant="secondary" className="w-full" size="lg">
                  Instant Bank Payment
                </Button>
                <Button variant="secondary" className="w-full" size="lg">
                  Pay with
                  <div className="flex items-center gap-2 ml-2">
                    <Image src="/placeholder.svg?height=20&width=20" alt="Bitcoin" width={20} height={20} />
                    <Image src="/placeholder.svg?height=20&width=20" alt="Ethereum" width={20} height={20} />
                    <Image src="/placeholder.svg?height=20&width=20" alt="Litecoin" width={20} height={20} />
                  </div>
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Annual payment billed as €{(selectedPlan.price * 12).toFixed(2)}
              </p>
            </div>

            {/* Right Section - Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-muted-foreground">Premium Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-pink-500" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[3/4] mt-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rj04aUJ8c8sHtPNcXBrUkJTPA5dwoT.png"
                  alt="Premium Character"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

