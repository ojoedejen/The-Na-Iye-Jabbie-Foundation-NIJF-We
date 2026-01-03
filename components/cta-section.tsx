import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTASection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/smiling-children.png)",
      }}
    >
      <div className="container mx-auto text-center px-6">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight font-sans font-black">
            BECOME PART OF A<br />
            COMPASSIONATE COMMUNITY
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
            Together, we can close the gap between those who want to help and those who urgently need it.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white text-primary hover:bg-white/90 text-base px-8 h-14 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <Link href="/donate">
                DONATE NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent backdrop-blur-sm text-white hover:bg-white/10 text-base px-8 h-14 rounded-full hover:scale-105 transition-all"
            >
              <Link href="/create-campaign">
                <Circle className="mr-2 h-5 w-5 fill-current" /> START A CAMPAIGN
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
