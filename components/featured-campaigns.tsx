import { ArrowRight } from "lucide-react" // Fixed import to use lucide-react instead of custom icons

export function FeaturedCampaigns() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="flex-1">
            <div className="bg-[#c8ff5c] text-black inline-block px-4 py-2 rounded-full text-sm mb-4 font-bold">
              FEATURED CAMPAIGNS MAKING A REAL IMPACT IN COMMUNITIES AFFECTED BY RECENT DISASTERS
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
              </div>
              <span className="text-sm">17M+ people helping</span>
            </div>
          </div>

          <div className="lg:max-w-md">
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm mb-4 font-bold">
              YOUR DONATION MATTERS
            </button>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Discover urgent causes that need support right now. These campaigns are verified, transparent, and driven
              by communities working together to rebuild after disaster.
            </p>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Campaign */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="/flood-disaster-aerial-view.jpg" alt="Flood disaster" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white text-black p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-xs font-bold">#FLOOD</span>
              </div>
              <h3 className="text-xl font-bold">EMERGENCY RELIEF FOR SUMATRA FLOOD VICTIMS</h3>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500" />
                <span className="text-sm font-semibold">CareRelief Indonesia</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Raised</span>
                  <span className="font-bold">LE 42,380 (65%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 w-[65%]" />
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                DONATE NOW
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Center Large Image */}
          <div className="aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src="/people-walking-through-flood-disaster-area.jpg"
              alt="Disaster relief"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Campaign */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="/evacuation-shelter-tent.jpg" alt="Evacuation shelter" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white text-black p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-xs font-bold">
                  #ERUPTION
                </span>
              </div>
              <h3 className="text-xl font-bold">SUPPORT EVACUATION AFTER MOUNT ERUPTION</h3>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500" />
                <span className="text-sm font-semibold">Humanity First Response Team</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Raised</span>
                  <span className="font-bold">LE 9,850 (23%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-400 w-[23%]" />
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                DONATE NOW
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
