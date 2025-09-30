export interface IndustryService {
  id: string;
  title: string;
  link: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
  link: string;
  services: IndustryService[];
}

export interface IndustriesData {
  sectionTitle: string;
  sectionSubtitle: string;
  industries: Industry[];
}
