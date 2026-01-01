import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CampaignCard } from "@/components/campaign-card"

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "SUPPORT VICTIMS OF THE FLOOD IN ACEH",
      organization: "World Disaster Response Foundation",
      raised: 21800,
      goal: 60000,
      category: "FLOOD",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "EMERGENCY RELIEF FOR SUMATRA FLOOD VICTIMS",
      organization: "CareRelief Indonesia",
      raised: 42380,
      goal: 65000,
      category: "FLOOD",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "SUPPORT EVACUATION AFTER MOUNT ERUPTION",
      organization: "Humanity First Response Team",
      raised: 9850,
      goal: 43000,
      category: "ERUPTION",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">All Campaigns</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Discover urgent causes that need your support. Every campaign is verified, transparent, and driven by
          communities working together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
