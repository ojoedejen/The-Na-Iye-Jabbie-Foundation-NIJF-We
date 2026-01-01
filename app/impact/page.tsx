import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          See the real difference your contributions make in communities around the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="text-5xl font-bold mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="text-5xl font-bold mb-2">$125M+</div>
            <div className="text-gray-600">Total Funded</div>
          </div>
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="text-5xl font-bold mb-2">17M+</div>
            <div className="text-gray-600">People Helping</div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
