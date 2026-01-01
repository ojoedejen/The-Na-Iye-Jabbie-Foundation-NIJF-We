"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function DonatePage() {
  const searchParams = useSearchParams()
  const campaignId = searchParams.get("campaign")
  const campaignTitle = searchParams.get("title") || "General Fund"
  const campaignOrg = searchParams.get("org") || "FUNDFLOW"

  const [amount, setAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  const presetAmounts = [50, 100, 250, 500, 1000]
  const paymentMethods = [
    {
      id: "orange",
      name: "Orange Money",
      logo: "/images/orange-money-logo.png",
    },
    {
      id: "salon",
      name: "Salon Payment Switch",
      logo: "/images/salon-payment-logo.png",
    },
    {
      id: "usdc",
      name: "USDC (Solana)",
      logo: "/images/usdc-solana-logo.png",
    },
    {
      id: "card",
      name: "Bank / Mastercard",
      logo: "/images/mastercard-logo.png",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 p-6 bg-white border-2 border-black rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c8ff5c] rounded-full flex items-center justify-center border-2 border-black flex-shrink-0">
                <span className="text-xl">❤️</span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">You are donating to:</p>
                <h3 className="text-2xl font-bold mb-1">{campaignTitle}</h3>
                <p className="text-gray-600">{campaignOrg}</p>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl text-gray-600 mb-12">
            Your kindness can change someone's life. Every contribution matters.
          </p>

          <Card className="p-8 border-2 border-black rounded-3xl bg-white">
            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Select Amount (LE)</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setAmount(preset)
                      setCustomAmount("")
                    }}
                    className={`py-4 px-6 rounded-2xl border-2 font-semibold transition-all ${
                      amount === preset ? "bg-[#c8ff5c] border-black" : "bg-white border-gray-300 hover:border-black"
                    }`}
                  >
                    LE {preset}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">LE</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount(null)
                  }}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-2xl border-2 font-semibold transition-all flex items-center gap-4 ${
                      paymentMethod === method.id
                        ? "bg-[#c8ff5c] border-black"
                        : "bg-white border-gray-300 hover:border-black"
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={method.logo || "/placeholder.svg"}
                        alt={method.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="flex-1 text-left text-base">{method.name}</span>
                    {paymentMethod === method.id && <Check className="h-6 w-6" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
                <textarea
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              className="w-full bg-black text-white hover:bg-gray-900 py-6 text-lg rounded-2xl"
              disabled={(!amount && !customAmount) || !paymentMethod}
            >
              Complete Donation
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
