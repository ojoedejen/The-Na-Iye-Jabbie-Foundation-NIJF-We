"use client"

import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CampaignCard } from "@/components/campaign-card"
import { Navigation } from "@/components/navigation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Profile Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/abstract-profile.png" alt="Donor" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/abstract-profile.png" alt="Donor" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/abstract-profile.png" alt="Donor" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-sm text-gray-600">17M+ people helping others</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">
              YOUR <span className="bg-[#c8ff5c] px-3 py-1 inline-block">KINDNESS</span>
              <br />
              CAN CHANGE
              <br />
              SOMEONE'S LIFE
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900 text-base px-8">
                <Link href="/donate">
                  DONATE NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-base px-8 bg-transparent"
              >
                <Link href="/create-campaign">
                  <Circle className="mr-2 h-5 w-5" /> START A CAMPAIGN
                </Link>
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="pt-12">
              <p className="text-sm text-gray-500 mb-4">Partnering with</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="/unicef-logo.png" alt="UNICEF" className="h-10 opacity-60" />
                <img src="/unhcr-logo.jpg" alt="UNHCR" className="h-10 opacity-60" />
                <img src="/world-health-organization-logo.jpg" alt="WHO" className="h-10 opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Content - Featured Campaign Card */}
          <div className="lg:pt-12">
            <CampaignCard
              image="/images/image.png"
              title="SUPPORT VICTIMS OF THE FLOOD IN ACEH"
              organization="World Disaster Response Foundation"
              raised={21800}
              goal={60000}
              category="FLOOD"
              featured
            />
          </div>
        </div>
      </div>
    </section>
  )
}
