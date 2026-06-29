import {
  Megaphone,
  MessageSquareText,
  Settings2,
  Target,
  Users,
  Video
} from 'lucide-react'
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

            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[20px] bg-[color:rgb(19_19_19_/_0.28)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:px-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[var(--accent-alt)]" />
                  <span className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-white/70">
                    AI systems with operational intent
                  </span>
                </div>
                <p className="mt-5 max-w-3xl text-[clamp(1.8rem,3.8vw,3.5rem)] leading-[0.95] tracking-[-0.065em] text-white">
                  {content.body}
                </p>
              </div>

              <div className="mt-6 grid gap-px bg-white/12 lg:mt-0">
                {content.useCases.slice(0, 3).map((item) => (
                  <div key={`${item.title}-headline`} className="bg-black/8 px-5 py-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/58">
                      Use case
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white">{item.title}</p>
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
                </div>

                <ul className={`mt-10 space-y-3 text-sm leading-6 sm:text-base ${isPrimary ? 'text-white' : 'text-[var(--ink)]'}`}>
                  {item.results.map((result) => (
                    <li
                      key={result}
                      className={`border-t pt-3 ${isPrimary ? 'border-white/18' : 'border-[color:rgb(17_17_17_/_0.08)]'}`}
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
