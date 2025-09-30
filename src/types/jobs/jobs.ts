export interface JobPosition {
  id: string;
  title: string;
  location: string[];
  workType: string[];
  description: string;
  department: string;
  datePosted: string;
  requirements?: string[];
  responsibilities?: string[];
  isActive: boolean;
  priority: number;
}

export interface JobDepartment {
  id: string;
  name: string;
  displayName: string;
  description?: string;
}

export interface FilterOptions {
  department: string | null;
  searchQuery: string;
}

export interface JobsPageData {
  departments: JobDepartment[];
  positions: JobPosition[];
  contactInfo: {
    message: string;
    linkedinText: string;
  };
}
