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

export interface HeroContent {
  badgeBody: string
  badgeTitle: string
  body: string
  primaryCta: CtaLink
  rotatingPhrases: string[]
  secondaryCta: CtaLink
  serviceTags: string[]
  subtitle: string
  title: string
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
  benefits: string[]
  examples: string[]
  cases?: string[]
  description: string
  icon: 'target' | 'megaphone' | 'video' | 'users' | 'settings' | 'message'
  title: string
}

export interface AutomationRationale {
  results: string[]
  title: string
  body: string[]
}

export interface HomeStat {
  label: string
  value: string
}

export interface ParcoursCard {
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'dark'
  description: string
  title: string
  tools: string
}

export interface UseCaseCard {
  automate: string
  create: string
  deploy: string
  icon:
    | 'users'
    | 'megaphone'
    | 'handshake'
    | 'coins'
    | 'scale'
    | 'truck'
    | 'factory'
    | 'headset'
    | 'chart'
    | 'target'
  title: string
}

export interface PedagogyCard {
  body: string
  title: string
}

export interface HomeContent {
  audienceOrgs: string[]
  audiencePeople: string[]
  audiencesTitle: string
  benefits: string[]
  benefitsTitle: string
  customChecks: string[]
  customNote: string
  customTitle: string
  engagements: string[]
  engagementsTitle: string
  parcoursCards: ParcoursCard[]
  parcoursCta: CtaLink
  parcoursTitle: string
  pedagogy: PedagogyCard[]
  pedagogyTitle: string
  stats: HomeStat[]
  statsTitle: string
  useCaseLabels: { automate: string; create: string; deploy: string }
  useCases: UseCaseCard[]
  useCasesTitle: string
}

export interface FormationProgram {
  audience: string
  badge?: string
  description: string
  duration: string
  image: ImageAsset
  level: string
  title: string
  topics: string[]
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

export interface PartnerDetailGroup {
  items: string[]
  note?: string
  title: string
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
    rationale: AutomationRationale
    title: string
    useCases: AutomationUseCase[]
  }
  formations: {
    body: string
    cta: CtaLink
    eyebrow: string
    formats: string[]
    formatsTitle: string
    note: string
    programs: FormationProgram[]
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
  home: HomeContent
  meta: {
    description: string
    title: string
  }
  navigation: {
    cta: CtaLink
    items: NavItem[]
  }
  partners: {
    advantages: string[]
    body: string
    detailGroups: PartnerDetailGroup[]
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
