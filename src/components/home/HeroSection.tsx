/**
 * HeroSection Component - Mia.inc Minimal Style
 *
 * Ultra-clean, minimal hero section inspired by Mia.inc design.
 * Focus on whitespace, bold typography, and subtle interactions.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-32 md:pt-48 md:pb-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] mb-8 tracking-tight">
            Scale Your Sales Team
            <br />
            Without Scaling
            <br />
            <span className="text-primary">Headcount</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            The most successful businesses we work with have one thing in common:
            they've systemized their customer conversations.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              Schedule a Strategy Session
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="/custom-ai-systems"
              variant="outline"
              size="lg"
              className="text-secondary border-2 border-neutral-200 hover:border-primary font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-neutral-500 font-medium">
            Trusted by growth-focused businesses generating $150K-$500K+ additional revenue
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
            <p className="text-neutral-600 font-medium">More Qualified Leads</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <p className="text-neutral-600 font-medium">Always Capturing</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">&lt;2s</div>
            <p className="text-neutral-600 font-medium">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
