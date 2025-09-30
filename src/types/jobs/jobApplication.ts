export interface JobApplicationData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  
  // Professional Information
  currentPosition: string;
  currentCompany: string;
  totalExperience: string;
  expectedSalary: string;
  noticePeriod: string;
  
  // Education
  highestEducation: string;
  instituteName: string;
  graduationYear: string;
  
  // Skills & Experience
  technicalSkills: string;
  relevantExperience: string;
  
  // Documents & Links
  resume: File | null;
  linkedinProfile: string;
  portfolioUrl: string;
  
  // Additional Information
  coverLetter: string;
  referralSource: string;
  
  // Consent
  agreedToTerms: boolean;
}

export interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
  onSubmit: (data: JobApplicationData) => void;
}
