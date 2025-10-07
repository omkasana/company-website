// src/types/technology.ts

export interface Technology {
  name: string;
  icon: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  technologies: Technology[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
}


export interface BannerContent {
  mainTitle: string;
  subTitle: string;
  backgroundImage: string;
}