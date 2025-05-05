import React, { useEffect } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { MessageSquare, Users, Zap, ArrowUpRight, Laptop, Database, RefreshCw, Clock } from 'lucide-react';
import FeatureCard from '../components/common/FeatureCard';

const SaasPage: React.FC = () => {
  useEffect(() => {
    document.title = 'HookTXT SaaS | The AI Human Conversational SaaS Platform';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
             <span className="text-secondary">The AI+Human Conversational SaaS Platform</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Empower your business with intelligent conversations that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button to="/trial" variant="secondary" size="lg" className="flex items-center justify-center" showTrialModal>
                Start Free Trial
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/demo" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Powerful Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform combines the best of AI and human support to deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Laptop}
            title="Unified Dashboard"
            description="Manage all your customer conversations in one place with our intuitive dashboard."
          />
          <FeatureCard 
            icon={Users}
            title="AI Agent Designer"
            description="Design custom AI agents using your knowledge base and prompts to create specialized conversational experiences."
          />
          <FeatureCard 
            icon={Database}
            title="CRM Integration"
            description="Connect with your existing CRM to maintain customer context and history."
          />
          <FeatureCard 
            icon={Zap}
            title="Workflow Automation"
            description="Connect with Zapier, Make, or N8N to automate workflows across 3,000+ apps and services."
          />
          <FeatureCard 
            icon={RefreshCw}
            title="Escalation Logic"
            description="Set up custom rules for when to escalate from AI to human agents."
          />
          <FeatureCard 
            icon={Clock}
            title="24/7 Availability"
            description="Provide round-the-clock support with our AI chatbots, even when your team is offline."
          />
          <FeatureCard 
            icon={MessageSquare}
            title="Assisted Agent by AI"
            description="Your agent will have AI to help them answer and structure phrase."
          />
          <FeatureCard 
            icon={Users}
            title="Team Collaboration"
            description="Enable multiple team members to collaborate on customer conversations."
          />
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Intuitive Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Our user-friendly dashboard puts everything you need at your fingertips. Monitor conversations, track metrics, and manage your team - all from one central location.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Real-time conversation monitoring and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Customizable views for different team roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Performance metrics and conversion tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Easy access to conversation history and customer data</span>
              </li>
            </ul>
            <Button to="/demo" variant="primary">
              See It In Action
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
            <img 
              src="https://i.ibb.co/r2bBQJ35/dashboard.png" 
              alt="HookTXT Dashboard" 
              className="w-full h-auto"
            />
          </div>
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
              Join hundreds of businesses using HookTXT to deliver exceptional customer experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/trial" variant="secondary" size="lg" showTrialModal>
                Start Free Trial
              </Button>
              <Button to="/demo" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaasPage;