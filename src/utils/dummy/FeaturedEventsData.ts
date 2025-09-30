import { FeaturedEventsData } from "@/types/featuredEvents";

export const featuredEventsData: FeaturedEventsData = {
  sectionTitle: "Our Board of Featured Events",
  sectionSubtitle: "Discover the essence of our recent events, showcasing vibrant moments and connections that drive our mission forward.",
  viewAllText: "View all events",
  viewAllLink: "/events", 
  
  events: [
    {
      id: "gitex-global-2025",
      title: "GITEX Global 2025",
      image: "/images/Eventsimages.jpeg",
      date: "October 13-17, 2025",
      location: "Dubai, UAE",
      // link: "/events/gitex-global-2025" 
    },
    {
      id: "japan-it-week-2024",
      title: "Japan IT Week Spring 2024",
      image: "/images/Eventsimages.jpeg",
      date: "April 24-26, 2024",
      location: "Tokyo, Japan",
      // link: "/events/japan-it-week-2024" 
    },
    {
      id: "ces-2024",
      title: "CES 2024",
      image: "/images/Eventsimages.jpeg",
      date: "January 9-12, 2024",
      location: "Las Vegas, USA",
      // link: "/events/ces-2024"
    }
  ]
};
