import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Calendar, User, Clock, ArrowRight, Search, Tag, Filter } from 'lucide-react';

// Mock blog data - in a real application, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Future Is Hybrid: Why AI Alone Can\'t Replace Human Customer Service',
    excerpt: 'In the age of instant gratification, businesses are increasingly turning to artificial intelligence (AI) to meet rising customer expectations.',
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Trends',
    date: 'May 15, 2025',
    slug: 'future-is-hybrid'
  },
  {
    id: 2,
    title: 'How AI Is Redefining First Response Time in Live Chat',
    excerpt: 'In the digital age, customers expect immediate answers. A long response time can cost you a sale—or worse, a customer. That\'s where AI comes in.',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Best Practices',
    date: 'May 8, 2025',
    readTime: '4 min read',
    slug: 'ai-redefining-response-time'
  },
  {
    id: 3,
    title: 'Beyond FAQs: 5 Advanced Ways AI Can Support Your Customer Success Team',
    excerpt: 'Think AI is just for answering simple questions? Think again. Today\'s AI tools go well beyond basic support.',
    coverImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Customer Experience',
    date: 'April 29, 2025',
    readTime: '6 min read',
    slug: 'beyond-faqs-ai-support'
  },
  {
    id: 4,
    title: 'AI in Customer Support: Cost-Saving Tool or Customer Experience Booster?',
    excerpt: 'Many companies adopt AI in customer support to cut costs—but that\'s just scratching the surface. The real opportunity lies in improving customer experience.',
    coverImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Case Studies',
    date: 'April 22, 2025',
    readTime: '7 min read',
    slug: 'ai-support-cost-vs-experience'
  },
  {
    id: 5,
    title: 'Training the AI + Human Duo: Tips for Aligning Agents and Bots',
    excerpt: 'You\'ve added a chatbot to your site. Great. But is your team ready to work with it? The key to success isn\'t just smart AI—it\'s a smart team.',
    coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Analytics',
    date: 'April 15, 2025',
    readTime: '5 min read',
    slug: 'training-ai-human-duo'
  },
  {
    id: 6,
    title: 'AI-Powered Chat: What Customers Actually Think (And Why That Matters)',
    excerpt: 'AI is everywhere in customer support—but do customers like it? Their opinion might surprise you.',
    coverImage: 'https://images.pexels.com/photos/8438969/pexels-photo-8438969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Ethics',
    date: 'April 8, 2025',
    readTime: '6 min read',
    slug: 'ai-chat-customer-perspective'
  }
];

const categories = [
  'All',
  'AI Trends',
  'Best Practices',
  'Customer Experience',
  'Case Studies',
  'Analytics',
  'Ethics'
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    document.title = 'Blog | HookTXT';
  }, []);

  useEffect(() => {
    let result = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(search) || 
          post.excerpt.toLowerCase().includes(search) ||
          post.category.toLowerCase().includes(search)
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchTerm]);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              The HookTXT <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Insights, trends, and best practices in conversational AI and customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <Section background="white" className="pt-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 h-64 lg:h-auto">
                <img
                  src={blogPosts[0].coverImage}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  {blogPosts[0].readTime && (
                    <p className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blogPosts[0].readTime}
                    </p>
                  )}
                  <Link to={`/blog/${blogPosts[0].slug}`} className="flex items-center text-primary font-medium hover:underline">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  {post.readTime && (
                    <p className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </p>
                  )}
                  <Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-secondary bg-opacity-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-700 mb-6">
              Get the latest insights, articles, and updates on conversational AI delivered directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

      </Section>

      {/* Pagination */}
      <Section background="white" className="py-8">
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm">
            <a href="#" className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="px-4 py-2 border-t border-b border-gray-300 text-sm font-medium text-white bg-primary">
              1
            </a>
            <a href="#" className="px-4 py-2 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-4 py-2 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              3
            </a>
            <a href="#" className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </Section>
    </>
  );
};

export default BlogPage;