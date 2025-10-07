"use client";

import { serviceData } from "@/utils/dummy/navbar/ServiceMenu";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import BottomPartDropdown from "./BottomPartDropdown";

const ServiceMenu = ({
  activeMenu,
  onClose,
  isMobile = false
}: {
  activeMenu: string | null;
  onClose: () => void;
  isMobile?: boolean;
}) => {
  const [activeMainCategory, setActiveMainCategory] = useState<string>("build-secure");
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null);
  const [hoveredMicroCategory, setHoveredMicroCategory] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"main" | "sub" | "micro">("main");
  const [mobileHistory, setMobileHistory] = useState<string[]>([]);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeCategory = serviceData.find(
    (cat) => cat.id === activeMainCategory
  );

  const activeSub = activeCategory?.subCategories.find(
    (sub) => sub.name === hoveredSubCategory
  );

  // Close menu when clicking outside (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isMobile]);

  if (activeMenu !== "Services") return null;

  // Handle mouse entering the menu (desktop only)
  const handleMouseEnter = () => {
    if (isMobile) return;
    
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Handle mouse leaving the menu with a delay (desktop only)
  const handleMouseLeave = () => {
    if (isMobile) return;
    
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 300); // 300ms delay before closing
  };

  // Function to chunk micro categories into columns
  const chunkMicroCategories = (items: any, itemsPerColumn: number = 5) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += itemsPerColumn) {
      chunks.push(items.slice(i, i + itemsPerColumn));
    }
    return chunks;
  };

  // Mobile navigation functions
  const navigateToSub = (categoryId: string, subCategoryName: string) => {
    setActiveMainCategory(categoryId);
    setHoveredSubCategory(subCategoryName);
    setMobileHistory([...mobileHistory, "main"]);
    setMobileView("sub");
  };

  const navigateToMicro = () => {
    setMobileHistory([...mobileHistory, "sub"]);
    setMobileView("micro");
  };

  const navigateBack = () => {
    const prevView = mobileHistory.pop();
    setMobileHistory([...mobileHistory]);
    
    if (prevView === "main" || mobileHistory.length === 0) {
      setMobileView("main");
    } else if (prevView === "sub") {
      setMobileView("sub");
    }
  };

  // Mobile version
  if (isMobile) {
    return (
      <div ref={menuRef} className="bg-white rounded-lg mt-2 overflow-hidden max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 text-white flex items-center px-4 py-3 z-10">
          {mobileView !== "main" && (
            <button 
              onClick={navigateBack}
              className="mr-2 p-1 rounded-full hover:bg-slate-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          <h3 className="font-medium">
            {mobileView === "main" ? "Services" : 
             mobileView === "sub" ? activeCategory?.name : 
             hoveredSubCategory}
          </h3>
          <button 
            onClick={onClose}
            className="ml-auto p-1 rounded-full hover:bg-slate-700"
          >
            < X className="h-5 w-5" />
          </button>
        </div>
        
        {mobileView === "main" && (
          <div className="p-2">
            {serviceData.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0"
                onClick={() => navigateToSub(category.id, category.subCategories[0]?.name)}
              >
                <div className="flex items-center">
                  <span className="inline-block mr-3 text-lg">{category.icon}</span>
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>
        )}
        
        {mobileView === "sub" && (
          <div className="p-2">
            {activeCategory?.subCategories.map((subCategory) => (
              <div
                key={subCategory.name}
                className="p-3 border-b border-gray-100 last:border-b-0"
                onClick={() => {
                  setHoveredSubCategory(subCategory.name);
                  navigateToMicro();
                }}
              >
                <div className="text-gray-800 font-medium mb-1">{subCategory.name}</div>
                {subCategory.description && (
                  <div className="text-gray-600 text-sm">{subCategory.description}</div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {mobileView === "micro" && activeSub?.microCategories && (
          <div className="p-2">
            <div className="text-xs text-gray-500 uppercase font-medium mb-3 px-2">
              {hoveredSubCategory}
            </div>
            {activeSub.microCategories.map((microCategory) => (
              <a
                key={microCategory.name}
                href={microCategory.link || "#"}
                className="block p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle navigation
                  onClose();
                }}
              >
                <div className="text-gray-800 font-medium mb-1">{microCategory.name}</div>
                <div className="text-gray-600 text-sm">{microCategory.description}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version (original code with minor improvements)
  return (
    <div
      ref={menuRef}
      className="fixed left-0 top-[80px] w-full z-40 bg-white border-t border-gray-200 shadow-lg"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1336px] w-full mx-auto flex flex-col">
        <div className="flex min-h-[400px]">
          {/* Left Sidebar */}
          <div className="relative max-w-[313px] w-full bg-[#fbf9f9] border-r border-gray-200 py-[34px] pr-[30px] pl-[59px]">
            <div className="before:content-[''] before:absolute before:right-full before:top-0 before:w-screen before:h-full before:bg-[#fbf9f9]"></div>
            <div className="block text-black/50 text-[12px] font-medium uppercase mb-4 font-['Inter',_sans-serif]">
              SERVICES
            </div>
            <div className="bg-transparent list-none m-0 p-0">
              {serviceData.map((category) => (
                <li
                  key={category.id}
                  className={`flex mb-3.5 rounded-lg cursor-pointer transition-all duration-400 ease-in-out bg-white/50 border border-transparent text-[#667085] text-[15px] font-medium relative py-[16px] pr-[14px] pl-[21px] ${
                    activeMainCategory === category.id
                      ? "bg-white text-[#e02424] shadow-[0_4px_24px_rgba(0,0,0,0.05)] border-red-200"
                      : ""
                  }`}
                  onMouseEnter={() => {
                    setActiveMainCategory(category.id);
                    setHoveredSubCategory(null);
                    setHoveredMicroCategory(null);
                  }}
                >
                  <div className="flex items-center w-full font-['Inter',_sans-serif]">
                    <span className="inline-block mr-[13px] text-[16px]">
                      {category.icon}
                    </span>
                    {category.name}
                  </div>
                </li>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex bg-white w-[calc(100%-313px)]">
            <div className="max-w-[302px] w-full py-[34px] pt-4 border-r border-gray-200 bg-white">
              <div className="block text-black/50 text-[12px] font-medium uppercase mb-4 pl-[21px] font-['Inter',_sans-serif]">
                {activeMainCategory === "build-secure" && "BUILD & SECURE"}
                {activeMainCategory === "top-talent" && "TOP 1% TALENT"}
                {activeMainCategory === "industry-compliance" &&
                  "INDUSTRY COMPLIANCE"}
              </div>
              <div className="block bg-white list-none m-0 p-0">
                {activeCategory?.subCategories.map((subCategory) => (
                  <li
                    key={subCategory.name}
                    className={`${
                      hoveredSubCategory === subCategory.name
                        ? "bg-gray-50 border-l-2 border-[#e02424]"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      setHoveredSubCategory(subCategory.name);
                      setHoveredMicroCategory(null);
                    }}
                  >
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className={`block text-[#667085] text-[14px] font-medium px-[21px] pt-3 pb-4 border-b border-gray-200 no-underline transition-colors duration-300 font-['Inter',_sans-serif] ${
                        hoveredSubCategory === subCategory.name
                          ? "text-[#e7313d] font-semibold"
                          : "hover:text-[#e7313d]"
                      }`}
                    >
                      {subCategory.name}
                    </a>
                  </li>
                ))}
              </div>
            </div>

            {/* Micro Categories */}
            <div className="bg-white w-[calc(100%-302px)] py-4 px-4 min-h-[292px] block">
              {activeSub?.microCategories ? (
                <>
                  <div className="block text-black/50 text-[12px] font-medium uppercase mb-4 font-['Inter',_sans-serif]">
                    {hoveredSubCategory?.toUpperCase()}
                  </div>
                  <div className="relative z-[999] flex gap-6 list-none m-0 p-0">
                    {chunkMicroCategories(activeSub.microCategories, 4).map((chunk, index) => (
                      <div key={index} className="flex-1 min-w-0">
                        {chunk.map((microCategory:any) => (
                          <div
                            key={microCategory.name}
                            className="border-none mb-1.5 list-none"
                            onMouseEnter={() =>
                              setHoveredMicroCategory(microCategory.name)
                            }
                          >
                            <a
                              href={microCategory.link || "#"}
                              className={`block text-[#101828] text-[16px] font-medium p-3 no-underline transition-all duration-300 rounded-lg ${
                                hoveredMicroCategory === microCategory.name
                                  ? "bg-[#f3f3f3] shadow-sm"
                                  : "bg-transparent"
                              } hover:bg-[#f3f3f3] font-['Inter',_sans-serif]`}
                            >
                              {microCategory.name}
                              <p className="text-[#667085] text-[14px] leading-[1.43] mt-2 mb-0 font-['Inter',_sans-serif]">
                                {microCategory.description}
                              </p>
                            </a>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-lg">
                    Select a service category to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        
         <BottomPartDropdown/>
      </div>
    </div>




  );
};

export default ServiceMenu;