import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  const { data: donations } = await supabase
    .from("donations")
    .select("*, campaigns(title)")
    .eq("donor_id", data.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome, {profile?.full_name || data.user.email}</h1>
        <p className="text-muted-foreground">Manage your donations and campaigns</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Donated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">LE {profile?.total_donated || 0}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Donations Made</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{donations?.length || 0}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          {donations && donations.length > 0 ? (
            <div className="space-y-4">
              {donations.map((donation: any) => (
                <div key={donation.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{donation.campaigns?.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(donation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="font-bold">
                    {donation.currency} {donation.amount}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No donations yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
