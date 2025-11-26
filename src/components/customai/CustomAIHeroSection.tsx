/**
 * CustomAIHeroSection Component - Dan Martell Approach
 *
 * Hero section for Custom AI Systems.
 * Value-driven messaging focused on business transformation, not fear or hype.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const CustomAIHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">For B2B, SaaS & Complex Sales</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight text-center">
            Build AI That Actually <br />
            <span className="text-secondary">Fits Your Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in leading-relaxed text-center max-w-4xl mx-auto">
            Most AI solutions are built for everyone, which means they work for no one.
            We build custom systems designed specifically for how <span className="font-semibold text-white">your</span> business operates.
          </p>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">Your Process</div>
              <p className="text-white/80">Built around how you actually sell</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">Your Data</div>
              <p className="text-white/80">Trained on your products and customers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">Your Goals</div>
              <p className="text-white/80">Optimized for your specific metrics</p>
            </div>
          </div>

          {/* The Difference */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 mb-10 border border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Here is the Difference</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-lg font-semibold text-white/70 mb-2">Generic AI Platforms</div>
                <p className="text-white/90">One-size-fits-all templates that kinda work for everyone</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary mb-2">Custom AI Systems</div>
                <p className="text-white">Built specifically for your business and nothing else</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="shadow-large hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Explore What's Possible</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="#case-studies"
              variant="outline"
              size="lg"
              className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary shadow-large"
            >
              See Real Examples
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="font-medium">Multi-Agent Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="font-medium">Real-Time Dashboards</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="font-medium">Custom Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute -right-20 top-0 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CustomAIHeroSection;
