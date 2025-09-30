export interface BenefitDropdown {
  id: string;
  title: string;
  content: string[];
  isOpen?: boolean;
}

export interface BenefitsSectionData {
  preTitle: string;
  title: string;
  highlightedWord: string;
  description: string;
  image: string;
  dropdowns: BenefitDropdown[];
}
