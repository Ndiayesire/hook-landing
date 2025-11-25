import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ArticleSchema from '../components/common/ArticleSchema';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, MessageCircle, Heart, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock blog post data - would come from an API in a real application
const blogPosts = [
  {
    id: 1,
    title: 'The Future Is Hybrid: Why AI Alone Can\'t Replace Human Customer Service',
    content: `
      <p>In the age of instant gratification, businesses are increasingly turning to artificial intelligence (AI) to meet rising customer expectations. Chatbots, virtual assistants, and automated ticketing systems are now staples of modern customer service. But while AI can handle a broad array of tasks quickly and efficiently, it still lacks one essential ingredient: human empathy.</p>
      
      <h2>Why AI Isn't Enough</h2>
      <p>AI is exceptional at handling structured queries, retrieving data, and managing high volumes of customer inquiries. But when conversations go off-script—when emotions run high or when problems become complex—AI struggles. Customers notice when they're speaking with a bot, especially if the responses lack nuance or empathy.</p>
      
      <h2>The Human Factor</h2>
      <p>Human agents bring emotional intelligence, context awareness, and critical thinking. They can build rapport, understand sentiment, and resolve issues that fall outside the scope of automated systems. In high-stakes industries—healthcare, finance, legal—this human touch is not optional.</p>
      
      <h2>The Ideal Model: AI + Human</h2>
      <p>The most effective support teams use AI to handle the repetitive and transactional, freeing human agents to tackle complex and sensitive issues. AI assists by triaging chats, suggesting responses, or providing relevant knowledge base articles in real time. When escalation is required, the transition to a human agent should be seamless.</p>
      
      <h2>Key Takeaway</h2>
      <p>AI should not replace humans but empower them. Businesses that strike the right balance between automation and human support will see the greatest returns in efficiency, customer satisfaction, and brand loyalty.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Trends',
    date: 'May 15, 2025',
    readTime: '5 min read',
    slug: 'future-is-hybrid',
    relatedPosts: [2, 3, 5]
  },
  {
    id: 2,
    title: 'How AI Is Redefining First Response Time in Live Chat',
    content: `
      <h2>Speed Is the New Standard</h2>
      <p>First response time (FRT) is a critical metric in customer service. The faster your team can acknowledge a customer, the better the experience. AI chatbots are available 24/7 and can greet users instantly, even when your team is offline.</p>
      
      <h2>The Impact of Instant Responses</h2>
      <p>An AI chatbot can start the conversation, qualify the request, and even solve basic issues without human intervention. Even if the issue requires escalation, the bot can collect important context so the human agent is better prepared.</p>
      
      <h2>Reducing Workload, Not Replacing Staff</h2>
      <p>Faster first response doesn't mean cutting human jobs. It means your team can focus on delivering deeper support while AI handles the initial triage and common queries. It's about augmenting your team, not replacing it.</p>
      
      <h2>Real-World Results</h2>
      <p>Companies using AI-enhanced live chat report FRT reductions of over 70%—without sacrificing customer satisfaction. When paired with a human agent, response times drop while resolution quality remains high.</p>
      
      <h2>Key Takeaway</h2>
      <p>AI helps you be there the moment a customer needs you. Fast, helpful, and scalable.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Best Practices',
    date: 'May 8, 2025',
    readTime: '4 min read',
    slug: 'ai-redefining-response-time',
    relatedPosts: [1, 3, 6]
  },
  {
    id: 3,
    title: 'Beyond FAQs: 5 Advanced Ways AI Can Support Your Customer Success Team',
    content: `
      <h2>1. Personalized Onboarding</h2>
      <p>AI can guide new customers through tailored onboarding experiences, dynamically adapting based on product usage and user behavior. It ensures consistency while freeing your team from repetitive walkthroughs.</p>
      
      <h2>2. Sentiment Analysis</h2>
      <p>AI tools can detect tone and emotional cues in real-time chat, helping agents identify frustrated users and prioritize responses. This enables proactive service rather than reactive support.</p>
      
      <h2>3. Smart Follow-Ups</h2>
      <p>AI can automate follow-ups with personalized messages based on chat history, product activity, or unresolved issues—ensuring no customer is forgotten.</p>
      
      <h2>4. Internal Coaching Tools</h2>
      <p>AI can analyze agent interactions and provide feedback on tone, resolution time, and compliance. It's like having a real-time coach for every agent.</p>
      
      <h2>5. Lead Qualification</h2>
      <p>Customer success is closely tied to growth. AI can help identify upsell and cross-sell opportunities during support conversations by recognizing buying signals.</p>
      
      <h2>Key Takeaway</h2>
      <p>Today's AI tools are strategic partners—not just automation. Use them to deepen customer relationships, not just deflect tickets.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Customer Experience',
    date: 'April 29, 2025',
    readTime: '6 min read',
    slug: 'beyond-faqs-ai-support',
    relatedPosts: [1, 2, 4]
  },
  {
    id: 4,
    title: 'AI in Customer Support: Cost-Saving Tool or Customer Experience Booster?',
    content: `
      <h2>The Cost-Cutting Myth</h2>
      <p>Yes, AI reduces the need for large support teams. But if that's your only goal, you're missing out. Poorly implemented bots can frustrate users, damage your brand, and lead to higher churn.</p>
      
      <h2>The Experience Multiplier</h2>
      <p>When integrated properly, AI enhances the customer journey. It offers 24/7 availability, instant answers, and smart escalation. It helps human agents perform better by providing real-time suggestions and context.</p>
      
      <h2>Measuring Success Beyond Costs</h2>
      <p>Focus on metrics like Net Promoter Score (NPS), CSAT, and customer effort score—not just cost per ticket. These show how AI is actually improving the experience.</p>
      
      <h2>Avoiding Common Pitfalls</h2>
      <p>Don't deploy AI as a barrier. Make it a bridge. Avoid endless bot loops and ensure customers can always reach a human if needed.</p>
      
      <h2>Key Takeaway</h2>
      <p>AI can save money—but its real ROI comes from happier customers, faster resolutions, and a stronger brand.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Case Studies',
    date: 'April 22, 2025',
    readTime: '7 min read',
    slug: 'ai-support-cost-vs-experience',
    relatedPosts: [3, 5, 6]
  },
  {
    id: 5,
    title: 'Training the AI + Human Duo: Tips for Aligning Agents and Bots',
    content: `
      <h2>Create Clear Boundaries</h2>
      <p>Define what the AI handles and when humans step in. Use categories like complexity, emotional tone, and urgency to draw the line.</p>
      
      <h2>Humanize the Bot's Voice</h2>
      <p>Your AI should speak like your brand. Make sure your team helps shape the tone and reviews conversations for clarity and warmth.</p>
      
      <h2>Use AI as a Co-Pilot</h2>
      <p>Train agents to use AI suggestions wisely—not blindly. Whether it's suggested replies or knowledge articles, agents should feel empowered to edit or ignore.</p>
      
      <h2>Feedback Loops Are Vital</h2>
      <p>Have agents flag poor AI responses and submit improvements. Your bot gets smarter, and agents feel ownership over the tool.</p>
      
      <h2>Run Joint Training Sessions</h2>
      <p>Include AI behavior in your onboarding and training programs. Role-play scenarios with hand-offs and escalations so the experience feels natural.</p>
      
      <h2>Key Takeaway</h2>
      <p>Your bot is only as effective as the team behind it. Train them together—and win together.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Analytics',
    date: 'April 15, 2025',
    readTime: '5 min read',
    slug: 'training-ai-human-duo',
    relatedPosts: [1, 4, 6]
  },
  {
    id: 6,
    title: 'AI-Powered Chat: What Customers Actually Think (And Why That Matters)',
    content: `
      <h2>The Good</h2>
      <p>Customers appreciate instant replies, quick answers, and round-the-clock availability. AI is especially valued for tracking orders, checking status, or getting basic info.</p>
      
      <h2>The Bad</h2>
      <p>Customers hate feeling trapped in a bot loop. If they can't get a clear answer—or escalate to a human—they quickly lose trust.</p>
      
      <h2>The Surprising</h2>
      <p>Most customers are okay with talking to a bot—as long as it's clear, helpful, and fast. What they really care about is resolution, not whether it came from a human or a machine.</p>
      
      <h2>Best Practices for Perception</h2>
      <ul>
        <li>Be transparent about using AI</li>
        <li>Allow human hand-off</li>
        <li>Personalize where possible</li>
        <li>Avoid robotic tone</li>
      </ul>
      
      <h2>Why It Matters</h2>
      <p>Your AI may be technically advanced—but if customers find it frustrating or impersonal, it won't matter. Design with the customer's perception in mind.</p>
      
      <h2>Key Takeaway</h2>
      <p>AI adoption should be customer-driven, not tech-driven. What matters most is how they feel when the conversation ends.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/8438969/pexels-photo-8438969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Ethics',
    date: 'April 8, 2025',
    readTime: '6 min read',
    slug: 'ai-chat-customer-perspective',
    relatedPosts: [1, 2, 5]
  }
];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.slug === slug);
    setPost(currentPost);
    
    if (currentPost) {
      // Get related posts
      const related = blogPosts.filter(
        p => currentPost.relatedPosts.includes(p.id)
      );
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <Section background="white">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button to="/blog" variant="primary">
            Return to Blog
          </Button>
        </div>
      </Section>
    );
  }

  // Extract first paragraph for description
  const getDescription = (content: string): string => {
    const firstParagraph = content.match(/<p>(.*?)<\/p>/);
    return firstParagraph ? firstParagraph[1].substring(0, 160) : '';
  };

  return (
    <>
      <SEO
        title={`${post.title} | HookTXT Blog`}
        description={getDescription(post.content)}
        canonicalUrl={`https://hooktxt.com/blog/${post.slug}`}
        keywords={`${post.category}, conversational AI, customer experience, AI chatbot, business automation`}
        ogImage={post.coverImage}
        ogType="article"
      />
      <ArticleSchema
        headline={post.title}
        description={getDescription(post.content)}
        author="HookTXT Team"
        datePublished={post.date}
        image={post.coverImage}
        url={`https://hooktxt.com/blog/${post.slug}`}
        category={post.category}
      />
      {/* Hero Section */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center mb-6">
              <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              {post.readTime && (
                <>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              {post.title}
            </h1>
            
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden h-96">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}  
            />
            
            
            {/* Social Sharing */}
            <div className="border-t border-b border-gray-200 py-6 my-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                    <Heart className="h-5 w-5 mr-1" />
                    <span className="text-sm">42</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    <span className="text-sm">12</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Related Posts */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-5">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex items-start gap-3">
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 leading-tight hover:text-primary transition-colors">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {relatedPost.date} {relatedPost.readTime && `• ${relatedPost.readTime}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-secondary text-primary hover:bg-secondary-dark transition-colors">
                    AI Trends
                  </Link>
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Best Practices
                  </Link>
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Customer Experience
                  </Link>
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Analytics
                  </Link>
                  <Link to="/blog" className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Ethics
                  </Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-secondary bg-opacity-30 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-primary">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest insights and articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* More Articles */}
      <Section background="light">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">More Articles You May Like</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Continue exploring our latest insights on conversational AI and customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).filter(p => p.id !== post.id).map(post => (
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
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  {post.author && (
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold mr-2">
                        {post.author?.charAt(0)}
                      </div>
                      {post.readTime && <p className="text-xs text-gray-500">{post.readTime}</p>}
                    </div>
                  )}
                  <Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button to="/blog" variant="outline">
            View All Articles
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              See how HookTXT can help you deliver exceptional customer experiences through conversational AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="secondary" size="lg">
                Book a Demo
              </Button>
              <Button to="/trial" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" showTrialModal>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;