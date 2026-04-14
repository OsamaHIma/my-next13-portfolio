import { motion } from 'motion/react'
import { getLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import type { SkillCategory } from '#/lib/supabase'

type Props = {
  categories: SkillCategory[]
}

export default function SkillsSection({ categories }: Props) {
  const locale = getLocale()
  const isAr = locale === 'ar'

  return (
    <section
      id="skills"
      className="relative border-t border-portfolio-border px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-kicker mb-4 inline-block">
            {m.skills_label()}
          </span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,5rem)] text-portfolio-cream">
            {m.skills_heading_1()}{' '}
            <span className="text-portfolio-gold font-serif italic rtl:font-arabic-accent">
              {m.skills_heading_2()}
            </span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-px bg-portfolio-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-portfolio-bg p-6 md:p-8"
            >
              <div className="mb-6 flex items-baseline gap-3">
                <span className="text-xs font-bold text-portfolio-gold opacity-50">
                  {cat.category_number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-portfolio-cream">
                  {isAr ? cat.name_ar : cat.name_en}
                </h3>
              </div>

              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="text-xs text-portfolio-cream-dim transition-colors hover:text-portfolio-gold"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
