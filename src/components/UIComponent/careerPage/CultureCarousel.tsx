'use client';

import { CultureCarouselData } from "@/types/career/cultureCarousel";
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

interface CultureCarouselProps {
  data: CultureCarouselData;
}

export default function CultureCarousel({ data }: CultureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!data || !data.images || data.images.length === 0) {
    return null;
  }

  const images = data.images;
  const totalImages = images.length;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalImages, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalImages, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get visible images for desktop (current and next)
  const getVisibleImages = () => {
    return [
      images[currentIndex],
      images[(currentIndex + 1) % totalImages]
    ];
  };

  // Mobile swipe handlers
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="bg-gray-50 py-6 md:py-8 lg:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          {/* Pre-Title */}
          <div className="inline-block mb-3 md:mb-4">
            <p className="text-xs md:text-sm font-medium text-gray-700 pb-1 border-b-2 border-gray-400">
              {data.preTitle}
            </p>
          </div>
          
          {/* Main Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            {data.title}{' '}
            <span className="text-cyan-400">{data.highlightedWord}</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Desktop/Tablet: 2 Images Side by Side */}
          <div className="hidden md:block">
            <div className="flex gap-4 lg:gap-6">
              {getVisibleImages().map((image, index) => (
                <div 
                  key={`${image.id}-${currentIndex}-${index}`}
                  className="relative flex-1 h-56 lg:h-72 xl:h-80 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Single Image Slider with Smooth Sliding */}
          <div className="md:hidden overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalImages * 100}%`
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="w-full flex-shrink-0 relative h-60 sm:h-72"
                  style={{ width: `${100 / totalImages}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center mt-6 md:mt-8 gap-4">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-cyan-200 hover:bg-cyan-50 transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-cyan-200 hover:bg-cyan-50 transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
