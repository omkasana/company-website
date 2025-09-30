'use client';

import { JobPosition } from '@/types/jobs/jobs';
import Link from 'next/link';

interface JobCardProps {
  job: JobPosition;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      
      {/* Job Title */}
      <h2 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight">
        {job.title}
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.location.map((location, index) => (
          <span 
            key={`location-${index}`} 
            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
          >
            {location}
          </span>
        ))}
        {job.workType.map((type, index) => (
          <span 
            key={`worktype-${index}`} 
            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
          >
            {type}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {job.description}
      </p>

      {/* See Positions Button */}
      <div className="flex justify-end">
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          See positions
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
