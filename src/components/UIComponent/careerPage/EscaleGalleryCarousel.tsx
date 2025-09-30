'use client';

import { EscaleGalleryCarouselData } from "@/types/career/escaleGalleryCarousel";
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface EscaleGalleryCarouselProps {
  data: EscaleGalleryCarouselData;
}

export default function EscaleGalleryCarousel({ data }: EscaleGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!data || !data.images || data.images.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!data || !data.images || data.images.length === 0) {
    return null;
  }

  const images = data.images;
  const totalImages = images.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Get the three visible images
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;
    
    return {
      prev: images[prevIndex],
      current: images[currentIndex],
      next: images[nextIndex]
    };
  };

  const visibleImages = getVisibleImages();

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
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative">
          
          {/* Images Display */}
          <div 
            className="relative flex items-end justify-center h-80 md:h-96 lg:h-[450px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Desktop/Tablet: 3 Images Layout */}
            <div className="hidden md:flex items-end justify-center w-full">
              {/* Left Image */}
              <div className="relative w-64 lg:w-80 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg opacity-70 transform transition-all duration-500 ease-in-out -mr-8 z-10">
                <Image
                  src={visibleImages.prev.src}
                  alt={visibleImages.prev.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center Image */}
              <div className="relative w-80 lg:w-96 h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out z-20 scale-105">
                <Image
                  src={visibleImages.current.src}
                  alt={visibleImages.current.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Image */}
              <div className="relative w-64 lg:w-80 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg opacity-70 transform transition-all duration-500 ease-in-out -ml-8 z-10">
                <Image
                  src={visibleImages.next.src}
                  alt={visibleImages.next.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile: Single Image with Side Previews */}
            <div className="md:hidden flex items-center justify-center w-full relative">
              {/* Left Preview - 10% Visible */}
              <div className="absolute left-0 w-8 h-48 rounded-l-2xl overflow-hidden shadow-lg opacity-40 z-10 transform transition-all duration-500 ease-in-out">
                <Image
                  src={visibleImages.prev.src}
                  alt={visibleImages.prev.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center Image - Main */}
              <div className="relative w-72 h-56 rounded-2xl overflow-hidden shadow-xl z-20 transform transition-all duration-500 ease-in-out">
                <Image
                  src={visibleImages.current.src}
                  alt={visibleImages.current.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Preview - 10% Visible */}
              <div className="absolute right-0 w-8 h-48 rounded-r-2xl overflow-hidden shadow-lg opacity-40 z-10 transform transition-all duration-500 ease-in-out">
                <Image
                  src={visibleImages.next.src}
                  alt={visibleImages.next.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Navigation Arrows - All Devices */}
          <div className="flex justify-center items-center mt-8 gap-4">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-cyan-200 hover:bg-cyan-50 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg 
                className="w-6 h-6 text-cyan-500" 
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
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-cyan-200 hover:bg-cyan-50 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg 
                className="w-6 h-6 text-cyan-500" 
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
