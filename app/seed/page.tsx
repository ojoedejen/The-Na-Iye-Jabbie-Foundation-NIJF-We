"use client"

import { seedCampaignsAdmin } from "@/app/actions/seed-campaigns-admin"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SeedPage() {
    const [result, setResult] = useState<any>(null)

    const handleSeed = async () => {
        const res = await seedCampaignsAdmin()
        setResult(res)
    }

    return (
        <div className="p-20">
            <h1>Seeding Page</h1>
            <Button onClick={handleSeed}>Seed Database</Button>
            <pre className="mt-4 p-4 bg-gray-100 rounded">
                {JSON.stringify(result, null, 2)}
            </pre>
        </div>
    )
}
