/**
 * EcommerceHeroSection Component - Mia.inc Minimal Style
 *
 * Clean, minimal hero section for E-commerce AI page.
 * Focus on whitespace, bold typography, and clarity.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Aurora from '../common/Aurora';

const EcommerceHeroSection: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#10B981", "#3B82F6", "#8B5CF6"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] mb-8 tracking-tight">
            Turn Browsers
            <br />
            Into
            <br />
            <span className="text-primary">Buyers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            AI Sales Agent that answers questions, handles objections, and closes sales automatically. 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              Stop Losing Sales Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="#how-it-works"
              variant="outline"
              size="lg"
              className="text-secondary border-2 border-neutral-200 hover:border-primary font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 text-neutral-500">
            <ShoppingCart className="h-5 w-5" />
            <p className="text-base font-medium">
              72% Cart Recovery Success Rate
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-24">
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">72%</div>
            <p className="text-neutral-600 font-medium">Cart recovery rate</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <p className="text-neutral-600 font-medium">Always available</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">3x</div>
            <p className="text-neutral-600 font-medium">Conversion increase</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-neutral-600 font-medium">Questions answered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeroSection;
