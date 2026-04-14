import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { getLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import GridBackground from './GridBackground'
import Orbs from './Orbs'
import type { HeroStat, SiteConfig } from '#/lib/supabase'

type Props = {
  stats: HeroStat[]
  config: SiteConfig
}

export default function HeroSection({ stats, config }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const locale = getLocale()
  const isAr = locale === 'ar'

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(
        '[data-hero-line]',
        {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.15,
        },
        0.1,
      ).from(
        '[data-hero-cols]',
        {
          y: 18,
          opacity: 0,
          duration: 0.85,
        },
        0.55,
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end pb-10 sm:pb-14 md:pb-20 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      <GridBackground />
      <Orbs />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24">
        {/* Badge */}
        <div data-hero-line className="mb-5 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 gb px-3 sm:px-4 py-2 rounded-sm">
            <div className="pulse-dot"></div>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-portfolio-text-muted">
              {m.hero_badge()}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-6 sm:mb-10 md:mb-12">
          <h1 className="ltr:leading-none tracking-tight">
            <div
              data-hero-line
              className="text-[clamp(52px,12.5vw,180px)] text-portfolio-cream"
            >
              {m.hero_line1()}
            </div>
            <div
              data-hero-line
              className="text-[clamp(52px,12.5vw,180px)] flex items-baseline gap-1 sm:gap-3 flex-wrap leading-none"
            >
              <span className="text-portfolio-cream">
                {m.hero_line2_start()}
              </span>
              <span
                className="ltr:font-serif rtl:font-arabic-accent italic text-portfolio-gold"
                style={{ fontSize: 'clamp(38px,9vw,130px)' }}
              >
                {m.hero_line2_end()}
              </span>
            </div>
            <div
              data-hero-line
              className="text-[clamp(52px,12.5vw,180px)] opacity-[0.09] text-portfolio-cream"
            >
              {m.hero_line3()}
            </div>
          </h1>
        </div>

        {/* CTA row */}
        <div
          data-hero-cols
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-12 items-end"
        >
          <div>
            <p
              className="text-sm sm:text-base leading-relaxed text-portfolio-text-muted max-w-[460px]"
              dangerouslySetInnerHTML={{
                __html: isAr
                  ? config.hero_subtitle_ar
                  : config.hero_subtitle_en,
              }}
            />
          </div>
          <div className="flex flex-row gap-3 sm:gap-4">
            <a href="#work" className="cta-btn flex-1 sm:flex-none">
              <span>{m.hero_cta_work()}</span>
            </a>
            <a
              href={config.cv_url}
              target="_blank"
              rel="noreferrer"
              className="cta-outline flex-1 sm:flex-none"
            >
              <span>{m.hero_cta_cv()}</span>
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-8 sm:mt-14 md:mt-20 grid grid-cols-3 gb-t pt-5 sm:pt-7 md:pt-8">
          {stats.slice(0, 3).map((stat, idx) => (
            <div
              key={stat.id}
              className={`${idx < 2 ? 'gb-r' : ''} ${idx === 0 ? 'pr-3 sm:pr-8' : idx === 1 ? 'px-3 sm:px-8' : 'pl-3 sm:pl-8'}`}
            >
              <div className="sn text-[28px] sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-xs tracking-widest uppercase mt-1 text-[rgba(237,234,222,0.3)]">
                {isAr ? stat.label_ar : stat.label_en}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
