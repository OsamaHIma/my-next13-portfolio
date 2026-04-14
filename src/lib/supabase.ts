import { createClient } from '@supabase/supabase-js'
import { env } from '@/env'

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// --- Type definitions for portfolio data ---

export type Project = {
  id: string
  sort_order: number
  is_featured: boolean
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  tags: string[]
  images: string[]
  live_url: string | null
  source_url: string | null
  gradient: string
  placeholder_text: string | null
  display: boolean
}

export type Experience = {
  id: string
  sort_order: number
  year_label: string
  title_en: string
  title_ar: string
  company: string
  company_logo: string | null
}

export type SkillCategory = {
  id: string
  sort_order: number
  category_number: string
  name_en: string
  name_ar: string
  skills: Skill[]
}

export type Skill = {
  id: string
  category_id: string
  name: string
  sort_order: number
}

export type HeroStat = {
  id: string
  sort_order: number
  value: string
  label_en: string
  label_ar: string
}

export type SiteConfig = {
  id: string
  about_paragraphs_en: string[]
  about_paragraphs_ar: string[]
  hero_subtitle_en: string
  hero_subtitle_ar: string
  email: string
  linkedin_url: string
  github_url: string
  facebook_url: string
  cv_url: string
  marquee_items: string[]
}

// --- Data fetching functions ---

export async function fetchProjects(all: boolean = false) {
  let query = supabase.from('projects').select('*')

  if (!all) {
    query = query.eq('display', true)
  }

  const { data, error } = await query.order('sort_order')
  if (error) throw error
  return data as Project[]
}

export async function fetchExperiences() {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('sort_order')
  if (error) throw error
  return data as Experience[]
}

export async function fetchSkillCategories() {
  const { data, error } = await supabase
    .from('skill_categories')
    .select('*, skills(*)')
    .order('sort_order')
  if (error) throw error
  return (data as SkillCategory[]).map((cat) => ({
    ...cat,
    skills: (cat.skills || []).sort((a, b) => a.sort_order - b.sort_order),
  }))
}

export async function fetchHeroStats() {
  const { data, error } = await supabase
    .from('hero_stats')
    .select('*')
    .order('sort_order')
  if (error) throw error
  return data as HeroStat[]
}

export async function fetchSiteConfig() {
  const { data, error } = await supabase
    .from('site_config')
    .select('*')
    .limit(1)
    .single()
  if (error) throw error
  return data as SiteConfig
}

export async function insertContactMessage(msg: {
  name: string
  email: string
  message: string
}) {
  const { error } = await supabase.from('contact_messages').insert(msg)
  if (error) throw error
}
