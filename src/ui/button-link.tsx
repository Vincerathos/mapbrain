import { ArrowUpRight } from 'lucide-react'
import type { CtaLink } from '../types/site'

interface ButtonLinkProps {
  className?: string
  link: CtaLink
  tone?: 'primary' | 'secondary' | 'text'
}

const tones: Record<NonNullable<ButtonLinkProps['tone']>, string> = {
  primary:
    'bg-[var(--accent)] text-[var(--ink)] border-[var(--accent)] hover:bg-[var(--accent-deep)] hover:border-[var(--accent-deep)] hover:text-white',
  secondary:
    'bg-transparent text-[var(--ink)] border-[var(--line-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
  text: 'bg-transparent text-[var(--ink)] border-transparent hover:border-[var(--ink)]'
}

export function ButtonLink({
  className = '',
  link,
  tone = 'primary'
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center gap-2 border px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] ${tones[tone]} ${className}`}
      href={link.href}
      rel={link.external ? 'noreferrer' : undefined}
      target={link.external ? '_blank' : undefined}
    >
      <span>{link.label}</span>
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  )
}
