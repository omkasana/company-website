import { legacyModernizationData } from "@/utils/dummy/legacyModernizationData";

// Use SimpleNavbar
import SimpleNavbar from "@/components/UIComponent/simple-navbar/SimpleNavbar";

//import Breadcrumb from "@/components/DynamicPage/sections/Breadcrumb";
import Hero from "@/components/DynamicPage/sections/Hero";
import Overview from "@/components/DynamicPage/sections/Overview";
import TechnologyGrid from "@/components/DynamicPage/sections/TechnologyGrid";
import ServiceFeatures from "@/components/DynamicPage/sections/ServiceFeatures";
import ProcessFlow from "@/components/DynamicPage/sections/ProcessFlow";
import GuideSection from "@/components/DynamicPage/sections/GuideSection";
import CaseStudiesCarousel from "@/components/DynamicPage/sections/CaseStudiesCarousel";
import InquiryForm from "@/components/DynamicPage/sections/InquiryForm";
import FAQ from "@/components/DynamicPage/sections/FAQ";
import RelatedBlogs from "@/components/DynamicPage/sections/RelatedBlogs";
import CallToAction from "@/components/DynamicPage/sections/CallToAction";
import Breadcrumb from "@/components/DynamicPage/sections/Breadcrumb";

const LegacyModernizationPage = () => {
  const data = legacyModernizationData;

  return (
    <>
      <div className="min-h-screen bg-white">
        
        <Hero data={data.hero} />
        <Overview data={data.overview} />
        <TechnologyGrid data={data.technologies} title="Technologies We Use" />
        <ServiceFeatures data={data.serviceFeatures} title="Our Services" />
        <ProcessFlow steps={data.processSteps} title="Our Process" />
        <GuideSection
          data={data.guideSection}
          comparisonTables={data.comparisonTables}
        />
        <CaseStudiesCarousel data={data.caseStudies} title="Success Stories" />
        <FAQ data={data.faq} title="FAQ" />
        <RelatedBlogs data={data.relatedBlogs} title="Related Articles" />
        <InquiryForm
          consultant={data.consultant}
          serviceTitle={data.hero.title}
        />
        <CallToAction data={data.cta} />
      </div>
    </>
  );
};

export default LegacyModernizationPage;
