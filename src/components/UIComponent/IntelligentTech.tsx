"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { intelligentTechData } from "@/utils/dummy/intelligentTechData";

const IntelligentTech = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { sectionTitle, sectionSubtitle, ctaText, ctaLink, services } = intelligentTechData;

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Sticky when section is visible, unsticky when section about to leave
      setIsSticky(rect.top <= 50 && rect.bottom > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced video handling with guaranteed loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playInterval: NodeJS.Timeout;

    const forcePlay = async () => {
      try {
        await video.play();
        setVideoLoaded(true);
        
        // Check every 2 seconds to ensure video is playing
        playInterval = setInterval(() => {
          if (video.paused || video.ended) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }, 2000);
        
      } catch (error) {
        // Retry after 1 second if play fails
        setTimeout(forcePlay, 1000);
      }
    };

    const handleCanPlay = () => forcePlay();
    const handleLoadedData = () => forcePlay();
    const handleEnded = () => {
      video.currentTime = 0;
      forcePlay();
    };
    
    // Mobile loop backup
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    
    // Initial play attempt
    forcePlay();

    return () => {
      if (playInterval) clearInterval(playInterval);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          controls={false}
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/video01.mp4" type="video/mp4" />
          <source src="/videos/video01.webm" type="video/webm" />
        </video>
        
        {/* Video overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Fallback background */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-screen items-center">
            
            {/* Left Content - Sticky Text */}
            <div className="relative">
              <div 
                className={`transition-all duration-500 ease-out ${
                  isSticky 
                    ? 'md:sticky md:top-20 lg:top-24' 
                    : 'relative'
                }`}
              >
                <div className="text-center lg:text-left">
                  {/* Responsive title - Desktop/Tablet same, Mobile smaller */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {sectionTitle}
                  </h1>
                  
                  {/* Responsive subtitle - Desktop/Tablet same, Mobile smaller */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {sectionSubtitle}
                  </p>
                  
                  {/* Responsive button */}
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#dc2626] text-white text-base md:text-lg font-bold rounded-lg hover:bg-[#b91c1c] transition-all duration-300 group shadow-lg"
                  >
                    {ctaText}
                    <svg
                      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="lg:pt-8">
              <div className="space-y-4 md:space-y-6">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="block group"
                  >
                    <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-black/30 hover:border-[#dc2626]/50 hover:shadow-lg">
                      
                      {/* Red top border on hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#dc2626] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />
                      
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4 md:pr-6">
                          {/* Responsive service titles - Desktop/Tablet same, Mobile smaller */}
                          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                          
                          {/* Responsive descriptions - Desktop/Tablet same, Mobile smaller */}
                          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Arrow icon */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white group-hover:text-blue-200 transition-all duration-300">
                            <svg
                              className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300"
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for scroll effect */}
      <div className="h-96" />
    </section>
  );
};

export default IntelligentTech;
