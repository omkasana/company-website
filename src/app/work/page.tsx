import React from "react";
import { WorkCardData } from "@/utils/dummy/work/WorkCardData";
import Image from "next/image";
import Link from "next/link";

import { homepageSlides } from "@/utils/dummy/banner/HompageSlider";
import Banner from "@/components/UIComponent/Banner";

export const WorkPage = () => {
  const data = WorkCardData.flat();
  return (
    <>
    <Banner banners={homepageSlides} height="half"/>

      <div className="min-h-screen mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((item, index) => {
          const work = item.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl p-4"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              <div className="relative overflow-hidden rounded-xl w-full max-w-[400px] aspect-[4/5] bg-gradient1">
                {/* Zoomable image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl transition-transform duration-900 ease-in-out hover:scale-115"
                />

                <button className=" absolute bottom-4 ml-2 px-4 sm:px-6 py-2 text-white border rounded-3xl cursor-pointer hover:bg-white hover:text-black border-white text-sm shadow-md transition z-10">
                  {item.btn1}
                </button>
                <button className=" absolute bottom-4 ml-[130px] px-4 sm:px-6 py-2 text-white border rounded-3xl cursor-pointer hover:bg-white hover:text-black border-white text-sm shadow-md transition z-10">
                  {item.btn2}
                </button>
              </div>

              <div className="flex justify-evenly items-center mt-3 gap-4">
                <div className="flex-1 text-center">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[350px] mx-auto">
                    {item.des}
                  </p>
                </div>

                <div className="flex-1 flex justify-center">
                  <Link
                    key={index}
                    href={`/work/${work}`}
                    passHref
                    className="cursor-pointer"
                  >
                    <button className="px-5 py-2 bg-gradient-to-r  from-black to-gray-700 text-white rounded-2xl text-sm sm:text-base shadow-md hover:from-gray-700 hover:to-black transition">
                      {item.btn3}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkPage;
