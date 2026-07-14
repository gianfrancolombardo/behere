export interface LandingSEO {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface PainPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ValuePillar {
  headline: string;
  title: string;
  copy: string;
  icon: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
  competitor: string;
  behere: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  placeholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingRow {
  concept: string;
  detail: string;
}

export interface ProfileCard {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonPair {
  yours: string;
  behere: string;
}

export interface LandingContent {
  seo: LandingSEO;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    trustBar: string[];
    microcopy?: string;
    tagline?: string;
  };
  problem: {
    title: string;
    body: string;
    painPoints: PainPoint[];
    transition?: string;
  };
  solution: {
    title: string;
    body: string;
    pillars: ValuePillar[];
    comparison?: {
      competitorLabel: string;
      behereLabel: string;
      rows: ComparisonRow[];
    };
  };
  steps: {
    title: string;
    steps: Step[];
    microcopy?: string;
    intermediateCta?: string;
  };
  urgency?: {
    title: string;
    body: string;
    scarcity: string;
  };
  earlyAccess?: {
    title: string;
    body: string;
    bullets?: string[];
    footnote?: string;
  };
  testimonials?: {
    title: string;
    items: Testimonial[];
    footnote?: string;
  };
  pricing?: {
    title: string;
    rows: PricingRow[];
    closing: string;
  };
  challenge?: {
    title: string;
    body: string;
    placeholder: string;
  };
  reward?: {
    title: string;
    items: string[];
    comparison: {
      headers: [string, string];
      rows: ComparisonPair[];
    };
  };
  profiles?: {
    title: string;
    inclusion: string;
    items: ProfileCard[];
  };
  faq: {
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    riskReversal?: string;
  };
  betaModal?: {
    title: string;
    body: string;
    cta: string;
    microcopy: string;
    successMessage: string;
    fields: {
      email: string;
      city: string;
    };
  };
  pilotForm?: {
    microcopy: string;
    successMessage: string;
    actTypeOptions: string[];
  };
  stickyCta: string;
}
