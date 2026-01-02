"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createCampaign } from "@/app/actions/campaign-actions"
import { useRouter } from "next/navigation"

export default function CreateCampaignPage() {
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const categories = [
    { id: "flood", name: "Flood Relief", icon: "🌊" },
    { id: "earthquake", name: "Earthquake", icon: "🏚️" },
    { id: "fire", name: "Fire Disaster", icon: "🔥" },
    { id: "volcano", name: "Volcanic Eruption", icon: "🌋" },
    { id: "medical", name: "Medical Emergency", icon: "🏥" },
    { id: "other", name: "Other", icon: "❤️" },
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)

    // Add category to form data
    formData.append("category", category)

    console.log("[v0] Submitting campaign form...")

    try {
      const result = await createCampaign(formData)

      if (result.success) {
        console.log("[v0] Campaign created successfully, redirecting...")
        router.push("/campaigns?success=true")
      } else {
        console.error("[v0] Campaign creation failed:", result.error)
        setError(result.error || "Failed to create campaign")
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
          <ArrowLeft className="h-5 w-5" />
          Back to home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Create Campaign</h1>
          <p className="text-xl text-gray-600 mb-12">
            Start your campaign and make a difference. Share your cause with the world.
          </p>

          {error && <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-2xl text-red-700">{error}</div>}

          <Card className="p-8 border-2 border-black rounded-3xl bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Campaign Title */}
              <div>
                <label className="block text-xl font-bold mb-3">Campaign Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Give your campaign a clear, compelling title"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xl font-bold mb-3">Category</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`p-4 rounded-2xl border-2 font-semibold transition-all flex items-center gap-3 ${
                        category === cat.id
                          ? "bg-[#c8ff5c] border-black"
                          : "bg-white border-gray-300 hover:border-black"
                      }`}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-sm">{cat.name}</span>
                    </button>
                  ))}
                </div>
                {!category && <p className="text-sm text-gray-500 mt-2">Please select a category</p>}
              </div>

              {/* Goal Amount */}
              <div>
                <label className="block text-xl font-bold mb-3">Funding Goal (LE)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">LE</span>
                  <input
                    type="number"
                    name="goalAmount"
                    required
                    min="1"
                    step="0.01"
                    placeholder="50000"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xl font-bold mb-3">Campaign Story</label>
                <textarea
                  name="description"
                  required
                  placeholder="Tell your story. Why is this campaign important? Who will it help?"
                  rows={8}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none resize-none"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xl font-bold mb-3">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  required
                  placeholder="Your organization or personal name"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-xl font-bold mb-3">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  required
                  placeholder="contact@example.com"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting || !category}
                className="w-full bg-black text-white hover:bg-gray-900 py-6 text-lg rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Launching Campaign..." : "Launch Campaign"}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
