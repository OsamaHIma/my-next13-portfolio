import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'motion/react'
import { getLocale } from '#/paraglide/runtime'
import * as m from '#/paraglide/messages'
import { Mail, Linkedin, Github } from 'lucide-react'
import { insertContactMessage } from '#/lib/supabase'
import type { SiteConfig } from '#/lib/supabase'
import { cn } from '#/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

type ContactForm = z.infer<typeof contactSchema>

type Props = {
  config: SiteConfig
}

/**
 * Contact section with info panel and validated form.
 * Saves message to Supabase and opens mailto as fallback.
 * @param config - Site configuration containing email and social links.
 */
export default function ContactSection({ config }: Props) {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const locale = getLocale()
  const isAr = locale === 'ar'

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  /** Submits the contact form to Supabase and opens mailto as backup. */
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    try {
      // Save to Supabase
      await insertContactMessage(data)

      // Open mailto with pre-filled content
      const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      )
      window.open(
        `mailto:${config.email}?subject=${subject}&body=${body}`,
        '_self',
      )

      setSent(true)
    } catch {
      // If Supabase fails, still open mailto
      const vals = getValues()
      const subject = encodeURIComponent(`Portfolio Contact: ${vals.name}`)
      const body = encodeURIComponent(
        `Name: ${vals.name}\nEmail: ${vals.email}\n\n${vals.message}`,
      )
      window.open(
        `mailto:${config.email}?subject=${subject}&body=${body}`,
        '_self',
      )
      setSent(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: m.contact_email_label(),
      value: config.email,
      href: `mailto:${config.email}`,
    },
    {
      icon: Linkedin,
      label: m.contact_linkedin_label(),
      value: 'LinkedIn',
      href: config.linkedin_url,
    },
    {
      icon: Github,
      label: m.contact_github_label(),
      value: 'GitHub',
      href: config.github_url,
    },
  ]

  return (
    <section id="contact" className="gb-t">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Info panel */}
        <div className="p-6 sm:p-10 md:p-20 sr vis cl-border bg-[rgba(200,151,58,0.02)]">
          <div className="text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 text-[rgba(237,234,222,0.3)]">
            {m.contact_label()}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-portfolio-cream ltr:leading-none mb-1">
            {m.contact_heading_1()}
          </h2>
          <h2 className="ltr:font-serif rtl:font-arabic-accent italic text-portfolio-gold text-4xl sm:text-5xl md:text-7xl ltr:leading-none mb-8 sm:mb-12 md:mb-16">
            {m.contact_heading_2()}.
          </h2>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.href}
                href={info.href}
                target={info.href.startsWith('mailto') ? undefined : '_blank'}
                rel={info.href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="group flex items-center gap-4 border-b border-portfolio-border pb-4 no-underline transition-colors hover:border-portfolio-gold"
              >
                <info.icon className="size-4 text-portfolio-text-muted transition-colors group-hover:text-portfolio-gold" />
                <div>
                  <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-portfolio-text-muted">
                    {info.label}
                  </span>
                  <span className="text-sm text-portfolio-cream transition-colors group-hover:text-portfolio-gold">
                    {info.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-6 sm:p-10 md:p-20 sr vis"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-12 sm:py-20"
              >
                <div className="text-6xl text-portfolio-gold mb-3">✓</div>
                <h3 className="text-2xl sm:text-3xl text-portfolio-cream mb-2">
                  {m.contact_success_title()}
                </h3>
                <p className="text-sm text-[rgba(237,234,222,0.4)]">
                  {m.contact_success_text()}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-3 mb-5">
                  {/* Name field */}
                  <div>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder={m.contact_name_placeholder()}
                      className={cn('gi', errors.name && 'border-red-500')}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5 ms-1">
                        {m.contact_error_name()}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={m.contact_email_placeholder()}
                      className={cn('gi', errors.email && 'border-red-500')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5 ms-1">
                        {m.contact_error_email()}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <textarea
                      {...register('message')}
                      placeholder={m.contact_message_placeholder()}
                      className={cn('gi', errors.message && 'border-red-500')}
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 ms-1">
                        {m.contact_error_message()}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-btn w-full disabled:opacity-50"
                >
                  <span>{isSubmitting ? '...' : m.contact_send()}</span>
                </button>

                <p className="text-xs mt-3 text-center tracking-wider text-[rgba(237,234,222,0.2)]">
                  {m.contact_disclaimer()}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
