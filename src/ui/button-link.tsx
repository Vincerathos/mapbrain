import { ArrowUpRight } from 'lucide-react'
import type { CtaLink } from '../types/site'

interface ButtonLinkProps {
  className?: string
  link: CtaLink
  tone?: 'primary' | 'secondary' | 'text'
}

const tones: Record<NonNullable<ButtonLinkProps['tone']>, string> = {
  primary:
    'bg-[var(--ink)] text-white border-[var(--ink)] hover:bg-[var(--accent-deep)] hover:border-[var(--accent-deep)]',
  secondary:
    'bg-white/70 text-[var(--ink)] border-[var(--line)] hover:border-[var(--ink)] hover:bg-white',
  text: 'bg-transparent text-[var(--ink)] border-transparent hover:border-[var(--ink)]'
}

export function ButtonLink({
  className = '',
  link,
  tone = 'primary'
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-[20px] border px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] hover:-translate-y-px ${tones[tone]} ${className}`}
      href={link.href}
      rel={link.external ? 'noreferrer' : undefined}
      target={link.external ? '_blank' : undefined}
    >
      <span className="min-w-0">{link.label}</span>
      <span
        className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full ${
          tone === 'primary' ? 'bg-white text-[var(--ink)]' : 'bg-[var(--ink)] text-white'
        }`}
      >
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </a>
  )
}
