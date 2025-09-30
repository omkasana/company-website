import Banner from "@/components/UIComponent/Banner";
import { homepageSlides } from "@/utils/dummy/banner/HompageSlider";
import BrandShowcase from "@/components/UIComponent/BrandShowcase";
import CaseStudies from "@/components/UIComponent/CaseStudies";
import Awards from "@/components/UIComponent/Awards";
import Testimonials from "@/components/UIComponent/Testimonials";
import IntelligentTech from "@/components/UIComponent/IntelligentTech";
import Industries from "@/components/UIComponent/Industries";
import IndustryExpertise from "@/components/UIComponent/IndustryExpertise";
import FeaturedEvents from "@/components/UIComponent/FeaturedEvents";
import LatestInsights from "@/components/UIComponent/LatestInsights";

export default function Home() {
  return (
    <>
      <Banner banners={homepageSlides} bottomTab={true} />
      <BrandShowcase />
      <CaseStudies />
      <IntelligentTech />

      <Awards />

      <Testimonials />

      <Industries />

      <IndustryExpertise />

      <FeaturedEvents />

      <LatestInsights />
    </>
  );
}
