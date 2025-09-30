"use client";

import { JobDetailData } from "@/types/jobs/jobDetail";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

interface JobDetailPageProps {
  data: JobDetailData;
}

export default function JobDetailPage({ data }: JobDetailPageProps) {
  const params = useParams();
  const jobId = params?.id as string;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Job Listings
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                {data.title}
              </h1>
              
              <div className="space-y-1 text-gray-600">
                <p className="text-sm md:text-base">{data.location}</p>
                <p className="text-sm md:text-base">{data.department} / {data.workType}</p>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <Link
                href={`/jobs/${jobId}/apply`}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 transition-colors duration-200 block text-center"
              >
                APPLY FOR THIS JOB
              </Link>
            </div>
          </div>
        </div>

        {/* Job Content */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          
          {/* About Us Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-3">
              About Us:
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.aboutUs}
            </p>
          </section>

          {/* About the Role Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-3">
              About the Role:-
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.aboutRole}
            </p>
          </section>

          {/* Key Responsibilities Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4">
              Key Responsibilities
            </h2>
            <div className="space-y-2">
              {data.keyResponsibilities.map((responsibility, index) => (
                <p key={index} className="text-gray-600 text-sm leading-relaxed">
                  {index + 1}) {responsibility}
                </p>
              ))}
            </div>
          </section>

          {/* Qualifications Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4">
              Qualifications:
            </h2>
            <div className="space-y-2">
              {data.qualifications.map((qualification, index) => (
                <p key={index} className="text-gray-600 text-sm leading-relaxed">
                  {index + 1}. {qualification}
                </p>
              ))}
            </div>
          </section>

          {/* Skills for Success Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4">
              Skills that will help you succeed in this role:
            </h2>
            <div className="space-y-2">
              {data.skillsForSuccess.map((skill, index) => (
                <p key={index} className="text-gray-600 text-sm leading-relaxed">
                  {index + 1}. {skill}
                </p>
              ))}
            </div>
          </section>

          {/* Why Join Us Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-3">
              Why join us :
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.whyJoinUs}
            </p>
          </section>

          {/* Compensation Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-black mb-3">
              Compensation:
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.compensation}
            </p>
          </section>

          {/* Bottom Apply Button */}
          <div className="flex justify-center pt-8 border-t border-gray-200">
            <Link
              href={`/jobs/${jobId}/apply`}
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 transition-colors duration-200"
            >
              APPLY FOR THIS JOB
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
