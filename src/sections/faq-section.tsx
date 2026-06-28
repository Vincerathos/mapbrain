import { ChevronRight, Plus } from 'lucide-react'
import { useState } from 'react'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface FaqSectionProps {
  content: SiteContent['faq']
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="faq"
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-8 max-w-3xl">
          <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
            {content.body}
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="grid gap-px rounded-[28px] border border-[var(--line)] bg-[var(--line)] overflow-hidden">
            {content.items.map((item, index) => {
              const isOpen = index === openIndex

              return (
                <button
                  key={item.question}
                  className={`${isOpen ? 'bg-white' : 'bg-[var(--surface)]'} px-5 py-5 text-left transition-colors duration-200 sm:px-7 sm:py-6`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Q-{String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="max-w-[44rem] text-[1.15rem] leading-7 tracking-[-0.03em] text-[var(--ink)] sm:text-[1.35rem] sm:leading-8">
                          {item.question}
                        </h3>
                        <span className={`${isOpen ? 'rotate-45' : ''} mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--accent-deep)] transition-transform duration-300`}>
                          <Plus className="size-4" aria-hidden="true" />
                        </span>
                      </div>

                      {isOpen ? (
                        <p className="mt-4 max-w-[46rem] text-[0.98rem] leading-7 text-[var(--muted)] sm:text-base">
                          {item.answer}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <aside className="grid gap-4" data-reveal>
            <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white">
              <img
                alt={content.visual.alt}
                className="h-[310px] w-full object-cover"
                loading="lazy"
                src={content.visual.src}
              />
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-white p-6 sm:p-7">
              <p className="max-w-[12ch] text-[clamp(2rem,3.2vw,3rem)] leading-[0.95] tracking-[-0.07em] text-[var(--ink)]">
                {content.contactPrompt}
              </p>

              <a
                className="mt-6 inline-flex w-full items-center justify-between rounded-[16px] bg-[var(--ink)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[var(--accent-deep)]"
                href={content.contactCta.href}
              >
                <span>{content.contactCta.label}</span>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                  <ChevronRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
