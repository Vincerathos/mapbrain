import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface CapabilitySectionProps {
  content: SiteContent['capabilities']
}

interface ExpertiseCard {
  description: string
  id: string
  image: string
  index: string
  label: string
  tags: string[]
  title: string
}

export function CapabilitySection({ content }: CapabilitySectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage !== 'en'

  const expertiseCards: ExpertiseCard[] = isFrench
    ? [
        {
          description:
            'Nous cadrons l’opportunité, clarifions la proposition de valeur et transformons une intuition en plan exécutable.',
          id: 'strategy',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
          index: '01',
          label: 'Service',
          tags: ['Audit stratégique', 'Positionnement', 'Validation business'],
          title: 'Stratégie & audit'
        },
        {
          description:
            'Architecture d’interface, parcours, hiérarchie et direction produit pour rendre une offre plus lisible et plus crédible.',
          id: 'design',
          image:
            'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80',
          index: '02',
          label: 'Service',
          tags: ['UX flows', 'UI systems', 'Prototype'],
          title: 'Design produit'
        },
        {
          description:
            'Sites premium, apps web, SaaS et outils internes construits pour être rapides, maintenables et prêts à scaler.',
          id: 'build',
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
          index: '03',
          label: 'Service',
          tags: ['Web app', 'SaaS', 'Outils métier'],
          title: 'Web development'
        },
        {
          description:
            'Automatisations concrètes, assistants IA et systèmes internes qui réduisent le temps perdu et augmentent la capacité des équipes.',
          id: 'ai',
          image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
          index: '04',
          label: 'Service',
          tags: ['Automation', 'Assistants IA', 'Ops'],
          title: 'IA & automation'
        },
        {
          description:
            'Acquisition, contenu, conversion et pilotage croissance pour transformer une base produit en levier de scale.',
          id: 'growth',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
          index: '05',
          label: 'Service',
          tags: ['Growth ops', 'Contenu', 'Conversion'],
          title: 'Growth ops'
        }
      ]
    : [
        {
          description:
            'We frame the opportunity, clarify the value proposition and turn an intuition into an executable plan.',
          id: 'strategy',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
          index: '01',
          label: 'Service',
          tags: ['Strategic audit', 'Positioning', 'Business validation'],
          title: 'Strategy & audit'
        },
        {
          description:
            'Interface architecture, journeys, hierarchy and product direction to make an offer clearer and more credible.',
          id: 'design',
          image:
            'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80',
          index: '02',
          label: 'Service',
          tags: ['UX flows', 'UI systems', 'Prototype'],
          title: 'Product design'
        },
        {
          description:
            'Premium sites, web apps, SaaS and internal tools built to be fast, maintainable and ready to scale.',
          id: 'build',
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
          index: '03',
          label: 'Service',
          tags: ['Web app', 'SaaS', 'Internal tools'],
          title: 'Web development'
        },
        {
          description:
            'Practical automations, AI assistants and internal systems that reduce wasted time and expand team capacity.',
          id: 'ai',
          image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
          index: '04',
          label: 'Service',
          tags: ['Automation', 'AI assistants', 'Ops'],
          title: 'AI & automation'
        },
        {
          description:
            'Acquisition, content, conversion and growth steering to turn a product base into a real scaling lever.',
          id: 'growth',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
          index: '05',
          label: 'Service',
          tags: ['Growth ops', 'Content', 'Conversion'],
          title: 'Growth ops'
        }
      ]

  const [activeCardId, setActiveCardId] = useState(expertiseCards[0]?.id ?? 'strategy')

  const handleCardActivate = (cardId: string) => {
    if (cardId === activeCardId) {
      return
    }

    setActiveCardId(cardId)
  }

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="capabilities"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading
          eyebrow={isFrench ? 'Service' : 'Service'}
          title={isFrench ? 'Notre expertise' : 'Our expertise'}
        />

        <div className="mt-14 overflow-hidden border border-[var(--line)] bg-white">
          <div className="flex flex-col lg:min-h-[522px] lg:flex-row">
            {expertiseCards.map((card) => {
              const isActive = card.id === activeCardId

              return (
                <article
                  key={card.id}
                  className={`relative border-b border-[var(--line)] transition-[flex-basis,width,background-color,opacity] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${isActive ? 'bg-white lg:basis-[34%]' : 'bg-[linear-gradient(180deg,#f8fafc_0%,#f8f3ef_54%,#f6f1ec_100%)] lg:basis-[16.5%]'}`}
                  data-reveal
                  onMouseEnter={() => handleCardActivate(card.id)}
                >
                  <button
                    className="block h-full w-full text-left"
                    onClick={() => handleCardActivate(card.id)}
                    type="button"
                  >
                    <div className="flex items-center gap-4 border-b border-[var(--line)] px-6 py-[1.15rem]">
                      <span className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-[var(--ink)]">
                        {card.label}
                      </span>
                      <span className="h-px flex-1 bg-[var(--line)]" />
                      <span className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-[var(--ink)]">
                        ({card.index})
                      </span>
                    </div>

                    {isActive ? (
                      <div className="flex h-full flex-col px-6 pb-6 pt-5 lg:px-6 lg:pb-6">
                        <figure className="overflow-hidden rounded-[14px] bg-[var(--panel)]">
                          <img
                            alt={card.title}
                            className="aspect-[1.58/0.82] w-full object-cover"
                            height="900"
                            loading="lazy"
                            src={card.image}
                            width="1400"
                          />
                        </figure>

                        <div className="mt-5">
                          <h3 className="text-[clamp(1.95rem,2.85vw,2.55rem)] font-[520] leading-[0.95] tracking-[-0.07em] text-[var(--ink)]">
                            {card.title}
                          </h3>
                          <p className="mt-4 max-w-[31rem] text-[1.02rem] leading-8 text-[var(--muted)]">
                            {card.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-3">
                            {card.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-[6px] border border-[var(--line)] bg-[#fbfaf8] px-4 py-[0.6rem] text-[0.9rem] text-[var(--muted)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-[180px] items-end px-6 pb-6 lg:h-[calc(522px-64px)] lg:pb-6">
                        <h3 className="text-[2.1rem] font-[450] leading-none tracking-[-0.07em] text-[rgba(17,17,17,0.78)] lg:[writing-mode:vertical-rl] lg:[transform:rotate(180deg)]">
                          {card.title}
                        </h3>
                      </div>
                    )}
                  </button>
                </article>
              )
            })}
          </div>
        </div>

        <p
          className="mt-8 max-w-3xl text-[1rem] leading-8 text-[var(--muted)]"
          data-reveal
        >
          {content.body}
        </p>
      </div>
    </section>
  )
}
