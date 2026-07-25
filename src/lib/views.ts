import { isAcademy } from './site-mode'

export type View =
  | 'home'
  | 'method'
  | 'automation'
  | 'formations'
  | 'projects'
  | 'about'
  | 'contact'

// Chaque ancre historique (#framework, #partners…) est rattachée à une vue,
// ce qui préserve les liens existants et les partages d'URL.
export const hashToView: Record<string, View> = {
  '': 'home',
  top: 'home',
  faq: 'home',
  framework: 'method',
  automation: 'automation',
  formations: 'formations',
  projects: 'projects',
  about: 'about',
  promise: 'about',
  audiences: 'about',
  partners: 'about',
  contact: 'contact'
}

// Vues disponibles selon le site : l'Academy n'expose que la formation,
// l'agence n'expose que le studio.
const academyViews: readonly View[] = ['home', 'formations', 'contact']
const agencyViews: readonly View[] = [
  'home',
  'method',
  'automation',
  'projects',
  'about',
  'contact'
]

export const allowedViews: readonly View[] = isAcademy
  ? academyViews
  : agencyViews

export function readViewFromHash(): View {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const hash = window.location.hash.replace('#', '')
  const view = hashToView[hash] ?? 'home'

  return allowedViews.includes(view) ? view : 'home'
}
