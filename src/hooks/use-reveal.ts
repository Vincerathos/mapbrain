import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

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
      gsap.set(targets, {
        clearProps: 'all',
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        y: 0
      })
      return undefined
    }

    const context = gsap.context(() => {
      gsap.set(targets, {
        filter: 'blur(10px)',
        opacity: 0,
        scale: 0.985,
        transformOrigin: '50% 50%',
        y: 34
      })
    }, element)

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (!entry?.isIntersecting) {
          return
        }

        gsap.to(targets, {
          duration: 0.95,
          ease: 'power3.out',
          filter: 'blur(0px)',
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          y: 0
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
      context.revert()
    }
  }, [])

  return ref
}
