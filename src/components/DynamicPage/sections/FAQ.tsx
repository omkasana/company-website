"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/types/microCategory';

interface FAQProps {
  data: FAQItem[];
  title?: string;
}

const FAQ = ({ data, title = "Frequently Asked Questions" }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([data[0]?.id]));

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ Section
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services and processes
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {data.map((item, index) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-md font-bold text-slate-900 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-red-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {/* Answer Content */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="pl-12">
                      <div className="w-full h-px bg-gradient-to-r from-red-200 to-transparent mb-4"></div>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you with any specific questions about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-200">
                <HelpCircle className="w-5 h-5 mr-2" />
                Ask a Question
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
