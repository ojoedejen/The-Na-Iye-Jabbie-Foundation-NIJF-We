import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/image.png)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          BECOME PART OF A<br />
          COMPASSIONATE COMMUNITY
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Together, we can close the gap between those who want to help and those who urgently need it.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black text-base px-8"
          >
            <Link href="/donate">
              DONATE NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent backdrop-blur text-white hover:bg-white hover:text-black text-base px-8"
          >
            <Link href="/create-campaign">
              <Circle className="mr-2 h-5 w-5" /> START A CAMPAIGN
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
