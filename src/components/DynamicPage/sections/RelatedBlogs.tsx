import { RelatedBlog } from '@/types/microCategory';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

interface RelatedBlogsProps {
  data: RelatedBlog[];
  title?: string;
}

const RelatedBlogs = ({ data, title = "Related Articles" }: RelatedBlogsProps) => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Latest Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology
          </p>
        </div>
        
        {/* Blog Cards - Slim Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.map((blog) => (
            <Link
              key={blog.id}
              href={blog.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3 mr-1" />
                    {blog.category}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                {/* Read More */}
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Articles
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
