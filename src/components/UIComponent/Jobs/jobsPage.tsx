'use client';

import { JobsPageData, FilterOptions } from '@/types/jobs/jobs';
import { JobsManager } from '@/utils/config/jobsUtils';
import { useState, useMemo, useCallback } from 'react';
import JobsFilterSidebar from '@/components/UIComponent/Jobs/JobsFilterSidebar';
import JobCard from '@/components/UIComponent/Jobs/JobCard';

interface JobsPageProps {
  data?: JobsPageData;
}

export default function JobsPage({ data }: JobsPageProps) {
  // Early return if data is not available
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading job positions...</p>
        </div>
      </div>
    );
  }

  return <JobsPageContent data={data} />;
}

function JobsPageContent({ data }: { data: JobsPageData }) {
  // State management
  const [filters, setFilters] = useState<FilterOptions>({
    department: null,
    searchQuery: ''
  });

  // Memoized calculations with safety checks
  const filteredJobs = useMemo(() => {
    try {
      if (!data?.positions || !Array.isArray(data.positions)) {
        return [];
      }
      
      return JobsManager.filterJobs(data.positions, filters, data.departments || []);
    } catch (error) {
      console.error('Error filtering jobs:', error);
      return [];
    }
  }, [data?.positions, data?.departments, filters]);

  const departmentCounts = useMemo(() => {
    try {
      if (!data?.positions || !data?.departments) {
        return [];
      }
      return JobsManager.getDepartmentCounts(data.positions, data.departments);
    } catch (error) {
      console.error('Error calculating department counts:', error);
      return [];
    }
  }, [data?.positions, data?.departments]);

  const totalActiveJobs = useMemo(() => {
    try {
      if (!data?.positions || !Array.isArray(data.positions)) {
        return 0;
      }
      return data.positions.filter(job => job?.isActive).length;
    } catch (error) {
      console.error('Error calculating total active jobs:', error);
      return 0;
    }
  }, [data?.positions]);

  // Event handlers
  const handleFilterChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Page Header - Dynamic Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            We have {totalActiveJobs} open positions now!
          </h1>
        </div>

        {/* Different grid layouts for tablet vs desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          
          {/* Sidebar - Wider on Tablet (1/3), Normal on Desktop (1/4) */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="md:sticky md:top-24">
              <JobsFilterSidebar
                departments={data.departments || []}
                departmentCounts={departmentCounts}
                totalJobs={totalActiveJobs}
                filters={filters}
                onFilterChange={handleFilterChange}
                contactInfo={data.contactInfo || {
                  message: "Contact us for more information",
                  linkedinText: "Get in touch"
                }}
              />
            </div>
          </div>

          {/* Main Content - Narrower on Tablet (2/3), Normal on Desktop (3/4) */}
          <div className="md:col-span-2 lg:col-span-3">
            
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-lg font-medium text-gray-900">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
              {filters.searchQuery && (
                <p className="text-sm text-gray-600">
                  Showing results for "{filters.searchQuery}"
                </p>
              )}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="mb-4">
                      <svg className="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No positions found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Try browsing all positions or contact us directly.
                    </p>
                    <button
                      onClick={() => handleFilterChange({
                        department: null,
                        searchQuery: ''
                      })}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Show All Positions
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
