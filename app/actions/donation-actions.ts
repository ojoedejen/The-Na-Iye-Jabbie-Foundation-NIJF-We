"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createDonation(formData: FormData) {
  const supabase = await createClient()

  // Extract form data
  const campaignId = formData.get("campaignId") as string | null
  const amount = Number.parseFloat(formData.get("amount") as string)
  const currency = formData.get("currency") as string
  const paymentMethod = formData.get("paymentMethod") as string
  const donorEmail = formData.get("donorEmail") as string
  const frequency = formData.get("frequency") as string
  const donationType = formData.get("donationType") as string

  // Validate required fields
  if (!amount || !paymentMethod || !donorEmail || !currency) {
    return { success: false, error: "Amount, payment method, and email are required" }
  }

  if (amount <= 0) {
    return { success: false, error: "Donation amount must be greater than 0" }
  }

  // Get the current user (optional for donations)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("[v0] Creating donation with data:", {
    campaignId,
    amount,
    currency,
    paymentMethod,
    donorEmail,
    frequency,
    donationType,
  })

  // Prepare donation data
  const donationData: any = {
    amount,
    currency,
    payment_method: paymentMethod,
    donor_email: donorEmail,
    status: "completed",
  }

  // Add campaign ID if it's a specific donation
  if (donationType === "specific" && campaignId) {
    donationData.campaign_id = campaignId
  }

  // Add donor ID if user is logged in
  if (user) {
    donationData.donor_id = user.id
  }

  // Insert into donations table
  const { data, error } = await supabase.from("donations").insert(donationData).select().single()

  if (error) {
    console.error("[v0] Error creating donation:", error)
    return { success: false, error: error.message }
  }

  console.log("[v0] Donation created successfully:", data)

  // If there's a campaign, update the raised amount
  if (campaignId) {
    const { error: updateError } = await supabase.rpc("increment_campaign_raised", {
      campaign_id: campaignId,
      amount_to_add: amount,
    })

    if (updateError) {
      console.error("[v0] Error updating campaign raised amount:", updateError)
    }
  }

  // Update user's total donated if logged in
  if (user) {
    const { error: profileError } = await supabase.rpc("increment_user_total_donated", {
      user_id: user.id,
      amount_to_add: amount,
    })

    if (profileError) {
      console.error("[v0] Error updating user total donated:", profileError)
    }
  }

  // Revalidate relevant pages
  revalidatePath("/")
  revalidatePath("/campaigns")
  if (campaignId) {
    revalidatePath(`/campaigns/${campaignId}`)
  }

  return { success: true, data }
}
