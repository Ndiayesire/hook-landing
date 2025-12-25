/**
 * BlogPage - Lumea-inspired design
 *
 * Blog listing with featured post, card grid,
 * and newsletter signup.
 */

import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Send } from 'lucide-react';

const blogPosts = [
  {
    id: 7,
    title: 'AI is Flipping Car Shopping on Its Head',
    excerpt: 'A new survey by Cars.com shows how much Artificial Intelligence is starting to shape how people buy cars. According to their data, 44% of consumers now use AI-powered tools to help them shop.',
    coverImage: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI Trends',
    date: 'November 27, 2025',
    readTime: '7 min read',
    slug: 'ai-flipping-car-shopping'
  },
  {
    id: 1,
    title: 'The Future Is Hybrid: Why AI Alone Can\'t Replace Human Customer Service',
    excerpt: 'In the age of instant gratification, businesses are increasingly turning to artificial intelligence (AI) to meet rising customer expectations.',
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI Trends',
    date: 'May 15, 2025',
    readTime: '5 min read',
    slug: 'future-is-hybrid'
  },
  {
    id: 2,
    title: 'How AI Is Redefining First Response Time in Live Chat',
    excerpt: 'In the digital age, customers expect immediate answers. A long response time can cost you a sale--or worse, a customer.',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Best Practices',
    date: 'May 8, 2025',
    readTime: '4 min read',
    slug: 'ai-redefining-response-time'
  },
  {
    id: 3,
    title: 'Beyond FAQs: 5 Advanced Ways AI Can Support Your Customer Success Team',
    excerpt: 'Think AI is just for answering simple questions? Think again. Today\'s AI tools go well beyond basic support.',
    coverImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Customer Experience',
    date: 'April 29, 2025',
    readTime: '6 min read',
    slug: 'beyond-faqs-ai-support'
  },
  {
    id: 4,
    title: 'AI in Customer Support: Cost-Saving Tool or Customer Experience Booster?',
    excerpt: 'Many companies adopt AI in customer support to cut costs--but that\'s just scratching the surface. The real opportunity lies in improving customer experience.',
    coverImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Case Studies',
    date: 'April 22, 2025',
    readTime: '7 min read',
    slug: 'ai-support-cost-vs-experience'
  },
  {
    id: 5,
    title: 'Training the AI + Human Duo: Tips for Aligning Agents and Bots',
    excerpt: 'You\'ve added a chatbot to your site. Great. But is your team ready to work with it? The key to success isn\'t just smart AI--it\'s a smart team.',
    coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Analytics',
    date: 'April 15, 2025',
    readTime: '5 min read',
    slug: 'training-ai-human-duo'
  },
  {
    id: 6,
    title: 'AI-Powered Chat: What Customers Actually Think (And Why That Matters)',
    excerpt: 'AI is everywhere in customer support--but do customers like it? Their opinion might surprise you.',
    coverImage: 'https://images.pexels.com/photos/8438969/pexels-photo-8438969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ethics',
    date: 'April 8, 2025',
    readTime: '6 min read',
    slug: 'ai-chat-customer-perspective'
  }
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="HookTXT Blog | AI Insights & Customer Experience Best Practices"
        description="Expert insights on conversational AI, multi-agent systems, customer experience optimization, and business automation."
        canonicalUrl="https://hooktxt.com/blog"
      />

      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4 mr-1" />
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6">
              The HookTXT <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Insights, trends, and best practices in conversational AI and customer experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-white rounded-3xl border border-neutral-100 overflow-hidden hover:shadow-bento transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center text-neutral-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                      </div>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                      </Link>
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      {featuredPost.readTime && (
                        <span className="flex items-center text-sm text-neutral-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                      )}
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-bento transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-sm flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {post.readTime && (
                      <span className="text-xs text-neutral-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    )}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl border border-neutral-100 p-8 lg:p-12 text-center shadow-bento">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-neutral-600 mb-8">
                Get the latest insights, articles, and updates on conversational AI delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
