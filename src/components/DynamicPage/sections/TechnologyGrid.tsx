'use client'
import { TechnologyItem } from '@/types/microCategory';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechnologyGridProps {
  data: TechnologyItem[];
  title?: string;
  description?: string;
}

const TechnologyGrid = ({ 
  data, 
  title = "Technology Stack",
  description = "Modern tools and frameworks we excel at"
}: TechnologyGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Safe category extraction
  const allCategories = data.map(tech => tech.category).filter(Boolean);
  const uniqueCategories = Array.from(new Set(allCategories));
  const categories = ['all', ...uniqueCategories];

  const filteredData = selectedCategory === 'all' 
    ? data 
    : data.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <AnimatePresence>
            {filteredData.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {tech.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(index % 5 + 1) * 20}%` }}
                  ></div>
                </div>

                {/* Category */}
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span className="capitalize">{tech.category}</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyGrid;