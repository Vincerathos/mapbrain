export type SiteMode = 'academy' | 'agency'

// Un seul codebase, deux sites : le mode est fixé au build via VITE_SITE.
// Par défaut : academy (l'organisme de formation).
export const siteMode: SiteMode =
  import.meta.env.VITE_SITE === 'agency' ? 'agency' : 'academy'

export const isAcademy = siteMode === 'academy'

// URLs croisées entre les deux sites (surchargables au build).
export const academyUrl: string =
  import.meta.env.VITE_ACADEMY_URL ?? 'https://mapbrain-academy.vercel.app'

export const agencyUrl: string =
  import.meta.env.VITE_AGENCY_URL ?? 'https://mapbrain-agency.vercel.app'
