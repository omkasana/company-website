import { OverviewData } from '@/types/microCategory';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

interface OverviewProps {
  data: OverviewData;
}

const Overview = ({ data }: OverviewProps) => {
  const stats = [
    { icon: Users, label: "Projects Completed", value: "300+", color: "text-blue-600" },
    { icon: Globe, label: "Countries Served", value: "25+", color: "text-green-600" },
    { icon: Award, label: "Cost Reduction", value: "60%", color: "text-purple-600" },
    { icon: TrendingUp, label: "Performance Boost", value: "400%", color: "text-red-600" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gray-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-6">
              About Our Company
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {data.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {data.description}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.longDescription}
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg group-hover:text-slate-900 transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Enhanced Visual */}
          <div className="lg:order-2">
            <div className="relative">
              
              {/* Main Card */}
              <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Content Cards */}
                <div className="relative space-y-6">
                  
                  {/* Achievement Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Award className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">Industry Leader</h3>
                          <p className="text-sm text-gray-600">Modernization Excellence</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600">98%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
