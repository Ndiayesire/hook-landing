/**
 * ServicesOverview Component - Mia.inc Minimal Style
 *
 * Clean, minimal presentation of the 3 solutions.
 * Focus on clarity and simplicity.
 */

import React from 'react';
import { Brain, Car, ShoppingCart, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ServicesOverview: React.FC = () => {
  return (
    <div className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Three Solutions
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Each system is custom-built for specific industries and use cases.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Custom AI Systems */}
            <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-primary transition-all duration-300">
              <div className="p-8">
                <Brain className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-3xl font-bold text-secondary mb-3">Custom AI</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Built from the ground up for your unique business needs, processes, and customer journey.
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-neutral-500 mb-2">BEST FOR</p>
                  <p className="text-neutral-900">B2B, SaaS, Services, Complex Sales</p>
                </div>

                <ul className="space-y-3 mb-8 text-neutral-600">
                  <li>• Multi-agent architecture</li>
                  <li>• Deep system integration</li>
                  <li>• Custom training & workflows</li>
                  <li>• Real-time dashboards</li>
                </ul>

                <Button
                  to="/custom-ai-systems"
                  variant="outline"
                  className="w-full border-2 border-neutral-200 hover:border-primary hover:bg-primary hover:text-white transition-all group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Dealership AI */}
            <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-primary transition-all duration-300">
              <div className="p-8">
                <Car className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-3xl font-bold text-secondary mb-3">Dealership AI</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Capture after-hours leads and qualify prospects automatically while your team sleeps.
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-neutral-500 mb-2">BEST FOR</p>
                  <p className="text-neutral-900">Auto Dealerships, Vehicle Sales</p>
                </div>

                <ul className="space-y-3 mb-8 text-neutral-600">
                  <li>• Inventory integration</li>
                  <li>• 5-level lead scoring</li>
                  <li>• Bilingual (EN/FR)</li>
                  <li>• 24/7 availability</li>
                </ul>

                <Button
                  to="/dealership-ai"
                  variant="outline"
                  className="w-full border-2 border-neutral-200 hover:border-primary hover:bg-primary hover:text-white transition-all group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Ecommerce AI */}
            <div className="group bg-white border-2 border-primary rounded-lg overflow-hidden transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <div className="p-8">
                <ShoppingCart className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-3xl font-bold text-secondary mb-3">Ecommerce AI</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Turn browsers into buyers with intelligent cart recovery and product recommendations.
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-neutral-500 mb-2">BEST FOR</p>
                  <p className="text-neutral-900">E-commerce, Online Retail, D2C</p>
                </div>

                <ul className="space-y-3 mb-8 text-neutral-600">
                  <li>• Cart recovery system</li>
                  <li>• Product recommendations</li>
                  <li>• Instant support 24/7</li>
                  <li>• Objection handling</li>
                </ul>

                <Button
                  to="/ecommerce-ai-agent"
                  variant="primary"
                  className="w-full bg-primary hover:bg-primary-dark text-white group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Help Choosing CTA */}
          <div className="bg-neutral-50 rounded-lg p-12 md:p-16 text-center border border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Need Help Choosing?
            </h3>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a conversation with our team. We'll help you understand which solution makes the most sense for your business goals.
            </p>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
            >
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
