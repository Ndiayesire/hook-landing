/**
 * ServicesOverview Component - Dan Martell Consultative Approach
 *
 * Present the 3 solutions as options, not aggressive sales.
 * Help users find the right fit for their business.
 */

import React from 'react';
import { Brain, Car, ShoppingCart, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ServicesOverview: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Three Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              Which Solution Fits Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Each system is custom-built for specific industries and use cases.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Custom AI Systems */}
            <div className="group bg-white rounded-3xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-large border border-neutral-100 hover:border-primary/30">
              <div className="w-full h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src="https://i.ibb.co/CpwbxyRR/chatinsight.png"
                  alt="Custom AI Systems Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">Custom AI</h3>
                    <p className="text-primary font-medium text-sm">For Any Business</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Built from the ground up for your unique business needs, processes, and customer journey.
                </p>

                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-4 mb-6 border border-primary/10">
                  <p className="text-sm font-medium text-neutral-600 mb-1">Best For</p>
                  <p className="font-semibold text-neutral-900">B2B, SaaS, Services, Complex Sales</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Multi-agent architecture',
                    'Deep system integration',
                    'Custom training & workflows',
                    'Real-time dashboards'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/custom-ai-systems" variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Dealership AI */}
            <div className="group bg-white rounded-3xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-large border border-neutral-100 hover:border-secondary/30">
              <div className="w-full h-64 overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10">
                <img
                  src="https://i.ibb.co/r2bBQJ35/dashboard.png"
                  alt="Dealership AI Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary/10 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Car className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">Dealership AI</h3>
                    <p className="text-secondary font-medium text-sm">For Auto Dealers</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Capture after-hours leads and qualify prospects automatically while your team sleeps.
                </p>

                <div className="bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl p-4 mb-6 border border-secondary/10">
                  <p className="text-sm font-medium text-neutral-600 mb-1">Best For</p>
                  <p className="font-semibold text-neutral-900">Auto Dealerships, Vehicle Sales</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Inventory integration',
                    '5-level lead scoring',
                    'Bilingual (EN/FR)',
                    '24/7 availability'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/dealership-ai" variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Ecommerce AI */}
            <div className="group bg-white rounded-3xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-large border-2 border-accent1/20 hover:border-accent1/50 relative">
              <div className="absolute top-4 right-4 z-10 bg-accent1 text-white px-4 py-2 rounded-full text-xs font-bold shadow-card">
                POPULAR
              </div>
              <div className="w-full h-64 overflow-hidden bg-gradient-to-br from-accent1/10 to-secondary/10">
                <img
                  src="https://i.ibb.co/r2bBQJ35/dashboard.png"
                  alt="Ecommerce AI Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent1/10 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingCart className="h-7 w-7 text-accent1" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">Ecommerce AI</h3>
                    <p className="text-accent1 font-medium text-sm">For Online Stores</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Turn browsers into buyers with intelligent cart recovery and product recommendations.
                </p>

                <div className="bg-gradient-to-br from-accent1/5 to-transparent rounded-2xl p-4 mb-6 border border-accent1/10">
                  <p className="text-sm font-medium text-neutral-600 mb-1">Best For</p>
                  <p className="font-semibold text-neutral-900">E-commerce, Online Retail, D2C</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Cart recovery system',
                    'Product recommendations',
                    'Instant support 24/7',
                    'Objection handling'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent1 mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/ecommerce-ai-agent" variant="primary" className="w-full bg-accent1 hover:bg-accent1-dark">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Help Choosing CTA */}
          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-10 md:p-12 border border-neutral-100 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a conversation with our team. We will help you understand which solution makes the most sense for your business goals.
            </p>
            <Button to="/contact" variant="primary" size="lg" className="group">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
