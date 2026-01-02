"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function JourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "JOURNEY OF HOPE: HOW YOUR SUPPORT REACHED THOSE IN NEED",
      image: "/nijf-volunteer-work.jpg",
      description:
        "Follow the inspiring journey of aid workers delivering essential supplies to communities affected by recent disasters. Your donations enabled our team to provide food, water, and medical supplies to over 2,500 families in need.",
      impact: "2,500 families supported",
      location: "Sierra Leone",
    },
    {
      id: 2,
      title: "VOLUNTEERS IN ACTION: BUILDING STRONGER COMMUNITIES",
      image: "/nijf-community-gathering.jpg",
      description:
        "Our dedicated volunteers work tirelessly to coordinate and distribute aid packages. Through your generosity, we've established distribution centers that serve as lifelines for communities recovering from crisis.",
      impact: "15 distribution centers",
      location: "Multiple regions",
    },
    {
      id: 3,
      title: "COORDINATED RELIEF: TEAMWORK MAKES THE DREAM WORK",
      image: "/nijf-donor-impact.jpg",
      description:
        "Behind every successful relief operation is a coordinated team effort. From logistics to on-ground distribution, your support enables seamless operations that ensure aid reaches those who need it most.",
      impact: "10,000+ items distributed",
      location: "Emergency response zones",
    },
    {
      id: 4,
      title: "DOCUMENTATION & TRANSPARENCY: TRACKING EVERY CONTRIBUTION",
      image: "/images/nijf-health-awareness.jpg",
      description:
        "We maintain detailed records of every donation and its impact. Our transparent tracking system ensures you can see exactly how your contribution transforms into tangible help for communities in need.",
      impact: "100% transparency",
      location: "All operations",
    },
  ]

  return (
    <section className="bg-muted py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-12 text-center">OUR JOURNEY</h2>
        </ScrollReveal>

        {/* Mobile/Tablet View (Vertical Stack) */}
        <div className="lg:hidden space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal delay={index * 100} key={project.id}>
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-primary/10"
                onClick={() => setExpandedProject(project.id)}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop View (Scattered Layout) */}
        <div className="hidden lg:block relative h-[600px] max-w-6xl mx-auto">
          {/* Desktop Navigation Arrows */}
          <div className="absolute top-0 right-0 flex gap-4 z-10 mb-8">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-12 h-12 rounded-full border-2 border-primary bg-white hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1))}
              className="w-12 h-12 rounded-full border-2 border-primary bg-white hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={currentIndex === projects.length - 1}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {projects.map((project, index) => {
            const positions = [
              { left: "0", top: "40", width: "45%", zIndex: 30 },
              { left: "30%", top: "80", width: "45%", zIndex: 20 },
              { left: "auto", right: "10%", top: "20", width: "40%", zIndex: 10 },
              { left: "auto", right: "0", top: "120", width: "35%", zIndex: 0 },
            ]

            const position = positions[index]

            return (
              <button
                key={project.id}
                onClick={() => setExpandedProject(project.id)}
                className={`absolute transform hover:scale-105 transition-all duration-500 cursor-pointer ease-out ${expandedProject === project.id ? "z-50" : ""
                  }`}
                style={{
                  left: position.left,
                  right: position.right,
                  top: `${position.top}px`,
                  width: position.width,
                  zIndex: position.zIndex,
                }}
              >
                <ScrollReveal delay={index * 150} duration={800}>
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {index === 0 && (
                      <>
                        <div className="absolute bottom-0 left-0 right-0 bg-accent p-6 opacity-95">
                          <h3 className="text-xl font-bold text-balance text-accent-foreground">{project.title}</h3>
                        </div>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-primary flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </>
                    )}
                  </div>
                </ScrollReveal>
              </button>
            )
          })}
        </div>

        {/* Expanded Modal (Shared for both Mobile and Desktop) */}
        {expandedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 relative shadow-2xl">
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors z-20 shadow-md"
              >
                <X className="h-6 w-6" />
              </button>

              {projects
                .filter((p) => p.id === expandedProject)
                .map((project) => (
                  <div key={project.id} className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                      <img
                        src={project.image || "/placeholder.svg?height=400&width=800"}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-8 md:p-12 space-y-6 w-full md:w-1/2 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                      <div>
                        <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                          {project.location}
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 leading-tight">{project.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex items-center gap-6 pt-6 border-t border-border">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 font-medium">Impact</div>
                          <div className="text-2xl font-bold text-primary">{project.impact}</div>
                        </div>
                      </div>

                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-xl shadow-lg hover:translate-y-[-2px] transition-all">
                        Support This Cause
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
