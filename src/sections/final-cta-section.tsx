import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'

interface FinalCtaSectionProps {
  content: SiteContent['finalCta']
}

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const isCaptureView =
    typeof window !== 'undefined' && window.location.hash === '#contact'
  const socialItems = [
    { href: 'https://www.instagram.com', label: 'Instagram', src: 'https://cdn.simpleicons.org/instagram/111111' },
    { href: 'https://www.linkedin.com', label: 'LinkedIn', src: 'https://cdn.simpleicons.org/linkedin/111111' },
    { href: 'https://www.facebook.com', label: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/111111' },
    { href: 'https://x.com', label: 'X', src: 'https://cdn.simpleicons.org/x/111111' }
  ]
  const offerBullets = [
    isFrench ? 'UI UX Design' : 'UI UX Design',
    isFrench ? 'Développement web' : 'Web Development',
    isFrench ? 'Identité de marque' : 'Brand Identity',
    isFrench ? 'Growth Ops' : 'Growth Ops',
    isFrench ? 'Stratégie de contenu' : 'Content Strategy'
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

    window.location.href = `mailto:hello@mapbrain.agency?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className={`${isCaptureView ? 'fixed inset-0 z-[120] overflow-auto bg-white' : 'scroll-mt-6 border-b border-[var(--line)] bg-white'}`}
      id="contact"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[var(--line)] pb-7">
          <h2 className="text-center text-[clamp(3.7rem,6vw,4.6rem)] leading-[0.92] tracking-[-0.08em] text-[var(--ink)]">
            {isFrench ? 'Parlons-en' : `Let's Talk`}
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2px] bg-[#f6f6f6] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)] xl:gap-9">
            <div className="border-b border-[var(--line)] pb-7 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-9">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[1.2rem]">
                  {isFrench ? 'Suivez-nous' : 'Follow us'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialItems.map((item) => {
                    return (
                      <a
                        key={item.label}
                        aria-label={item.label}
                        className="inline-flex size-11 items-center justify-center rounded-[4px] bg-white text-[var(--ink)]"
                        href={item.href}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          className="size-5 object-contain"
                          loading="lazy"
                          src={item.src}
                        />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--line)] pt-7">
                <div className="grid gap-6 lg:grid-cols-[168px_minmax(0,1fr)]">
                  <figure className="overflow-hidden rounded-[4px]">
                    <img
                      alt="VR designer portrait"
                      className="h-[216px] w-full object-cover"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=80"
                    />
                  </figure>

                  <div>
                    <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[var(--ink)]">
                      {isFrench ? 'Ce que nous proposons' : 'What we offer'}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {offerBullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-[1rem] leading-7 text-[var(--ink)]">
                          <span className="size-2.5 shrink-0 bg-[#f05a22]" />
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
                      info.avoora@agency.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[1.2rem]">
                      {isFrench ? 'Bureau' : 'Office'}
                    </p>
                    <p className="mt-6 text-[1rem] leading-8 text-[var(--ink)]">
                      452 Riverside Dr,
                      <br />
                      Apt 1C, New York, NY 10027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.05em] text-[var(--ink)]">
                  {isFrench
                    ? 'Une question, un challenge ou une idee ?'
                    : 'Got a question, challenge, or idea?'}
                </p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--ink)]">
                  {isFrench
                    ? 'Remplissez le formulaire  nous revenons vers vous rapidement.'
                    : `Fill out the form  we'll get back to you shortly.`}
                </p>
              </div>

              <div className="mt-8 border-t border-[var(--line)] pt-7">
                <form className="grid gap-3" onSubmit={handleSubmit}>
                  <input
                    className="h-[60px] rounded-[4px] border border-[#d8d8d8] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-full-name"
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder={isFrench ? 'Nom complet' : 'Full Name'}
                    required
                    type="text"
                    value={fullName}
                  />

                  <input
                    className="h-[60px] rounded-[4px] border border-[#d8d8d8] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="E-Mail"
                    required
                    type="email"
                    value={email}
                  />

                  <input
                    className="h-[60px] rounded-[4px] border border-[#d8d8d8] bg-white px-5 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-company"
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder={isFrench ? 'Nom de la société' : 'Company name'}
                    type="text"
                    value={company}
                  />

                  <textarea
                    className="min-h-[124px] rounded-[4px] border border-[#d8d8d8] bg-white px-5 py-4 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink)]"
                    id="contact-message"
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={isFrench ? 'Votre message' : 'Test Message'}
                    required
                    value={message}
                  />

                  <button
                    className="mt-3 inline-flex h-[44px] w-full items-center justify-center rounded-[2px] bg-[#585858] px-5 text-[1rem] font-semibold text-white"
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
