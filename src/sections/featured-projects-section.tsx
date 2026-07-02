import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'

interface FeaturedProjectsSectionProps {
  content: SiteContent['projects']
}

export function FeaturedProjectsSection({
  content
}: FeaturedProjectsSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'
  const featuredItems = content.items.slice(0, 6)
  const topRow = [...featuredItems, ...featuredItems]
  const bottomSeed =
    featuredItems.length > 1
      ? [...featuredItems.slice(1), featuredItems[0]]
      : featuredItems
  const bottomRow = [...bottomSeed, ...bottomSeed]

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-4 border-b border-[var(--line)] pb-7 lg:flex-row lg:items-end lg:justify-between"
          data-reveal
        >
          <div className="max-w-[48rem]">
            <p className="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              {isFrench ? 'Projets en vedette' : 'Featured projects'}
            </p>
            <h2
              className="section-title-break mt-3 max-w-[14ch] text-[clamp(2.2rem,4vw,4rem)] leading-[0.98] tracking-[-0.028em] text-[var(--ink)]"
              id="featured-projects-title"
            >
              {isFrench
                ? 'Six projets pour montrer le niveau d’exécution.'
                : 'Six projects to make the execution level visible.'}
            </h2>
          </div>

          <a
            className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full border border-[var(--line)] bg-white px-5 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors duration-200 hover:border-[var(--ink)] hover:bg-[var(--surface-2)]"
            href="#projects"
          >
            <span>{isFrench ? 'Voir la section complète' : 'View full section'}</span>
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--ink)] text-white">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <div
          className="project-loom-stage relative mt-6 min-h-[360px] overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] px-0 py-6 sm:min-h-[420px] sm:py-8"
          data-reveal
        >
          <div className="project-loom-fade-left" />
          <div className="project-loom-fade-right" />

          <div className="space-y-4 sm:space-y-5">
            <div className="project-loom-row project-loom-row-forward">
              {topRow.map((project, index) => (
                <a
                  key={`featured-top-${project.title}-${index}`}
                  className="project-loom-card group"
                  href={project.loomUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={project.image.alt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      src={project.image.src}
                    />
                    <div className="project-loom-thumb-copy">
                      <div className="space-y-2">
                        <span className="project-loom-badge">
                          {String((index % featuredItems.length) + 1).padStart(2, '0')}
                        </span>
                        <p className="project-loom-sector">{project.sector}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="project-loom-label">{project.title}</p>
                        <div className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-white/84">
                          <span>{isFrench ? 'Voir le projet' : 'View project'}</span>
                          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="project-loom-row project-loom-row-backward">
              {bottomRow.map((project, index) => (
                <a
                  key={`featured-bottom-${project.title}-${index}`}
                  className="project-loom-card group"
                  href={project.loomUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={project.image.alt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      src={project.image.src}
                    />
                    <div className="project-loom-thumb-copy">
                      <div className="space-y-2">
                        <span className="project-loom-badge">
                          {String((index % featuredItems.length) + 1).padStart(2, '0')}
                        </span>
                        <p className="project-loom-sector">{project.sector}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="project-loom-label">{project.title}</p>
                        <div className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-white/84">
                          <span>{isFrench ? 'Voir le projet' : 'View project'}</span>
                          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
