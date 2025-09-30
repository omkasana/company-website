'use client'
import { LifeAtEscaleData } from "@/types/career/lifeAtEscale";
import Image from 'next/image';
import { useState } from 'react';

interface LifeAtEscaleProps {
  data: LifeAtEscaleData;
}

export default function LifeAtEscale({ data }: LifeAtEscaleProps) {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const toggleCardFlip = (cardId: string) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <section className="bg-white py-6 md:py-10 lg:py-13">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 lg:mb-13">
          {/* Pre-Title with underline */}
          <div className="inline-block mb-2 md:mb-3">
            <p className="text-xs md:text-sm font-medium text-gray-700 pb-1 border-b-2 border-gray-400">
              {data.preTitle}
            </p>
          </div>
          
          {/* Main Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-5">
            {data.sectionTitle}{' '}
            <span className="text-cyan-500">{data.highlightedText}</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {data.cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id);
            
            return (
              <div
                key={card.id}
                className="relative h-64 md:h-80 lg:h-96 [perspective:1000px]"
              >
                <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}>
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      {/* Card Image Container */}
                      <div className="relative h-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      </div>

                      {/* Card Content Overlay - Fixed Positioning */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <div className="flex items-end justify-between">
                          {/* Card Title - Fixed Width */}
                          <div className="flex-1 pr-4">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
                              {card.title}
                            </h3>
                          </div>
                          
                          {/* Plus Icon Button - Fixed Size and Position */}
                          <button
                            onClick={() => toggleCardFlip(card.id)}
                            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                          >
                            <svg 
                              className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card - Fixed Layout */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl shadow-lg bg-cyan-600 p-4 md:p-6">
                    
                    {/* Fixed Top Section with Title and Close Button */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Close Button - Same Size and Style as Plus Button */}
                      <button
                        onClick={() => toggleCardFlip(card.id)}
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg 
                          className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        {card.content}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
