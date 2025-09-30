"use client";

import Link from "next/link";
import { awardsData } from "@/utils/dummy/AawardsData";

const Awards = () => {
  const { sectionTitle, sectionDescription, awards } = awardsData;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <Link
              key={award.id}
              href={award.link}
              className="block group"
            >
              <div 
                className="rounded-2xl p-8 h-80 flex flex-col justify-between transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl cursor-pointer"
                style={{ backgroundColor: award.backgroundColor }}
              >
                {/* Logo Section */}
                <div className="flex-1 flex items-center justify-center">
                  {award.logoComponent}
                </div>

                {/* Award Details */}
                <div className="mt-8">
                  {/* Trophy and Title */}
                  <div className="flex items-start mb-3">
                    <span className="text-lg mr-2 mt-1">🏆</span>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {award.title}
                    </h3>
                  </div>

                  {/* Years */}
                  <div className="flex gap-3">
                    {award.years.map((year, index) => (
                      <span
                        key={index}
                        className="text-blue-200 text-sm font-semibold bg-white/10 px-2 py-1 rounded-full"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
