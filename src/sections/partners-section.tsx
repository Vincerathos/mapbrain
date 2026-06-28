import {
  Bot,
  Cloud,
  Cpu,
  Rocket,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface PartnersSectionProps {
  content: SiteContent['partners']
}

export function PartnersSection({ content }: PartnersSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'

  const visualLabel = isFrench
    ? 'Infra, IA, paiement, deployement'
    : 'Infra, AI, payments, deployment'
  const accentCards = isFrench
    ? [
        {
          icon: Bot,
          title: 'Outils IA',
          value: content.stats[0]?.value ?? '$1M+'
        },
        {
          icon: Cloud,
          title: 'Ressources activables',
          value: content.stats[2]?.value ?? 'Faster'
        }
      ]
    : [
        {
          icon: Bot,
          title: 'AI tooling',
          value: content.stats[0]?.value ?? '$1M+'
        },
        {
          icon: Cloud,
          title: 'Activatable resources',
          value: content.stats[2]?.value ?? 'Faster'
        }
      ]

  const perks = content.perks.slice(0, 3)

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="partners"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <article
          className="relative mt-10 overflow-hidden rounded-[30px] border border-[color:rgb(16_54_80_/_0.16)] bg-[var(--hero-dark)] p-4 sm:p-5"
          data-reveal
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(95,214,255,0.18),transparent_18%),radial-gradient(circle_at_84%_82%,rgba(217,113,56,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
          <div className="relative z-10 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_280px]">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10">
              <img
                alt="Equipe technique et operationnelle autour de plusieurs ecrans"
                className="h-[420px] w-full object-cover sm:h-[470px]"
                loading="lazy"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,28,40,0.04),rgba(12,28,40,0.72))]" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-[color:rgb(255_255_255_/_0.1)] px-4 py-2 backdrop-blur-md">
                <Sparkles className="size-4 text-[var(--accent-alt-soft)]" aria-hidden="true" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/76">
                  {visualLabel}
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 max-w-[32rem] rounded-[22px] border border-white/10 bg-[color:rgb(255_255_255_/_0.08)] p-5 backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:max-w-[36rem]">
                <p className="text-[clamp(1.7rem,3vw,2.8rem)] leading-[0.96] tracking-[-0.07em] text-white">
                  {content.body}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {accentCards.map((card, index) => {
                  const Icon = card.icon

                  return (
                    <div
                      key={card.title}
                      className={`${index === 0 ? 'bg-[var(--accent-soft)]' : 'bg-[color:rgb(255_255_255_/_0.08)] text-white'} rounded-[24px] border ${index === 0 ? 'border-[color:rgb(17_17_17_/_0.08)]' : 'border-white/10'} p-5`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className={`inline-flex size-11 items-center justify-center rounded-[14px] border ${index === 0 ? 'border-[color:rgb(17_17_17_/_0.08)] bg-white text-[var(--accent-alt-deep)]' : 'border-white/12 bg-white/8 text-white'}`}>
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <p className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] ${index === 0 ? 'text-[var(--muted)]' : 'text-white/58'}`}>
                          {card.title}
                        </p>
                      </div>
                      <p className={`mt-8 text-[clamp(2rem,3vw,2.8rem)] leading-none tracking-[-0.08em] ${index === 0 ? 'text-[var(--ink)]' : 'text-white'}`}>
                        {card.value}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="grid gap-3">
                {perks.map((perk, index) => {
                  const Icon = index === 0 ? Cpu : index === 1 ? ShieldCheck : Rocket

                  return (
                    <div
                      key={perk}
                      className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-[color:rgb(255_255_255_/_0.08)] px-5 py-4 text-white backdrop-blur-md"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-white/12 bg-white/8 text-[var(--accent-alt-soft)]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-6 text-white/78">{perk}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}
