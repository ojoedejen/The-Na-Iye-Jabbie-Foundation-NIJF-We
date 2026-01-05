"use client"

import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CampaignCard } from "@/components/campaign-card"
import { Navigation } from "@/components/navigation"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { WarpBackground } from "@/components/ui/warp-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <WarpBackground className="min-h-screen">
        <Navigation />

        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start my-8">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              {/* Profile Avatars - Placeholder implementation */}

              {/* Main Headline */}
              <ScrollReveal delay={200}>
                <h1 className="text-6xl leading-[1.1] tracking-tight text-foreground font-sans font-black md:text-7xl">
                  BUILDING <span className="bg-primary/20 text-primary px-4 py-1 inline-block border-primary border-2 rounded-full transform -rotate-1">STRONGER</span>
                  <br />
                  COMMUNITIES
                  <br />
                  TOGETHER
                </h1>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <Link href="/donate">
                      DONATE NOW <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary text-base px-8 h-14 rounded-full bg-transparent hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <Link href="/create-campaign">
                      <Circle className="mr-2 h-5 w-5 fill-current" /> START A CAMPAIGN
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              {/* Partner Logos */}
              <ScrollReveal delay={600}>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4 font-semibold tracking-wider uppercase">Part of TechHealth Africa Initiative</p>
                  <div className="flex flex-wrap items-center gap-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {/* <img src="/unicef-logo.png" alt="UNICEF" className="h-8 md:h-10 w-auto object-contain" />
                    <img src="/unhcr-logo.jpg" alt="UNHCR" className="h-8 md:h-10 w-auto object-contain" />
                    <img src="/world-health-organization-logo.jpg" alt="WHO" className="h-8 md:h-10 w-auto object-contain" /> */}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content - Featured Campaign Card */}
            <div className="hidden lg:block lg:pt-0 relative">
              {/* Decorative blob behind card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-3xl rounded-full -z-10" />

              <ScrollReveal delay={400} className="hover:-translate-y-2 transition-transform duration-500">
                <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <CampaignCard
                    id={0}
                    image="/images/say-no-drugs-1.jpeg"
                    title="KUSH SENSITIZATION & MENTAL HEALTH AWARENESS IN KROO BAY"
                    organization="The Na-Iye Jabbie Foundation"
                    raised={15400}
                    goal={40000}
                    category="HEALTH"
                    featured
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </WarpBackground>
    </section>
  )
}
