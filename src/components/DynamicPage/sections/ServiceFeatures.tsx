'use client'

import { ServiceFeature } from '@/types/microCategory';
import { ArrowRight, Eye, Code, Users, Zap, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ServiceFeatures = ({ 
  data, 
  title = "Our Services",
  description = "Discover our comprehensive service offerings"
}: any) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 6).map((feature:any, index:any) => (
            <div
              key={feature.id}
              className="relative h-80 cursor-pointer group perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              {/* Card */}
              <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                  <div className="h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-2xl text-white">{feature.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {feature.description.substring(0, 100)}...
                    </p>
                    
                    <div className="mt-auto flex items-center text-blue-600 font-medium text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Click to explore
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
                  <div className="h-full flex flex-col">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Code className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-4">Detailed Features</h3>
                    
                    <ul className="space-y-2 text-sm text-blue-200 mb-6">
                      <li className="flex items-center">
                        <Zap className="w-3 h-3 mr-2" />
                        Advanced implementation
                      </li>
                      <li className="flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        Team collaboration
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="w-3 h-3 mr-2" />
                        Premium support
                      </li>
                    </ul>
                    
                    <button className="mt-auto w-full bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};
export default ServiceFeatures;