// Logo « grappe de pastilles » MapBrain Academy, redessiné en SVG
// d'après la brochure (cercles roses, violets et orange façon synapses).
export function AcademyLogo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="11" fill="#9268bd" r="6" />
      <circle cx="21.5" cy="7.5" fill="#c05a7f" r="4" />
      <circle cx="28" cy="14" fill="#e09347" r="2.6" />
      <circle cx="17" cy="19.5" fill="#c05a7f" opacity="0.92" r="4.6" />
      <circle cx="26" cy="22.5" fill="#9268bd" r="3.2" />
      <circle cx="8" cy="24" fill="#e09347" r="3" />
      <circle cx="16.5" cy="28.5" fill="#f0b7c9" r="2.2" />
      <circle cx="24.5" cy="29" fill="#c05a7f" r="1.6" />
    </svg>
  )
}
