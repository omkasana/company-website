"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const BrandShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="py-8 md:py-16 bg-white overflow-hidden relative">
      {/* Inline animation styles */}
      <style>{`
        .brand-scroll {
          animation: infiniteScroll ${isMobile ? "5s" : "10s"} linear infinite;
        }
        
        /* Only apply hover pause on desktop */
        @media (min-width: 768px) {
          .brand-scroll:hover { 
            animation-play-state: paused; 
          }
        }
        
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>

      {/* Title Section */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider px-4">
          DELIVERING VALUE TO CLIENTS WORLDWIDE
        </h2>
      </div>

      {/* Scrolling Brands Container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex brand-scroll whitespace-nowrap">
          {/* Image 1 */}
          <div className="inline-block w-full flex-shrink-0">
            <div className="flex justify-center items-center px-4">
              <Image
                src={
                  isMobile
                    ? "/images/brands-mobile.webp"
                    : "/images/brands-desktop.webp"
                }
                alt="Brand logos"
                width={isMobile ? 600 : 1920}
                height={isMobile ? 400 : 200}
                className="w-full h-auto max-w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Image 2 (duplicate) */}
          <div className="inline-block w-full flex-shrink-0">
            <div className="flex justify-center items-center px-4">
              <Image
                src={
                  isMobile
                    ? "/images/brands-mobile.webp"
                    : "/images/brands-desktop.webp"
                }
                alt="Brand logos"
                width={isMobile ? 600 : 1920}
                height={isMobile ? 400 : 200}
                className="w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
