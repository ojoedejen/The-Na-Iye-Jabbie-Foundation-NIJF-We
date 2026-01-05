import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Share2, Target, User } from "lucide-react"

// Force dynamic rendering for this page since it relies on params
export const dynamic = "force-dynamic"

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()

    const { data: campaign, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("id", id)
        .single()

    if (error || !campaign) {
        notFound()
    }

    // Calculate percentage
    const percentage = Math.min(Math.round(((campaign.raised_amount || 0) / campaign.goal_amount) * 100), 100)

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="relative h-[60vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <img
                        src={campaign.image_url || "/placeholder.svg?height=800&width=1200"}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12 text-white">
                    <Link
                        href="/campaigns"
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Campaigns
                    </Link>
                    <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full">{campaign.category}</span>
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {new Date(campaign.created_at).toLocaleDateString()}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 leading-tight">
                        {campaign.title}
                    </h1>
                    <div className="flex items-center gap-2 text-white/90">
                        <User className="h-5 w-5" />
                        <span className="font-medium">Organized by {campaign.organization_name || "The Foundation"}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-card rounded-2xl p-8 border shadow-sm">
                            <h2 className="text-2xl font-bold font-serif mb-6">About this campaign</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-wrap">
                                {campaign.description}
                            </div>
                        </div>

                        {/* Additional Info / Updates could go here */}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-card rounded-2xl p-6 border shadow-lg sticky top-24">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-3xl font-bold text-foreground">
                                            ${(campaign.raised_amount || 0).toLocaleString()}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            raised of ${campaign.goal_amount.toLocaleString()} goal
                                        </span>
                                    </div>
                                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                                        <span>{percentage}% funded</span>
                                        <span>{campaign.donor_count || 0} donors</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Button size="lg" className="w-full text-lg h-12" asChild>
                                        <Link href={`/donate?campaignId=${campaign.id}`}>Donate</Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full text-lg h-12">
                                        <Share2 className="mr-2 h-4 w-4" /> Share Campaign
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
