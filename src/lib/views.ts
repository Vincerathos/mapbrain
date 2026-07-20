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
  promise: 'home',
  audiences: 'home',
  framework: 'method',
  automation: 'automation',
  formations: 'formations',
  projects: 'projects',
  about: 'about',
  partners: 'about',
  faq: 'contact',
  contact: 'contact'
}

export function readViewFromHash(): View {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const hash = window.location.hash.replace('#', '')

  return hashToView[hash] ?? 'home'
}
