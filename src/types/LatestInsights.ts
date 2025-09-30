export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readMoreText: string;
  readMoreLink: string;
  category?: string;
  publishDate?: string;
  author?: string;
  readTime?: string;
}

export interface LatestInsightsData {
  sectionTitle: string;
  sectionSubtitle: string;
  posts: BlogPost[];
}
