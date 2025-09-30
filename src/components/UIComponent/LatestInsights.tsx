"use client";

import Image from "next/image";
import Link from "next/link";
import { latestInsightsData } from "@/utils/dummy/latestInsightsData";

const LatestInsights = () => {
  const { sectionTitle, sectionSubtitle, posts } = latestInsightsData;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {sectionTitle}
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Desktop & Tablet Layout (Same) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            
            {/* Featured Post - With Image (Left Side) */}
            <div className="md:col-span-1 lg:col-span-1">
              <article className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col">
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-3 flex-1 leading-snug">
                      {posts[0].title}
                    </h3>
                    
                    {/* Read More Link */}
                    <Link
                      href={posts[0].readMoreLink}
                      className="inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-700 transition-colors duration-300 mt-auto"
                    >
                      {posts[0].readMoreText}
                      <svg
                        className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </article>
            </div>

            {/* Right Column - 4 Text-Only Posts in 2x2 Grid */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
                {posts.slice(1, 5).map((post) => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col p-4">
                      
                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-3 flex-1 leading-snug">
                        {post.title}
                      </h3>
                      
                      {/* Read More Link */}
                      <Link
                        href={post.readMoreLink}
                        className="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 transition-colors duration-300 mt-auto"
                      >
                        {post.readMoreText}
                        <svg
                          className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden">
          <div className="space-y-4 max-w-sm mx-auto">
            
            {/* Featured Post with Image */}
            <article className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="100vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {posts[0].title}
                  </h3>
                  
                  {/* Read More Link */}
                  <Link
                    href={posts[0].readMoreLink}
                    className="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 transition-colors duration-300"
                  >
                    {posts[0].readMoreText}
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </article>

            {/* Text-Only Posts */}
            {posts.slice(1, 4).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4">
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <Link
                    href={post.readMoreLink}
                    className="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 transition-colors duration-300"
                  >
                    {post.readMoreText}
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
