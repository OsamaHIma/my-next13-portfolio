import * as m from '#/paraglide/messages'

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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="gb-t px-4 sm:px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
      <a href="#" className="text-xl tracking-wider no-underline">
        <span className="text-portfolio-cream">Osama</span>
        <span className="text-portfolio-gold">.</span>
      </a>
      <div className="flex gap-5 sm:gap-8">
        {NAV_LINKS.filter((l) => l.key !== 'skills').map((link) => (
          <a key={link.key} href={link.href} className="nl">
            {getNavLabel(link.key)}
          </a>
        ))}
      </div>
      <p className="text-xs text-[rgba(237,234,222,0.2)] tracking-[0.04em]">
        © {year} Osama Ibrahim 🇪🇬
      </p>
    </footer>
  )
}
