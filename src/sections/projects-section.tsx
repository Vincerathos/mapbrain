import { Play } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {
  MouseEvent as ReactMouseEvent,
  SyntheticEvent
} from 'react'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface ProjectsSectionProps {
  content: SiteContent['projects']
}

interface LoomProjectCard {
  description: string
  id: string
  indexLabel: string
  sector: string
  thumbnailAlt: string
  thumbnailSrc: string
  title: string
}

const loomVideoId = 'e0d6dd8b5737463090774e35266d8e94'
const loomShareUrl = `https://www.loom.com/share/${loomVideoId}`
const loomThumbnailFallbackUrl = `https://cdn.loom.com/sessions/thumbnails/${loomVideoId}-with-play.gif`
const loomEmbedFallbackUrl = `https://www.loom.com/embed/${loomVideoId}?autoplay=1`
const projectDebugTag = '[ProjectsSection Debug]'

interface LoomOEmbedResponse {
  html?: string
  thumbnail_url?: string
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'
  const hoverTimeoutRef = useRef<number | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const mouseMoveCountRef = useRef(0)
  const [activeCardId, setActiveCardId] = useState<string | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [loomThumbnailSrc, setLoomThumbnailSrc] = useState(
    loomThumbnailFallbackUrl
  )
  const [loomEmbedSrc, setLoomEmbedSrc] = useState(loomEmbedFallbackUrl)

  const debugLog = (message: string, payload?: unknown) => {
    if (payload === undefined) {
      console.log(`${projectDebugTag} ${message}`)
      return
    }

    console.log(`${projectDebugTag} ${message}`, payload)
  }

  const debugWarn = (message: string, payload?: unknown) => {
    if (payload === undefined) {
      console.warn(`${projectDebugTag} ${message}`)
      return
    }

    console.warn(`${projectDebugTag} ${message}`, payload)
  }

  const debugError = (message: string, payload?: unknown) => {
    if (payload === undefined) {
      console.error(`${projectDebugTag} ${message}`)
      return
    }

    console.error(`${projectDebugTag} ${message}`, payload)
  }

  const cards = useMemo<LoomProjectCard[]>(
    () => {
      debugLog('building cards collection from content.items', {
        itemCount: content.items.length
      })

      return (
      Array.from({ length: 4 }, (_, index) => {
        const project = content.items[index % content.items.length]

        return {
          description: project.description,
          id: `loom-card-${index + 1}`,
          indexLabel: String(index + 1).padStart(2, '0'),
          sector: project.sector,
          thumbnailAlt: `${project.title} Loom thumbnail`,
          thumbnailSrc: loomThumbnailSrc,
          title: project.title
        }
      })
      )
    },
    [content.items, loomThumbnailSrc]
  )

