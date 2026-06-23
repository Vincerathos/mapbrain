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
    <section
      className="border-b border-[var(--line)] bg-[var(--panel)]"
      id="automation"
      ref={revealRef}
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="overflow-hidden border border-[var(--line)]">
          <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch">
            <div className="bg-[var(--accent)] p-6 text-white sm:p-8 lg:p-10">
              <p
                className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[color:rgb(255_255_255_/_0.78)]"
                data-reveal
              >
                {content.eyebrow}
              </p>
              <h2
                className="mt-5 max-w-4xl text-[clamp(2.2rem,6vw,5rem)] leading-[0.94] tracking-[-0.06em]"
                data-reveal
              >
                {content.title}
              </h2>
              <p
                className="mt-6 max-w-2xl text-base leading-7 text-[color:rgb(255_255_255_/_0.86)] sm:text-lg sm:leading-8"
                data-reveal
              >
                {content.body}
              </p>
            </div>

            <figure className="bg-[var(--surface)]" data-reveal>
            <img
              alt={content.image.alt}
              className="aspect-[16/10] w-full object-cover lg:h-full"
              height="1100"
              loading="lazy"
              src={content.image.src}
              width="1600"
            />
            </figure>
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-[var(--line)] md:grid-cols-2 xl:grid-cols-3">
          {content.useCases.map((item) => {
            const Icon = icons[item.icon]

            return (
              <article
                key={item.title}
                className={`${item.icon === 'target' ? 'bg-[var(--accent)] text-white' : item.icon === 'settings' ? 'bg-[var(--accent-soft)]' : 'bg-[var(--panel)]'} flex flex-col justify-between gap-8 p-6 sm:p-8`}
                data-reveal
              >
                <div>
                  <Icon
                    className={`size-5 ${item.icon === 'target' ? 'text-white' : 'text-[var(--accent)]'}`}
                    aria-hidden="true"
                  />
                  <h3 className={`mt-8 text-[1.6rem] leading-none tracking-[-0.05em] ${item.icon === 'target' ? 'text-white' : 'text-[var(--ink)]'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 max-w-sm text-sm leading-7 sm:text-base ${item.icon === 'target' ? 'text-[color:rgb(255_255_255_/_0.84)]' : 'text-[var(--muted)]'}`}>
                    {item.description}
                  </p>
                </div>

                <ul className={`space-y-3 text-sm leading-6 sm:text-base ${item.icon === 'target' ? 'text-white' : 'text-[var(--ink)]'}`}>
                  {item.results.map((result) => (
                    <li
                      key={result}
                      className={`border-t pt-3 ${item.icon === 'target' ? 'border-[color:rgb(255_255_255_/_0.18)]' : 'border-[var(--line)]'}`}
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
