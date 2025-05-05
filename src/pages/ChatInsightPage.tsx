import React, { useEffect, useState } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { BarChart2, UserCheck, BarChart, PieChart, TrendingUp, LineChart, Search, Filter } from 'lucide-react';
import FeatureCard from '../components/common/FeatureCard';

const ChatInsightPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    document.title = 'ChatInsight | HookTXT';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    setFormSuccess(false);

    try {
      const response = await fetch('https://hooktxt.app.n8n.cloud/webhook-test/64952ad7-48f4-4c93-b0d2-6df6d1a3daa7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'ChatInsight Waitlist'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit ChatInsight waitlist form');
      }

      setFormSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Error submitting ChatInsight waitlist form:', err);
      setFormError('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-8 backdrop-blur-sm">
              <p className="text-white text-center text-lg">
                Coming in Q3 2025 - Join the waitlist to be notified when we launch!
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              ChatInsight: <span className="text-secondary">Turn Conversations into Data</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Unlock powerful insights from your customer conversations with our advanced analytics platform.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Key Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transform your chat data into actionable insights with our comprehensive analytics platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={UserCheck}
            title="Lead Scoring"
            description="Automatically score and qualify leads based on conversation content and engagement metrics."
          />
          <FeatureCard 
            icon={BarChart}
            title="Performance Dashboard"
            description="Monitor agent performance with detailed metrics on response times, resolution rates, and customer satisfaction."
          />
          <FeatureCard 
            icon={TrendingUp}
            title="Conversion Tracking"
            description="Track how chat interactions lead to conversions and measure ROI of your chat investment."
          />
          <FeatureCard 
            icon={PieChart}
            title="Topic Clustering"
            description="AI-powered topic identification groups similar conversations to reveal common customer needs."
          />
          <FeatureCard 
            icon={LineChart}
            title="Trend Analysis"
            description="Identify patterns and trends in customer inquiries over time to anticipate future needs."
          />
          <FeatureCard 
            icon={Search}
            title="Conversation Search"
            description="Powerful search capabilities to find and analyze specific conversations and topics."
          />
          <FeatureCard 
            icon={Filter}
            title="Custom Filters"
            description="Create custom filters and views to focus on the metrics that matter most to your business."
          />
          <FeatureCard 
            icon={BarChart2}
            title="Custom Reports"
            description="Generate custom reports and export data for deeper analysis and stakeholder presentations."
          />
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Powerful Analytics Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Our intuitive dashboard gives you a complete overview of your chat performance and customer interactions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Visual representation of key metrics and KPIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Customizable widgets and data views</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Real-time data updates and historical comparisons</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Export capabilities for reports and presentations</span>
              </li>
            </ul>
            <Button to="/demo" variant="primary">
              See It In Action
            </Button>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <img 
              src="https://i.ibb.co/CpwbxyRR/chatinsight.png" 
              alt="ChatInsight Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Business Benefits</h2>
          <p className="text-primary-dark max-w-3xl mx-auto">
            Discover how ChatInsight can transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Increased Conversions</h3>
            <p className="text-gray-600">
              Identify high-performing conversation patterns and replicate them across your team to boost conversion rates.
            </p>
            <p className="mt-4 text-primary font-semibold">Average Improvement: 35%</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Better Lead Quality</h3>
            <p className="text-gray-600">
              Automatically score and prioritize leads based on conversation signals to focus on high-value prospects.
            </p>
            <p className="mt-4 text-primary font-semibold">Lead Quality Improvement: 45%</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Team Optimization</h3>
            <p className="text-gray-600">
              Improve agent performance with data-driven coaching based on success patterns and conversation analytics.
            </p>
            <p className="mt-4 text-primary font-semibold">Efficiency Increase: 28%</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to be the first to know when ChatInsight launches?
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              Join our waitlist to get early access and exclusive launch offers.
            </p>
            
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-md border-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    type="submit"
                    className={isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </div>
                {formError && (
                  <p className="text-red-300 text-sm mt-2">{formError}</p>
                )}
                {formSuccess && (
                  <p className="text-green-300 text-sm mt-2">Thank you for joining our waitlist! We'll notify you when ChatInsight launches.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInsightPage;