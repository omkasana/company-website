"use client";

import Image from "next/image";
import { featuredEventsData } from "@/utils/dummy/FeaturedEventsData";

const FeaturedEvents = () => {
  const { sectionTitle, sectionSubtitle, viewAllText, viewAllLink, events } = featuredEventsData;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {sectionTitle}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            {sectionSubtitle}
          </p>
          
         
          <div className="inline-flex items-center text-red-600 font-semibold text-lg hover:text-red-700 transition-colors duration-300 cursor-pointer">
            {/* <Link href={viewAllLink}> */} 
              {viewAllText}
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            {/* </Link> */}
          </div>
        </div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {events.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer" 
                // onClick={()} => 
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  
                  {/* Event Image - Smaller */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Event Details -  */}
                  <div className="p-4 lg:p-5">
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {/* Date */}
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{event.date}</span>
                      </div>
                      
                      {/* Location */}
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single Column, Smaller Cards */}
        <div className="md:hidden">
          <div className="space-y-6 max-w-sm mx-auto">
            {events.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer"
                // onClick={() => }
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  
                  {/* Event Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="100vw"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {/* Date */}
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{event.date}</span>
                      </div>
                      
                      {/* Location */}
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
