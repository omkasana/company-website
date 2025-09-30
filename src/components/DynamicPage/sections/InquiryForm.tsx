"use client";

import { useState } from 'react';
import { ConsultantInfo } from '@/types/microCategory';
import { Phone, Mail, MessageCircle, Send, CheckCircle, Clock, Users } from 'lucide-react';

interface InquiryFormProps {
  consultant: ConsultantInfo;
  serviceTitle: string;
}

const InquiryForm = ({ consultant, serviceTitle }: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h3>
            <p className="text-xl text-gray-600 mb-8">
              Your inquiry has been submitted successfully. Our expert will contact you within 24 hours.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl font-semibold">
              <Clock className="w-5 h-5 mr-2" />
              Response within 24 hours
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Get Started Today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our experts to discuss your {serviceTitle.toLowerCase()} project requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Consultant Info */}
          <div className="lg:col-span-1">
            
            {/* Consultant Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {consultant.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {consultant.title}
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href={`tel:${consultant.phone}`}
                  className="flex items-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm text-blue-600 font-medium">Call Now</div>
                    <div className="text-blue-800 font-semibold">{consultant.phone}</div>
                  </div>
                </a>
                
                <a
                  href={`mailto:${consultant.businessEmail}`}
                  className="flex items-center p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="text-sm text-green-600 font-medium">Email</div>
                    <div className="text-green-800 font-semibold">{consultant.businessEmail}</div>
                  </div>
                </a>
                
                <a
                  href={`https://wa.me/${consultant.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="text-sm text-green-600 font-medium">WhatsApp</div>
                    <div className="text-green-800 font-semibold">Quick Chat</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">300+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">99% Client Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Type</option>
                      <option value="modernization">Legacy Modernization</option>
                      <option value="consulting">Consulting</option>
                      <option value="development">New Development</option>
                      <option value="migration">Cloud Migration</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Budget</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6+months">6+ Months</option>
                    </select>
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements, current challenges, and goals..."
                  />
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-2 w-6 h-6" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
