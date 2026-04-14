import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { getLocale, setLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import { cn } from '#/lib/utils'

const NAV_LINKS = [
  { key: 'work', href: '#work' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
] as const

function getNavLabel(key: string) {
  const labels: Record<string, () => string> = {
    work: m.nav_work,
    about: m.nav_about,
    skills: m.nav_skills,
    contact: m.nav_contact,
  }
  return labels[key]?.() ?? key
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const locale = getLocale()
  const isRtl = locale === 'ar'

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en')
  }

  return (
    <header
      id="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between transition-all duration-400',
        scrolled
          ? 'bg-[rgba(6,6,12,0.78)] backdrop-blur-xl border-b border-[rgba(237,234,222,0.07)]'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-2xl tracking-wider flex-shrink-0 no-underline"
      >
        <span className="text-portfolio-cream">Osama</span>
        <span className="text-portfolio-gold">.</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {NAV_LINKS.map((link) => (
          <a key={link.key} href={link.href} className="nl">
            {getNavLabel(link.key)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Available badge */}
        <div className="ab hidden xs:inline-flex sm:inline-flex">
          <div className="pulse-dot"></div>
          <span className="hidden sm:inline">{m.nav_available()}</span>
        </div>

        {/* Locale toggle */}
        <button
          onClick={toggleLocale}
          className="rounded ltr:font-arabic-display! border border-portfolio-border-light px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-portfolio-cream-dim transition-colors hover:border-portfolio-gold hover:text-portfolio-gold"
        >
          {isRtl ? 'EN' : 'عربي'}
        </button>

        {/* Mobile hamburger */}
        <button
          className={cn(
            'flex flex-col gap-[5px] bg-none border-none p-[6px] w-[30px] md:hidden group',
            mobileOpen && 'open',
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-5 h-px bg-[rgba(237,234,222,0.55)] transition-all duration-300',
              mobileOpen && 'translate-y-[6px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[rgba(237,234,222,0.55)] transition-all duration-300',
              mobileOpen && 'opacity-0 w-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[rgba(237,234,222,0.55)] transition-all duration-300',
              mobileOpen && '-translate-y-[6px] -rotate-45',
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 bg-[rgba(6,6,12,0.96)] backdrop-blur-xl border-b border-[rgba(237,234,222,0.07)] z-[49] flex flex-col md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[12px] font-600 tracking-[0.18em] uppercase text-[rgba(237,234,222,0.5)] no-underline p-[14px_20px] border-b border-[rgba(237,234,222,0.05)] transition-all duration-200 hover:text-portfolio-cream hover:bg-[rgba(200,151,58,0.04)] last:border-none"
                onClick={() => setMobileOpen(false)}
              >
                {getNavLabel(link.key)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
