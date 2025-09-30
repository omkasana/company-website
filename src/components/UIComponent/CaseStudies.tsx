"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/utils/dummy/CaseStudies/Casestudies";

const CaseStudies = () => {
  const {
    sectionLabel,
    title,
    description,
    seeAllText,
    seeAllLink,
    caseStudies,
  } = caseStudiesData;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            {/* Section Label */}
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {sectionLabel}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* See All Link */}
          <Link
            href={seeAllLink}
            className="hidden md:flex items-center text-[#dc2626] font-medium hover:text-[#b91c1c] transition-colors duration-200 group whitespace-nowrap"
          >
            {seeAllText}
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Pure Image */}
                <div className="relative h-64 lg:h-96">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Case Study Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                    {caseStudy.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Know More Button */}
                  <Link
                    href={caseStudy.link}
                    className="inline-flex items-center px-6 py-3 bg-[#dc2626] text-white font-semibold rounded-lg hover:bg-[#b91c1c] transition-all duration-300 group shadow-lg self-start"
                  >
                    Know More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href={seeAllLink}
            className="inline-flex items-center text-[#dc2626] font-medium hover:text-[#b91c1c] transition-colors duration-200 group"
          >
            {seeAllText}
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
