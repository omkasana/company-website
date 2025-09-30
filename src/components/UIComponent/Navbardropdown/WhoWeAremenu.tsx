"use client";

import { useState, useEffect } from "react";
import { whoWeAreData } from "@/utils/dummy/navbar/DropdownWhoWeAre";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import BottomPartDropdown from "./BottomPartDropdown";

const ITEMS_PER_COLUMN = 2;

export const WhoWeAreMenu = ({
  activeMenu,
  onClose,
  isMobile = false,
}: {
  activeMenu: string | null;
  onClose: () => void;
  isMobile?: boolean;
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const columns = [];
  for (let i = 0; i < whoWeAreData.length; i += ITEMS_PER_COLUMN) {
    columns.push(whoWeAreData.slice(i, i + ITEMS_PER_COLUMN));
  }

  useEffect(() => {
    setIsVisible(activeMenu === "Who We Are");
  }, [activeMenu]);

  if (activeMenu !== "Who We Are") return null;

  // === Mobile Version ===
  if (isMobile) {
    return (
      <div className="bg-white rounded-lg mt-2 overflow-hidden">
        <div className="px-4 py-3 bg-slate-800 text-white flex items-center">
          <button
            onClick={onClose}
            className="mr-2 p-1 rounded-full hover:bg-slate-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h3 className="font-medium">Who We Are</h3>
        </div>

        <div className="max-h-96 overflow-y-auto px-4 py-3">
          {whoWeAreData.map((item) => (
            <Link key={item.title} href={item.link ?? "#"}>
              <div className="mb-4">
                <div className="text-base font-medium text-gray-900">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-[#fff5f5] p-4 border-t border-gray-200">
          <div className="mb-3">
            <span className="text-black text-sm font-medium">
              Ready to get started?
            </span>
            <a
              href="#"
              className="text-[#e41a26] text-sm font-medium ml-1 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="space-y-2">
            <a
              href="mailto:clientsupport@sparxit.com"
              className="flex items-center text-[#e41a26] text-sm"
            >
              <span className="mr-2 text-sm">✉</span>
              clientsupport@sparxit.com
            </a>
            <a
              href="tel:+919810230650"
              className="flex items-center text-[#e41a26] text-sm"
            >
              <span className="mr-2 text-sm">📞</span>
              +91 9810-230650
            </a>
          </div>
        </div>
      </div>
    );
  }

  // === Desktop Version ===
  return (
    <div
      className={`fixed left-0 w-full z-40 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
        isVisible
          ? "top-[80px] opacity-100 visible"
          : "top-[60px] opacity-0 invisible"
      }`}
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="max-w-[1336px] w-full mx-auto flex flex-col">
        <div className="flex min-h-[400px]">
          <div className="w-full bg-white py-[40px] px-[30px] pl-[60px] min-h-[300px]">
            <div className="text-gray-500 text-xs uppercase font-medium font-sans block mb-[24px]">
              WHO WE ARE
            </div>
            <div className="flex w-full gap-[60px]">
              {columns.map((col, colIdx) => (
                <div className="flex flex-col flex-1 gap-8" key={colIdx}>
                  {col.map((item) => (
                    <Link key={item.title} href={item.link ?? "#"}>
                      <div
                        className={`cursor-pointer transition-colors duration-200 p-4 rounded-lg ${
                          activeItem === item.title ? "bg-gray-50" : ""
                        }`}
                        onMouseEnter={() => setActiveItem(item.title)}
                        onMouseLeave={() => setActiveItem(null)}
                      >
                        <div className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-200">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomPartDropdown />
      </div>
    </div>
  );
};

export default WhoWeAreMenu;
