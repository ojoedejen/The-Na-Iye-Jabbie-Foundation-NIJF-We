"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(2)

  const steps = [
    {
      number: 1,
      title: "CREATE CAMPAIGN",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      description:
        "Start your fundraising journey by creating a compelling campaign. Share your story, set your goal, and add photos that showcase what you're working to achieve. Our easy-to-use platform guides you through every step.",
    },
    {
      number: 2,
      title: "BUILD COMMUNITY",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      description:
        "Share your vision and engage supporters. Build momentum with updates, rewards, and authentic connection. Spread the word through social media, email, and communities who believe in your cause.",
    },
    {
      number: 3,
      title: "GET FUNDED",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      description:
        "Watch your campaign grow as supporters contribute. Receive funds securely with our transparent payment system. Track every donation in real-time and see your impact unfold as you reach your goals.",
    },
  ]

  return (
    <section className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-sans font-black">HOW IT WORKS</h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-balance font-medium">
                Publish your campaign and spread the word. Share it across social media, email, communities, and anyone
                who believes in your vision. The more people you reach, the faster your momentum grows.
              </p>

              <Button variant="outline" className="border-2 border-primary rounded-full px-8 py-6 text-base bg-transparent hover:bg-primary hover:text-white transition-colors">
                <span className="w-5 h-5 border-2 border-current rounded-full inline-block mr-2" />
                Start a campaign
              </Button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/10 mt-8">
                <div>
                  <div className="text-5xl md:text-6xl mb-2 text-primary font-black font-sans">98%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Success rate</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl mb-2 text-primary font-black font-sans">$12+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Total Funded</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <ScrollReveal delay={index * 100} key={step.number}>
                <div className="relative">
                  <div className="absolute -left-12 top-8 text-9xl font-bold text-gray-200 hidden lg:block my-[-40px] mx-[-40px] mb-[-90px] py-0 -z-10 select-none opacity-50">
                    {step.number}
                  </div>
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                    className={`w-full text-left transition-all duration-300 ${expandedStep === step.number
                        ? "bg-accent border-accent shadow-lg"
                        : "bg-white border-primary/10 hover:border-primary/30"
                      } border-2 rounded-3xl p-6 space-y-3 hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${expandedStep === step.number ? "bg-white/20" : "bg-primary/5"}`}>
                          {step.icon}
                        </div>
                        <span className={`text-xl font-sans font-black tracking-wider ${expandedStep === step.number ? "text-accent-foreground" : "text-primary"}`}>{step.title}</span>
                      </div>
                      {expandedStep === step.number ? (
                        <ChevronUp className="h-6 w-6 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 flex-shrink-0" />
                      )}
                    </div>
                    {expandedStep === step.number && (
                      <p className="text-base leading-relaxed pl-[4.5rem] animate-in slide-in-from-top-2 duration-300 font-medium opacity-90">
                        {step.description}
                      </p>
                    )}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <ScrollReveal delay={400}>
          <div className="mt-16 relative">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <h3 className="text-2xl max-w-3xl text-balance font-bold md:text-3xl tracking-wide leading-tight font-sans">
                  TRACING THE PATH OF EVERY DONATION AS IT TRANSFORMS INTO HELP, HEALING, AND HOPE FOR THOSE WHO NEED IT
                  MOST.
                </h3>
                <Button
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 py-6 text-base whitespace-nowrap bg-transparent transition-all"
                >
                  READ OUR STORY
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
