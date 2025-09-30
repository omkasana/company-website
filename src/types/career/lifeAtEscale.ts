export interface LifeAtEscaleCard {
  id: string;
  title: string;
  image: string;
  content: string;
}

export interface LifeAtEscaleData {
  preTitle: string;
  sectionTitle: string;
  highlightedText: string;
  subtitle: string;
  cards: LifeAtEscaleCard[];
}
