import {
  ArrowUpRight,
  ChartColumn,
  Check,
  Coins,
  Factory,
  Handshake,
  Headset,
  Megaphone,
  Scale,
  Target,
  Truck,
  Users
} from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'
import type { ParcoursCard, SiteContent, UseCaseCard } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface HomeSectionProps {
  content: SiteContent['home']
}

/* ------------------------------------------------------------------ */
/* Nos chiffres                                                        */
/* ------------------------------------------------------------------ */

export function HomeStatsSection({ content }: HomeSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="MapBrain Academy" title={content.statsTitle} />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-6" data-reveal>
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] border border-[var(--line)] bg-white px-5 py-6 text-center"
            >
              <p className="text-[clamp(1.9rem,2.6vw,2.5rem)] font-[800] leading-none tracking-[-0.05em] text-[var(--ink)]">
                {stat.value}
              </p>
              <p className="mt-2 text-[0.85rem] leading-5 text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Nos parcours (6 cartes colorées)                                    */
/* ------------------------------------------------------------------ */

const parcoursTones: Record<
  ParcoursCard['color'],
  { band: string; chip: string }
> = {
  blue: { band: 'bg-[linear-gradient(135deg,#275e9a,#4b8ecb)]', chip: 'bg-[#e9f1fa] text-[#275e9a]' },
  green: { band: 'bg-[linear-gradient(135deg,#2f7040,#58a86e)]', chip: 'bg-[#e9f5ec] text-[#2f7040]' },
  purple: { band: 'bg-[linear-gradient(135deg,#643f8c,#9268bd)]', chip: 'bg-[#f2ebf8] text-[#643f8c]' },
  orange: { band: 'bg-[linear-gradient(135deg,#b5651d,#e09347)]', chip: 'bg-[#faf0e5] text-[#b5651d]' },
  red: { band: 'bg-[linear-gradient(135deg,#a53b3b,#d66c62)]', chip: 'bg-[#faeaea] text-[#a53b3b]' },
  dark: { band: 'bg-[linear-gradient(135deg,#1f1f24,#4a4a55)]', chip: 'bg-[#ededf0] text-[#1f1f24]' }
}

export function ParcoursOverviewSection({ content }: HomeSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionBandHeading eyebrow="Formations" title={content.parcoursTitle} />
          <a
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-[var(--line)] bg-white px-5 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors duration-200 hover:border-[var(--ink)]"
            data-reveal
            href={content.parcoursCta.href}
          >
            <span>{content.parcoursCta.label}</span>
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--ink)] text-white">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.parcoursCards.map((card, index) => {
            const tone = parcoursTones[card.color]

            return (
              <a
                key={card.title}
                className="group overflow-hidden rounded-[22px] border border-[color:rgb(17_17_17_/_0.08)] bg-white shadow-[0_14px_36px_rgba(17,17,17,0.05)] transition-transform duration-200 hover:-translate-y-1"
                data-reveal
                href="#formations"
              >
                <div className={`${tone.band} flex items-center justify-between px-6 py-4 text-white`}>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/80">
                    ({String(index + 1).padStart(2, '0')})
                  </span>
                  <ArrowUpRight className="size-4 opacity-80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="text-[1.3rem] leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{card.description}</p>
                  <span className={`${tone.chip} mt-4 inline-block rounded-full px-3 py-1.5 text-[0.74rem] font-medium`}>
                    {card.tools}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Cas d'usage par métier                                              */
/* ------------------------------------------------------------------ */

const useCaseIcons: Record<UseCaseCard['icon'], typeof Users> = {
  chart: ChartColumn,
  coins: Coins,
  factory: Factory,
  handshake: Handshake,
  headset: Headset,
  megaphone: Megaphone,
  scale: Scale,
  target: Target,
  truck: Truck,
  users: Users
}

export function UseCasesSection({ content }: HomeSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="Cas d'usage" title={content.useCasesTitle} />

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {content.useCases.map((useCase) => {
            const Icon = useCaseIcons[useCase.icon]

            return (
              <article
                key={useCase.title}
                className="rounded-[20px] border border-[var(--line)] bg-white p-5"
                data-reveal
              >
                <span className="inline-flex size-10 items-center justify-center rounded-[12px] bg-[var(--accent-soft)] text-[var(--accent-deep)]">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-[1.05rem] font-[700] leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
                  {useCase.title}
                </h3>
                <ul className="mt-3 space-y-2 text-[0.85rem] leading-5 text-[var(--muted)]">
                  <li>
                    <strong className="font-semibold text-[var(--ink)]">{content.useCaseLabels.automate}</strong>{' '}
                    {useCase.automate}.
                  </li>
                  <li>
                    <strong className="font-semibold text-[var(--ink)]">{content.useCaseLabels.create}</strong>{' '}
                    {useCase.create}.
                  </li>
                  <li>
                    <strong className="font-semibold text-[var(--ink)]">{content.useCaseLabels.deploy}</strong>{' '}
                    {useCase.deploy}.
                  </li>
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Pédagogie + personnalisation + publics + engagements                */
/* ------------------------------------------------------------------ */

export function PedagogySection({ content }: HomeSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="Pédagogie" title={content.pedagogyTitle} />

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.pedagogy.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] border border-[var(--line)] bg-white p-5"
              data-reveal
            >
              <h3 className="text-[1.05rem] font-[700] tracking-[-0.02em] text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-1.5 text-[0.9rem] leading-6 text-[var(--muted)]">{card.body}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 overflow-hidden rounded-[26px] border border-[color:rgb(17_17_17_/_0.08)] bg-[linear-gradient(135deg,#2e1f45_0%,#7b4fa6_45%,#c05a7f_75%,#e09347_100%)] p-6 text-white sm:p-8"
          data-reveal
        >
          <div className="grid gap-7 lg:grid-cols-2">
            <div>
              <h3 className="text-[1.4rem] leading-[1.05] tracking-[-0.03em]">
                {content.customTitle}
              </h3>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {content.customChecks.map((check) => (
                  <li key={check} className="flex items-center gap-2.5 text-sm leading-6">
                    <Check aria-hidden="true" className="size-4 shrink-0" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 inline-block rounded-full border border-white/40 px-4 py-1.5 text-[0.85rem] font-semibold">
                {content.customNote}
              </p>
            </div>

            <div>
              <h3 className="text-[1.4rem] leading-[1.05] tracking-[-0.03em]">
                {content.benefitsTitle}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-[0.85rem]"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[22px] border border-[var(--line)] bg-white p-6" data-reveal>
            <h3 className="text-[1.15rem] font-[700] tracking-[-0.02em] text-[var(--ink)]">
              {content.audiencesTitle}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.audienceOrgs.map((org) => (
                <span
                  key={org}
                  className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3.5 py-1.5 text-[0.82rem] font-medium text-[var(--ink)]"
                >
                  {org}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.audiencePeople.map((person) => (
                <span
                  key={person}
                  className="rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-[0.82rem] text-[var(--muted)]"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-[var(--line)] bg-white p-6" data-reveal>
            <h3 className="text-[1.15rem] font-[700] tracking-[-0.02em] text-[var(--ink)]">
              {content.engagementsTitle}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {content.engagements.map((engagement) => (
                <li
                  key={engagement}
                  className="flex items-center gap-2.5 text-[0.9rem] leading-6 text-[var(--ink)]"
                >
                  <Check aria-hidden="true" className="size-4 shrink-0 text-[var(--accent-deep)]" />
                  <span>{engagement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
