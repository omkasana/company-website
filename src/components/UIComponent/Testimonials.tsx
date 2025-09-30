"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonialsData } from "@/utils/dummy/testimonialsData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { sectionTitle, sectionDescription, viewAllText, viewAllLink, testimonials } = testimonialsData;

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Wheel/Trackpad handler for desktop horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    // Prevent default vertical scrolling behavior within the testimonials area
    e.preventDefault();
    
    if (isAnimating) return;

    // Check for horizontal scroll (trackpad two-finger horizontal swipe)
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    
    // Determine if it's a horizontal gesture
    // Some trackpads might send deltaY for horizontal swipes, so we check both
    const isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY) || Math.abs(deltaX) > 10;
    
    if (isHorizontalGesture) {
      if (deltaX > 10) {
        // Swipe left (next testimonial)
        handleNext();
      } else if (deltaX < -10) {
        // Swipe right (previous testimonial)
        handlePrev();
      }
    } else {
      // For vertical scrolling with sufficient horizontal component
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Show testimonials based on screen size
  const getCurrentTestimonials = () => {
    const current = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % testimonials.length];
    return { current, next };
  };

  const { current, next } = getCurrentTestimonials();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {sectionDescription}
          </p>
          <Link
            href={viewAllLink}
            className="inline-flex items-center text-[#dc2626] font-medium hover:text-[#b91c1c] transition-colors duration-300 group"
          >
            {viewAllText}
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
          </Link>
        </div>

        {/* Testimonials Container with Swipe Support */}
        <div 
          ref={containerRef}
          className="relative px-4 sm:px-8 lg:px-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          style={{ 
            userSelect: 'none'
          }}
        >
          
          {/* Mobile: Single Testimonial */}
          <div className="lg:hidden">
            <div className="max-w-lg mx-auto">
              
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:scale-[1.01] border border-gray-100">
                  {/* Header with Profile and Company */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Profile Info */}
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-gray-100">
                        <Image
                          src={current.profileImage}
                          alt={current.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base mb-0.5">
                          {current.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {current.role}
                        </p>
                      </div>
                    </div>

                    {/* Company Logo */}
                    <div className="w-20 h-10 relative opacity-80">
                      <Image
                        src={current.companyLogo}
                        alt={current.company}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 leading-relaxed">
                      "{current.testimonial.split('.')[0]}."
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {current.testimonial.split('.').slice(1).join('.').trim()}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  {current.rating && (
                    <div className="flex space-x-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
             
            </div>
          </div>

          {/* Desktop: Two Testimonials */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-8 xl:gap-12 min-h-[400px]">
              {[current, next].map((testimonial, index) => (
              
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:scale-[1.01] h-full border border-gray-100">
                    {/* Header with Profile and Company */}
                    <div className="flex items-start justify-between mb-8">
                      {/* Profile Info */}
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-gray-100">
                          <Image
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-base">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Company Logo */}
                      <div className="w-24 h-12 relative opacity-80">
                        <Image
                          src={testimonial.companyLogo}
                          alt={testimonial.company}
                          fill
                          className="object-contain"
                          sizes="96px"
                        />
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4 leading-relaxed">
                        "{testimonial.testimonial.split('.')[0]}."
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {testimonial.testimonial.split('.').slice(1).join('.').trim()}
                      </p>
                    </div>

                    {/* Rating Stars */}
                    {testimonial.rating && (
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                
              ))}
            </div>
          </div>

          {/* Navigation Instructions */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              <span className="lg:hidden">Swipe left or right to navigate</span>
              <span className="hidden lg:inline">Use trackpad horizontal swipe or scroll wheel to navigate</span>
            </p>
          </div>
        </div>

        {/* Responsive Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#dc2626] w-6 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              } rounded-full disabled:cursor-not-allowed`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
