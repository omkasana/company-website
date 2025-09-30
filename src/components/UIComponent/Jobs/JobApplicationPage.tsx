"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { JobApplicationData } from '@/types/jobs/jobApplication';

import { 
  experienceOptions, 
  educationOptions, 
  noticePeriodOptions, 
  referralSourceOptions 
} from '@/utils/dummy/jobs/applicationForm/formOptions';

import { 
  formSections, 
  formValidationMessages, 
  fileUploadConfig 
} from '@/utils/dummy/jobs/applicationForm/formFieldsData';

import { 
  getInitialFormData, 
  formPlaceholders 
} from '@/utils/dummy/jobs/applicationForm/defaultFormData';

interface JobApplicationPageProps {
  jobTitle: string;
  jobId: string;
}

export default function JobApplicationPage({ jobTitle, jobId }: JobApplicationPageProps) {
  const [formData, setFormData] = useState<JobApplicationData>(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Validate file size
      if (file.size > fileUploadConfig.maxSize) {
        setErrors(prev => ({ ...prev, resume: formValidationMessages.fileSize }));
        return;
      }
      
      // Validate file type
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
      if (!fileUploadConfig.allowedTypes.includes(fileExtension)) {
        setErrors(prev => ({ ...prev, resume: formValidationMessages.fileType }));
        return;
      }
    }
    
    setFormData(prev => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required field validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'location',
      'currentPosition', 'totalExperience', 'noticePeriod',
      'highestEducation', 'instituteName', 'graduationYear',
      'technicalSkills', 'linkedinProfile'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof JobApplicationData] || 
          formData[field as keyof JobApplicationData] === '') {
        newErrors[field] = formValidationMessages.required;
      }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = formValidationMessages.email;
    }
    
    // URL validation
    const urlRegex = /^https?:\/\/.+/;
    if (formData.linkedinProfile && !urlRegex.test(formData.linkedinProfile)) {
      newErrors.linkedinProfile = formValidationMessages.url;
    }
    
    if (formData.portfolioUrl && !urlRegex.test(formData.portfolioUrl)) {
      newErrors.portfolioUrl = formValidationMessages.url;
    }
    
    // Resume validation
    if (!formData.resume) {
      newErrors.resume = formValidationMessages.required;
    }
    
    // Terms validation
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = formValidationMessages.required;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Submitting application:', formData);
      
      // Create FormData for file upload
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (key === 'resume' && value instanceof File) {
            submitData.append(key, value);
          } else {
            submitData.append(key, value.toString());
          }
        }
      });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Application submitted successfully!');
      // In a real app, you'd redirect to a success page
      
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const personalSection = formSections.find(s => s.id === 'personal')!;
  const professionalSection = formSections.find(s => s.id === 'professional')!;
  const educationSection = formSections.find(s => s.id === 'education')!;
  const skillsSection = formSections.find(s => s.id === 'skills')!;
  const documentsSection = formSections.find(s => s.id === 'documents')!;
  const additionalSection = formSections.find(s => s.id === 'additional')!;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href={`/jobs/${jobId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Job Details
          </Link>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Apply for {jobTitle}
            </h1>
            <p className="text-gray-600">
              Fill out the form below to submit your application
            </p>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Personal Information Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <personalSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{personalSection.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.firstName}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.lastName}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.email}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.phone}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.location}
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <professionalSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{professionalSection.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Position *
                </label>
                <input
                  type="text"
                  id="currentPosition"
                  name="currentPosition"
                  value={formData.currentPosition}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.currentPosition ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.currentPosition}
                />
                {errors.currentPosition && <p className="text-red-500 text-xs mt-1">{errors.currentPosition}</p>}
              </div>
              
              <div>
                <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={formPlaceholders.currentCompany}
                />
              </div>
              
              <div>
                <label htmlFor="totalExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Total Experience *
                </label>
                <select
                  id="totalExperience"
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.totalExperience ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select experience</option>
                  {experienceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.totalExperience && <p className="text-red-500 text-xs mt-1">{errors.totalExperience}</p>}
              </div>
              
              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Salary (Annual)
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={formPlaceholders.expectedSalary}
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                  Notice Period *
                </label>
                <select
                  id="noticePeriod"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.noticePeriod ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select notice period</option>
                  {noticePeriodOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.noticePeriod && <p className="text-red-500 text-xs mt-1">{errors.noticePeriod}</p>}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <educationSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{educationSection.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="highestEducation" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education *
                </label>
                <select
                  id="highestEducation"
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.highestEducation ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select education level</option>
                  {educationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.highestEducation && <p className="text-red-500 text-xs mt-1">{errors.highestEducation}</p>}
              </div>
              
              <div>
                <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700 mb-2">
                  Institute/University Name *
                </label>
                <input
                  type="text"
                  id="instituteName"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.instituteName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.instituteName}
                />
                {errors.instituteName && <p className="text-red-500 text-xs mt-1">{errors.instituteName}</p>}
              </div>
              
              <div>
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year *
                </label>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  min="1980"
                  max="2030"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.graduationYear ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.graduationYear}
                />
                {errors.graduationYear && <p className="text-red-500 text-xs mt-1">{errors.graduationYear}</p>}
              </div>
            </div>
          </div>

          {/* Skills & Experience Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <skillsSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{skillsSection.title}</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="technicalSkills" className="block text-sm font-medium text-gray-700 mb-2">
                  Technical Skills *
                </label>
                <textarea
                  id="technicalSkills"
                  name="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical ${
                    errors.technicalSkills ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.technicalSkills}
                />
                {errors.technicalSkills && <p className="text-red-500 text-xs mt-1">{errors.technicalSkills}</p>}
              </div>
              
              <div>
                <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience & Achievements
                </label>
                <textarea
                  id="relevantExperience"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                  placeholder={formPlaceholders.relevantExperience}
                />
              </div>
            </div>
          </div>

          {/* Documents & Links Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <documentsSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{documentsSection.title}</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept={fileUploadConfig.allowedTypes.join(',')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${
                    errors.resume ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
              </div>
              
              <div>
                <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile *
                </label>
                <input
                  type="url"
                  id="linkedinProfile"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.linkedinProfile}
                />
                {errors.linkedinProfile && <p className="text-red-500 text-xs mt-1">{errors.linkedinProfile}</p>}
              </div>
              
              <div>
                <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/GitHub URL
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.portfolioUrl ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={formPlaceholders.portfolioUrl}
                />
                {errors.portfolioUrl && <p className="text-red-500 text-xs mt-1">{errors.portfolioUrl}</p>}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <additionalSection.icon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-black">{additionalSection.title}</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why do you want to join us?
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                  placeholder={formPlaceholders.coverLetter}
                />
              </div>
              
              <div>
                <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this position?
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="">Select source</option>
                  {referralSourceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Terms & Submit Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreedToTerms"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreedToTerms" className="ml-3 text-sm text-gray-700">
                  I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>. I consent to the processing of my personal data for recruitment purposes. *
                </label>
              </div>
              {errors.agreedToTerms && <p className="text-red-500 text-xs">{errors.agreedToTerms}</p>}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/jobs/${jobId}`}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 text-center"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
