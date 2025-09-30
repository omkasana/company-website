'use client';

import { WorkAtEscaleData } from "@/types/career/workAtEscale";
import Image from 'next/image';

interface WorkAtEscaleProps {
  data: WorkAtEscaleData;
}

export default function WorkAtEscale({ data }: WorkAtEscaleProps) {
  const handleCardClick = (link: string) => {
  window.location.href = link;
};

const handleViewAllClick = (link: string) => {
  window.location.href = link;
};


  return (
    <section className="bg-gray-100 py-8 md:py-11 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header -  */}
        <div className="text-center mb-8 md:mb-11 lg:mb-13">
          {/* Pre-Title -  */}
          <div className="inline-block mb-5 md:mb-6">
            <p className="text-sm md:text-base lg:text-lg font-medium text-blue-600 pb-2 border-b-2 border-blue-600">
              {data.preTitle}
            </p>
          </div>
          
          {/* Main Title -  */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-5 md:mb-6 lg:mb-8 leading-tight">
            {data.sectionTitle}{' '}
            <span className="text-cyan-400">{data.highlightedWord}</span>
          </h2>
          
          {/* Subtitle -  */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Cards Grid -  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10">
          {data.cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.link)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Card Image - */}
              <div className="relative h-38 md:h-43 lg:h-48 xl:h-58">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content -  */}
              <div className="bg-white p-3 md:p-4 lg:p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  
                  {/* Arrow Icon - */}
                  <div className="overflow-hidden w-4 h-4 md:w-5 md:h-5">
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {/* slide effect for button  */}
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 text-gray-600 transform transition-transform duration-300 -translate-x-4 group-hover:translate-x-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All roles button  */}
        <div className="text-center">
          <button
            onClick={() => handleViewAllClick(data.viewAllButton.href)}
            className="inline-flex items-center px-5 md:px-6 py-2 md:py-2.5 border-2 border-gray-300 rounded-full text-xs md:text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 group"
          >
            {data.viewAllButton.text}
            <div className="ml-1.5 overflow-hidden w-3 h-3 md:w-4 md:h-4">
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
             {/* arrow button animation  */}
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 text-gray-600 transform transition-transform duration-300 -translate-x-3 group-hover:translate-x-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
