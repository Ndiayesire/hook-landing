/**
 * CtaSection Component
 *
 * Final aggressive call-to-action section for the home page.
 * Emphasizes urgency and competitive advantage.
 */

import React from 'react';
import { ArrowRight, Brain, Car, ShoppingCart } from 'lucide-react';
import Button from '../common/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Message */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Stop Losing Revenue. <br />
              <span className="text-secondary">Start Capturing Leads 24/7.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Your competitors are already using AI. The question is: Are they using AI that works?
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Schedule a consultation and we'll show you exactly how much revenue you're leaving on the table.
            </p>
          </div>

          {/* Quick Links to Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold">Custom AI</h3>
              </div>
              <p className="text-gray-200 text-sm mb-4">For any business type</p>
              <Button to="/custom-ai-systems" variant="secondary" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-secondary hover:bg-white/20 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Car className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold">Dealership AI</h3>
              </div>
              <p className="text-gray-200 text-sm mb-4">For auto dealerships</p>
              <Button to="/dealership-ai" variant="secondary" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <ShoppingCart className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold">Ecommerce AI</h3>
              </div>
              <p className="text-gray-200 text-sm mb-4">For online stores</p>
              <Button to="/ecommerce-ai-agent" variant="secondary" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="text-center mb-10">
            <Button
              to="/contact"
              variant="secondary"
              size="xl"
              className="text-lg px-12 py-4 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Schedule Your ROI Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="mt-6 text-gray-200">
              Free consultation. No pressure. Just honest advice about what AI can do for YOUR business.
            </p>
          </div>

          {/* Urgency Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              Every Day You Wait Is Revenue Lost
            </p>
            <p className="text-lg text-gray-200 mb-4">
              While you're reading this, your competitors are capturing after-hours leads.
            </p>
            <p className="text-xl font-bold text-secondary">
              Not tomorrow. Not next month. NOW.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
        <div className="absolute -right-20 top-0 w-64 h-64 rounded-full bg-accent2 opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CtaSection;
