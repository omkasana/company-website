export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  profileImage: string;
  testimonial: string;
  rating?: number;
  link: string;
}

export interface TestimonialsData {
  sectionTitle: string;
  sectionDescription: string;
  viewAllText: string;
  viewAllLink: string;
  testimonials: Testimonial[];
}
