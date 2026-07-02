import { ArrowUpRight, Dot } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface AudienceSectionProps {
  content: SiteContent['audiences']
}

interface AudienceVisual {
  alt: string
  src: string
}

interface AudienceTile {
  body?: string
  className: string
  highlights?: string[]
  image?: AudienceVisual
  kicker: string
  kind: 'image' | 'text'
  title: string
}

const visuals: AudienceVisual[] = [
  {
    alt: 'Équipe startup en échange autour d un ordinateur portable dans un espace de travail moderne',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Opératrice en environnement logistique ou opérationnel avec tablette et suivi terrain',
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Réunion business dans une grande entreprise autour d un écran de présentation',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Groupe de travail en salle de réunion pour piloter des décisions et arbitrages collectifs',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Dégradé abstrait vert et turquoise avec texture douce',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Vagues abstraites roses et bleues avec lumière diffuse',
    src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=80'
  },
  {
    alt: 'Texture abstraite pastel avec bokeh et reflets colorés',
    src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1800&q=80'
  }
]

export function AudienceSection({ content }: AudienceSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const items = content.items.slice(0, 4)

  const tiles: AudienceTile[] = [
    {
      body:
        'Lancer vite sans perdre la qualité du cadrage, du prototype ou de la traction initiale.',
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-1 xl:col-span-4 xl:row-start-1 xl:row-span-2',
      highlights: ['Validation rapide', 'Prototype propre'],
      kicker: 'Audience / 01',
      kind: 'text',
      title: items[0]?.title ?? 'Startups'
    },
    {
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-5 xl:col-span-3 xl:row-start-1 xl:row-span-2',
      image: visuals[0],
      kicker: 'Visual / A',
      kind: 'image',
      title: 'Signal'
    },
    {
      body:
        'Automatiser les opérations, absorber la charge et gagner en cadence sans épaissir la friction.',
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-8 xl:col-span-5 xl:row-start-1 xl:row-span-2',
      highlights: ['Automatisation utile', 'Productivité nette'],
      kicker: 'Audience / 02',
      kind: 'text',
      title: items[1]?.title ?? 'PME'
    },
    {
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-1 xl:col-span-3 xl:row-start-3 xl:row-span-2',
      image: visuals[1],
      kicker: 'Visual / B',
      kind: 'image',
      title: 'Structure'
    },
    {
      body:
        'Créer des parcours plus nets, des services mieux pensés et des bases plus utiles à long terme.',
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-4 xl:col-span-5 xl:row-start-3 xl:row-span-2',
      highlights: ['Parcours plus clairs', 'Base scalable'],
      kicker: 'Audience / 03',
      kind: 'text',
      title: items[2]?.title ?? 'Entreprises'
    },
    {
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-9 xl:col-span-4 xl:row-start-3 xl:row-span-2',
      image: visuals[2],
      kicker: 'Visual / C',
      kind: 'image',
      title: 'Clarity'
    },
    {
      body:
        'Piloter des projets plus lisibles, des initiatives plus crédibles et des arbitrages mieux tenus.',
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-1 xl:col-span-4 xl:row-start-5 xl:row-span-2',
      highlights: ['Cadre plus lisible', 'Arbitrages plus nets'],
      kicker: 'Audience / 04',
      kind: 'text',
      title: items[3]?.title ?? 'Organisations'
    },
    {
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-5 xl:col-span-3 xl:row-start-5 xl:row-span-2',
      image: visuals[3],
      kicker: 'Visual / D',
      kind: 'image',
      title: 'Depth'
    },
    {
      body:
        'Une même exécution pour cadrer, produire et accélérer sans disperser les décisions entre trop d’acteurs.',
      className:
        'md:col-span-3 md:row-span-2 xl:col-start-8 xl:col-span-5 xl:row-start-5 xl:row-span-2',
      highlights: ['Moins de friction', 'Vitesse tenue'],
      kicker: 'Audience / 05',
      kind: 'text',
      title: 'Décideurs'
    }
  ]

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="audiences"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[140px] xl:grid-cols-12 xl:auto-rows-[110px]">
          {tiles.map((tile, index) => {
            if (tile.kind === 'text') {
              return (
                <article
                  key={`${tile.kicker}-${index}`}
                  className={`group flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(240,220,235,0.64))] p-5 shadow-[0_14px_40px_rgba(17,17,17,0.05)] md:min-h-0 ${tile.className}`}
                  data-reveal
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {tile.kicker}
                    </span>
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--line)] bg-white/86 text-[var(--ink)]">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="max-w-[11ch] text-[clamp(2rem,4vw,3.4rem)] font-[700] leading-[0.92] tracking-[-0.06em] text-[var(--ink)]">
                      {tile.title}
                    </h3>
                    <p className="mt-7 max-w-[30ch] text-[0.98rem] leading-7 text-[var(--muted)]">
                      {tile.body}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(tile.highlights ?? ['Décision rapide', 'Exécution nette']).map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-[var(--line)] bg-white/86 px-3 py-1.5 text-[0.74rem] text-[var(--ink)]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </article>
              )
            }

            return (
              <article
                key={`${tile.kicker}-${index}`}
                className={`group relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--panel)] shadow-[0_18px_44px_rgba(17,17,17,0.06)] ${tile.className}`}
                data-reveal
              >
                <img
                  alt={tile.image?.alt ?? tile.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  src={tile.image?.src}
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.18))]" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/88 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink)] shadow-[0_8px_20px_rgba(17,17,17,0.08)]">
                  <Dot className="size-4 text-[var(--accent-alt-deep)]" />
                  <span>{tile.kicker}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
