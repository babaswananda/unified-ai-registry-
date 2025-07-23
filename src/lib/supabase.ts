import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface HandleRegistration {
  id: string
  handle: string
  email: string
  category: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

export interface AgentSubmission {
  id: string
  name: string
  description: string
  category: string
  creator_email: string
  github_url?: string
  demo_url?: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

export interface MarketplaceItem {
  id: string
  name: string
  description: string
  category: 'agent' | 'tool' | 'personality' | 'service'
  price: number
  creator_id: string
  status: 'active' | 'inactive'
  created_at: string
  updated_at: string
}

// Helper functions
export const registerHandle = async (data: Omit<HandleRegistration, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
  const { data: result, error } = await supabase
    .from('handle_registrations')
    .insert([{ ...data, status: 'pending' }])
    .select()
    .single()

  if (error) throw error
  return result
}

export const submitAgent = async (data: Omit<AgentSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
  const { data: result, error } = await supabase
    .from('agent_submissions')
    .insert([{ ...data, status: 'pending' }])
    .select()
    .single()

  if (error) throw error
  return result
}

export const getMarketplaceItems = async (category?: string) => {
  let query = supabase
    .from('marketplace_items')
    .select('*')
    .eq('status', 'active')

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}
