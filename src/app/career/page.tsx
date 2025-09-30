import CareerPageVideo from "@/components/UIComponent/careerPage/CareerPageVideo";
import { careerPageVideoData } from "@/utils/dummy/careerData/careerPageVideo";
import WorkAtEscale from "@/components/UIComponent/careerPage/workAtEscale";
import { workAtEscaleData } from "@/utils/dummy/careerData/workAtEscaleData";
import LifeAtEscale from "@/components/UIComponent/careerPage/LifeAtEscale";
import { lifeAtEscaleData } from "@/utils/dummy/careerData/lifeAtEscale"; 
import EscaleGalleryCarousel from "@/components/UIComponent/careerPage/EscaleGalleryCarousel"; 
import { escaleGalleryCarouselData } from "@/utils/dummy/careerData/escaleGalleryCarouselData";
import BenefitsSection from "@/components/UIComponent/careerPage/BenefitsSection"; 
import { benefitsSectionData } from "@/utils/dummy/careerData/benefitsSectionData"; 
import CultureCarousel from "@/components/UIComponent/careerPage/CultureCarousel";
import { cultureCarouselData } from "@/utils/dummy/careerData/cultureCarouselData";
import FounderMessage from '@/components/UIComponent/careerPage/FounderMessage';
import { founderMessageData } from '@/utils/dummy/careerData/founderMessageData';
import ApplyNowCta from '@/components/UIComponent/careerPage/AplyNowCta';
import { applyNowCtaData } from '@/utils/dummy/careerData/applyNowCtaData';


export default function CareersPage() {
  return (
    <main>
      <CareerPageVideo data={careerPageVideoData} />
      <WorkAtEscale data={workAtEscaleData} />
      <LifeAtEscale data={lifeAtEscaleData} /> 
      <EscaleGalleryCarousel data={escaleGalleryCarouselData} /> 
      <BenefitsSection data={benefitsSectionData} />
      <CultureCarousel data={cultureCarouselData}/>
      <FounderMessage data={founderMessageData} />
      <ApplyNowCta data={applyNowCtaData} />
    </main>
  );
}
