/**
 * CustomAIHeroSection Component - Chat360 Gradient Style
 *
 * Modern hero section with gradient background for Custom AI Systems.
 * Features bold typography with teal gradient and decorative elements.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const CustomAIHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-teal-200 pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="blur-circle w-96 h-96 bg-teal-light top-10 -right-20"></div>
      <div className="blur-circle w-80 h-80 bg-primary-light bottom-20 -left-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Build AI That Actually
            <br />
            Fits Your
            <br />
            <span className="text-teal-light">Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Most AI solutions are built for everyone, which means they work for no one.
            We build custom systems designed specifically for how your business operates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="group bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              Explore What's Possible
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="#case-studies"
              variant="outline"
              size="lg"
              className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              See Real Examples
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-white/80 font-medium">
            For B2B, SaaS & Complex Sales
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">Your Process</div>
            <p className="text-white/90 font-medium">Built around how you actually sell</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">Your Data</div>
            <p className="text-white/90 font-medium">Trained on your products & customers</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">Your Goals</div>
            <p className="text-white/90 font-medium">Optimized for your specific metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAIHeroSection;
