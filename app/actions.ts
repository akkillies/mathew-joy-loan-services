"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone: string
  loanType: string
  loanAmount: string
  message?: string
  createdAt: string
}

export async function submitLeadToSupabase(data: LeadData) {
  try {
    const { error } = await supabase.from("leads").insert([
      {
        data: data, // Store as JSONB
        created_at: new Date().toISOString(),
      },
    ])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error submitting lead to Supabase:", error)
    return { success: false, error }
  }
}
