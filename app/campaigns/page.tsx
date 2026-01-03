import { createClient } from "@/lib/supabase/server"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CampaignCard } from "@/components/campaign-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Force dynamic rendering to ensure we get fresh data
export const dynamic = "force-dynamic"

export default async function CampaignsPage() {
  const supabase = await createClient()

  const { data: campaigns, error } = await supabase
    .from("campaigns")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching campaigns:", error)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-primary">Rescue Missions</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover urgent causes that need your support. Every campaign is verified, transparent, and driven by
              communities working together.
            </p>
          </div>

          {/* Temporary Seed Button for Admin Use - In production this would be hidden/admin-only */}
          <div className="hidden">
            {/* This would be wired up to a client component to trigger seeding if needed */}
          </div>
        </div>


        {campaigns && campaigns.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                image={campaign.image_url || "/placeholder.svg?height=400&width=600"}
                title={campaign.title}
                organization={campaign.organization_name || "NIJF"}
                raised={campaign.raised_amount || 0}
                goal={campaign.goal_amount}
                category={campaign.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-8">No campaigns found yet.</p>
            <Button asChild component={Link} href="/create-campaign">
              Start the first campaign
            </Button>
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-yellow-800">
                <strong>Dev Note:</strong> If you see this, you may need to seed the database.
                Run the seed action.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