  const activeCard = useMemo(
    () => cards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId, cards]
  )

  const topRow = [...cards, ...cards]
  const bottomRow = [...cards.slice(1), ...cards.slice(0, 1), ...cards.slice(1), ...cards.slice(0, 1)]

  useEffect(() => {
    debugLog('active card effect fired', {
      activeCardId
    })

    if (!activeCardId) {
      debugWarn('no active card, spotlight stays unloaded')
      return
    }

    debugLog('scheduling deferred iframe mount after hover', {
      activeCardId,
      delayMs: 140
    })
    hoverTimeoutRef.current = window.setTimeout(() => {
      debugLog('hover timeout completed, iframe can mount now', {
        activeCardId
      })
      setIsVideoLoaded(true)
    }, 140)

    return () => {
      if (hoverTimeoutRef.current !== null) {
        debugWarn('cleaning previous hover timeout', {
          activeCardId
        })
        window.clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [activeCardId])

  useEffect(() => {
    debugLog('component mounted')

    return () => {
      debugWarn('component unmounted')
    }
  }, [])

  useEffect(() => {
    debugLog('cards collection changed', {
      cardIds: cards.map((card) => card.id),
      thumbnailSrc: loomThumbnailSrc
    })
  }, [cards, loomThumbnailSrc])

  useEffect(() => {
    debugLog('active card resolved object changed', activeCard)
  }, [activeCard])

  useEffect(() => {
    debugLog('iframe loaded state changed', {
      isVideoLoaded
    })
  }, [isVideoLoaded])

  useEffect(() => {
    debugLog('current Loom endpoints', {
      loomEmbedSrc,
      loomShareUrl,
      loomThumbnailSrc
    })
  }, [loomEmbedSrc, loomThumbnailSrc])

  useEffect(() => {
    const loadLoomOEmbed = async () => {
      const oEmbedUrl = `https://www.loom.com/v1/oembed?url=${encodeURIComponent(loomShareUrl)}`

      debugLog('starting Loom oEmbed fetch', {
        oEmbedUrl
      })

      try {
        const response = await fetch(oEmbedUrl)
        debugLog('Loom oEmbed response received', {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText
        })

        if (!response.ok) {
          throw new Error(`oEmbed request failed with status ${response.status}`)
        }

        const data = (await response.json()) as LoomOEmbedResponse
        debugLog('Loom oEmbed payload parsed', data)

        if (data.thumbnail_url) {
          setLoomThumbnailSrc(data.thumbnail_url)
          debugLog('updated thumbnail from Loom oEmbed', {
            thumbnailUrl: data.thumbnail_url
          })
        } else {
          debugWarn('Loom oEmbed payload has no thumbnail_url, keeping fallback')
        }

        if (data.html) {
          const iframeSrcMatch = data.html.match(/src="([^"]+)"/i)
          const iframeSrc = iframeSrcMatch?.[1]

          if (iframeSrc) {
            setLoomEmbedSrc(iframeSrc)
            debugLog('updated iframe src from Loom oEmbed html', {
              iframeSrc
            })
          } else {
            debugWarn('Unable to parse iframe src from Loom oEmbed html, keeping fallback')
          }
        } else {
          debugWarn('Loom oEmbed payload has no html field, keeping fallback embed src')
        }
      } catch (error) {
        debugError('Loom oEmbed fetch failed, keeping fallback assets', {
          error
        })
      }
    }

    void loadLoomOEmbed()
  }, [])

  useEffect(() => {
    const onWindowError = (event: ErrorEvent) => {
      debugError('window error captured', {
        colno: event.colno,
        filename: event.filename,
        lineno: event.lineno,
        message: event.message
      })
    }

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      debugError('unhandled rejection captured', {
        reason: event.reason
      })
    }

    window.addEventListener('error', onWindowError)
    window.addEventListener('unhandledrejection', onUnhandledRejection)
    debugLog('global error listeners attached')

    return () => {
      window.removeEventListener('error', onWindowError)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
      debugWarn('global error listeners removed')
    }
  }, [])

  useEffect(() => {
    const logStageMetrics = () => {
      const stageRect = stageRef.current?.getBoundingClientRect()

      debugLog('stage metrics snapshot', {
        activeCardId,
        mouseMoveEvents: mouseMoveCountRef.current,
        rect: stageRect
          ? {
              bottom: stageRect.bottom,
              height: stageRect.height,
              left: stageRect.left,
              right: stageRect.right,
              top: stageRect.top,
              width: stageRect.width
            }
          : null
      })

      const loomResources = performance
        .getEntriesByType('resource')
        .filter(
          (entry) =>
            entry.name.includes('loom') || entry.name.includes('oembed')
        )
        .map((entry) => ({
          decodedBodySize:
            'decodedBodySize' in entry ? entry.decodedBodySize : undefined,
          duration: entry.duration,
          initiatorType:
            'initiatorType' in entry ? entry.initiatorType : undefined,
          name: entry.name,
          transferSize: 'transferSize' in entry ? entry.transferSize : undefined
        }))

      debugLog('performance resources mentioning loom', loomResources)
    }

    logStageMetrics()
    const intervalId = window.setInterval(logStageMetrics, 2500)
    debugLog('resource/metrics interval attached', {
      intervalMs: 2500
    })

    return () => {
      window.clearInterval(intervalId)
      debugWarn('resource/metrics interval removed')
    }
  }, [activeCardId])

  const handleCardEnter = (cardId: string) => {
    debugLog('card hover enter', {
      cardId,
      previousActiveCardId: activeCardId
    })

    if (hoverTimeoutRef.current !== null) {
      debugWarn('clearing pending hover timeout before activating new card', {
        cardId
      })
      window.clearTimeout(hoverTimeoutRef.current)
    }

    setIsVideoLoaded(false)
    setActiveCardId(cardId)
  }

  const handleStageLeave = () => {
    debugWarn('stage leave detected, closing spotlight', {
      activeCardId
    })

    if (hoverTimeoutRef.current !== null) {
      debugWarn('clearing hover timeout on stage leave')
      window.clearTimeout(hoverTimeoutRef.current)
    }

    setIsVideoLoaded(false)
    setActiveCardId(null)
  }

  const handleStageMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    mouseMoveCountRef.current += 1

    const rect = stageRef.current?.getBoundingClientRect()
    debugLog('stage mousemove', {
      clientX: event.clientX,
      clientY: event.clientY,
      localX: rect ? event.clientX - rect.left : null,
      localY: rect ? event.clientY - rect.top : null,
      moveCount: mouseMoveCountRef.current
    })
  }

  const handleStageClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    debugLog('stage click detected', {
      className: target.className,
      tagName: target.tagName
    })

    if (target.closest('.project-loom-card')) {
      debugLog('click happened inside a project card, keeping spotlight open')
      return
    }

    debugWarn('click happened outside cards, closing spotlight')
    handleStageLeave()
  }

  const handleThumbnailLoad = (
    event: SyntheticEvent<HTMLImageElement>,
    cardId: string
  ) => {
    const image = event.currentTarget
    debugLog('thumbnail loaded', {
      cardId,
      currentSrc: image.currentSrc,
      height: image.naturalHeight,
      width: image.naturalWidth
    })
  }

  const handleThumbnailError = (
    event: SyntheticEvent<HTMLImageElement>,
    cardId: string
  ) => {
    const image = event.currentTarget
    debugError('thumbnail failed to load', {
      cardId,
      currentSrc: image.currentSrc,
      src: image.src
    })
  }

  const handleIframeLoad = () => {
    debugLog('iframe load event fired', {
      activeCardId,
      src: loomEmbedSrc
    })
  }

  const handleIframeError = () => {
    debugError('iframe error event fired', {
      activeCardId,
      src: loomEmbedSrc
    })
  }

  return (
    <section
      className="overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]"
      id="projects"
    >
      <div className="section-shell-top mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading
          eyebrow={content.eyebrow}
          title={
            isFrench
              ? 'Des projets montrés en Loom, pas racontés.'
              : 'Projects shown in Loom, not just described.'
          }
        />

        <div className="mt-7 max-w-[52rem]">
          <p className="text-base leading-8 text-[var(--muted)]">
            {content.body}
          </p>
        </div>
      </div>

      <div
        className={`project-loom-stage relative mt-5 min-h-[620px] overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] px-0 py-10 sm:py-12 lg:min-h-[720px] lg:py-14 ${activeCard ? 'has-active' : ''}`}
        onClick={handleStageClick}
        onMouseLeave={handleStageLeave}
        onMouseMove={handleStageMouseMove}
        ref={stageRef}
      >
        <div className="project-loom-fade-left" />
        <div className="project-loom-fade-right" />

        <div className="space-y-5 lg:space-y-6">
          <div className="project-loom-row project-loom-row-forward">
            {topRow.map((card, index) => {
              const cardId = `${card.id}-top-${index}`
              const isActive = activeCardId === card.id

              return (
                <button
                  key={cardId}
                  className={`project-loom-card ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => handleCardEnter(card.id)}
                  type="button"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={card.thumbnailAlt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      onError={(event) => handleThumbnailError(event, card.id)}
                      onLoad={(event) => handleThumbnailLoad(event, card.id)}
                      src={card.thumbnailSrc}
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
                  onMouseEnter={() => handleCardEnter(card.id)}
                  type="button"
                >
                  <div className="project-loom-thumb">
                    <img
                      alt={card.thumbnailAlt}
                      className="project-loom-thumb-image"
                      loading="lazy"
                      onError={(event) => handleThumbnailError(event, card.id)}
                      onLoad={(event) => handleThumbnailLoad(event, card.id)}
                      src={card.thumbnailSrc}
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
                  onError={handleIframeError}
                  onLoad={handleIframeLoad}
                  src={loomEmbedSrc}
                  title="MAPBRAIN Loom Preview"
                />
              ) : (
                <div className="project-loom-placeholder">
                  <img
                    alt={activeCard?.thumbnailAlt ?? 'Loom thumbnail preview'}
                    className="project-loom-placeholder-image"
                    src={loomThumbnailSrc}
                  />
                  <span className="project-loom-play">
                    <Play className="size-8 fill-current" />
                  </span>
                </div>
              )}

              <aside className="project-loom-aside">
                <div className="project-loom-aside-panel">
                  <span className="project-loom-aside-kicker">
                    {activeCard?.sector ?? (isFrench ? 'Projet Loom' : 'Loom project')}
                  </span>
                  <h3 className="project-loom-aside-title">
                    {activeCard?.title ?? (isFrench ? 'Survolez une vidéo' : 'Hover a video')}
                  </h3>
                  <p className="project-loom-aside-body">
                    {activeCard?.description ??
                      (isFrench
                        ? 'Chaque case study sera présenté en walkthrough Loom pour montrer le niveau réel de réflexion, de design et d’exécution.'
                        : 'Each case study will be presented as a Loom walkthrough to show the real level of thinking, design and execution.')}
                  </p>
                  <div className="project-loom-aside-cta">
                    <span className="project-loom-mini-play">
                      <Play className="size-4 fill-current" />
                    </span>
                    <span>
                      {isFrench ? 'Lecture automatique au survol' : 'Autoplay on hover'}
                    </span>
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
