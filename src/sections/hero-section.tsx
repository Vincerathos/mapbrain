import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/use-reveal'
import type { HeroContent } from '../types/site'
import { ButtonLink } from '../ui/button-link'
import { socialLinks } from '../data/social-links'

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const visibleTags = content.serviceTags

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotionQuery.matches || content.rotatingPhrases.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setPhraseIndex((currentValue) =>
        (currentValue + 1) % content.rotatingPhrases.length
      )
    }, 2800)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [content.rotatingPhrases])

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-[var(--line)]"
      ref={revealRef}
    >
      <div className="section-shell-bottom mx-auto max-w-[1720px] px-4 pt-[8rem] sm:px-6 sm:pt-[8.6rem] lg:px-8 lg:pt-[9.1rem]">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_250px] xl:items-start">
          <div className="min-w-0 pt-3">
            <h1
              className="hero-wordmark whitespace-nowrap text-[clamp(2.1rem,11vw,8.4rem)] leading-[0.82] tracking-[-0.07em] text-[var(--ink)] sm:leading-[0.78] sm:tracking-[-0.09em] xl:pr-8"
              data-reveal
              id="hero-title"
            >
              <span className="inline-flex items-start">
                <span className="block sm:inline">MAPBRAIN</span>
                <sup className="hero-wordmark-mark">®</sup>
              </span>
              <span className="inline">_Agency</span>
            </h1>
          </div>

          <aside
            className="hero-header-card hidden w-full max-w-[250px] rounded-[16px] border border-[color:rgb(17_17_17_/_0.08)] p-2.5 xl:mt-6 xl:block xl:justify-self-end"
            data-reveal
          >
            <div className="flex items-center gap-3">
              <div className="hero-avatar-tile shrink-0">
                <div aria-hidden="true" className="hero-avatar-art">
                  <span className="hero-avatar-ring" />
                  <span className="hero-avatar-core" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[0.98rem] leading-none tracking-[-0.04em] text-[var(--ink)]">
                  {content.badgeTitle}
                </p>
                <p className="mt-1 text-[0.88rem] leading-5 text-[var(--muted)]">
                  {content.badgeBody}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <ButtonLink
                className="w-full justify-between rounded-[13px] border-[var(--ink)] px-4 py-3 text-left text-[0.76rem]"
                link={content.primaryCta}
              />
            </div>
          </aside>
        </div>

        <div
          className="hero-stage mt-5 overflow-hidden rounded-[28px] border border-[color:rgb(17_17_17_/_0.14)] sm:mt-6"
          data-reveal
        >
          <div className="hero-stage-layer" />
          <div className="hero-stage-ribbon" />

          <div className="grid min-h-[auto] gap-0 sm:min-h-[690px] lg:grid-cols-[minmax(0,1fr)_78px]">
            <div className="relative z-10 flex min-h-[auto] flex-col px-5 pb-8 pt-16 text-white sm:min-h-[690px] sm:px-10 sm:pb-24 sm:pt-28 lg:px-9 lg:pb-[5.9rem] lg:pt-32 xl:px-10 xl:pt-[8.75rem]">
              <div className="max-w-[58rem]">
                <div className="hero-phrase-shell max-w-[42rem]">
                  <p
                    key={`${content.title}-${phraseIndex}`}
                    className="hero-panel-title hero-phrase-swap text-[clamp(3rem,4.05vw,4.35rem)] leading-[0.94] tracking-[-0.09em]"
                  >
                    {content.rotatingPhrases[phraseIndex] ?? content.subtitle}
                  </p>
                </div>

                <p className="mt-3 max-w-[35rem] text-[0.98rem] leading-7 text-[color:rgb(255_255_255_/_0.84)]">
                  {content.body}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3" data-reveal>
                  <ButtonLink
                    className="border-white bg-white text-[var(--ink)] hover:border-[var(--accent-soft)] hover:bg-[var(--accent-soft)]"
                    link={content.primaryCta}
                    tone="secondary"
                  />
                  <ButtonLink
                    className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
                    link={content.secondaryCta}
                    tone="text"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 hidden border-l border-[color:rgb(255_255_255_/_0.12)] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2">
              {socialLinks.map((item) => {
                return (
                  <a
                    key={item.label}
                    aria-label={item.label}
                    className="inline-flex size-12 items-center justify-center rounded-[10px] border border-[color:rgb(255_255_255_/_0.42)] bg-[color:rgb(248_244_239_/_0.92)] text-[var(--ink)] transition-colors duration-200 hover:bg-white"
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

          <div className="hero-card-strip relative z-20 mt-5 grid gap-3 px-5 pb-5 sm:absolute sm:inset-x-10 sm:bottom-3 sm:mt-0 sm:flex sm:gap-4 sm:overflow-x-auto sm:px-0 sm:pb-0 lg:inset-x-8">
            {visibleTags.map((tag, index) => (
              <article
                key={tag}
                className="hero-service-card min-w-0 rounded-[16px] border border-[color:rgb(255_255_255_/_0.42)] bg-[color:rgb(255_255_255_/_0.92)] p-3 text-[var(--ink)] shadow-[0_18px_40px_rgba(17,17,17,0.08)] sm:min-w-[13.6rem] sm:flex-1"
              >
                <div className="flex items-center gap-3">
                  <div className={`hero-service-thumb hero-service-thumb-${(index % 5) + 1}`} />
                  <div className="min-w-0">
                    <div className="flex items-center text-[var(--ink)]">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">
                        ({String(index + 1).padStart(2, '0')})
                      </span>
                    </div>
                    <p className="mt-2 text-[1.02rem] leading-6 tracking-[-0.03em] text-[var(--ink)]">
                      {tag}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
