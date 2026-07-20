import { useEffect, useRef } from 'react'

const MAX_STAGGER_MS = 560
const STAGGER_STEP_MS = 70

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const targets = Array.from(
      element.querySelectorAll<HTMLElement>('[data-reveal]')
    )

    if (targets.length === 0) {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) {
      return undefined
    }

    // Les sections déjà visibles au montage (hero, rechargement en milieu de
    // page…) restent affichées telles quelles : aucun masquage, meilleur LCP.
    const rect = element.getBoundingClientRect()

    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      return undefined
    }

    targets.forEach((target, index) => {
      target.style.setProperty(
        '--reveal-delay',
        `${Math.min(index * STAGGER_STEP_MS, MAX_STAGGER_MS)}ms`
      )
      target.classList.add('reveal-pending')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (!entry?.isIntersecting) {
          return
        }

        targets.forEach((target) => {
          target.classList.add('reveal-visible')
        })

        observer.disconnect()
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      targets.forEach((target) => {
        target.classList.remove('reveal-pending', 'reveal-visible')
        target.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return ref
}
