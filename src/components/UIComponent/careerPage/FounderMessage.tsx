'use client';

import { FounderMessageData } from "@/types/career/founderMessage";
import Image from 'next/image';

interface FounderMessageProps {
  data: FounderMessageData;
}

export default function FounderMessage({ data }: FounderMessageProps) {
  return (
    <section className="bg-white py-6 md:py-10 lg:py-13">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          
          {/* Left Side - image ) */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-51 sm:h-64 md:h-77 lg:h-[360px] xl:h-[400px]">
                <Image
                  src={data.founderImage}
                  alt={data.founderName}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content (3/5 width) */}
          <div className="lg:col-span-3 order-2 lg:order-2 lg:pl-6">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-5 md:mb-6 lg:mb-8 leading-tight">
              {data.title}{' '}
              <span className="text-cyan-400">{data.highlightedWord}</span>
            </h2>

            {/* Message */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed font-normal">
                {data.message}
              </p>
            </div>

            {/* Founder Details */}
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-2">
                {data.founderName}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-500 font-medium">
                {data.founderTitle}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
