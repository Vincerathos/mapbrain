import { isAcademy } from '../lib/site-mode'

interface SectionBandHeadingProps {
  eyebrow: string
  title: string
}

export function SectionBandHeading({
  eyebrow,
  title
}: SectionBandHeadingProps) {
  return (
    <div
      className="grid items-end gap-5 border-b border-[var(--line)] pb-8 md:grid-cols-[minmax(0,1fr)_minmax(160px,0.24fr)] md:gap-8"
      data-reveal
    >
      <h2 className="section-title-break max-w-[28ch] text-[clamp(2.85rem,6.4vw,5.5rem)] leading-[0.96] tracking-[-0.03em] text-[var(--ink)]">
        {title}
      </h2>
      <div className="flex items-center gap-3 border-l border-[var(--line)] pl-5 md:justify-end">
        {isAcademy ? (
          <span aria-hidden="true" className="flex shrink-0 items-center">
            <span className="size-2.5 rounded-full bg-[#c05a7f]" />
            <span className="-ml-0.5 size-2 rounded-full bg-[#9268bd]" />
            <span className="-ml-0.5 size-1.5 rounded-full bg-[#e09347]" />
          </span>
        ) : (
          <span className="size-2 shrink-0 rounded-full bg-[var(--accent-alt)]" />
        )}
        <span className="font-mono text-[0.76rem] uppercase tracking-[0.24em] text-[var(--muted)]">
          {eyebrow}
        </span>
      </div>
    </div>
  )
}
