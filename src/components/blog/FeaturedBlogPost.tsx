import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface FeaturedBlogPostProps {
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const FeaturedBlogPost: React.FC<FeaturedBlogPostProps> = ({
  title,
  excerpt,
  coverImage,
  category,
  author,
  date,
  readTime,
  slug,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-2 h-64 lg:h-auto">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                {category}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {date}
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold mr-3">
                {author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{author}</p>
                <p className="text-xs text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {readTime}
                </p>
              </div>
            </div>
            <Link to={`/blog/${slug}`} className="flex items-center text-primary font-medium hover:underline">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;