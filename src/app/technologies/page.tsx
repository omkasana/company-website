// src/app/technology-stack/page.tsx
"use client";

import { useEffect, useState } from "react";
import { technologyCategories } from "@/utils/dummy/technology/technologyData";
import { technologyBannerData } from "@/utils/dummy/technology/technologyData";
import TechnologyBanner from "@/components/UIComponent/Banners/TechnologyBanner";

const TechnologyStackPage = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = technologyCategories.map((cat) => {
        const element = document.getElementById(cat.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: cat.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      });

      const active = sections.find(
        (section) => section && section.top <= 150 && section.bottom > 150
      );

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <TechnologyBanner data={technologyBannerData} />

      {/* Technology Stack Content */}
      <div className="pt-8">
        {/* Header */}
        <div className="bg-white py-2 md:py-3 border-b border-gray-200">
          <div className="container mx-auto px-2 md:px-3 max-w-7xl">
            <h3 className="text-[10px] md:text-xs font-bold text-center text-gray-900">
              Technology Stack
            </h3>
          </div>
        </div>

        {/* Main */}
        <div className="flex max-w-7xl mx-auto">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-48 lg:w-52 flex-shrink-0 sticky top-32 self-start max-h-[calc(100vh-9rem)] overflow-y-auto bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900 rounded-2xl my-5 ml-3 [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="py-3 px-2.5">
              <nav className="space-y-0.5">
                {technologyCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-[11px] font-medium transition-all ${
                      activeSection === category.id
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 px-2 md:px-3 py-2 md:py-3 bg-white min-w-0">
            <div className="w-full">
              {technologyCategories.map((category) => (
                <section key={category.id} id={category.id} className="mb-3 md:mb-4 scroll-mt-24">
                  <h4 className="text-[8px] md:text-[10px] text-gray-900 mb-1.5 md:mb-2 border-b-2 border-blue-400 pb-0.5 inline-block">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1.5 mt-1.5 md:mt-2">
                    {category.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded p-1 md:p-1.5 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-1 md:gap-1.5">
                          <div className="text-[10px] md:text-xs flex-shrink-0 w-3 h-3 md:w-4 md:h-4 flex items-center justify-center">
                            {tech.icon}
                          </div>
                          <h6 className="text-[7px] md:text-[8px] font-medium text-gray-900 leading-tight">
                            {tech.name}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackPage;
