"use server"

import { createClient } from "@/lib/supabase/server"

const SAMPLE_CAMPAIGNS = [
    {
        title: "Clean Water for Rural Villages",
        category: "HEALTH",
        goal_amount: 15000,
        description: "Providing access to clean and safe drinking water for remote villages in Sierra Leone. Waterborne diseases are a major cause of illness, and this project aims to build wells and filtration systems.",
        organization_name: "Water For All",
        status: "active",
        image_url: "/images/event-project.jpeg"
    },
    {
        title: "School Supplies for 500 Children",
        category: "EDUCATION",
        goal_amount: 5000,
        description: "Equipping underprivileged children with essential school supplies including backpacks, notebooks, and uniforms to ensure they can attend school with dignity and readiness.",
        organization_name: "Education First",
        status: "active",
        image_url: "/images/your-service-can-educate-and-help-a-kid.jpeg"
    },
    {
        title: "Community Solar Power Initiative",
        category: "INFRASTRUCTURE",
        goal_amount: 25000,
        description: "Installing solar panels in community centers to provide reliable electricity for lighting and charging devices, fostering better education and economic activities after dark.",
        organization_name: "Solar Vil",
        status: "active",
        image_url: "/images/event-project-banner.jpeg"
    },
    {
        title: "Women's Agricultural Cooperative",
        category: "AGRICULTURE",
        goal_amount: 12000,
        description: "Empowering women farmers with seeds, tools, and training to start a cooperative farm. This will increase food security and provide sustainable income for their families.",
        organization_name: "Women of Earth",
        status: "active",
        image_url: "/images/farm-1.jpeg"
    },
    {
        title: "Mobile Health Clinic for Remote Areas",
        category: "HEALTH",
        goal_amount: 35000,
        description: "Funding a mobile clinic vehicle to reach isolated communities with basic healthcare, vaccinations, and maternal health checks.",
        organization_name: "Red Cross SL",
        status: "active",
        image_url: "/images/helping-the-poor-with-food-6.jpeg"
    },
    {
        title: "Tech Skills Training for Youth",
        category: "EDUCATION",
        goal_amount: 8000,
        description: "A 6-month bootcamp teaching coding and digital literacy to unemployed youth, opening doors to remote work and modern career paths.",
        organization_name: "TechUp Africa",
        status: "active",
        image_url: "/images/your-service-can-educate-and-help-a-kid-2.jpeg"
    },
    {
        title: "Reforestation of Degraded Lands",
        category: "ENVIRONMENT",
        goal_amount: 18000,
        description: "Planting 10,000 native trees to restore biodiversity, prevent soil erosion, and combat climate change in affected regions.",
        organization_name: "Green Future",
        status: "active",
        image_url: "/images/farm-2.jpeg"
    },
    {
        title: "Emergency Food Relief Fund",
        category: "DISASTER",
        goal_amount: 10000,
        description: "Stockpiling essential food items to quickly respond to families displaced by seasonal floods or other emergencies.",
        organization_name: "Relief Now",
        status: "active",
        image_url: "/images/helping-the-poor-with-food.jpeg"
    },
    {
        title: "Local Library Rehabilitation",
        category: "EDUCATION",
        goal_amount: 6000,
        description: "Renovating a dilapidated community library and stocking it with new books and educational resources for all ages.",
        organization_name: "Readers Club",
        status: "active",
        image_url: "/images/event-project-2.jpeg"
    },
    {
        title: "Sanitation Facilities for Schools",
        category: "HEALTH",
        goal_amount: 9500,
        description: "Building separate, hygienic toilets for boys and girls in 3 local schools to improve sanitation and keep girls in school.",
        organization_name: "Hygiene Heroes",
        status: "active",
        image_url: "/images/helping-the-poor-with-food-3.jpeg"
    }
]

export async function seedCampaigns() {
    const supabase = await createClient()

    // We need a user ID to link created_by. 
    // For seeding, we'll try to get the current session user.
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { success: false, error: "No authenticated user found to assign campaigns to. Please log in first." }
    }

    const campaignsWithUser = SAMPLE_CAMPAIGNS.map(c => ({
        ...c,
        created_by: user.id
    }))

    const { data, error } = await supabase
        .from('campaigns')
        .insert(campaignsWithUser)
        .select()

    if (error) {
        console.error("Error seeding campaigns:", error)
        return { success: false, error: error.message }
    }

    return { success: true, count: data.length, data }
}
