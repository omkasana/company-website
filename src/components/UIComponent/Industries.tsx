"use client";

import Link from "next/link";
import { industriesData } from "@/utils/dummy/industriesData";

const Industries = () => {
  const { sectionTitle, sectionSubtitle, industries } = industriesData;

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Smaller */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight max-w-4xl mx-auto">
            {sectionTitle}
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Industries Grid - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              
              {/* Industry Header - Smaller */}
              <div className="mb-4 md:mb-5">
                {/* Removed icon div completely */}
                
                <Link
                  href={industry.link}
                  className="group inline-flex items-center"
                >
                  <h3 className="text-base md:text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <svg
                    className="ml-2 w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              {/* Services List - Smaller */}
              <div className="space-y-2 md:space-y-3">
                {industry.services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="group flex items-start"
                  >
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs md:text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-300 leading-relaxed">
                        {service.title}
                      </span>
                      
                      <svg
                        className="flex-shrink-0 ml-1 w-3 h-3 text-red-600 group-hover:translate-x-1 transition-transform duration-300"
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
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
