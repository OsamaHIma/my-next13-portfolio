import { motion } from 'motion/react'
import { getLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import type { Project } from '#/lib/supabase'
import { Badge } from '#/components/ui/badge'

type Props = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const locale = getLocale()
  const isAr = locale === 'ar'
  const name = isAr ? project.name_ar : project.name_en
  const description = isAr ? project.description_ar : project.description_en
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="pcard bg-[#06060C] p-5 sm:p-8 md:p-10 sr vis h-full flex flex-col">
      <div className="co"></div>
      <div className="cb"></div>

      <div className="flex items-start justify-between mb-5 sm:mb-8">
        <span className="text-xs text-portfolio-gold tracking-widest border border-portfolio-gold/20 px-2 py-0.5">
          {number}
        </span>
        {project.live_url && (
          <div className="vl">
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase text-portfolio-gold no-underline"
            >
              {m.work_visit()} →
            </a>
          </div>
        )}
      </div>

      <div
        className="h-32 sm:h-40 md:h-48 mb-5 sm:mb-7 rounded-sm overflow-hidden"
        style={{
          background:
            project.gradient ||
            'linear-gradient(135deg,#0F0E1A,#1A1428,#0C1018)',
        }}
      >
        {project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={name}
            className="size-full object-cover project-image"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl sm:text-4xl md:text-5xl opacity-10 text-portfolio-gold">
              {project.placeholder_text || name}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-4xl text-portfolio-cream mb-2 ltr:leading-none">
        {name}
      </h3>
      <p className="text-xs sm:text-sm mb-4 text-[rgba(237,234,222,0.4)] leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] sm:text-xs tracking-widest uppercase px-2 py-1 gb text-[rgba(237,234,222,0.3)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
