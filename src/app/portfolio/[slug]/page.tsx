"use client";

import { useParams } from "next/navigation";
import React from "react";


import Banner from "@/components/UIComponent/Banner";
import { portfolioSlides } from "@/utils/dummy/banner/PortfolioSlider";
const PortfolioDetail = () => {
 

  return (
    <>
      <Banner banners={portfolioSlides} height="half"/>

      <div>
        {/* Project Overview */}
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="pt-8 sm:pt-10 pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left">
              Project Overview
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-4">
              Intwo, a leading IT company with a global footprint across Europe,
              Asia, and the USA, provides a suite of services, including
              cybersecurity, Azure solutions, consulting, and managed services.
              Following a strategic merger, Intwo undertook a significant domain
              migration to unify its brand presence and improve operational
              efficiency. Recognizing the importance of maintaining its online
              visibility, Intwo aimed to regain its previous keyword rankings
              swiftly to optimize organic lead generation.
            </p>
          </div>
        </div>

        {/* Challenges */}
        <div
          className="pt-8 sm:pt-10 pb-8 sm:pb-10"
          style={{
            background: "linear-gradient(6deg, #4E004A 1.12%, #010042 100%)",
          }}
        >
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left">
                The Challenges
              </h1>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl pt-4 leading-relaxed space-y-3 arrow">
                <li>
                  <strong>Loss of Keyword Rankings:</strong> The migration to a
                  new domain risked a drop in organic search traffic and
                  visibility.
                </li>
                <li>
                  <strong>Brand Consistency:</strong> Ensuring that the merged
                  brand retained its identity and recognition while transitioning
                  to a new domain.
                </li>
                <li>
                  <strong>Technical SEO Issues:</strong> Potential challenges in
                  redirecting URLs, preserving link equity, and maintaining site
                  performance post-migration.
                </li>
                <li>
                  <strong>Time Sensitivity:</strong> The urgency to regain
                  rankings was crucial for lead generation, with a need to
                  mitigate any loss of traffic quickly.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="pt-8 sm:pt-10 pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-black">
              Solution
            </h1>
            <ul className="text-sm sm:text-base md:text-lg lg:text-xl pt-4 leading-relaxed space-y-3 arrow">
              <li>
                <strong>Comprehensive SEO Audit:</strong> Conducted a thorough
                audit of the existing site to identify high-performing keywords
                and critical pages.
              </li>
              <li>
                <strong>Strategic URL Redirection:</strong> Implemented 301
                redirects from the old domain to the new domain, ensuring that
                all traffic and link equity were preserved.
              </li>
              <li>
                <strong>Content Optimization:</strong> Reviewed and optimized
                content on the new domain to align with target keywords and
                improve user experience.
              </li>
              <li>
                <strong>Monitoring and Analytics:</strong> Set up robust
                tracking mechanisms to monitor traffic, keyword rankings, and
                user engagement metrics to quickly identify and address any
                issues.
              </li>
              <li>
                <strong>Link Building Campaign:</strong> Launched a targeted
                outreach program to regain backlinks and improve domain
                authority.
              </li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div
          className="pt-8 sm:pt-10 pb-8 sm:pb-10"
          style={{
            background: "linear-gradient(6deg, #4E004A 1.12%, #010042 100%)",
          }}
        >
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left">
                Results
              </h1>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl pt-4 leading-relaxed space-y-3 arrow">
                <li>
                  <strong>Rapid Recovery of Keyword Rankings:</strong> Within
                  three months post-migration, Intwo saw a recovery of over 88%
                  of its previous keyword rankings.
                </li>
                <li>
                  <strong>Increased Organic Traffic:</strong> Organic traffic to
                  the new domain grew by 151% within 5.4 months, surpassing
                  pre-migration levels.
                </li>
                <li>
                  <strong>Improved Brand Visibility:</strong> Enhanced online
                  presence resulted in increased inquiries and leads,
                  contributing to a 34% rise in conversion rates.
                </li>
                <li>
                  <strong>Positive User Feedback:</strong> The new site’s user
                  experience improvements led to longer average session
                  durations and reduced bounce rates.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="pt-8 sm:pt-10 pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-black">
              Conclusion
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-4">
              The domain migration following Intwo’s merger presented
              significant challenges, but with a well-planned SEO strategy, the
              company successfully restored its keyword rankings and enhanced
              its online visibility. This case study highlights the importance
              of proactive SEO measures during major business changes and serves
              as a testament to Intwo’s commitment to maintaining its position
              as a leader in the IT and cybersecurity space. Through effective
              planning and execution, Intwo not only recovered but also improved
              its organic lead generation capabilities, positioning itself for
              future growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
