"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
    <section className="bg-[#f5f5f0] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">HOW IT WORKS</h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl text-balance">
              Publish your campaign and spread the word. Share it across social media, email, communities, and anyone
              who believes in your vision. The more people you reach, the faster your momentum grows.
            </p>

            <Button variant="outline" className="border-2 border-black rounded-full px-6 py-6 text-base bg-transparent">
              <span className="w-5 h-5 border-2 border-black rounded-full inline-block mr-2" />
              Start a campaign
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-6xl font-bold mb-2">98%</div>
                <div className="text-sm text-gray-600">Success rate</div>
              </div>
              <div>
                <div className="text-6xl font-bold mb-2">$125M+</div>
                <div className="text-sm text-gray-600">Total Funded</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="absolute -left-12 top-8 text-9xl font-bold text-gray-200 hidden lg:block">
                  {step.number}
                </div>
                <button
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  className={`w-full text-left transition-all ${
                    expandedStep === step.number ? "bg-[#c8ff5c]" : "bg-white"
                  } border-2 border-black rounded-3xl p-6 space-y-3 hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {step.icon}
                      <span className="text-xl font-bold">{step.title}</span>
                    </div>
                    {expandedStep === step.number ? (
                      <ChevronUp className="h-6 w-6 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 flex-shrink-0" />
                    )}
                  </div>
                  {expandedStep === step.number && (
                    <p className="text-sm leading-relaxed pl-11 animate-in slide-in-from-top-2 duration-300">
                      {step.description}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative">
          <div className="bg-[#c8ff5c] border-2 border-black rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <h3 className="text-2xl md:text-3xl font-bold max-w-3xl text-balance">
                TRACING THE PATH OF EVERY DONATION AS IT TRANSFORMS INTO HELP, HEALING, AND HOPE FOR THOSE WHO NEED IT
                MOST.
              </h3>
              <Button
                variant="outline"
                className="border-2 border-black rounded-full px-8 py-6 text-base whitespace-nowrap bg-transparent"
              >
                READ OUR STORY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
