import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function TestimonialsSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20, 30, 20, 0.8), rgba(20, 30, 20, 0.7)), url('/images/your-service-can-educate-and-help-a-kid-2.jpeg')",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-primary/30 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-primary-foreground font-semibold tracking-wide">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl text-white mb-6 font-sans font-black">WHAT PEOPLE SAY ABOUT US</h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg font-medium">
              Hear real stories and experiences from donors and beneficiaries who trust The Na-Iye Jabbie Foundation to
              make every contribution meaningful.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Dark */}
          <ScrollReveal delay={100}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6 hover:bg-white/15 transition-colors">
              <p className="text-white leading-relaxed">
                "The Na-Iye Jabbie Foundation made the entire distribution process seamless and transparent. Every
                donation reached the people who truly needed it, and I felt fully supported throughout the mission."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/50 overflow-hidden border-2 border-white/30">
                  <img src="/images/helping-the-poor-with-food-5.jpeg" alt="Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Mitchell</div>
                  <div className="text-white/60 text-sm">Aid Distributor</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 - Featured */}
          <ScrollReveal delay={200}>
            <div className="bg-accent border-2 border-primary rounded-3xl p-8 space-y-6 transform md:-translate-y-4 shadow-xl">
              <p className="text-accent-foreground leading-relaxed font-semibold">
                "Working on the ground, I've seen firsthand how difficult it can be to ensure that aid truly reaches the
                people who need it most. With The Na-Iye Jabbie Foundation, that challenge became significantly easier.
                The platform provides real-time transparency, clear communication, and reliable tracking."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary overflow-hidden">
                  <img src="/images/helping-the-poor-with-food-6.jpeg" alt="Mulyo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-accent-foreground font-black">Mulyo Basuki</div>
                  <div className="text-accent-foreground/80 text-sm font-bold">Beneficiary</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 - Dark */}
          <ScrollReveal delay={300}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6 hover:bg-white/15 transition-colors">
              <p className="text-white leading-relaxed">
                "Thanks to The Na-Iye Jabbie Foundation, we were able to coordinate aid faster and more efficiently. The
                platform ensures accountability while empowering communities on the ground."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/50 overflow-hidden border-2 border-white/30">
                  <img src="/images/helping-the-poor-with-food-4.jpeg" alt="Olivia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-semibold">Olivia</div>
                  <div className="text-white/60 text-sm">Community Coordinator</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
