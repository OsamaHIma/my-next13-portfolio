import { motion } from 'motion/react'
import { getLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import type { Experience, SiteConfig } from '#/lib/supabase'
import { Mail, Linkedin, Github, Facebook } from 'lucide-react'

type Props = {
  experiences: Experience[]
  config: SiteConfig
}

export default function AboutSection({ experiences, config }: Props) {
  const locale = getLocale()
  const isAr = locale === 'ar'
  const paragraphs = isAr
    ? config.about_paragraphs_ar
    : config.about_paragraphs_en

  const socialLinks = [
    { icon: Mail, label: config.email, href: `mailto:${config.email}` },
    { icon: Linkedin, label: 'LinkedIn', href: config.linkedin_url },
    { icon: Github, label: 'GitHub', href: config.github_url },
    { icon: Facebook, label: 'Facebook', href: config.facebook_url },
  ]

  return (
    <section
      id="about"
      className="relative border-t border-portfolio-border px-6 py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left – heading + timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-kicker mb-4 inline-block">
              {m.about_label()}
            </span>
            <h2 className="section-heading mb-12 text-[clamp(2.5rem,6vw,5rem)] text-portfolio-cream">
              {m.about_heading_1()}{' '}
              <span className="text-portfolio-gold font-serif italic rtl:font-arabic-accent">{m.about_heading_2()}</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-0 border-s border-portfolio-border-light ps-8 rtl:border-e rtl:border-s-0 rtl:pe-8 rtl:ps-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative py-4"
              >
                {/* Dot */}
                <div className="absolute -start-[calc(1rem+4.5px)] top-6 size-2 rounded-full bg-portfolio-gold rtl:-end-[calc(1rem+4.5px)]" />

                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-portfolio-text-muted">
                  {exp.year_label}
                </span>
                <h3 className="mt-1 text-sm font-bold text-portfolio-cream">
                  {isAr ? exp.title_ar : exp.title_en}
                </h3>
                {exp.company && (
                  <p className="mt-0.5 text-xs text-portfolio-cream-dim">
                    {exp.company}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right – bio + social */}
        <div className="flex flex-col justify-center">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-sm leading-relaxed text-portfolio-cream-dim"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2 rounded border border-portfolio-border-light px-3 py-2 text-[0.65rem] uppercase tracking-[0.1em] text-portfolio-cream-dim no-underline transition-all hover:border-portfolio-gold hover:text-portfolio-gold"
              >
                <link.icon className="size-3.5" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
