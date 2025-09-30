'use client';

import { BenefitsSectionData } from "@/types/career/benefitsSection";
import Image from 'next/image';
import { useState } from 'react';

interface BenefitsSectionProps {
  data: BenefitsSectionData;
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => 
      prev.includes(id) 
        ? prev.filter(dropdownId => dropdownId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-gray-50 py-6 md:py-8 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-start">
          
          {/* Left Side - Image (Larger - 3 columns) */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96">
              <Image
                src={data.image}
                alt="Team collaboration at Escale"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Benefits Content (Smaller - 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Header */}
            <div className="space-y-3">
              {/* Pre-Title with underline */}
              <div className="inline-block">
                <p className="text-xs md:text-sm font-medium text-gray-700 pb-1 border-b-2 border-gray-400">
                  {data.preTitle}
                </p>
              </div>
              
              {/* Main Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {data.title}{' '}
                <span className="text-cyan-500">{data.highlightedWord}</span>
              </h2>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Dropdown Sections */}
            <div className="space-y-1">
              {data.dropdowns.map((dropdown) => {
                const isOpen = openDropdowns.includes(dropdown.id);
                
                return (
                  <div 
                    key={dropdown.id}
                    className="border-b border-gray-300 overflow-hidden"
                  >
                    {/* Dropdown Header */}
                    <button
                      onClick={() => toggleDropdown(dropdown.id)}
                      className="w-full flex items-center justify-between py-2 md:py-3 hover:bg-gray-100/50 transition-colors duration-200"
                    >
                      <h3 className="text-sm md:text-base font-semibold text-gray-900 text-left">
                        {dropdown.title}
                      </h3>
                      
                      {/* Chevron Icon */}
                      <svg 
                        className={`w-4 h-4 md:w-5 md:h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Content */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-64 opacity-100 pb-3' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-1.5">
                        {dropdown.content.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-cyan-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
