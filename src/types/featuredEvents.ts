export interface EventCard {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  link?: string; 
}

export interface FeaturedEventsData {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAllText: string;
  viewAllLink: string; 
  events: EventCard[];
}
