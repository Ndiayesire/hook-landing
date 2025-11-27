/**
 * DealershipAIHeroSection Component - Mia.inc Minimal Style
 *
 * Clean, minimal hero section for Dealership AI page.
 * Focus on whitespace, bold typography, and clarity.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Clock } from 'lucide-react';

const DealershipAIHeroSection: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-32 md:pt-48 md:pb-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] mb-8 tracking-tight">
            Your 24/7
            <br />
            Dealership
            <br />
            <span className="text-primary">Sales Team</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Capture leads at 2 AM. Answer questions instantly. Qualify buyers automatically. Never lose another after-hours customer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              Stop Losing Leads Today
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
            <Clock className="h-5 w-5" />
            <p className="text-base font-medium">
              24/7 Operation. Zero Missed Leads.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-24">
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">63%</div>
            <p className="text-neutral-600 font-medium">Research after hours</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">82%</div>
            <p className="text-neutral-600 font-medium">Want instant answers</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <p className="text-neutral-600 font-medium">Always available</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-neutral-600 font-medium">Leads captured</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealershipAIHeroSection;
