/**
 * ServicesOverview Component
 *
 * Showcases HookTXT's 3 specialized AI products with enhanced cards,
 * ROI focus, and results-driven messaging.
 */

import React from 'react';
import { Brain, Car, ShoppingCart, TrendingUp, Star } from 'lucide-react';
import Button from '../common/Button';

const ServicesOverview: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              3 Specialized AI Systems Built to <span className="text-primary">Close</span>, Not Just Chat
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Each system is custom-built for your industry with multi-agent architecture and real-time dashboards.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Custom AI Systems */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-100 hover:border-primary">
              <div className="w-full h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent2/10">
                <img
                  src="https://i.ibb.co/CpwbxyRR/chatinsight.png"
                  alt="Custom AI Systems Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Custom AI Systems</h3>
                    <p className="text-primary font-semibold text-sm">For Any Business</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Multi-agent revenue machines custom-built for YOUR unique business needs and processes.
                </p>

                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary text-lg">$150K - $500K+</span>
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">Average additional revenue (Year 1)</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Specialized multi-agent architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Real-time transparency dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">24/7 automated operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Built specifically for YOUR business</span>
                  </li>
                </ul>

                <Button to="/custom-ai-systems" variant="primary" className="w-full">
                  Explore Custom AI
                </Button>
              </div>
            </div>

            {/* Dealership AI */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-100 hover:border-primary">
              <div className="w-full h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent2/10">
                <img
                  src="https://i.ibb.co/r2bBQJ35/dashboard.png"
                  alt="Dealership AI Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center">
                    <Car className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dealership AI</h3>
                    <p className="text-primary font-semibold text-sm">For Auto Dealerships</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Capture after-hours leads automatically. Your 24/7 sales team that never sleeps.
                </p>

                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary text-lg">$25K - $50K+</span>
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">Average additional revenue per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Multi-agent sales team (3 agents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Real-time inventory integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Intelligent 5-level lead scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Bilingual (English/French)</span>
                  </li>
                </ul>

                <Button to="/dealership-ai" variant="primary" className="w-full">
                  Explore Dealership AI
                </Button>
              </div>
            </div>

            {/* Ecommerce AI */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-secondary hover:border-primary relative">
              <div className="absolute top-4 right-4 z-10 bg-secondary text-primary px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Star className="h-4 w-4 fill-current" />
                MOST POPULAR
              </div>
              <div className="w-full h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent2/10">
                <img
                  src="https://i.ibb.co/r2bBQJ35/dashboard.png"
                  alt="Ecommerce AI Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center">
                    <ShoppingCart className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Ecommerce AI</h3>
                    <p className="text-primary font-semibold text-sm">For Online Stores</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Recover abandoned carts and convert browsers into buyers automatically.
                </p>

                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary text-lg">72%</span>
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">Average cart recovery rate</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Abandoned cart recovery system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Intelligent product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">24/7 sales assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">Handles objections & closes sales</span>
                  </li>
                </ul>

                <Button to="/ecommerce-ai-agent" variant="primary" className="w-full">
                  Explore Ecommerce AI
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent2/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Not sure which system is right for you?
            </p>
            <p className="text-gray-700 mb-6">
              Schedule a consultation and we'll help you choose the perfect AI solution for your business.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Talk to an AI Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
