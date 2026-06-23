interface SectionIntroProps {
  align?: 'left' | 'center'
  body?: string
  eyebrow: string
  title: string
}

export function SectionIntro({
  align = 'left',
  body,
  eyebrow,
  title
}: SectionIntroProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-4xl ${alignment}`}>
      <p
        className="mb-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]"
        data-reveal
      >
        {eyebrow}
      </p>
      <h2
        className="max-w-4xl text-[clamp(2.05rem,7vw,5rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]"
        data-reveal
      >
        {title}
      </h2>
      {body ? (
        <p
          className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8"
          data-reveal
        >
          {body}
        </p>
      ) : null}
    </div>
  )
}
