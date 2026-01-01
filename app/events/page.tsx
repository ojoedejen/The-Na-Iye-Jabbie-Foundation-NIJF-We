"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, User } from "lucide-react"
import { useState } from "react"

export default function EventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-[#e8e8e0]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1a3a2e] text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Environmental Cleanup</h1>
          <p className="text-xl mb-2">Host an elegant fundraising gala featuring live entertainment,</p>
          <p className="text-xl">keynote speakers, and auctions.</p>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Event Start */}
          <div className="bg-[#c8ffdd] border-2 border-black rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6" />
              <h3 className="text-xl font-bold">Event Start</h3>
            </div>
            <p className="text-lg font-semibold mb-1">10:00 AM - 18:00 PM</p>
            <p className="text-gray-700">28 May 2024</p>
          </div>

          {/* Event Organiser */}
          <div className="bg-[#c8ff5c] border-2 border-black rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6" />
              <h3 className="text-xl font-bold">Event Organiser</h3>
            </div>
            <p className="text-lg font-semibold mb-1">David James</p>
            <p className="text-gray-700">davi@james45@gmail.com</p>
          </div>

          {/* Event Venue */}
          <div className="bg-[#e6d4ff] border-2 border-black rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6" />
              <h3 className="text-xl font-bold">Event Venue</h3>
            </div>
            <p className="text-lg font-semibold mb-1">Drak Spurt, San</p>
            <p className="text-gray-700">Francisco, CA 94528</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Article Header */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">
                Environmental Cleanup: A Vital Imperative for Our Planet's Health
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Environmental cleanup stands as a critical pillar in the ongoing battle to preserve our planet's health.
                With the ever-increasing pressures of human activity, from industrialization to urbanization, our
                ecosystems face unprecedented challenges. Pollution, habitat destruction, and resource depletion
                threaten biodiversity, water quality, and air purity. In this blog, we delve into the importance of
                environmental cleanup, its methods, and their far-reaching benefits for both nature and humanity.
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-3xl overflow-hidden border-2 border-black">
              <Image
                src="/person-cleaning-up-nature-environment.jpg"
                alt="Environmental cleanup volunteer"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* The Urgency Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">The Urgency of Environmental Cleanup</h3>
              <p className="text-gray-700 leading-relaxed">
                The urgency of environmental cleanup cannot be overstated. Pollution, whether it's plastic waste choking
                our oceans, toxic chemicals contaminating our soil, or emissions poisoning our air, poses severe threats
                to ecosystems and human health alike. Without proactive intervention, the consequences can be dire,
                ranging from habitat destruction and species extinction to increased rates of respiratory diseases and
                compromised food security.
              </p>
            </div>

            {/* Additional Image */}
            <div className="rounded-3xl overflow-hidden border-2 border-black">
              <Image
                src="/volunteers-cleaning-nature-waterside.jpg"
                alt="Environmental cleanup volunteers"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Embrace Environmental Cleanup */}
            <div>
              <h3 className="text-3xl font-bold mb-4 italic">
                Embrace Environmental Cleanup for a Brighter, Cleaner World
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it's organising community clean-ups, supporting local wildlife or, or lobbying for policies that
                prioritize environmental protection, every action counts.
              </p>

              <div>
                <h4 className="text-xl font-bold mb-4">Methods of Environmental Cleanup</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Environmental cleanup employs various methods tailored to address specific types of pollution:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#c8ff5c] font-bold">•</span>
                    <span>Mechanical Cleanup</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c8ff5c] font-bold">•</span>
                    <span>Chemical Cleanup</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c8ff5c] font-bold">•</span>
                    <span>Biological Cleanup</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c8ff5c] font-bold">•</span>
                    <span>Remediation Technologies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* More Images */}
            <div className="rounded-3xl overflow-hidden border-2 border-black">
              <Image
                src="/environmental-cleanup-nature-restoration.jpg"
                alt="Nature restoration"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Benefits Section */}
            <div>
              <h4 className="text-xl font-bold mb-4">Benefits of Environmental Cleanup</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                The benefits of environmental cleanup extend far beyond the restoration of ecosystems; they encompass
                social, economic, and health benefits too. Cleaner environments lead to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#c8ff5c] font-bold">•</span>
                  <span>Ecosystem Restoration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c8ff5c] font-bold">•</span>
                  <span>Public Health Improvement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c8ff5c] font-bold">•</span>
                  <span>Economic Growth</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div>
              <h4 className="text-xl font-bold mb-4">Conclusion</h4>
              <p className="text-gray-700 leading-relaxed">
                Environmental cleanup is not just a moral imperative but a practical necessity for safeguarding the
                health and well-being of current and future generations. By raising awareness, fostering collaboration,
                and implementing effective cleanup strategies, we can work towards a cleaner, healthier, and more
                sustainable planet. Together, let us commit to being stewards of Earth's precious resources and
                champions of environmental preservation. After all, our planet's health is wealth if environmental
                degradation and sustainability.
              </p>
            </div>
          </div>

          {/* Sidebar Registration Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-black rounded-3xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Make An Impact Today</h3>
              <p className="text-gray-600 mb-8">
                Your contribution today can create real change. Make a fast donation to support urgent global causes and
                help communities in need
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name here..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-2 border-black rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email here..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 border-black rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number here..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-2 border-black rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#2d5f3f] hover:bg-[#234a32] text-white rounded-full font-semibold"
                >
                  Register to Event
                </Button>
              </form>
            </div>

            {/* Recommended Section */}
            <div className="mt-8 bg-white border-2 border-black rounded-3xl p-6">
              <h4 className="font-bold mb-4">Recommended</h4>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-2xl p-3">
                    <Image
                      src={`/charity-event-.jpg?height=120&width=200&query=charity event ${i}`}
                      alt={`Recommended event ${i}`}
                      width={200}
                      height={120}
                      className="w-full rounded-xl object-cover mb-3"
                    />
                    <div className="text-xs text-gray-500 mb-1">Sep 23 - Nov Donation</div>
                    <h5 className="font-semibold text-sm mb-2">Food and Shelter</h5>
                    <p className="text-xs text-gray-600">
                      Stabilise the water and inclusivity through critical support, helping...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
