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
        <div className="grid lg:grid-cols-2 gap-12 items-start my-8">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Profile Avatars */}
            

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl leading-tight text-balance font-black">
              BUILDING <span className="bg-[#c8ff5c] px-3 py-1 inline-block border-black border-solid border-4 rounded-xl">STRONGER</span>
              <br />
              COMMUNITIES
              <br />
              TOGETHER
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
            <div className="pt-1">
              <p className="text-sm text-gray-500 mb-4 font-semibold">Part of TechHealth Africa Initiative</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="/unicef-logo.png" alt="UNICEF" className="h-10 opacity-60" />
                <img src="/unhcr-logo.jpg" alt="UNHCR" className="h-10 opacity-60" />
                <img src="/world-health-organization-logo.jpg" alt="WHO" className="h-10 opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Content - Featured Campaign Card */}
          <div className="lg:pt-0">
            <CampaignCard
              image="/images/nijf-health-awareness.jpg"
              title="KUSH SENSITIZATION & MENTAL HEALTH AWARENESS IN KROO BAY"
              organization="The Na-Iye Jabbie Foundation"
              raised={15400}
              goal={40000}
              category="HEALTH"
              featured
            />
          </div>
        </div>
      </div>
    </section>
  )
}
