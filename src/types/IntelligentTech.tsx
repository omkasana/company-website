export interface TechService {
  id: number;
  title: string;
  description: string;
  link: string;
  icon?: string;
}

export interface IntelligentTechData {
  sectionTitle: string;
  sectionSubtitle: string;
  ctaText: string;
  ctaLink: string;
  services: TechService[];
}
