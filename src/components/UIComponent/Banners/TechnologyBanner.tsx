
import Image from 'next/image';
import { BannerContent } from '@/types/technology/technology';

interface TechnologyBannerProps {
  data: BannerContent;
}

const TechnologyBanner: React.FC<TechnologyBannerProps> = ({ data }) => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.backgroundImage}
          alt="Technology Banner"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px]">
        <div className="flex items-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px] py-12 md:py-16 lg:py-20">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <h1 className="text-white font-bold leading-tight mb-2 md:mb-3 text-3xl md:text-4xl lg:text-6xl">
              {data.mainTitle}
            </h1>
            <h2 className="text-white font-bold leading-tight text-3xl md:text-4xl lg:text-6xl">
              {data.subTitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyBanner;
