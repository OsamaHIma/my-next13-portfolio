import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import Footer from '../components/Footer'
import Navbar from '../components/portfolio/Navbar'
import GrainOverlay from '../components/portfolio/GrainOverlay'

import { getLocale } from '#/paraglide/runtime'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      const locale = getLocale()
      document.documentElement.setAttribute('lang', locale)
      document.documentElement.setAttribute(
        'dir',
        locale === 'ar' ? 'rtl' : 'ltr',
      )
    }
  },

  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Osama Ibrahim — Front End Developer & Builder' },
      {
        name: 'description',
        content:
          '3+ years crafting high-performance React & Next.js apps. Shipped platforms serving 76,000+ users with 97 Lighthouse scores.',
      },
      { name: 'theme-color', content: '#06060C' },
      { property: 'og:title', content: 'Osama Ibrahim — Front End Developer' },
      {
        property: 'og:description',
        content:
          'Portfolio of Osama Ibrahim. React, Next.js, TypeScript, and more.',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Instrument+Serif:ital@0;1&family=Readex+Pro:wght@160..700&family=Syne:wght@400..800&display=swap',
        rel: 'stylesheet',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = getLocale()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const { location } = useRouterState()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className="ltr:font-display rtl:font-arabic-display antialiased text-portfolio-cream bg-portfolio-bg"
        dir={dir}
      >
        <GrainOverlay />
        {!isAdmin && <Navbar />}
        {children}
        {!isAdmin && <Footer />}
        <Scripts />
      </body>
    </html>
  )
}
