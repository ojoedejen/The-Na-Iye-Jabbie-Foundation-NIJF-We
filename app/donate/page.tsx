"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { createDonation } from "@/app/actions/donation-actions"

export default function DonatePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialCampaign = searchParams.get("title") || "Water Scarcity In Maiduguri: Lifeline Ramadan Campaign 2021"

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCampaign, setSelectedCampaign] = useState(initialCampaign)
  const [donationType, setDonationType] = useState("general")
  const [frequency, setFrequency] = useState("once")
  const [amount, setAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [email, setEmail] = useState("")
  const [currency, setCurrency] = useState("LE")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const campaigns = [
    {
      title: "Water Scarcity In Maiduguri: Lifeline Ramadan Campaign 2021",
      date: "23 Sep, 2021",
      readTime: "2 min read",
      image: "/campaign-water-scarcity.jpg",
    },
    {
      title: "Agricultural Projects To Feed The Needy & Empower Single Mothers",
      date: "15 Oct, 2021",
      readTime: "3 min read",
      image: "/campaign-flood-relief.jpg",
    },
    {
      title: "Support Evacuation After Mount Eruption",
      date: "28 Nov, 2021",
      readTime: "2 min read",
      image: "/campaign-volcano-relief.jpg",
    },
  ]

  const presetAmounts = [10, 50, 100, 200]

  const handleSlideChange = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % campaigns.length)
    } else {
      setCurrentSlide((prev) => (prev - 1 + campaigns.length) % campaigns.length)
    }
  }

  async function handleDonation(paymentMethod: string) {
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    const donationAmount = amount || Number.parseFloat(customAmount)

    if (!donationAmount || donationAmount <= 0) {
      setError("Please enter a valid donation amount")
      setIsSubmitting(false)
      return
    }

    if (!email) {
      setError("Please enter your email address")
      setIsSubmitting(false)
      return
    }

    console.log("[v0] Processing donation:", {
      amount: donationAmount,
      currency,
      paymentMethod,
      email,
      frequency,
      donationType,
      campaign: donationType === "specific" ? selectedCampaign : null,
    })

    const formData = new FormData()
    formData.append("amount", donationAmount.toString())
    formData.append("currency", currency)
    formData.append("paymentMethod", paymentMethod)
    formData.append("donorEmail", email)
    formData.append("frequency", frequency)
    formData.append("donationType", donationType)
    if (donationType === "specific") {
      formData.append("campaignId", selectedCampaign)
    }

    try {
      const result = await createDonation(formData)

      if (result.success) {
        console.log("[v0] Donation successful:", result.data)
        setSuccess(true)

        setAmount(null)
        setCustomAmount("")
        setEmail("")

        setTimeout(() => {
          router.push("/?donation=success")
        }, 3000)
      } else {
        console.error("[v0] Donation failed:", result.error)
        setError(result.error || "Failed to process donation")
      }
    } catch (err) {
      console.error("[v0] Unexpected error:", err)
      setError("An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-6 w-6" />
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <div className="relative bg-white border-2 border-black rounded-3xl overflow-hidden">
                <div className="relative h-[500px]">
                  <Image
                    src={campaigns[currentSlide].image || "/placeholder.svg?height=500&width=600"}
                    alt={campaigns[currentSlide].title}
                    fill
                    className="object-cover"
                  />

                  <button
                    onClick={() => handleSlideChange("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleSlideChange("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 bg-[#c8ff5c] p-6 border-t-2 border-black">
                    <h3 className="text-2xl font-bold mb-2">{campaigns[currentSlide].title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-1">📅 {campaigns[currentSlide].date}</span>
                      <span className="flex items-center gap-1">⏱️ {campaigns[currentSlide].readTime}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors bg-transparent"
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {campaigns.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-black" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-8 border-2 border-black rounded-3xl bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#c8ff5c] rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6" fill="currentColor" />
                </div>
                <h2 className="text-3xl font-bold">Make An Impact Today</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Your contribution today can create real change. Make a fast donation to support urgent global causes and
                help communities in need.
              </p>

              {success && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-2xl text-green-700">
                  Thank you for your donation! Redirecting...
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-2xl text-red-700">{error}</div>
              )}

              <Tabs value={donationType} onValueChange={setDonationType} className="mb-6">
                <TabsList className="w-full bg-[#f5f5f0] border-2 border-black rounded-2xl p-1">
                  <TabsTrigger
                    value="general"
                    className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black font-semibold"
                  >
                    General donation
                  </TabsTrigger>
                  <TabsTrigger
                    value="specific"
                    className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black font-semibold"
                  >
                    To a specific campaign/appeal
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <p className="text-sm text-gray-600">
                    Your donation will go to our general fund to support all causes.
                  </p>
                </TabsContent>

                <TabsContent value="specific" className="mt-6">
                  <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                    <SelectTrigger className="w-full border-2 border-black rounded-xl h-12">
                      <SelectValue placeholder="Select a campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      {campaigns.map((campaign, index) => (
                        <SelectItem key={index} value={campaign.title}>
                          {campaign.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TabsContent>
              </Tabs>

              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-black focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger className="w-full border-2 border-black rounded-xl h-12">
                    <SelectValue placeholder="Give once" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">Give once</SelectItem>
                    <SelectItem value="monthly">Give monthly</SelectItem>
                    <SelectItem value="yearly">Give yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset)
                        setCustomAmount("")
                      }}
                      className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                        amount === preset
                          ? "bg-[#c8ff5c] border-black"
                          : "bg-[#f5f5f0] border-gray-300 hover:border-black"
                      }`}
                    >
                      {currency}
                      {preset}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="w-24 border-2 border-black rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LE">LE</SelectItem>
                      <SelectItem value="$">$</SelectItem>
                      <SelectItem value="€">€</SelectItem>
                      <SelectItem value="£">£</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setAmount(null)
                    }}
                    min="1"
                    step="0.01"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => handleDonation("orange_money")}
                  disabled={isSubmitting || (!amount && !customAmount) || !email}
                  className="w-full h-14 bg-[#2d5f3f] hover:bg-[#234a32] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Processing..." : "Donate with"}</span>
                  <Image
                    src="/images/orange-money-logo.png"
                    alt="Orange Money"
                    width={80}
                    height={24}
                    className="h-6 w-auto"
                  />
                </Button>

                <Button
                  onClick={() => handleDonation("salon_payment")}
                  disabled={isSubmitting || (!amount && !customAmount) || !email}
                  className="w-full h-14 bg-[#2d5f3f] hover:bg-[#234a32] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Processing..." : "Donate with"}</span>
                  <Image
                    src="/images/salon-payment-logo.png"
                    alt="Salon Payment"
                    width={80}
                    height={24}
                    className="h-6 w-auto"
                  />
                </Button>

                <Button
                  onClick={() => handleDonation("usdc_solana")}
                  disabled={isSubmitting || (!amount && !customAmount) || !email}
                  className="w-full h-14 bg-[#2d5f3f] hover:bg-[#234a32] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Processing..." : "Donate with"}</span>
                  <Image
                    src="/images/usdc-solana-logo.png"
                    alt="USDC Solana"
                    width={80}
                    height={24}
                    className="h-6 w-auto"
                  />
                </Button>

                <Button
                  onClick={() => handleDonation("mastercard")}
                  disabled={isSubmitting || (!amount && !customAmount) || !email}
                  className="w-full h-14 bg-[#2d5f3f] hover:bg-[#234a32] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Processing..." : "Donate with"}</span>
                  <Image
                    src="/images/mastercard-logo.png"
                    alt="Mastercard"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
