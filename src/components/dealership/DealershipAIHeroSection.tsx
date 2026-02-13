/**
 * DealershipAIHeroSection Component - Chat360 Gradient Style
 *
 * Modern hero section with gradient background for Dealership AI page.
 * Features bold typography with teal gradient and decorative elements.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Clock } from 'lucide-react';

const DealershipAIHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-teal-200 pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="blur-circle w-96 h-96 bg-teal-light top-10 -right-20"></div>
      <div className="blur-circle w-80 h-80 bg-primary-light bottom-20 -left-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Your 24/7
            <br />
            Dealership
            <br />
            <span className="text-teal-light">Sales Team</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Capture leads at 2 AM. Answer questions instantly. Qualify buyers automatically. Never lose another after-hours customer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="group bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              Stop Losing Leads Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="#how-it-works"
              variant="outline"
              size="lg"
              className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Clock className="h-5 w-5" />
            <p className="text-base font-medium">
              24/7 Operation. Zero Missed Leads.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-24">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">63%</div>
            <p className="text-white/90 font-medium">Research after hours</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">82%</div>
            <p className="text-white/90 font-medium">Want instant answers</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/90 font-medium">Always available</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <p className="text-white/90 font-medium">Leads captured</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealershipAIHeroSection;
