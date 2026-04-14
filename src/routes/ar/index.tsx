import { createFileRoute } from '@tanstack/react-router'
import {
  fetchProjects,
  fetchExperiences,
  fetchSkillCategories,
  fetchHeroStats,
  fetchSiteConfig,
} from '#/lib/supabase'

import HeroSection from '#/components/portfolio/HeroSection'
import MarqueeStrip from '#/components/portfolio/MarqueeStrip'
import ProjectsSection from '#/components/portfolio/ProjectsSection'
import AboutSection from '#/components/portfolio/AboutSection'
import SkillsSection from '#/components/portfolio/SkillsSection'
import ContactSection from '#/components/portfolio/ContactSection'

export const Route = createFileRoute('/ar/')({
  loader: async () => {
    const [projects, experiences, skillCategories, heroStats, siteConfig] =
      await Promise.all([
        fetchProjects(),
        fetchExperiences(),
        fetchSkillCategories(),
        fetchHeroStats(),
        fetchSiteConfig(),
      ])

    return { projects, experiences, skillCategories, heroStats, siteConfig }
  },
  component: Portfolio,
})

function Portfolio() {
  const { projects, experiences, skillCategories, heroStats, siteConfig } =
    Route.useLoaderData()

  return (
    <main>
      <HeroSection stats={heroStats} config={siteConfig} />
      <MarqueeStrip items={siteConfig.marquee_items} />
      <ProjectsSection projects={projects} />
      <AboutSection experiences={experiences} config={siteConfig} />
      <SkillsSection categories={skillCategories} />
      <ContactSection config={siteConfig} />
    </main>
  )
}
