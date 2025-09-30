import { JobPosition, FilterOptions, JobDepartment } from '@/types/jobs/jobs';

export class JobsManager {
  // Simplified filter jobs function
  static filterJobs(
    jobs: JobPosition[] = [], 
    filters: FilterOptions,
    departments: JobDepartment[] = []
  ): JobPosition[] {
    try {
      if (!Array.isArray(jobs)) {
        console.warn('Jobs is not an array:', jobs);
        return [];
      }

      return jobs.filter(job => {
        // Only show active jobs
        if (!job?.isActive) return false;

        // Department filter
        if (filters.department && filters.department !== 'all') {
          const dept = departments.find(d => d?.name === filters.department);
          if (!dept || !job.department || job.department.toLowerCase() !== dept.name.toLowerCase()) {
            return false;
          }
        }

        // Search query filter
        if (filters.searchQuery && filters.searchQuery.trim()) {
          const query = filters.searchQuery.toLowerCase();
          const searchFields = [
            job.title || '',
            job.description || '',
            job.department || '',
            ...(job.location || []),
            ...(job.workType || [])
          ].join(' ').toLowerCase();

          if (!searchFields.includes(query)) {
            return false;
          }
        }

        return true;
      });
    } catch (error) {
      console.error('Error filtering jobs:', error);
      return [];
    }
  }

  // Get department counts with safety checks
  static getDepartmentCounts(
    jobs: JobPosition[] = [], 
    departments: JobDepartment[] = []
  ): Array<{ department: JobDepartment; count: number }> {
    try {
      if (!Array.isArray(jobs) || !Array.isArray(departments)) {
        return [];
      }

      const activeJobs = jobs.filter(job => job?.isActive);
      
      return departments.map(dept => ({
        department: dept,
        count: activeJobs.filter(job => 
          job?.department && dept?.name && 
          job.department.toLowerCase() === dept.name.toLowerCase()
        ).length
      })).filter(item => item.count > 0);
    } catch (error) {
      console.error('Error calculating department counts:', error);
      return [];
    }
  }
}
