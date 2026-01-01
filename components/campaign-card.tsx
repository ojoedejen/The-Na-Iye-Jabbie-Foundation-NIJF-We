import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CampaignCardProps {
  image: string
  title: string
  organization: string
  raised: number
  goal: number
  category: string
  featured?: boolean
}

export function CampaignCard({
  image,
  title,
  organization,
  raised,
  goal,
  category,
  featured = false,
}: CampaignCardProps) {
  const percentage = Math.round((raised / goal) * 100)

  const donateUrl = `/donate?campaign=${encodeURIComponent(title)}&title=${encodeURIComponent(title)}&org=${encodeURIComponent(organization)}`

  return (
    <Card className="overflow-hidden border-2 border-gray-900 bg-white rounded-3xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-1.5 flex items-center gap-2">
          <Circle className="w-3 h-3 fill-red-500 text-red-500" />
          <span className="text-sm font-semibold">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-balance">{title}</h3>

        {/* Organization */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-semibold">{organization}</span>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Raised</span>
            <span className="font-semibold">
              LE {raised.toLocaleString()} ({percentage}%)
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>

        <Button asChild className="w-full bg-black text-white hover:bg-gray-900 rounded-full py-6">
          <Link href={donateUrl}>
            <Circle className="mr-2 h-5 w-5 fill-[#c8ff5c] text-[#c8ff5c]" />
            DONATE NOW
          </Link>
        </Button>

        {/* Next Button */}
        <button className="absolute bottom-6 right-6 w-12 h-12 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </Card>
  )
}
