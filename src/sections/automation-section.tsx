import {
  Megaphone,
  MessageSquareText,
  Settings2,
  Target,
  Users,
  Video
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { AutomationUseCase, SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface AutomationSectionProps {
  content: SiteContent['automation']
}

const icons: Record<AutomationUseCase['icon'], typeof Target> = {
  target: Target,
  megaphone: Megaphone,
  video: Video,
  users: Users,
  settings: Settings2,
  message: MessageSquareText
}

export function AutomationSection({ content }: AutomationSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" id="automation" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div
          className="mt-12 overflow-hidden rounded-[30px] border border-[color:rgb(17_17_17_/_0.08)] bg-[var(--hero-dark)]"
          data-reveal
        >
          <div className="relative grid min-h-[560px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(94,70,104,0.2), rgba(94,70,104,0.05)), repeating-linear-gradient(90deg, rgba(245,236,241,0.12) 0px, rgba(245,236,241,0.12) 56px, rgba(245,236,241,0.03) 56px, rgba(245,236,241,0.03) 112px)'
              }}
            >
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent via-[color:rgb(94_70_104_/_0.42)] to-transparent blur-xl" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.0))]" />
            </div>

            <figure className="relative">
              <img
                alt={content.image.alt}
                className="h-full w-full object-cover"
                height="1100"
                loading="lazy"
                src={content.image.src}
                width="1600"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(94,70,104,0.14),transparent_28%,rgba(255,255,255,0.0)_100%)]" />
            </figure>

            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[20px] bg-[color:rgb(19_19_19_/_0.28)] px-5 pb-5 pt-7 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:px-6 sm:pb-6 sm:pt-8 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:px-7">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[var(--accent-alt)]" />
                  <span className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-white/70">
                    {isFrench
                      ? 'Systèmes IA à intention opérationnelle'
                      : 'AI systems with operational intent'}
                  </span>
                </div>
                <p className="mt-6 max-w-3xl text-[clamp(2.05rem,4.15vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-white">
                  {content.body}
                </p>
              </div>

              <div className="mt-7 grid gap-px bg-white/12 lg:mt-0">
                {content.useCases.slice(0, 3).map((item) => (
                  <div key={`${item.title}-headline`} className="bg-black/8 px-5 py-4 sm:px-6 sm:py-5">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/58">
                      {isFrench ? "Cas d'usage" : 'Use case'}
                    </p>
                    <p className="mt-3 text-[1rem] leading-7 tracking-[-0.015em] text-white sm:text-[1.05rem]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-[var(--line)] md:grid-cols-2 xl:grid-cols-3">
          {content.useCases.map((item, index) => {
            const Icon = icons[item.icon]
            const isPrimary = index === 0
            const isAccent = item.icon === 'settings'

            return (
              <article
                key={item.title}
                className={`${isPrimary ? 'bg-[var(--hero-dark)] text-white' : isAccent ? 'bg-[var(--accent-soft)]' : 'bg-[var(--surface)]'} flex min-h-[320px] flex-col justify-between p-6 sm:p-8`}
                data-reveal
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`inline-flex size-12 items-center justify-center rounded-full border ${isPrimary ? 'border-white/18 bg-white/8 text-white' : 'border-[var(--line)] bg-white text-[var(--accent-deep)]'}`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className={`font-mono text-[0.76rem] uppercase tracking-[0.22em] ${isPrimary ? 'text-white/72' : 'text-[var(--muted)]'}`}>
                      ({(index + 1).toString().padStart(2, '0')})
                    </span>
                  </div>

                  <h3 className={`mt-10 max-w-sm text-[1.8rem] leading-[1.02] tracking-[-0.055em] ${isPrimary ? 'text-white' : 'text-[var(--ink)]'} sm:text-[2.2rem]`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 max-w-sm text-sm leading-7 sm:text-base ${isPrimary ? 'text-[color:rgb(255_255_255_/_0.82)]' : 'text-[var(--muted)]'}`}>
                    {item.description}
                  </p>

                  {item.cases && item.cases.length > 0 ? (
                    <div className="mt-6">
                      <p className={`font-mono text-[0.68rem] uppercase tracking-[0.22em] ${isPrimary ? 'text-white/62' : 'text-[var(--muted)]'}`}>
                        {isFrench ? "Cas d'usage" : 'Use cases'}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.cases.map((entry) => (
                          <span
                            key={entry}
                            className={`rounded-full border px-3 py-1.5 text-[0.78rem] ${isPrimary ? 'border-white/18 bg-white/8 text-white' : 'border-[var(--line)] bg-white text-[var(--ink)]'}`}
                          >
                            {entry}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-10 grid gap-6">
                  <div>
                    <p className={`font-mono text-[0.68rem] uppercase tracking-[0.22em] ${isPrimary ? 'text-white/62' : 'text-[var(--muted)]'}`}>
                      {isFrench ? 'Exemples' : 'Examples'}
                    </p>
                    <ul className={`mt-3 space-y-3 text-sm leading-6 sm:text-base ${isPrimary ? 'text-white' : 'text-[var(--ink)]'}`}>
                      {item.examples.map((example) => (
                        <li
                          key={example}
                          className={`border-t pt-3 ${isPrimary ? 'border-white/18' : 'border-[color:rgb(17_17_17_/_0.08)]'}`}
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className={`font-mono text-[0.68rem] uppercase tracking-[0.22em] ${isPrimary ? 'text-white/62' : 'text-[var(--muted)]'}`}>
                      {isFrench ? 'Bénéfices' : 'Benefits'}
                    </p>
                    <ul className={`mt-3 space-y-3 text-sm leading-6 sm:text-base ${isPrimary ? 'text-white' : 'text-[var(--ink)]'}`}>
                      {item.benefits.map((result) => (
                        <li
                          key={result}
                          className={`border-t pt-3 ${isPrimary ? 'border-white/18' : 'border-[color:rgb(17_17_17_/_0.08)]'}`}
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-[28px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(240,220,235,0.68))] p-6 sm:p-8" data-reveal>
          <div className="max-w-[58rem]">
            <p className="font-mono text-[0.76rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              {isFrench ? "Pourquoi les entreprises adoptent l'IA" : 'Why companies adopt AI'}
            </p>
            <h3 className="section-title-break mt-5 max-w-[20ch] text-[clamp(2.1rem,4.5vw,3.8rem)] leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
              {content.rationale.title}
            </h3>
            <div className="mt-6 space-y-4 text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.05rem]">
              {content.rationale.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {content.rationale.results.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[var(--line)] bg-white px-5 py-4 text-[0.98rem] leading-7 text-[var(--ink)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
