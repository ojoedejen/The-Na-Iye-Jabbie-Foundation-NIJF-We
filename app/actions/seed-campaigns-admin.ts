"use server"

import { createClient } from "@supabase/supabase-js"

const SAMPLE_CAMPAIGNS = [
    {
        title: "Clean Water for Rural Villages",
        category: "HEALTH",
        goal_amount: 15000,
        description: "Providing access to clean and safe drinking water for remote villages in Sierra Leone. Waterborne diseases are a major cause of illness, and this project aims to build wells and filtration systems.",
        organization_name: "Water For All",
        status: "active",
        image_url: "/images/Event Project.jpeg"
    },
    {
        title: "School Supplies for 500 Children",
        category: "EDUCATION",
        goal_amount: 5000,
        description: "Equipping underprivileged children with essential school supplies including backpacks, notebooks, and uniforms to ensure they can attend school with dignity and readiness.",
        organization_name: "Education First",
        status: "active",
        image_url: "/images/Your service can educate and Help a Kid.jpeg"
    },
    {
        title: "Community Solar Power Initiative",
        category: "INFRASTRUCTURE",
        goal_amount: 25000,
        description: "Installing solar panels in community centers to provide reliable electricity for lighting and charging devices, fostering better education and economic activities after dark.",
        organization_name: "Solar Vil",
        status: "active",
        image_url: "/images/Event Project Banner.jpeg"
    },
    {
        title: "Women's Agricultural Cooperative",
        category: "AGRICULTURE",
        goal_amount: 12000,
        description: "Empowering women farmers with seeds, tools, and training to start a cooperative farm. This will increase food security and provide sustainable income for their families.",
        organization_name: "Women of Earth",
        status: "active",
        image_url: "/images/farm 1.jpeg"
    },
    {
        title: "Mobile Health Clinic for Remote Areas",
        category: "HEALTH",
        goal_amount: 35000,
        description: "Funding a mobile clinic vehicle to reach isolated communities with basic healthcare, vaccinations, and maternal health checks.",
        organization_name: "Red Cross SL",
        status: "active",
        image_url: "/images/Helping the Poor with Food 6.jpeg"
    },
    {
        title: "Tech Skills Training for Youth",
        category: "EDUCATION",
        goal_amount: 8000,
        description: "A 6-month bootcamp teaching coding and digital literacy to unemployed youth, opening doors to remote work and modern career paths.",
        organization_name: "TechUp Africa",
        status: "active",
        image_url: "/images/Your service can educate and Help a Kid 2.jpeg"
    },
    {
        title: "Reforestation of Degraded Lands",
        category: "ENVIRONMENT",
        goal_amount: 18000,
        description: "Planting 10,000 native trees to restore biodiversity, prevent soil erosion, and combat climate change in affected regions.",
        organization_name: "Green Future",
        status: "active",
        image_url: "/images/farm 2.jpeg"
    },
    {
        title: "Emergency Food Relief Fund",
        category: "DISASTER",
        goal_amount: 10000,
        description: "Stockpiling essential food items to quickly respond to families displaced by seasonal floods or other emergencies.",
        organization_name: "Relief Now",
        status: "active",
        image_url: "/images/Helping the Poor with Food.jpeg"
    },
    {
        title: "Local Library Rehabilitation",
        category: "EDUCATION",
        goal_amount: 6000,
        description: "Renovating a dilapidated community library and stocking it with new books and educational resources for all ages.",
        organization_name: "Readers Club",
        status: "active",
        image_url: "/images/Event Project 2.jpeg"
    },
    {
        title: "Sanitation Facilities for Schools",
        category: "HEALTH",
        goal_amount: 9500,
        description: "Building separate, hygienic toilets for boys and girls in 3 local schools to improve sanitation and keep girls in school.",
        organization_name: "Hygiene Heroes",
        status: "active",
        image_url: "/images/Helping the Poor with Food 3.jpeg"
    }
]

export async function seedCampaignsAdmin() {
    // Determine the service role key - prefer the specific env var, fallback to anon if not set (though anon won't work for admin tasks usually)
    // Actually, for admin seeding we MUST use the service role key or a signed-in user.
    // Since we want to bypass auth for "fixing", we use service role.
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

    if (!supabaseUrl || !serviceRoleKey) {
        return { success: false, error: "Missing Supabase URL or Service Role Key" }
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey)

    // Check if the 'created_by' column allows NULL or if we need a dummy user.
    // Usually it's a UUID referencing auth.users. 
    // If the schema requires a user, we might need to create one or pick one.
    // Let's try to fetch ANY user first to use their ID, or insert without it if optional.

    // First, let's just try to insert without created_by if the schema allows it, OR use a fixed UUID if we can.
    // But usually 'created_by' is NOT NULL. 
    // Let's try to get the first user from the DB (admin can do this).

    const { data: users, error: userError } = await supabase.auth.admin.listUsers()

    let userId = null;
    if (users && users.users.length > 0) {
        userId = users.users[0].id
    } else {
        // If no users exist, create a dummy admin user? 
        // Or just fail. 
        // Let's create a seed user if none exists.
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
            email: 'admin@nijf.org',
            password: 'password123',
            email_confirm: true
        })
        if (newUser && newUser.user) {
            userId = newUser.user.id
        } else {
            console.error("Failed to find or create a user for seeding:", createError)
            // fallback: maybe the column is nullable?
        }
    }

    const campaignsToInsert = SAMPLE_CAMPAIGNS.map(c => ({
        ...c,
        created_by: userId // might be null
    }))

    // We need to handle the case where created_by is required but we have no user.
    // However, if we just created one, userId should be set.

    const { data, error } = await supabase
        .from('campaigns')
        .insert(campaignsToInsert)
        .select()

    if (error) {
        console.error("Error seeding campaigns:", error)
        return { success: false, error: error.message }
    }

    return { success: true, count: data.length, data }
}
