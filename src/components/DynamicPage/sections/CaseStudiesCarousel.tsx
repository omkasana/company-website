"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';
import { CaseStudy } from '@/types/microCategory';

interface CaseStudiesCarouselProps {
  data: CaseStudy[];
  title?: string;
}

const CaseStudiesCarousel = ({ 
  data, 
  title = "Success Stories" 
}: CaseStudiesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentCase = data[currentIndex];

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients who trusted us with their digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Case Study Details */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              
              {/* Industry Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                {currentCase.industry}
              </div>
              
              {/* Title & Client */}
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {currentCase.title}
              </h3>
              
              <div className="text-lg text-gray-600 font-medium mb-8">
                Client: <span className="text-red-600 font-semibold">{currentCase.client}</span>
              </div>
              
              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  Challenge
                </h4>
                <p className="text-gray-700 leading-relaxed pl-9">
                  {currentCase.challenge}
                </p>
              </div>
              
              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  Solution
                </h4>
                <p className="text-gray-700 leading-relaxed pl-9">
                  {currentCase.solution}
                </p>
              </div>
              
              {/* Results */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                  Results
                </h4>
                <div className="space-y-3 pl-9">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Navigation & Preview */}
          <div>
            
            {/* Case Study Image */}
            <div className="relative mb-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{currentCase.client}</div>
                    <div className="text-sm text-gray-600">{currentCase.industry}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Success</div>
                    <div className="text-sm text-gray-600">Delivered</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {currentCase.results.slice(0, 3).map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                  <div className="text-lg font-bold text-green-800 mb-1">
                    {result.match(/\d+/)?.[0] || '✓'}
                    {result.includes('%') ? '%' : result.includes('x') ? 'x' : ''}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {result.replace(/\d+[%x]?/, '').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
