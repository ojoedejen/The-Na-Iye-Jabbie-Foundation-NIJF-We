import { HeroSection } from "@/components/hero-section"
import { FeaturedCampaigns } from "@/components/featured-campaigns"
import { HowItWorks } from "@/components/how-it-works"
import { JourneySection } from "@/components/journey-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCampaigns />
      <HowItWorks />
      <JourneySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
