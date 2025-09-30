import React from "react";

import { BlogCardData } from "@/utils/dummy/blog/BlogCardData";

import Link from "next/link";
import BlogCard from "@/components/UIComponent/BlogCard";


export const BlogPage = () => {
  const data = BlogCardData;
  
  return (
    <div className="mx-auto">
      

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
