import React from "react";

import { BlogCardData } from "@/utils/dummy/blog/BlogCardData";

import Link from "next/link";
import Image from "next/image";

import { homepageSlides } from "@/utils/dummy/banner/HompageSlider";
import Banner from "@/components/UIComponent/Banner";
import BlogCard from "@/components/UIComponent/BlogCard";


export const BlogPage = () => {
  const data = BlogCardData;
  
  return (
    <div className="mx-auto">
      <Banner banners={homepageSlides} height="half"/>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights and Innovations</h1>
        <p className="text-lg text-gray-600">Latest articles and updates from our team</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 p-8">
        {data.map((item, index) => {
          const blogSlug = item.title.toLowerCase().replace(/\s+/g, "-");

            return (
            <Link href={`/blog/${blogSlug}`} key={index}>
              <BlogCard blog={item}/>
            </Link>
            );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
