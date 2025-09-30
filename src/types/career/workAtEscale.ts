export interface WorkAtEscaleCard {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface WorkAtEscaleData {
  preTitle: string; 
  sectionTitle: string;
  subtitle: string;
  highlightedWord: string;
  cards: WorkAtEscaleCard[];
  viewAllButton: {
    text: string;
    href: string;
  };
}
