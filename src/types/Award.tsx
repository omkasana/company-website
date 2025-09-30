import { ReactNode } from 'react';

export interface Award {
  id: number;
  title: string;
  platform: string;
  years: string[];
  backgroundColor: string;
  textColor: string;
  link: string;
  logoComponent: ReactNode;
}

export interface AwardsData {
  sectionTitle: string;
  sectionDescription: string;
  awards: Award[];
}
