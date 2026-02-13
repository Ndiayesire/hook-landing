/**
 * HeroSection Component - Chat360 Gradient Style
 *
 * Modern hero section with gradient background and decorative blur elements.
 * Features white text on teal gradient with prominent shadows and scale effects.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-teal-200 pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="blur-circle w-96 h-96 bg-teal-light top-10 -right-20"></div>
      <div className="blur-circle w-80 h-80 bg-primary-light bottom-20 -left-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Scale Your Sales Team
            <br />
            Without Scaling
            <br />
            <span className="text-teal-light">Headcount</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            The most successful businesses we work with have one thing in common:
            they've systemized their customer conversations.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="group bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              Schedule a Strategy Session
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="/custom-ai-systems"
              variant="outline"
              size="lg"
              className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-white/80 font-medium">
            Trusted by growth-focused businesses generating $150K-$500K+ additional revenue
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">3-5x</div>
            <p className="text-white/90 font-medium">More Qualified Leads</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/90 font-medium">Always Capturing</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">&lt;2s</div>
            <p className="text-white/90 font-medium">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
