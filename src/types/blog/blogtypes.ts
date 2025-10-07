export interface BlogSection {
  id: string;
  title: string;
  content: string[];
}

export interface BlogDetailData {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
  featuredImage: string;
  tableOfContents: {
    id: string;
    label: string;
  }[];
  sections: BlogSection[];
}
