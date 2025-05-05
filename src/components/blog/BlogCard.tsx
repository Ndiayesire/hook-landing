import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  coverImage,
  category,
  author,
  date,
  readTime,
  slug,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col ${className}`}>
      <div className="h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-xs font-semibold rounded-full">
            {category}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 text-sm flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold mr-2">
              {author.charAt(0)}
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {readTime}
            </div>
          </div>
          <Link to={`/blog/${slug}`} className="text-primary text-sm font-medium hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;