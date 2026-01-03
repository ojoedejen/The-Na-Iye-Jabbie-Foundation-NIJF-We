import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CampaignCardProps {
  id: number
  image: string
  title: string
  organization: string
  raised: number
  goal: number
  category: string
  featured?: boolean
}

export function CampaignCard({
  id,
  image,
  title,
  organization,
  raised,
  goal,
  category,
  featured = false,
}: CampaignCardProps) {
  const percentage = Math.round((raised / goal) * 100)

  const donateUrl = `/donate?campaignId=${id}`
  const detailUrl = `/campaigns/${id}`

  return (
    <Card className="overflow-hidden border-2 border-gray-900 bg-white rounded-3xl h-full flex flex-col">
      {/* Image */}
      <Link href={detailUrl} className="relative h-64 overflow-hidden block group">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105" />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-1.5 flex items-center gap-2">
          <Circle className="w-3 h-3 fill-red-500 text-red-500" />
          <span className="text-sm font-semibold">{category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <Link href={detailUrl} className="hover:underline">
          <h3 className="text-xl font-bold text-balance line-clamp-2">{title}</h3>
        </Link>

        {/* Organization */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white font-bold">
            {organization.charAt(0)}
          </div>
          <span className="text-sm text-gray-600 font-semibold truncate">{organization}</span>
        </div>

        {/* Progress */}
        <div className="space-y-2 mt-auto">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Raised</span>
            <span className="font-semibold">
              ${raised.toLocaleString()} ({percentage}%)
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <Button asChild variant="outline" className="w-full rounded-full border-2 border-gray-200 hover:border-black transition-colors">
            <Link href={detailUrl}>
              DETAILS
            </Link>
          </Button>
          <Button asChild className="w-full bg-black text-white hover:bg-gray-900 rounded-full">
            <Link href={donateUrl}>
              DONATE
            </Link>
          </Button>
        </div>

      </div>
    </Card>
  )
}
