/**
 * HeroSection Component - Modern SaaS Style
 *
 * Modern hero section with gradient background and floating card elements.
 * Inspired by contemporary SaaS product showcases.
 */

import React from 'react';
import { ArrowRight, TrendingUp, Zap, Users } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-40 md:pt-48 md:pb-56 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Schedule a Strategy Session
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="/custom-ai-systems"
              variant="outline"
              size="lg"
              className="text-secondary border-2 border-neutral-200 hover:border-primary hover:bg-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-neutral-500 font-medium">
            Trusted by growth-focused businesses generating $150K-$500K+ additional revenue
          </p>
        </div>

        {/* Floating Cards with Stats */}
        <div className="relative max-w-6xl mx-auto mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
                <p className="text-neutral-600 font-medium">More Qualified Leads</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 md:translate-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-neutral-600 font-medium">Always Capturing</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">&lt;2s</div>
                <p className="text-neutral-600 font-medium">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
