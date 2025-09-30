'use client';

import { CareerPageVideoData } from "@/types/career/careerPageVideo";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface CareerPageVideoProps {
  data: CareerPageVideoData;
}

export default function CareerPageVideo({ data }: CareerPageVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
      
      // Multiple attempts to ensure video plays
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Autoplay attempt failed, trying again...', error);
          // Retry after a short delay
          setTimeout(async () => {
            try {
              await video.play();
            } catch (retryError) {
              console.log('Video autoplay failed after retry:', retryError);
            }
          }, 1000);
        }
      };

      playVideo();
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(console.log);
    };

    const handleError = (error: any) => {
      console.error('Video failed to load:', error);
      setVideoError(true);
      setVideoLoaded(false);
    };

    const handleLoadStart = () => {
      setVideoError(false);
    };

    // Add multiple event listeners for better compatibility
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, [data.videoSrc]);

  // Intersection Observer to play video when in view (helps with mobile)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoLoaded) {
            video.play().catch(console.log);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoLoaded]);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster="" // Remove poster to avoid flash
        style={{ backgroundColor: 'transparent' }}
      >
        <source src={data.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
      )}

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-600/50"></div>

      {/* Content Container - Fixed to avoid navbar overlap */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-0">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          {/* Action Buttons - 50% Smaller and Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Button - 50% Smaller */}
            <Link
              href={data.buttons.primary.href}
              className="w-full sm:w-auto bg-white text-blue-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 min-w-[120px] sm:min-w-[140px] text-center"
            >
              {data.buttons.primary.text}
            </Link>

            {/* Secondary Button - 50% Smaller */}
            <Link
              href={data.buttons.secondary.href}
              className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center"
            >
              {data.buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
