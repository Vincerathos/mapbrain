export type Locale = 'fr' | 'en'

export interface NavItem {
  href: string
  label: string
}

export interface CtaLink {
  href: string
  label: string
  external?: boolean
}

export interface ImageAsset {
  alt: string
  src: string
}

export interface HeroMetric {
  label: string
  value: string
}

export interface HeroContent {
  badgeBody: string
  badgeTitle: string
  body: string
  eyebrow: string
  image: ImageAsset
  metrics: HeroMetric[]
  primaryCta: CtaLink
  rotatingPhrases: string[]
  secondaryCta: CtaLink
  serviceTags: string[]
  subtitle: string
  title: string
  visualEyebrow: string
  visualTitle: string
}

export interface PromisePoint {
  description: string
  title: string
}

export interface AudienceItem {
  description: string
  icon: 'rocket' | 'factory' | 'building' | 'landmark'
  title: string
}

export interface AboutFigure {
  label: string
  value: string
}

export interface AboutRecognition {
  label: string
  value: string
}

export interface FrameworkStep {
  description: string
  gains: string[]
  image: ImageAsset
  label: string
  step: string
  title: string
  whatWeDo: string[]
}

export interface AutomationUseCase {
  description: string
  icon: 'target' | 'megaphone' | 'video' | 'users' | 'settings' | 'message'
  results: string[]
  title: string
}

export interface CapabilityItem {
  items: string[]
  title: string
}

export interface ProjectItem {
  description: string
  image: ImageAsset
  loomUrl: string
  outcomes: string[]
  prototypeUrl?: string
  sector: string
  title: string
}

export interface PartnerLogo {
  name: string
}

export interface PartnerStat {
  label: string
  value: string
}

export interface ContactChannel {
  href: string
  label: string
  value: string
}

export interface FaqItem {
  answer: string
  question: string
}

export interface SiteContent {
  about: {
    body: string
    eyebrow: string
    figures: AboutFigure[]
    recognition: AboutRecognition[]
    title: string
  }
  audiences: {
    eyebrow: string
    items: AudienceItem[]
    title: string
  }
  automation: {
    body: string
    eyebrow: string
    image: ImageAsset
    title: string
    useCases: AutomationUseCase[]
  }
  capabilities: {
    body: string
    columns: CapabilityItem[]
    eyebrow: string
    image: ImageAsset
    title: string
  }
  finalCta: {
    body: string
    channels: ContactChannel[]
    eyebrow: string
    primaryCta: CtaLink
    title: string
  }
  faq: {
    body: string
    contactCta: CtaLink
    contactPrompt: string
    eyebrow: string
    items: FaqItem[]
    title: string
    visual: ImageAsset
  }
  footer: {
    blurb: string
    copyright: string
  }
  framework: {
    body: string
    eyebrow: string
    gainsLabel: string
    steps: FrameworkStep[]
    title: string
    whatWeDoLabel: string
  }
  hero: HeroContent
  meta: {
    description: string
    title: string
  }
  navigation: {
    cta: CtaLink
    items: NavItem[]
  }
  partners: {
    body: string
    eyebrow: string
    logos: PartnerLogo[]
    perksLabel: string
    perks: string[]
    stats: PartnerStat[]
    title: string
  }
  projects: {
    body: string
    eyebrow: string
    items: ProjectItem[]
    title: string
  }
  promise: {
    body: string
    eyebrow: string
    points: PromisePoint[]
    title: string
  }
}
