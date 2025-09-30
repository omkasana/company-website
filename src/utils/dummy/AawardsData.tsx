import { AwardsData } from "@/types/Award";

export const awardsData: AwardsData = {
  sectionTitle: "Global Recognition and Awards",
  sectionDescription: "Accorded as a leading AI-first tech partner, our customer-centric solutions define industry standards.",
  awards: [
    {
      id: 1,
      title: "Clutch Global Award Winner",
      platform: "Clutch",
      years: ["2024", "2023"],
      backgroundColor: "#1e3a3a",
      textColor: "#ffffff",
      link: "/awards/clutch",
      logoComponent: (
        <div className="text-center">
          <div className="text-5xl font-bold text-white tracking-wider">
            Clutch
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Top Mobile App Developer",
      platform: "GoodFirms",
      years: ["2024", "2023"],
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      link: "/awards/goodfirms",
      logoComponent: (
        <div className="text-center">
          <div className="flex items-center justify-center text-white text-3xl font-bold">
            <span className="bg-white text-blue-600 px-2 py-1 rounded-lg mr-3 text-lg font-black">
              F
            </span>
            GoodFirms
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Digital Transformation Leader",
      platform: "Business Connect",
      years: ["2024", "2023", "2022"],
      backgroundColor: "#EF4444",
      textColor: "#ffffff",
      link: "/awards/business-connect",
      logoComponent: (
        <div className="text-center text-white">
          <div className="text-3xl font-bold mb-1">BC</div>
          <div className="text-xl font-bold">Business</div>
          <div className="text-xl font-bold">Connect</div>
          <div className="text-xs mt-2 opacity-90 font-medium">
            INSPIRING BUSINESS COMMUNITY
          </div>
        </div>
      )
    }
  ]
};
