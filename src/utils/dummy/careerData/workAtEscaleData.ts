import { WorkAtEscaleData } from "@/types/career/workAtEscale";

export const workAtEscaleData: WorkAtEscaleData = {
  preTitle: "Work at Escale", 
  sectionTitle: "Make everyday",
  highlightedWord: "extraordinary",
  subtitle: "Join forces with the leaders who continue to transform India's payments and financial services landscape",
  cards: [
    {
      id: "webdev",
      title: "Web Dev",
      image: "/images/carrier-card.jpeg",
      link: "/career/web-dev"
    },
    {
      id: "uiux",
      title: "UI|UX",
      image: "/images/carrier-card.jpeg",
      link: "/career/ui-ux"
    },
    {
      id: "appdev",
      title: "App Dev",
      image: "/images/carrier-card.jpeg",
      link: "/career/app-dev"
    }
  ],
  viewAllButton: {
    text: "View All Roles",
    href: "/career/all-roles"
  }
};
