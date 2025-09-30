import { BenefitsSectionData } from '@/types/career/benefitsSection';

export const benefitsSectionData: BenefitsSectionData = {
  preTitle: "Benefits",
  title: "We're invested in your",
  highlightedWord: "success",
  description: "The well-being and growth of our employees matters to us. Our employee benefits are designed to support our employees across their different life-stages and enhance their overall experience at work.",
  image: "/images/carrier-card.jpeg",
  dropdowns: [
    {
      id: "health-wellness",
      title: "Health and Wellness",
      content: [
        "Comprehensive health insurance coverage",
        "Mental health support and counseling",
        "Regular health check-ups and screenings",
        "Wellness programs and fitness facilities"
      ]
      
    },
    {
      id: "financial-wellbeing",
      title: "Financial Well-Being",
      content: [
        "Competitive salary packages",
        "Performance-based bonuses and incentives",
        "Retirement planning and pension schemes",
        "Employee stock options and equity participation"
      ]
      
    },
    {
      id: "time-away-flexibility",
      title: "Time Away and Flexibility",
      content: [
        "Leaves competitive with the industry in all categories such as marriage leave, PL, CL, Sick Leave & more.",
        "Team Outing and Engagement Allowances",
        "Flexible working hours and remote work options",
        "Paid vacation days and sabbatical opportunities"
      ]
     
    },
    {
      id: "personal-development",
      title: "Personal Development",
      content: [
        "Continuous learning and skill development programs",
        "Professional certification and course sponsorship",
        "Career advancement and mentorship opportunities",
        "Conference attendance and industry networking"
      ]
     
    }
  ]
};
