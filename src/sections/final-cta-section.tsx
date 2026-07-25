import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import { socialLinks } from '../data/social-links'
import { contactEmail } from '../lib/site-mode'

export function FinalCtaSection() {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const offerBullets = [
    isFrench ? 'UI UX Design' : 'UI UX Design',
    isFrench ? 'Développement web' : 'Web Development',
    isFrench ? 'IA & automatisation' : 'AI & automation',
    isFrench ? 'Formations IA' : 'AI training',
    isFrench ? 'Growth Ops' : 'Growth Ops'
  ]

  useEffect(() => {
    if (window.location.hash !== '#contact') {
      return
    }

    const alignToSection = () => {
      document.getElementById('contact')?.scrollIntoView({ block: 'start' })
    }

    const timeoutId = window.setTimeout(alignToSection, 120)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = isFrench
      ? `Demande MAPBRAIN${company ? ` - ${company}` : ''}`
      : `MAPBRAIN inquiry${company ? ` - ${company}` : ''}`

    const body = [
      `${isFrench ? 'Nom' : 'Name'}: ${fullName}`,
      `Email: ${email}`,
      `${isFrench ? 'Société' : 'Company'}: ${company || '-'}`,
      '',
      `${isFrench ? 'Message' : 'Message'}:`,
      message
    ].join('\n')

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className="scroll-mt-6 border-b border-[var(--line)] bg-[var(--surface)]"
      id="contact"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[var(--line)] pb-7" data-reveal>
          <h2 className="section-title-break text-center text-[clamp(3.7rem,6vw,4.6rem)] leading-[0.96] tracking-[-0.028em] text-[var(--ink)]">
            {isFrench ? 'Parlons-en' : `Let's Talk`}
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2px] bg-[var(--accent-soft)] px-5 py-8 sm:px-8 sm:py-10 lg:px-10" data-reveal>
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)] xl:gap-9">
            <div className="border-b border-[var(--line)] pb-7 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-9">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[1.2rem]">
                  {isFrench ? 'Suivez-nous' : 'Follow us'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((item) => {
                    return (
                      <a
                        key={item.label}
                        aria-label={item.label}
                        className="inline-flex size-11 items-center justify-center rounded-[4px] bg-white text-[var(--ink)]"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <item.Icon />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--line)] pt-7">
                <div className="grid gap-6 lg:grid-cols-[168px_minmax(0,1fr)]">
                  <figure className="overflow-hidden rounded-[4px]">
                    <img
                      alt="Equipe d agence en train de travailler autour d une table"
                      className="h-[216px] w-full object-cover"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    />
                  </figure>

                  <div>
                    <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[var(--ink)]">
                      {isFrench ? 'Ce que nous proposons' : 'What we offer'}
                    </p>
                    <ul className="mt-10 space-y-3 sm:mt-12">
                      {offerBullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-[1rem] leading-7 text-[var(--ink)]">
                          <span className="size-2.5 shrink-0 bg-[var(--accent-alt)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-[var(--line)] pt-7">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[1.2rem]">
                      E-Mail
                    </p>
                    <p className="mt-6 text-[1rem] leading-8 text-[var(--ink)]">
                      {contactEmail}
                    </p>
                  </div>

                  <div>
                    <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[1.2rem]">
                      {isFrench ? 'Bureau' : 'Office'}
                    </p>
                    <p className="mt-6 text-[1rem] leading-8 text-[var(--ink)]">
                      Marseille
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.05em] text-[var(--ink)]">
                  {isFrench
                    ? 'Une question, un challenge ou une idée ?'
                    : 'Got a question, challenge, or idea?'}
                </p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--ink)]">
                  {isFrench
                    ? 'Remplissez le formulaire — nous revenons vers vous rapidement.'
                    : `Fill out the form — we'll get back to you shortly.`}
                </p>
              </div>

              <div className="mt-8 border-t border-[var(--line)] pt-7">
                <form className="grid gap-3" onSubmit={handleSubmit}>
                  <input
                    className="h-[60px] rounded-[4px] border border-[var(--line)] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-full-name"
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder={isFrench ? 'Nom complet' : 'Full Name'}
                    required
                    type="text"
                    value={fullName}
                  />

                  <input
                    className="h-[60px] rounded-[4px] border border-[var(--line)] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="E-Mail"
                    required
                    type="email"
                    value={email}
                  />

                  <input
                    className="h-[60px] rounded-[4px] border border-[var(--line)] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-company"
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder={isFrench ? 'Nom de la société' : 'Company name'}
                    type="text"
                    value={company}
                  />

                  <textarea
                    className="min-h-[124px] rounded-[4px] border border-[var(--line)] bg-white px-5 py-4 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-message"
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={isFrench ? 'Votre message' : 'Your message'}
                    required
                    value={message}
                  />

                  <button
                    className="mt-3 inline-flex h-[44px] w-full items-center justify-center rounded-[2px] bg-[var(--hero-dark)] px-5 text-[1rem] font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-deep)]"
                    type="submit"
                  >
                    {isFrench ? 'Envoyer' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
