import { FooterData } from "@/types/Footer";

export const footerData: FooterData = {
  sections: [
    {
      id: "services",
      title: "Services",
      links: [
        { id: "frontend", title: "Front-end Development", url: "/services/frontend" },
        { id: "web-app", title: "Web Application Development", url: "/services/web-application" },
        { id: "mvp", title: "MVP Development", url: "/services/mvp" },
        { id: "modernization", title: "Application Modernization", url: "/services/modernization" },
        { id: "ux-ui", title: "UX/UI Development and Design", url: "/services/ux-ui" },
        { id: "webix", title: "Webix Customization", url: "/services/webix" },
        { id: "dhtmlx", title: "DHTMLX Customization", url: "/services/dhtmlx" },
        { id: "dedicated-team", title: "Dedicated Developers Team", url: "/services/dedicated-team" },
        { id: "startup-dev", title: "Software Development for Startups", url: "/services/startups" },
        { id: "devops", title: "DevOps Services", url: "/services/devops" }
      ]
    },
    {
      id: "industries",
      title: "Industries",
      links: [
        { id: "enterprise", title: "Enterprise", url: "/industries/enterprise" },
        { id: "logistics", title: "Logistics", url: "/industries/logistics" },
        { id: "construction", title: "Construction", url: "/industries/construction" },
        { id: "edtech", title: "EdTech", url: "/industries/edtech" },
        { id: "energy", title: "Energy & Utilities", url: "/industries/energy" },
        { id: "manufacturing", title: "Manufacturing", url: "/industries/manufacturing" },
        { id: "healthcare", title: "Healthcare", url: "/industries/healthcare" },
        { id: "real-estate", title: "Real Estate", url: "/industries/real-estate" }
      ]
    },
    {
      id: "popular-solutions",
      title: "Popular Solutions",
      links: [
        { id: "erp", title: "ERP Systems", url: "/solutions/erp" },
        { id: "crm", title: "CRM Systems", url: "/solutions/crm" },
        { id: "project-mgmt", title: "Project Management Systems", url: "/solutions/project-management" },
        { id: "booking", title: "Booking & Scheduling Systems", url: "/solutions/booking" },
        { id: "data-viz", title: "Data Visualization Dashboards", url: "/solutions/data-visualization" },
        { id: "gps-tracking", title: "GPS Tracking Software", url: "/solutions/gps-tracking" },
        { id: "elearning", title: "eLearning Systems", url: "/solutions/elearning" },
        { id: "hrm", title: "HRM/HRIS", url: "/solutions/hrm" },
        { id: "wms", title: "WMS/WIMS", url: "/solutions/wms" }
      ]
    },
    {
      id: "our-expertise",
      title: "Our Expertise",
      links: [
        { id: "tech-stack", title: "Tech Stack", url: "/expertise/tech-stack" },
        { id: "products", title: "Products", url: "/expertise/products" },
        { id: "software-demos", title: "Software Demos", url: "/expertise/demos" }
      ]
    },
    {
      id: "about-us",
      title: "About Us",
      links: [
        { id: "how-we-work", title: "How We Work", url: "/about/how-we-work" },
        { id: "blog", title: "Blog", url: "/blog" },
        { id: "faq", title: "FAQ", url: "/faq" }
      ]
    }
  ],
  
  socialMedia: [
    { id: "facebook", name: "Facebook", url: "https://facebook.com/", icon: "facebook" },
    { id: "twitter", name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
    { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/company/", icon: "linkedin" },
    { id: "instagram", name: "Instagram", url: "https://instagram.com/", icon: "instagram" },
    { id: "medium", name: "Medium", url: "https://medium.com/", icon: "medium" },
    { id: "pinterest", name: "Pinterest", url: "https://pinterest.com/", icon: "pinterest" },
    { id: "youtube", name: "YouTube", url: "https://youtube.com/", icon: "youtube" }
  ],
  
  freeConsultationText: "Free Consultation",
  freeConsultationUrl: "/consultation",
  contactEmail: " contact@escalesolutions.com",
  
  rating: {
    company: "Escale Solutions",
    score: 5,
    reviewsCount: 23,
    reviewsUrl: "/reviews"
  },
  
  copyright: "© 2025 Escale Software - Software Development Company. All rights reserved.",
  privacyPolicyUrl: "/privacy-policy",
  websiteUrl: "escalesolutions.com"
};
