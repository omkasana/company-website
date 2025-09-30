'use client';

import { JobDepartment, FilterOptions } from '@/types/jobs/jobs';
import { useState } from 'react';

interface JobsFilterSidebarProps {
  departments: JobDepartment[];
  departmentCounts: Array<{ department: JobDepartment; count: number }>;
  totalJobs: number;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  contactInfo: {
    message: string;
    linkedinText: string;
  };
}

export default function JobsFilterSidebar({
  departments,
  departmentCounts,
  totalJobs,
  filters,
  onFilterChange,
  contactInfo
}: JobsFilterSidebarProps) {
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery);

  const handleDepartmentClick = (departmentName: string) => {
    const newDepartment = filters.department === departmentName ? null : departmentName;
    onFilterChange({
      ...filters,
      department: newDepartment
    });
  };

  return (
    <div className="bg-white rounded-lg p-4 md:p-5 lg:p-5 shadow-sm border border-gray-100">
      
      {/* All Positions */}
      <div className="mb-3">
        <button
          onClick={() => handleDepartmentClick('all')}
          className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors duration-200 text-sm md:text-base lg:text-sm ${
            !filters.department
              ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <span>All positions</span>
          <span className={`text-xs md:text-sm lg:text-xs ${
            !filters.department ? 'text-blue-500' : 'text-gray-400'
          }`}>
            ({totalJobs})
          </span>
        </button>
      </div>

      {/* Department Categories */}
      <div className="space-y-1.5 mb-6">
        {departmentCounts.map(({ department, count }) => (
          <button
            key={department.id}
            onClick={() => handleDepartmentClick(department.name)}
            className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors duration-200 text-sm md:text-base lg:text-sm ${
              filters.department === department.name
                ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span>{department.displayName}</span>
            <span className={`text-xs md:text-sm lg:text-xs ${
              filters.department === department.name ? 'text-blue-500' : 'text-gray-400'
            }`}>
              ({count})
            </span>
          </button>
        ))}
      </div>

      {/* Contact Section */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs md:text-sm lg:text-xs text-gray-600 leading-relaxed mb-3">
          {contactInfo.message}
        </p>
        <button className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-xs md:text-sm lg:text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200">
          {contactInfo.linkedinText}
        </button>
      </div>

    </div>
  );
}
