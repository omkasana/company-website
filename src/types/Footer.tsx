export interface FooterLink {
  id: string;
  title: string;
  url: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface FooterData {
  sections: FooterSection[];
  socialMedia: SocialMedia[];
  freeConsultationText: string;
  freeConsultationUrl: string;
  contactEmail: string;
  rating: {
    company: string;
    score: number;
    reviewsCount: number;
    reviewsUrl: string;
  };
  copyright: string;
  privacyPolicyUrl: string;
  websiteUrl: string;
}
