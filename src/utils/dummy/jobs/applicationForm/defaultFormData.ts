import { JobApplicationData } from '@/types/jobs/jobApplication';

export const getInitialFormData = (): JobApplicationData => ({
  // Personal Information
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  
  // Professional Information
  currentPosition: '',
  currentCompany: '',
  totalExperience: '',
  expectedSalary: '',
  noticePeriod: '',
  
  // Education
  highestEducation: '',
  instituteName: '',
  graduationYear: '',
  
  // Skills & Experience
  technicalSkills: '',
  relevantExperience: '',
  
  // Documents & Links
  resume: null,
  linkedinProfile: '',
  portfolioUrl: '',
  
  // Additional Information
  coverLetter: '',
  referralSource: '',
  
  // Consent
  agreedToTerms: false
});

export const formPlaceholders = {
  firstName: 'Enter your first name',
  lastName: 'Enter your last name',
  email: 'your.email@example.com',
  phone: '+91 12345 67890',
  location: 'City, State, Country',
  currentPosition: 'e.g., Frontend Developer',
  currentCompany: 'Company name',
  expectedSalary: 'e.g., ₹8-12 LPA',
  instituteName: 'Institution name',
  graduationYear: 'e.g., 2022',
  technicalSkills: 'e.g., React.js, TypeScript, Node.js, Python, AWS...',
  relevantExperience: 'Describe your relevant experience, projects, and achievements...',
  linkedinProfile: 'https://www.linkedin.com/in/yourprofile',
  portfolioUrl: 'https://github.com/yourusername or portfolio website',
  coverLetter: 'Tell us why you\'re interested in this role and what makes you a great fit...'
};
