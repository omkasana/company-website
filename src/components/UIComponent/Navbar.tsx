"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/utils/config/navigation";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import ServicesMenu from "@/components/UIComponent/Navbardropdown/Servicesmenu";
import IndustriesMenu from "./Navbardropdown/Industriesmenu";
import WhoWeAreMenu from "@/components/UIComponent/Navbardropdown/WhoWeAremenu";

// Import the actual data sources
import { serviceData } from "@/utils/dummy/navbar/ServiceMenu";
import { industriesList } from "@/utils/dummy/navbar/DropdownIndustries";
import { whoWeAreData as whoWeAreConfig } from "@/utils/dummy/navbar/DropdownWhoWeAre";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileServicesSubCategory, setMobileServicesSubCategory] = useState<string | null>(null);

  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when any menu is open
  useEffect(() => {
    if (hoveredItem || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [hoveredItem, isMobileMenuOpen]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileOpenDropdown(null);
  
    setMobileServicesSubCategory(null);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemLabel: string) => {
    if (mobileOpenDropdown === itemLabel) {
      setMobileOpenDropdown(null);
      setMobileServicesSubCategory(null);
    } else {
      setMobileOpenDropdown(itemLabel);
      setMobileServicesSubCategory(null);
      
    }
  };

  // Toggle mobile services subcategory
  const toggleMobileServicesSubCategory = (subCategoryName: string) => {
    if (mobileServicesSubCategory === subCategoryName) {
      setMobileServicesSubCategory(null);
    } else {
      setMobileServicesSubCategory(subCategoryName);
    }
  };

  // Desktop hover handling
  const handleNavItemMouseEnter = (itemLabel: string) => {
    const item = navItems.find((item) => item.label === itemLabel);
    if (item?.hasDropdown) {
      setHoveredItem(itemLabel);
    }
  };

  const handleDropdownClose = () => {
    setHoveredItem(null);
  };

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
    setMobileServicesSubCategory(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[rgba(15,23,42,0.95)] backdrop-blur-md"
            : "bg-[rgba(15,23,42,0.1)] backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Side: Logo + Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="text-white font-bold text-xl">
                    <Image
                      src="/images/escale-logo.webp"
                      width={100}
                      height={40}
                      alt="escale-logo"
                      className="invert brightness-0"
                    />
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleNavItemMouseEnter(item.label)}
                      onMouseLeave={() => {}}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          className={`flex items-center text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                            hoveredItem === item.label ? "text-white" : ""
                          }`}
                        >
                          {item.label}
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                hoveredItem === item.label ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                      )}

                      {/* Active indicator bar */}
                      {hoveredItem === item.label && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-100 transition-all duration-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Button */}
            <div className="hidden lg:block">
              <button className="px-6 py-2 rounded-md text-sm font-medium text-white border bg-[#dc2626] border-[#dc2626] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#dc2626]">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-white" />
          
          {/* Menu Content */}
          <div className="relative flex flex-col h-full bg-white">
            {/* Header with logo and close button - Red Background */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#dc2626]">
              <Link href="/" onClick={handleMobileLinkClick}>
                <Image
                  src="/images/escale-logo.webp"
                  width={80}
                  height={32}
                  alt="escale-logo"
                  className="invert brightness-0"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-200 p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="py-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900 px-4 py-3 text-base font-medium border-b border-gray-100"
                        onClick={handleMobileLinkClick}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium text-left border-b border-gray-100 transition-colors duration-200 ${
                            mobileOpenDropdown === item.label
                              ? "bg-[#dc2626] text-white"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {item.label}
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
                                mobileOpenDropdown === item.label ? "rotate-180 text-white" : "text-gray-400"
                              }`}
                            />
                          )}
                        </button>

                        {/* Mobile Dropdown Content */}
                        {mobileOpenDropdown === item.label && (
                          <div className="bg-gray-50">
                            {/* Services Special Handling */}
                            {item.label === "Services" ? (
                              <div>
                                {serviceData.map((category) => (
                                  <div key={category.id}>
                                    <button
                                      onClick={() => toggleMobileServicesSubCategory(category.name)}
                                      className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-b border-gray-200"
                                    >
                                      <span className="flex items-center">
                                        <span className="mr-2">{category.icon}</span>
                                        {category.name}
                                      </span>
                                      <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${
                                          mobileServicesSubCategory === category.name ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                    
                                    {/* Services Sub-subcategories */}
                                    {mobileServicesSubCategory === category.name && (
                                      <div className="bg-gray-100">
                                        {category.subCategories.map((subCategory) => (
                                          <div key={subCategory.name} className="border-b border-gray-200 last:border-b-0">
                                            <div className="px-8 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide bg-gray-200">
                                              {subCategory.name}
                                            </div>
                                            {subCategory.microCategories?.map((microCategory) => (
                                              <Link
                                                key={microCategory.name}
                                                href={microCategory.link}
                                                className="block px-10 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200"
                                                onClick={handleMobileLinkClick}
                                              >
                                                {microCategory.name}
                                              </Link>
                                            ))}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : item.label === "Industries" ? (
                              <div>
                                {industriesList.map((industry) => (
                                  <Link
                                    key={industry.title}
                                    href={industry.link || "#"}
                                    className="block px-6 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-200"
                                    onClick={handleMobileLinkClick}
                                  >
                                    <div className="font-medium">{industry.title}</div>
                                    <div className="text-xs text-gray-500 mt-1">{industry.description}</div>
                                  </Link>
                                ))}
                              </div>
                            ) : item.label === "Who We Are" ? (
                              <div>
                                {whoWeAreConfig.map((whoItem) => (
                                  <Link
                                    key={whoItem.title}
                                    href={whoItem.link || "#"}
                                    className="block px-6 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-200"
                                    onClick={handleMobileLinkClick}
                                  >
                                    <div className="font-medium">{whoItem.title}</div>
                                    <div className="text-xs text-gray-500 mt-1">{whoItem.description}</div>
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Contact Button */}
            <div className="p-4 bg-white border-t border-gray-100">
              <button 
                className="w-full px-6 py-3 rounded-md text-base font-medium text-[#dc2626] border border-[#dc2626] transition-all duration-300 ease-in-out hover:bg-[#dc2626] hover:text-white"
                onClick={handleMobileLinkClick}
              >
                Contact
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdown Menus */}
      {hoveredItem === "Services" && (
        <div
          onMouseEnter={() => setHoveredItem("Services")}
          onMouseLeave={handleDropdownClose}
        >
          <ServicesMenu activeMenu={hoveredItem} onClose={handleDropdownClose} />
        </div>
      )}

      {hoveredItem === "Industries" && (
        <div
          onMouseEnter={() => setHoveredItem("Industries")}
          onMouseLeave={handleDropdownClose}
        >
          <IndustriesMenu
            activeMenu={hoveredItem}
            onClose={handleDropdownClose}
          />
        </div>
      )}

      {hoveredItem === "Who We Are" && (
        <div
          onMouseEnter={() => setHoveredItem("Who We Are")}
          onMouseLeave={handleDropdownClose}
        >
          <WhoWeAreMenu
            activeMenu={hoveredItem}
            onClose={handleDropdownClose}
          />
        </div>
      )}

      {/* Desktop Glass Filter Overlay */}
      {hoveredItem && (
        <div className="fixed left-0 top-0 w-full h-screen opacity-100 visible z-30 bg-[rgba(27,30,85,0.5)] backdrop-blur-[10px] backdrop-saturate-[180%] transition-all duration-300 hidden lg:block" />
      )}
    </>
  );
};

export default Navbar;
