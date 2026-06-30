import { ArrowUpRight, Play, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface ProjectsSectionProps {
  content: SiteContent['projects']
}

interface LoomProjectCard {
  description: string
  embedSrc: string
  id: string
  indexLabel: string
  imageSrc: string
  loomUrl: string
  prototypeUrl?: string
  sector: string
  thumbnailAlt: string
  title: string
}

interface LoomOEmbedResponse {
  thumbnail_url?: string
}

const getLoomVideoId = (url: string) => {
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/i)
  return match?.[1] ?? ''
}

const getLoomEmbedUrl = (url: string) => {
  const videoId = getLoomVideoId(url)
  return videoId
    ? `https://www.loom.com/embed/${videoId}?autoplay=1`
    : url
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'
  const hoverTimeoutRef = useRef<number | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [loomThumbnails, setLoomThumbnails] = useState<Record<string, string>>({})

  const cards = useMemo<LoomProjectCard[]>(
    () =>
      content.items.map((project, index) => ({
        description: project.description,
        embedSrc: getLoomEmbedUrl(project.loomUrl),
        id: `loom-card-${index + 1}`,
        imageSrc: project.image.src,
        indexLabel: String(index + 1).padStart(2, '0'),
        loomUrl: project.loomUrl,
        prototypeUrl: project.prototypeUrl,
        sector: project.sector,
        thumbnailAlt: project.image.alt,
        title: project.title
      })),
    [content.items]
  )

  const [activeCardId, setActiveCardId] = useState<string | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const activeCard = useMemo(
    () => cards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId, cards]
  )

  const topRow = [...cards, ...cards]
  const bottomSeed =
    cards.length > 1 ? [...cards.slice(1), cards[0]] : cards
  const bottomRow = [...bottomSeed, ...bottomSeed]

  useEffect(() => {
    let isCancelled = false

    const loadThumbnails = async () => {
      const entries = await Promise.all(
        cards.map(async (card) => {
          try {
            const response = await fetch(
              `https://www.loom.com/v1/oembed?url=${encodeURIComponent(card.loomUrl)}`
            )

            if (!response.ok) {
              return [card.id, card.imageSrc] as const
            }

            const data = (await response.json()) as LoomOEmbedResponse

            return [card.id, data.thumbnail_url || card.imageSrc] as const
          } catch {
            return [card.id, card.imageSrc] as const
          }
        })
      )

      if (isCancelled) {
        return
      }

      setLoomThumbnails(Object.fromEntries(entries))
    }

    void loadThumbnails()

    return () => {
      isCancelled = true
    }
  }, [cards])

  useEffect(() => {
    if (!activeCardId) {
      return
    }

    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsVideoLoaded(true)
    }, 140)

    return () => {
      if (hoverTimeoutRef.current !== null) {
        window.clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [activeCardId])

  useEffect(() => {
    if (!activeCard) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeCard])

  const handleCardEnter = (cardId: string) => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current)
    }

    setIsVideoLoaded(false)
    setActiveCardId(cardId)
  }

  const handleCardActivate = (cardId: string) => {
    handleCardEnter(cardId)
  }

  const handleStageLeave = () => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current)
    }

    setIsVideoLoaded(false)
    setActiveCardId(null)
  }

  const handleStageClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement

    if (target.closest('.project-loom-card')) {
      return
    }

    if (target.closest('.project-loom-spotlight')) {
      return
    }

    handleStageLeave()
  }

  return (
    <section
      className="overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]"
      id="projects"
      ref={revealRef}
    >
      <div className="section-shell-top mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading
          eyebrow={content.eyebrow}
          title={
            isFrench
              ? 'Des projets montrés en démo, pas racontés.'
              : 'Projects shown in demo, not just described.'
          }
        />

        <div className="mt-7 max-w-[56rem]" data-reveal>
          <p className="text-base leading-8 text-[var(--muted)]">
            {content.body}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-2 text-[0.72rem] font-medium tracking-[0.02em] text-[var(--ink)] shadow-[0_8px_24px_rgba(17,17,17,0.04)]">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--ink)]">
              <Play className="size-3.5 fill-current" />
            </span>
            <span>
              {isFrench
                ? 'Touchez une card pour ouvrir la démo'
                : 'Tap a card to open the demo'}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`project-loom-stage relative mt-5 min-h-[620px] overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] px-0 py-10 sm:py-12 lg:min-h-[720px] lg:py-14 ${activeCard ? 'has-active' : ''}`}
        data-reveal
        onClick={handleStageClick}
        onMouseLeave={handleStageLeave}
        ref={stageRef}
      >
        <div className="project-loom-fade-left" />
        <div className="project-loom-fade-right" />

        {activeCard ? (
          <button
            aria-label={isFrench ? 'Fermer le projet actif' : 'Close active project'}
            className="project-loom-backdrop"
            onClick={handleStageLeave}
            type="button"
          />
        ) : null}

        <div className="space-y-5 lg:space-y-6">
          <div className="project-loom-row project-loom-row-forward">
            {topRow.map((card, index) => {
              const cardId = `${card.id}-top-${index}`
              const isActive = activeCardId === card.id

              return (
                <button
                  key={cardId}
                  className={`project-loom-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleCardActivate(card.id)}
                  onMouseEnter={() => handleCardEnter(card.id)}
                  type="button"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={card.thumbnailAlt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      src={loomThumbnails[card.id] ?? card.imageSrc}
                    />
                    <div className="project-loom-thumb-copy">
                      <div className="space-y-2">
                        <span className="project-loom-badge">{card.indexLabel}</span>
                        <p className="project-loom-sector">{card.sector}</p>
                      </div>
                      <p className="project-loom-label">{card.title}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="project-loom-row project-loom-row-backward">
            {bottomRow.map((card, index) => {
              const cardId = `${card.id}-bottom-${index}`
              const isActive = activeCardId === card.id

              return (
                <button
                  key={cardId}
                  className={`project-loom-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleCardActivate(card.id)}
                  onMouseEnter={() => handleCardEnter(card.id)}
                  type="button"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={card.thumbnailAlt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      src={loomThumbnails[card.id] ?? card.imageSrc}
                    />
                    <div className="project-loom-thumb-copy">
                      <div className="space-y-2">
                        <span className="project-loom-badge">{card.indexLabel}</span>
                        <p className="project-loom-sector">{card.sector}</p>
                      </div>
                      <p className="project-loom-label">{card.title}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className={`project-loom-spotlight ${activeCard ? 'is-visible' : ''}`}>
          <div className="project-loom-frame">
            <div className="project-loom-browser-bar">
              <span />
              <span />
              <span />
            </div>

            <div className="project-loom-screen">
              {isVideoLoaded && activeCard ? (
                <iframe
                  allow="fullscreen"
                  className="project-loom-iframe"
                  key={activeCard.id}
                  loading="lazy"
                  src={activeCard.embedSrc}
                  title={`MAPBRAIN Project Preview - ${activeCard.title}`}
                />
              ) : (
                <div className="project-loom-placeholder">
                  <img
                    alt={activeCard?.thumbnailAlt ?? 'Loom thumbnail preview'}
                    className="project-loom-placeholder-image"
                    src={
                      (activeCard ? loomThumbnails[activeCard.id] : undefined) ??
                      activeCard?.imageSrc ??
                      (cards[0] ? loomThumbnails[cards[0].id] : undefined) ??
                      cards[0]?.imageSrc
                    }
                  />
                  <span className="project-loom-play">
                    <Play className="size-8 fill-current" />
                  </span>
                </div>
              )}

              <aside className="project-loom-aside">
                <div className="project-loom-aside-panel">
                  <button
                    aria-label={isFrench ? 'Fermer la prévisualisation' : 'Close preview'}
                    className="project-loom-close"
                    onClick={handleStageLeave}
                    type="button"
                  >
                    <X className="size-4" />
                  </button>
                  <span className="project-loom-aside-kicker">
                    {activeCard?.sector ?? (isFrench ? 'Projet MAPBRAIN' : 'MAPBRAIN project')}
                  </span>
                  <h3 className="project-loom-aside-title">
                    {activeCard?.title ?? (isFrench ? 'Survolez un projet' : 'Hover a project')}
                  </h3>
                  <p className="project-loom-aside-body">
                    {activeCard?.description ??
                      (isFrench
                        ? 'Survolez une carte pour afficher la vidéo Loom correspondante et accéder, quand disponible, au prototype Stitch associé.'
                        : 'Hover a card to display its matching Loom walkthrough and, when available, open the related Stitch prototype.')}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {activeCard?.prototypeUrl ? (
                      <a
                        className="project-loom-aside-cta"
                        href={activeCard.prototypeUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="project-loom-mini-play">
                          <ArrowUpRight className="size-4" />
                        </span>
                        <span>{isFrench ? 'Ouvrir Stitch' : 'Open Stitch'}</span>
                      </a>
                    ) : null}

                    {activeCard?.loomUrl ? (
                      <a
                        className="project-loom-aside-cta"
                        href={activeCard.loomUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="project-loom-mini-play">
                          <Play className="size-4 fill-current" />
                        </span>
                        <span>{isFrench ? 'Voir sur Loom' : 'Watch on Loom'}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
