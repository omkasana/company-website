import { CTAData } from '@/types/microCategory';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';

interface CallToActionProps {
  data: CTAData;
}

const CallToAction = ({ data }: CallToActionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="text-center mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold text-lg mb-8 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            Ready to Get Started?
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            {data.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href={data.primaryCTA.link}
              className="group inline-flex items-center px-12 py-6 bg-red-600 text-white font-bold text-xl rounded-2xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
            >
              {data.primaryCTA.text}
              <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {data.secondaryCTA && (
              <Link
                href={data.secondaryCTA.link}
                className="group inline-flex items-center px-12 py-6 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                {data.secondaryCTA.text}
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Call */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Call Us Now</h3>
            <p className="text-gray-300 mb-4">Speak directly with our experts</p>
            <div className="text-blue-400 font-semibold">+1 (555) 123-4567</div>
          </div>
          
          {/* Email */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Chat</h3>
            <p className="text-gray-300 mb-4">Get instant responses via chat</p>
            <div className="text-green-400 font-semibold">Start Chat</div>
          </div>
          
          {/* Meeting */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Free Consultation</h3>
            <p className="text-gray-300 mb-4">Book a 30-minute strategy call</p>
            <div className="text-purple-400 font-semibold">Schedule Now</div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-white mr-2">300+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-white mr-2">99%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-white mr-2">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
