"use client";

import { useState, useEffect } from 'react';
import { GuideSection as GuideSectionType, ComparisonTableData } from '@/types/microCategory';

interface GuideSectionProps {
  data: GuideSectionType;
  comparisonTables?: {
    legacyVsModern: ComparisonTableData[];
    [key: string]: ComparisonTableData[];
  };
}

const GuideSection = ({ data, comparisonTables }: GuideSectionProps) => {
  const [activeSection, setActiveSection] = useState(data.topics[0]?.id || '');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`content-${sectionId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Comparison Table Component
  const ComparisonTable = ({ data: tableData }: { data: ComparisonTableData[] }) => (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Point of Difference</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Legacy Systems</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Modern Applications</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-medium">{row.point}</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-600">{row.legacy}</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-600">{row.modern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-xl text-gray-600 max-w-4xl">
              {data.subtitle}
            </p>
          )}
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Guide Topics
              </h3>
              
              <nav className="space-y-2">
                {data.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => scrollToSection(topic.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === topic.id
                        ? 'bg-red-600 text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-200 hover:text-slate-900'
                    }`}
                  >
                    {topic.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-16">
              {data.topics.map((topic) => (
                <div key={topic.id} id={`content-${topic.id}`} className="scroll-mt-6">
                  <div className="prose prose-lg max-w-none">
                    
                    {/* Topic Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      {topic.title}
                    </h3>
                    
                    {/* Topic Content */}
                    <div className="text-gray-700 leading-relaxed mb-8">
                      {topic.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                    
                    {/* Show comparison table for legacy vs modern topic */}
                    {topic.id === 'legacy-vs-modern' && comparisonTables?.legacyVsModern && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-slate-900 mb-4">
                          Detailed Comparison:
                        </h4>
                        <ComparisonTable data={comparisonTables.legacyVsModern} />
                      </div>
                    )}
                    
                    {/* Additional content for specific topics */}
                    {topic.id === 'why-modernization' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                          <h5 className="font-semibold text-red-900 mb-3">🚨 Security Risks</h5>
                          <p className="text-red-700 text-sm mb-3">Legacy systems are vulnerable to modern cyber threats.</p>
                          <ul className="text-red-600 text-sm space-y-1">
                            <li>• Outdated security protocols</li>
                            <li>• Missing critical patches</li>
                            <li>• Compliance violations</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                          <h5 className="font-semibold text-green-900 mb-3">💰 Cost Benefits</h5>
                          <p className="text-green-700 text-sm mb-3">Modernization delivers significant savings.</p>
                          <ul className="text-green-600 text-sm space-y-1">
                            <li>• 60% reduction in maintenance costs</li>
                            <li>• 400% performance improvement</li>
                            <li>• Better resource utilization</li>
                          </ul>
                        </div>
                      </div>
                    )}
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

export default GuideSection;
