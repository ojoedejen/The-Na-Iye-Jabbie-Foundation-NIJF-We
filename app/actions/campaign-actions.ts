"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createCampaign(formData: FormData) {
  const supabase = await createClient()

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return { success: false, error: "You must be logged in to create a campaign" }
  }

  // Extract form data
  const title = formData.get("title") as string
  const category = formData.get("category") as string
  const goalAmount = Number.parseFloat(formData.get("goalAmount") as string)
  const description = formData.get("description") as string
  const organizationName = formData.get("organizationName") as string
  const contactEmail = formData.get("contactEmail") as string

  // Validate required fields
  if (!title || !category || !goalAmount || !description || !organizationName || !contactEmail) {
    return { success: false, error: "All fields are required" }
  }

  if (goalAmount <= 0) {
    return { success: false, error: "Goal amount must be greater than 0" }
  }

  console.log("[v0] Creating campaign with data:", {
    title,
    category,
    goalAmount,
    description,
    organizationName,
    contactEmail,
  })

  // Insert into campaigns table
  const { data, error } = await supabase
    .from("campaigns")
    .insert({
      title,
      category,
      goal_amount: goalAmount,
      description,
      created_by: user.id,
      status: "active",
    })
    .select()
    .single()

  if (error) {
    console.error("[v0] Error creating campaign:", error)
    return { success: false, error: error.message }
  }

  console.log("[v0] Campaign created successfully:", data)

  // Revalidate the campaigns page
  revalidatePath("/campaigns")

  return { success: true, data }
}
