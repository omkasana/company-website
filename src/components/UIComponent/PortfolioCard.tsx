import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardItem {
  title: string;
  description: string;
  img: string;
  category?: string;
  date?: string;
  author?: string;
}

interface CardProps {
  data: CardItem[];
  columns?: 1 | 2 | 3 | 4; // Responsive column control
  aspectRatio?: "square" | "video" | "custom";
  showCategory?: boolean;
  showDate?: boolean;
  cardStyle?: "modern" | "minimal" | "elegant";
}

export const Card: React.FC<CardProps> = ({ 
  data, 
  columns = 3,
  aspectRatio = "square",
  showCategory = false,
  showDate = false,
  cardStyle = "modern"
}) => {
  // Column configuration
  const gridConfig = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  // Aspect ratio classes
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    custom: "aspect-[4/3]"
  };

  // Card style configurations
  const styleConfig = {
    modern: {
      card: "rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full hover:scale-105 hover:shadow-2xl border border-gray-100",
      image: "object-cover group-hover:scale-110 transition-transform duration-500",
      title: "text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors",
      description: "text-gray-600 leading-relaxed"
    },
    minimal: {
      card: "rounded-lg overflow-hidden bg-white transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full hover:shadow-md border border-gray-200",
      image: "object-cover",
      title: "text-lg font-semibold text-gray-800",
      description: "text-gray-500 text-sm"
    },
    elegant: {
      card: "rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-white to-gray-50 transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full hover:scale-[1.02] hover:shadow-xl border border-gray-100",
      image: "object-cover group-hover:scale-105 transition-transform duration-700",
      title: "text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors",
      description: "text-gray-600 leading-relaxed"
    }
  };

  const currentStyle = styleConfig[cardStyle];

  return (
    <div className={`grid ${gridConfig[columns]} gap-6 max-w-[1400px] mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
      {data.map((item, index) => {
        const slug = item.title.toLowerCase().replace(/\s+/g, "-");

        return (
          <Link key={index} href={`/portfolio/${slug}`} passHref legacyBehavior>
            <a className="group block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl">
              <div className={currentStyle.card}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${aspectRatios[aspectRatio]}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={currentStyle.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  {showCategory && item.category && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Date */}
                  {showDate && item.date && (
                    <span className="text-xs text-gray-500 font-medium mb-2">
                      {item.date}
                    </span>
                  )}
                  
                  {/* Title */}
                  <h3 className={`mb-3 line-clamp-2 ${currentStyle.title}`}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm mb-4 line-clamp-3 ${currentStyle.description}`}>
                    {item.description}
                  </p>
                  
                  {/* Author */}
                  {item.author && (
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500 font-medium">
                        By {item.author}
                      </span>
                    </div>
                  )}
                  
                  {/* Read More Indicator */}
                  <div className="flex items-center justify-between mt-auto pt-3">
                    <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      View Project
                    </span>
                    <svg 
                      className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;