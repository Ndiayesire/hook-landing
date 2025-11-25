/**
 * HeroSection Component
 *
 * Home page hero section showcasing HookTXT's 3 specialized AI products.
 * Features aggressive, results-focused messaging emphasizing revenue generation
 * over generic chatbot functionality.
 */

import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Stop Losing Revenue to <span className="text-secondary">Generic AI</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-6 animate-slide-up">
              AI That Actually Closes Deals, Not Just Chats
            </h2>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 max-w-4xl mx-auto animate-slide-up border border-white/20" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl font-semibold text-white mb-4">
              While your competitors are excited about ChatGPT...
            </p>
            <p className="text-lg md:text-xl text-gray-100">
              We're building <span className="text-secondary font-bold">multi-agent AI systems</span> that generate measurable revenue 24/7.
            </p>
          </div>

          {/* 3 Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-secondary hover:bg-white/20 transition-all">
              <div className="text-3xl font-bold text-secondary mb-2">Custom AI</div>
              <p className="text-white font-semibold mb-2">For Any Business</p>
              <p className="text-gray-200 text-sm">Multi-agent systems built for YOUR unique needs</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-secondary hover:bg-white/20 transition-all">
              <div className="text-3xl font-bold text-secondary mb-2">Dealership AI</div>
              <p className="text-white font-semibold mb-2">For Auto Dealers</p>
              <p className="text-gray-200 text-sm">Capture after-hours leads automatically</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-secondary hover:bg-white/20 transition-all relative">
              <div className="absolute -top-3 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">Ecommerce AI</div>
              <p className="text-white font-semibold mb-2">For Online Stores</p>
              <p className="text-gray-200 text-sm">Recover abandoned carts instantly</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              to="/contact"
              variant="secondary"
              size="xl"
              className="flex items-center justify-center text-lg px-10 hover:scale-105 transition-all duration-300"
            >
              Schedule Your ROI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-gray-200 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Custom-built AI systems. Not off-the-shelf chatbots.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-8 w-8 text-primary mr-2" />
                <h3 className="text-3xl md:text-4xl font-bold text-primary">3</h3>
              </div>
              <p className="text-gray-700 font-semibold">Specialized AI Systems</p>
              <p className="text-gray-600 text-sm mt-1">Custom-built for your industry</p>
            </div>

            <div className="text-center border-t md:border-t-0 md:border-l md:border-r border-gray-200 py-6 md:py-0">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-primary mr-2" />
                <h3 className="text-3xl md:text-4xl font-bold text-primary">24/7</h3>
              </div>
              <p className="text-gray-700 font-semibold">Revenue Generation</p>
              <p className="text-gray-600 text-sm mt-1">Never miss a lead again</p>
            </div>

            <div className="text-center border-t md:border-t-0 border-gray-200 pt-6 md:pt-0">
              <div className="flex items-center justify-center mb-3">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">$300K+</h3>
              </div>
              <p className="text-gray-700 font-semibold">Average Additional Revenue</p>
              <p className="text-gray-600 text-sm mt-1">First year results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-accent2 opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;
