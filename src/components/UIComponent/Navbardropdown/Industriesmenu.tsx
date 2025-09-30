"use client";

import { useState } from "react";
import { industriesList } from "@/utils/dummy/navbar/DropdownIndustries";
import BottomPartDropdown from "./BottomPartDropdown";

const ITEMS_PER_COLUMN = 5;

export const IndustriesMenu = ({
  activeMenu,
  onClose
}: {
  activeMenu: string | null,
  onClose: () => void
}) => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  // Organize into columns for a nice grid layout
  const columns = [];
  for (let i = 0; i < industriesList.length; i += ITEMS_PER_COLUMN) {
    columns.push(industriesList.slice(i, i + ITEMS_PER_COLUMN));
  }

  if (activeMenu !== "Industries") return null;

  return (
    <div
      className="fixed left-0 top-[80px] w-full z-40 bg-white border-t border-gray-200 shadow-lg"
      style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="max-w-[1336px] w-full mx-auto flex flex-col">
        <div className="flex min-h-[400px]">
          <div className="w-full bg-white py-[40px] px-[30px] pl-[60px] min-h-[410px] max-h-[410px] overflow-y-auto overscroll-contain">
            <div className="text-gray-500 text-xs uppercase font-medium font-sans block mb-[18px]">INDUSTRIES</div>
            <div className="flex w-full gap-10">
              {columns.map((col, colIdx) => (
                <div className="flex flex-col flex-1 gap-4" key={colIdx}>
                  {col.map((item) => (
                    <div
                      key={item.title}
                      className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                        activeIndustry === item.title ? "bg-gray-100" : ""
                      }`}
                      onMouseEnter={() => setActiveIndustry(item.title)}
                      onMouseLeave={() => setActiveIndustry(null)}
                    >
                      <a
                        href={item.link ?? "#"}
                        className="text-lg font-semibold text-black block no-underline mb-1"
                        tabIndex={0}
                      >
                        {item.title}
                      </a>
                      <div className="text-gray-500 text-base leading-snug break-words mb-0 mr-2.5">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      
    
       <BottomPartDropdown/>
      </div>
    </div>
  );
};

export default IndustriesMenu;