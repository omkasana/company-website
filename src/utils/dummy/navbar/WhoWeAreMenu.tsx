export interface WhoWeAreItem {
  title: string;
  description: string;
  link?: string;
}

export const whoWeAreData: WhoWeAreItem[] = [
  {
    title: "About",
    description: "Discover our mission, vision, and values.",
    link: "/about"
  },
  {
    title: "Leadership", 
    description: "Meet the visionaries driving our success.",
    link: "/leadership"
  },
  {
    title: "Career",
    description: "Explore exciting opportunities and be part of the journey.",
    link: "/career"
  },
  {
    title: "Testimonials",
    description: "Hear what our clients say about us.",
    link: "/testimonials"
  },
  {
    title: "Events",
    description: "Stay updated on our latest events and milestones.",
    link: "/events"
  },
  {
    title: "Technologies",
    description: "Empower your projects with a future-ready tech stack.",
    link: "/technologies"
  }
];
