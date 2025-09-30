import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogProps } from "@/types/Blog";

interface BlogCardProps {
  blog: BlogProps;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const blogSlug = blog.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link key={blog.id} href={`/blog/${blogSlug}`} passHref>
      <article className="group rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer flex flex-col h-full hover:scale-105 hover:shadow-xl border border-gray-100">
        {/* Date */}
        <div className="px-4 pt-4">
          <span className="text-sm text-gray-500 font-medium">{blog.date}</span>
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>

          {/* Author Section */}
          <div className="flex blogs-center gap-3 mt-auto pt-4 border-t border-gray-100">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={blog.userImg}
                alt={`${blog.author}'s profile picture`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {blog.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
