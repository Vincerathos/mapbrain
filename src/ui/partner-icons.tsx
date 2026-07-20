import type { ReactNode, SVGProps } from 'react'

function IconBase({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  )
}

// Puce électronique — outillage IA.
export function ChipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect height="10" rx="2" width="10" x="7" y="7" />
      <rect height="4" rx="1" width="4" x="10" y="10" />
      <path d="M10 7V4.4M14 7V4.4M10 17v2.6M14 17v2.6M7 10H4.4M7 14H4.4M17 10h2.6M17 14h2.6" />
    </IconBase>
  )
}

// Éclair — ressources activables rapidement.
export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
    </IconBase>
  )
}

// Nuage — crédits cloud & outils IA.
export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 17.5h8.5a3.25 3.25 0 0 0 .4-6.47 4.75 4.75 0 0 0-9.16-1.06A3.6 3.6 0 0 0 7 17.5Z" />
    </IconBase>
  )
}

// Serveurs empilés — licences logicielles & hébergement.
export function ServerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect height="6" rx="2" width="15" x="4.5" y="4.5" />
      <rect height="6" rx="2" width="15" x="4.5" y="13.5" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </IconBase>
  )
}

// Pièce avec flèche vers le bas — réduction des coûts.
export function CostDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v6M9 11.5l3 3 3-3" />
    </IconBase>
  )
}

// Nœuds reliés — mise en relation avec programmes & experts.
export function NetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.4" />
      <circle cx="17.5" cy="18" r="2.4" />
      <path d="M8.2 10.9l7.1-3.8M8.2 13.1l7.1 3.8" />
    </IconBase>
  )
}

// Compteur de vitesse — accélération de la mise sur le marché.
export function GaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4.5 17a7.5 7.5 0 1 1 15 0" />
      <path d="M12 16.5 15.5 11" />
      <circle cx="12" cy="16.5" fill="currentColor" r="1.1" stroke="none" />
    </IconBase>
  )
}

// Couches — infra, IA, paiement, déploiement.
export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </IconBase>
  )
}
