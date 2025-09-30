"use client";

import { CarouselSlide } from "@/types/CarouselSlide";
import { useState, useEffect, useCallback, useRef, useTransition } from "react";
import Link from "next/link";

interface BannerProps {
  banners: CarouselSlide[];
  bottomTab?: boolean;
  height?: "full" | "half"; // New prop for height control
}

const Banner: React.FC<BannerProps> = ({ banners, bottomTab, height = "full" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev' | null>(null);
  const [isPending, startTransition] = useTransition();
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const SLIDE_DURATION = 6000;
  const PROGRESS_INTERVAL = 50;

  // Height configurations
  const heightConfig = {
    full: {
      mobile: "h-[65vh] max-h-[500px] min-h-[450px]",
      desktop: "h-screen",
      content: {
        mobile: "pt-16 pb-12",
        desktop: "pt-0 pb-0"
      }
    },
    half: {
      mobile: "h-[50vh] max-h-[400px] min-h-[350px]",
      desktop: "h-[50vh] min-h-[500px]",
      content: {
        mobile: "pt-12 pb-8",
        desktop: "pt-8 pb-8"
      }
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const clearAllIntervals = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    if (isPaused || isHovered) return;

    clearAllIntervals();

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const increment = (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    intervalRef.current = setTimeout(() => {
      setSlideDirection('next');
      startTransition(() => {
        setCurrentSlide((current) => (current + 1) % banners.length);
      });
      setProgress(0);
      
      setTimeout(() => setSlideDirection(null), 500);
    }, SLIDE_DURATION);

  }, [isPaused, isHovered, banners.length, clearAllIntervals]);

  useEffect(() => {
    startAutoAdvance();
    return () => clearAllIntervals();
  }, [currentSlide, isPaused, isHovered, startAutoAdvance, clearAllIntervals]);

  const goToSlide = useCallback((slideIndex: number, direction: 'next' | 'prev' = 'next') => {
    if (slideIndex === currentSlide) return;
    
    clearAllIntervals();
    setSlideDirection(direction);
    
    startTransition(() => {
      setCurrentSlide(slideIndex);
    });
    
    setProgress(0);
    setIsPaused(true);

    setTimeout(() => setSlideDirection(null), 500);

    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  }, [currentSlide, clearAllIntervals]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        const nextIndex = (currentSlide + 1) % banners.length;
        goToSlide(nextIndex, 'next');
      } else {
        const prevIndex = currentSlide === 0 ? banners.length - 1 : currentSlide - 1;
        goToSlide(prevIndex, 'prev');
      }
    }
  };

  const handleIndicatorHover = (isHovering: boolean) => {
    setIsHovered(isHovering);
  };

  // Content size based on height
  const getContentSize = () => {
    if (height === "half") {
      return {
        title: {
          mobile: "text-xl sm:text-2xl",
          desktop: "text-3xl sm:text-4xl"
        },
        description: {
          mobile: "text-xs sm:text-sm",
          desktop: "text-base sm:text-lg"
        },
        button: {
          mobile: "px-4 py-2 text-xs",
          desktop: "px-5 py-2.5 text-sm"
        }
      };
    }
    
    return {
      title: {
        mobile: "text-2xl sm:text-3xl",
        desktop: "text-4xl sm:text-5xl"
      },
      description: {
        mobile: "text-sm sm:text-base",
        desktop: "text-lg sm:text-xl"
      },
      button: {
        mobile: "px-6 py-3 text-sm",
        desktop: "px-6 py-3 text-base"
      }
    };
  };

  const contentSize = getContentSize();

  return (
    <div 
      className={`relative w-full overflow-hidden ${
        isMobile ? heightConfig[height].mobile : heightConfig[height].desktop
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {banners.map((slide, index) => {
          let slideClass = "absolute inset-0 transition-all duration-500 ease-in-out";
          
          if (isMobile) {
            if (index === currentSlide) {
              slideClass += " opacity-100 translate-x-0";
            } else if (slideDirection === 'next') {
              if (index === (currentSlide - 1 + banners.length) % banners.length) {
                slideClass += " opacity-0 -translate-x-full";
              } else if (index === (currentSlide + 1) % banners.length) {
                slideClass += " opacity-0 translate-x-full";
              } else {
                slideClass += " opacity-0";
              }
            } else if (slideDirection === 'prev') {
              if (index === (currentSlide + 1) % banners.length) {
                slideClass += " opacity-0 translate-x-full";
              } else if (index === (currentSlide - 1 + banners.length) % banners.length) {
                slideClass += " opacity-0 -translate-x-full";
              } else {
                slideClass += " opacity-0";
              }
            } else {
              slideClass += index === currentSlide ? " opacity-100" : " opacity-0";
            }
          } else {
            slideClass += index === currentSlide ? " opacity-100" : " opacity-0";
          }

          return (
            <div
              key={slide.id}
              className={slideClass}
              style={isMobile ? {
                background: 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)'
              } : {
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: height === "half" ? "center 30%" : "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay - Adjusted for half height */}
              <div className={`absolute inset-0 ${
                isMobile 
                  ? 'bg-gradient-to-b from-black/10 via-transparent to-black/20' 
                  : height === "half"
                  ? 'bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30'
                  : 'bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40'
              }`} />

              {/* Content */}
              <div className={`relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
                isMobile ? heightConfig[height].content.mobile : heightConfig[height].content.desktop
              }`}>
                <div className={`flex h-full ${
                  isMobile ? 'items-center justify-center' : 'items-center'
                }`}>
                  <div className={`${isMobile ? 'w-full text-center px-3' : 'max-w-4xl lg:max-w-3xl'} ${
                    height === "half" && !isMobile ? 'mt-8' : ''
                  }`}>
                    
                    {/* Mobile Layout */}
                    {isMobile ? (
                      <>
                        {/* Subtitle - Mobile (only for half height) */}
                        {height === "half" && (
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                              {slide.subtitle}
                            </span>
                          </div>
                        )}

                        {/* Main Title - Mobile */}
                        <h1 className={`font-bold text-white leading-tight mb-3 ${
                          contentSize.title.mobile
                        }`}>
                          {slide.title}
                        </h1>

                        {/* Description - Mobile */}
                        <p className={`text-gray-100 leading-relaxed mb-4 px-2 ${
                          contentSize.description.mobile
                        }`}>
                          {slide.description}
                        </p>

                        {/* Action Buttons - Mobile */}
                        <div className={`flex flex-col gap-2 ${height === "half" ? 'px-4' : 'px-6'}`}>
                          {/* Primary Button */}
                          {slide.buttonLink ? (
                            <Link
                              href={slide.buttonLink}
                              className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white group ${
                                contentSize.button.mobile
                              }`}
                              target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                              rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {slide.buttonText}
                              <svg
                                className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
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
                          ) : (
                            <button className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white group ${
                              contentSize.button.mobile
                            }`}>
                              {slide.buttonText}
                              <svg
                                className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          )}

                          {/* Secondary Button */}
                          <Link
                            href="/contact"
                            className={`inline-flex items-center justify-center rounded-lg font-medium text-white border-2 border-transparent hover:border-white/30 transition-all duration-300 group ${
                              contentSize.button.mobile
                            }`}
                          >
                            Explore
                            <svg
                              className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
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
                      </>
                    ) : (
                      <>
                        {/* Desktop Layout */}
                        {/* Subtitle - Always visible in half height, conditional in full height */}
                        {(height === "half" || slide.subtitle) && (
                          <div className="mb-4">
                            <span className="inline-block px-4 py-2 bg-primary/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                              {slide.subtitle}
                            </span>
                          </div>
                        )}

                        {/* Main Title - Desktop */}
                        <h1 className={`font-bold text-white leading-tight mb-4 ${
                          contentSize.title.desktop
                        }`}>
                          {slide.title}
                        </h1>

                        {/* Description - Desktop */}
                        <p className={`text-gray-100 mb-6 leading-relaxed max-w-3xl ${
                          contentSize.description.desktop
                        }`}>
                          {slide.description}
                        </p>

                        {/* Action Buttons - Desktop */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          {/* Primary Button */}
                          {slide.buttonLink ? (
                            <Link
                              href={slide.buttonLink}
                              className={`inline-flex items-center rounded-lg font-medium transition-all duration-300 group ${
                                slide.buttonStyle === "primary"
                                  ? "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
                                  : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600"
                              } ${contentSize.button.desktop}`}
                              target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                              rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {slide.buttonText}
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
                          ) : (
                            <button
                              className={`inline-flex items-center rounded-lg font-medium transition-all duration-300 group ${
                                slide.buttonStyle === "primary"
                                  ? "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
                                  : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600"
                              } ${contentSize.button.desktop}`}
                            >
                              {slide.buttonText}
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
                            </button>
                          )}

                          {/* Secondary Button */}
                          <Link
                            href="/services"
                            className={`inline-flex items-center rounded-lg font-medium text-white border-2 border-transparent hover:border-white/30 transition-all duration-300 group ${
                              contentSize.button.desktop
                            }`}
                          >
                            Explore
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Bottom Navigation Tabs - Adjusted for half height */}
      {bottomTab && !isMobile && (
        <div
          className={`absolute left-0 right-0 z-20 ${
            height === "half" ? "bottom-0 mb-2" : "bottom-0 mb-4"
          }`}
          onMouseEnter={() => handleIndicatorHover(true)}
          onMouseLeave={() => handleIndicatorHover(false)}
        >
          <div className="flex w-full">
            {banners.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-1 px-4 py-3 text-center transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-black/20 text-white"
                    : "bg-transparent text-gray-300 hover:bg-black/70"
                } ${height === "half" ? "py-2" : "py-4"}`}
                style={{ minHeight: height === "half" ? "50px" : "60px" }}
              >
                <div className="relative z-10">
                  <span className={`block font-medium leading-tight ${
                    height === "half" ? "text-xs" : "text-sm"
                  }`}>
                    {slide.subtitle}
                  </span>
                </div>

                {index === currentSlide && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-700">
                    <div
                      className="h-full bg-red-400 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Dot Indicators - Adjusted for half height */}
      {isMobile && (
        <div className={`absolute left-0 right-0 z-20 ${
          height === "half" ? "bottom-3" : "bottom-4"
        }`}>
          <div className="flex justify-center items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/70"
                }`}
                onTouchStart={() => handleIndicatorHover(true)}
                onTouchEnd={() => handleIndicatorHover(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;