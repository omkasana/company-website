import { LucideIcon, User, Briefcase, GraduationCap, FileText, LinkIcon, MessageSquare } from 'lucide-react';

export interface FormSection {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
}

export const formSections: FormSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    icon: User,
    description: 'Basic contact and personal details'
  },
  {
    id: 'professional',
    title: 'Professional Information',
    icon: Briefcase,
    description: 'Current role and work experience'
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Educational background and qualifications'
  },
  {
    id: 'skills',
    title: 'Skills & Experience',
    icon: FileText,
    description: 'Technical skills and relevant experience'
  },
  {
    id: 'documents',
    title: 'Documents & Links',
    icon: LinkIcon,
    description: 'Resume, portfolio, and professional profiles'
  },
  {
    id: 'additional',
    title: 'Additional Information',
    icon: MessageSquare,
    description: 'Cover letter and additional details'
  }
];

export const formValidationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  url: 'Please enter a valid URL',
  fileSize: 'File size should not exceed 5MB',
  fileType: 'Only PDF, DOC, and DOCX files are allowed'
};

export const fileUploadConfig = {
  maxSize: 5 * 1024 * 1024, // 5MB in bytes
  allowedTypes: ['.pdf', '.doc', '.docx'],
  allowedMimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
};
