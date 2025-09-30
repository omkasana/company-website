"use client";

import Link from "next/link";
import Image from "next/image";
import { industryExpertiseData } from "@/utils/dummy/industryExpertiseData";

const IndustryExpertise = () => {
  const { sectionTitle, industries } = industryExpertiseData;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.link}
              className="group block"
            >
              {/* Mobile: Single Column Content Cards */}
              <div className="md:hidden">
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-gray-50">
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  {/* Services List */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {industry.services.slice(0, 3).map((service, index) => (
                        <li key={index} className="flex items-start text-slate-600 text-sm">
                          <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{service}</span>
                        </li>
                      ))}
                      {industry.services.length > 3 && (
                        <li className="text-xs text-slate-500 pl-5">
                          +{industry.services.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Explore More Button */}
                  <div className="flex items-center text-red-600 font-medium text-sm group-hover:text-red-700 transition-colors duration-300">
                    Explore More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tablet: 2-Column Content Cards (No Images) */}
              <div className="hidden md:block lg:hidden">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 md:p-6 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  {/* Services List */}
                  <div className="mb-5">
                    <ul className="space-y-2.5">
                      {industry.services.map((service, index) => (
                        <li key={index} className="flex items-start text-slate-600 text-sm md:text-base">
                          <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Explore More Button - Enhanced for Tablet */}
                  <div className="inline-flex items-center text-red-600 font-semibold text-base bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-lg transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md">
                    Explore More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Desktop: Image Cards with Hover Effects */}
              <div className="hidden lg:block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                      sizes="25vw"
                    />
                  </div>
                  
                  {/* Default View - Title Only */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent group-hover:opacity-0 transition-all duration-500">
                    <div className="absolute top-0 left-0 right-0 p-6">
                      <h3 className="text-xl lg:text-2xl font-light text-white transform transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-0">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover Content - Appears with Staggered Animation */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="p-6 h-full flex flex-col">
                      
                      {/* Title on Hover */}
                      <h3 className="text-xl lg:text-2xl font-light text-white mb-6 transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                        {industry.title}
                      </h3>
                      
                      {/* Services List */}
                      <div className="flex-1">
                        <ul className="space-y-3 mb-8">
                          {industry.services.map((service, index) => (
                            <li 
                              key={index} 
                              className="flex items-start text-white text-sm lg:text-base transform translate-x-[-30px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600"
                              style={{ 
                                transitionDelay: `${400 + (index * 100)}ms` 
                              }}
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="font-light leading-relaxed">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Explore More Button */}
                      <div className="mt-auto transform translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 delay-700">
                        <div className="inline-flex items-center text-white font-medium text-base bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/btn">
                          Explore More
                          <svg
                            className="ml-3 w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                             // fillRule="evenoRule"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
