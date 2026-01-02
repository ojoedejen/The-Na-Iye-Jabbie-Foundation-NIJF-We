import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function FeaturedCampaigns() {
  return (
    <section className="bg-primary text-primary-foreground py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div className="flex-1">
              <div className="bg-accent text-accent-foreground inline-block px-4 py-2 rounded-full text-sm mb-4 font-bold uppercase tracking-wide">
                Featured Campaigns Making a Real Impact
              </div>

              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-primary" />
                  <div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-primary" />
                  <div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-primary" />
                  <div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-primary" />
                </div>
                <span className="text-sm font-medium opacity-90">Join 17M+ people helping diverse causes</span>
              </div>
            </div>

            <div className="lg:max-w-md">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm mb-4 font-bold hover:bg-white/20 transition-colors">
                YOUR DONATION MATTERS
              </button>
              <p className="text-sm text-primary-foreground/80 leading-relaxed font-medium">
                Discover urgent causes that need support right now. These campaigns are verified, transparent, and driven
                by communities working together to rebuild and thrive.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Campaign */}
          <ScrollReveal delay={100}>
            <div className="space-y-4 group hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/flood-disaster-aerial-view.jpg"
                  alt="Flood disaster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white text-black p-6 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 border border-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-bold">#FLOOD</span>
                </div>
                <h3 className="text-xl font-bold h-14 line-clamp-2 font-sans">EMERGENCY RELIEF FOR SUMATRA FLOOD VICTIMS</h3>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-gray-600">CareRelief Indonesia</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Raised</span>
                    <span className="font-bold">LE 42,380 (65%)</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[65%]" />
                  </div>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  DONATE NOW
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Center Large Image */}
          <ScrollReveal delay={200}>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src="/people-walking-through-flood-disaster-area.jpg"
                alt="Disaster relief"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2 font-sans">On the Ground</h3>
                <p className="text-sm opacity-90">See how your contributions are making a direct impact in the field today.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Campaign */}
          <ScrollReveal delay={300}>
            <div className="space-y-4 group hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/evacuation-shelter-tent.jpg"
                  alt="Evacuation shelter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white text-black p-6 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 border border-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-bold">
                    #ERUPTION
                  </span>
                </div>
                <h3 className="text-xl font-bold h-14 line-clamp-2 font-sans">SUPPORT EVACUATION AFTER MOUNT ERUPTION</h3>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-gray-600">Humanity First Response Team</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Raised</span>
                    <span className="font-bold">LE 9,850 (23%)</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[23%]" />
                  </div>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  DONATE NOW
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
