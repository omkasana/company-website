export interface IndustryCard {
  id: string;
  title: string;
  image: string;
  link: string;
  services: string[];
}

export interface IndustryExpertiseData {
  sectionTitle: string;
  industries: IndustryCard[];
}
