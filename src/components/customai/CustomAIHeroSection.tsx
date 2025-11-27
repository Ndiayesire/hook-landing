/**
 * CustomAIHeroSection Component - Mia.inc Minimal Style
 *
 * Clean, minimal hero section for Custom AI Systems.
 * Focus on whitespace, bold typography, and clarity.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const CustomAIHeroSection: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-32 md:pt-48 md:pb-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] mb-8 tracking-tight">
            Build AI That Actually
            <br />
            Fits Your
            <br />
            <span className="text-primary">Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Most AI solutions are built for everyone, which means they work for no one.
            We build custom systems designed specifically for how your business operates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              Explore What's Possible
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="#case-studies"
              variant="outline"
              size="lg"
              className="text-secondary border-2 border-neutral-200 hover:border-primary font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
            >
              See Real Examples
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-neutral-500 font-medium">
            For B2B, SaaS & Complex Sales
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">Your Process</div>
            <p className="text-neutral-600 font-medium">Built around how you actually sell</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">Your Data</div>
            <p className="text-neutral-600 font-medium">Trained on your products & customers</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">Your Goals</div>
            <p className="text-neutral-600 font-medium">Optimized for your specific metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAIHeroSection;
