import React from 'react';
import { Box, MessageSquare, BarChart3 } from 'lucide-react';
import Button from '../common/Button';
import Section from '../common/Section';

const ServicesOverview: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Offerings</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive conversational AI solutions to enhance your customer experience and drive business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* SaaS Platform */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100">
          <div className="w-full h-48 overflow-hidden">
            <img
              src="https://i.ibb.co/r2bBQJ35/dashboard.png"
              alt="HookTXT SaaS Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <Box className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">HookTXT SaaS</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Our powerful conversational AI platform that helps businesses automate and enhance customer interactions.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Unified chat dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>AI + human hybrid system</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>CRM & Zapier integrations</span>
              </li>
            </ul>
            <Button to="/saas" variant="secondary" className="w-full">
              Learn More
            </Button>
          </div>
        </div>

        {/* Chat Services */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100">
          <div className="w-full h-48 overflow-hidden">
            <img
              src="https://i.ibb.co/r2bBQJ35/dashboard.png"
              alt="Chat Services Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Chat Services</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Let our team build, train, and monitor your chatbot—with human backup 24/7.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Custom chatbot development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Ongoing optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Human-backed support</span>
              </li>
            </ul>
            <Button to="/services" variant="secondary" className="w-full">
              Learn More
            </Button>
          </div>
        </div>

        {/* Custom AI Systems */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100">
          <div className="w-full h-48 overflow-hidden">
            <img
              src="https://i.ibb.co/CpwbxyRR/chatinsight.png"
              alt="Custom AI Systems Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Custom AI Systems</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Multi-agent AI systems and dashboards that generate revenue 24/7.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Specialized multi-agent architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Real-time transparency dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>24/7 automated revenue generation</span>
              </li>
            </ul>
            <Button to="/custom-ai-systems" variant="secondary" className="w-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesOverview;