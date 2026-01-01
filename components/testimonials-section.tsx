export function TestimonialsSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/placeholder.svg?height=800&width=1600&query=child+portrait+background)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-white rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold">TESTIMONIAL</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">WHAT PEOPLE SAY ABOUT US</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-semibold">
            Hear real stories and experiences from donors and beneficiaries who trust Fundflow to make every
            contribution meaningful.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Dark */}
          <div className="bg-gray-900/90 backdrop-blur border-2 border-gray-700 rounded-3xl p-8 space-y-6">
            <p className="text-white leading-relaxed">
              "Fundflow made the entire distribution process seamless and transparent. Every donation reached the people
              who truly needed it, and I felt fully supported throughout the mission."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                <img src="/sarah-profile.jpg" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold">Sarah Mitchell</div>
                <div className="text-gray-400 text-sm">Aid Distributor</div>
              </div>
            </div>
          </div>

          {/* Card 2 - Lime Green (Featured) */}
          <div className="bg-[#c8ff5c] border-2 border-black rounded-3xl p-8 space-y-6">
            <p className="text-black leading-relaxed font-semibold">
              "Working on the ground, I've seen firsthand how difficult it can be to ensure that aid truly reaches the
              people who need it most. With Fundflow, that challenge became significantly easier. The platform provides
              real-time transparency, clear communication, and reliable tracking that gives both donors and field
              workers complete confidence."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-700 overflow-hidden">
                <img src="/mulyo-profile.jpg" alt="Mulyo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-black font-semibold">Mulyo Basuki</div>
                <div className="text-gray-700 text-sm">Beneficiary</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Dark */}
          <div className="bg-gray-900/90 backdrop-blur border-2 border-gray-700 rounded-3xl p-8 space-y-6">
            <p className="text-white leading-relaxed">
              "Thanks to Fundflow, we were able to coordinate aid faster and more efficiently. The platform ensures
              accountability while empowering communities on the ground."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                <img src="/placeholder.svg?height=40&width=40" alt="Olivia" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold">Olivia</div>
                <div className="text-gray-400 text-sm">Community Coordinator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
