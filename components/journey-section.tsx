"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { useState } from "react"

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
    <section className="bg-[#e8e8dc] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Navigation Arrows - Top Right */}
        <div className="absolute top-8 right-8 flex gap-4 z-10">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1))}
            className="w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
            disabled={currentIndex === projects.length - 1}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative h-[600px] max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const positions = [
              { left: "0", top: "20", width: "45%", zIndex: 30 },
              { left: "30%", top: "32", width: "45%", zIndex: 20 },
              { left: "auto", right: "10%", top: "16", width: "40%", zIndex: 10 },
              { left: "auto", right: "0", top: "44", width: "35%", zIndex: 0 },
            ]

            const position = positions[index]

            return (
              <button
                key={project.id}
                onClick={() => setExpandedProject(project.id)}
                className={`absolute transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  expandedProject === project.id ? "z-50" : ""
                }`}
                style={{
                  left: position.left,
                  right: position.right,
                  top: `${position.top}px`,
                  width: position.width,
                  zIndex: position.zIndex,
                }}
              >
                <div className="relative rounded-3xl overflow-hidden border-4 border-black shadow-2xl">
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                  {index === 0 && (
                    <>
                      <div className="absolute bottom-0 left-0 right-0 bg-[#c8ff5c] p-6">
                        <h3 className="text-xl font-bold text-balance">{project.title}</h3>
                      </div>
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {expandedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl border-4 border-black max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <div className="relative">
                <button
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>

                {projects
                  .filter((p) => p.id === expandedProject)
                  .map((project) => (
                    <div key={project.id}>
                      <img
                        src={project.image || "/placeholder.svg?height=400&width=800"}
                        alt={project.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="p-8 space-y-6">
                        <div>
                          <div className="inline-block px-4 py-2 bg-[#c8ff5c] rounded-full text-sm font-semibold mb-4">
                            {project.location}
                          </div>
                          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                          <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t-2 border-gray-200">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Impact</div>
                            <div className="text-2xl font-bold">{project.impact}</div>
                          </div>
                        </div>

                        <Button className="w-full bg-black text-white hover:bg-gray-900 py-6 text-lg rounded-2xl">
                          Support This Cause
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
