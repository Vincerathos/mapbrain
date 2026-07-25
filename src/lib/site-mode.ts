export type SiteMode = 'academy' | 'agency'

// Un seul codebase, deux sites : le mode est fixé au build via VITE_SITE.
// Par défaut : academy (l'organisme de formation).
export const siteMode: SiteMode =
  import.meta.env.VITE_SITE === 'agency' ? 'agency' : 'academy'

export const isAcademy = siteMode === 'academy'

// URLs croisées entre les deux sites (surchargables au build).
// Note : mapbrain-agency.vercel.app est occupé par l'ancien projet Vercel,
// d'où le suffixe -mu attribué par Vercel.
export const academyUrl: string =
  import.meta.env.VITE_ACADEMY_URL ?? 'https://mapbrain-academy.vercel.app'

export const agencyUrl: string =
  import.meta.env.VITE_AGENCY_URL ?? 'https://mapbrain-agency-mu.vercel.app'

// Adresse de contact propre à chaque site.
export const contactEmail: string = isAcademy
  ? 'contact@mapbrain-academy.fr'
  : 'contact@mapbrain.ai'
