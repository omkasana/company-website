import { HeroData } from '@/types/microCategory';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroProps {
  data: HeroData;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/10 to-blue-600/20"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-400/30 rounded-full text-red-300 font-semibold text-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
            {data.subtitle}
            <CheckCircle className="w-4 h-4 ml-2" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            {data.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href={data.ctaLink}
              className="group inline-flex items-center px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-2xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
            >
              {data.ctaText}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <Play className="mr-3 w-6 h-6" />
              Watch Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gray-600 rounded-full border-2 border-slate-800"></div>
                ))}
              </div>
              <div>
                <div className="text-white font-semibold">300+ Happy Clients</div>
                <div className="text-sm">Trusted Worldwide</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-3xl font-bold text-yellow-400 mr-2">4.9</div>
              <div>
                <div className="flex text-yellow-400 mb-1">★★★★★</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
