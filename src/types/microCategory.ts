export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface OverviewData {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface GuideContent {
  id: string;
  title: string;
  content: string; // Just string content, no HTML/React here
}

export interface GuideSection {
  title: string;
  subtitle: string;
  topics: GuideContent[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RelatedBlog {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  category: string;
  readTime: string;
}

export interface ConsultantInfo {
  name: string;
  title: string;
  avatar: string;
  phone: string;
  businessEmail: string;
  personalEmail: string;
  whatsapp: string;
}

export interface CTAData {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

// Comparison table data for guide sections
export interface ComparisonTableData {
  point: string;
  legacy: string;
  modern: string;
}

export interface MicroCategoryPageData {
  slug: string;
  breadcrumbPath: string[];
  metaTitle: string;
  metaDescription: string;
  
  hero: HeroData;
  overview: OverviewData;
  technologies: TechnologyItem[];
  serviceFeatures: ServiceFeature[];
  processSteps: ProcessStep[];
  guideSection: GuideSection;
  caseStudies: CaseStudy[];
  faq: FAQItem[];
  relatedBlogs: RelatedBlog[];
  consultant: ConsultantInfo;
  cta: CTAData;
  
  // Specific data for guide section tables
  comparisonTables?: {
    legacyVsModern: ComparisonTableData[];
    [key: string]: ComparisonTableData[];
  };
}
