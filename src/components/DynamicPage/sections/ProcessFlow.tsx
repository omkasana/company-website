'use client'
import { ProcessStep } from "@/types/microCategory";
import { ChevronLeft, ChevronRight, Play, Pause, Zap, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ProcessFlow3D = ({
  steps,
  title = "Our Process Journey",
  description = "Immersive experience through our development workflow"
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const nextStep = () => setCurrentIndex((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10% left-10% w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10% right-10% w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-8">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-lg font-semibold text-white">Interactive Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div ref={containerRef} className="relative h-[600px] perspective-1000">
          {/* Main Card - 3D Effect */}
          <div className="relative w-full h-full transform-style-preserve-3d">
            {steps.map((step:any, index:any) => {
              const position = (index - currentIndex + steps.length) % steps.length;
              const isActive = position === 0;
              const isNext = position === 1;
              const isPrev = position === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out transform-style-preserve-3d ${
                    isActive
                      ? 'translate-x-0 translate-z-0 opacity-100 scale-100'
                      : isNext
                      ? 'translate-x-full translate-z-[-100px] opacity-40 scale-90'
                      : isPrev
                      ? 'translate-x-[-80%] translate-z-[-100px] opacity-40 scale-90'
                      : 'translate-x-0 translate-z-[-200px] opacity-0 scale-75'
                  }`}
                >
                  {/* Card Content */}
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 p-8 md:p-12 shadow-2xl h-full transform-style-preserve-3d">
                    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                      {/* Text Content */}
                      <div className="transform translate-z-20">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-blue-300 font-medium">Step {index + 1}</div>
                            <div className="text-white text-2xl font-bold">{step.duration}</div>
                          </div>
                        </div>

                        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-blue-100/90 text-lg leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <div className="flex justify-between text-blue-200 text-sm mb-2">
                            <span>Progress</span>
                            <span>{Math.round(((index + 1) / steps.length) * 100)}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Visual Side */}
                      <div className="relative transform translate-z-30">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-12 border-2 border-white/10">
                            <div className="text-8xl text-center mb-4">{step.icon}</div>
                            <div className="text-white/60 text-center text-lg">Phase {index + 1}</div>
                          </div>
                          
                          {/* Floating Elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-30"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextStep}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-30"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white mr-3" />
            ) : (
              <Play className="w-5 h-5 text-white mr-3" />
            )}
            <span className="text-white font-medium">
              {isPlaying ? 'Pause Journey' : 'Start Journey'}
            </span>
          </button>

          {/* Step Indicators */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-xl px-6 py-3 border border-white/10">
            {steps.map((_:any, index:any) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Text */}
          <div className="text-white/80 font-medium">
            {currentIndex + 1} / {steps.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
        .translate-z-30 {
          transform: translateZ(30px);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow3D;