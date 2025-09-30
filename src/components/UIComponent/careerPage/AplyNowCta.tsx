'use client';

import { ApplyNowCtaData } from "@/types/career/applyNowCta";
import Link from 'next/link';

interface ApplyNowCtaProps {
  data: ApplyNowCtaData;
}

export default function ApplyNowCta({ data }: ApplyNowCtaProps) {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-cyan-400 to-cyan-600"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 py-12 md:py-15 lg:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Title */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
            {data.title}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-7 lg:mb-9">
            {data.subtitle}
          </p>

          {/* Apply Button */}
          <Link
            href={data.buttonLink}
            className="inline-flex items-center px-6 md:px-9 py-3 md:py-4 bg-white text-cyan-600 rounded-full font-bold text-sm md:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {data.buttonText}
            <svg 
              className="ml-2 w-4 h-4 md:w-5 md:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}
