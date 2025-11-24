/**
 * CustomAIHeroSection Component
 *
 * Hero section for the Custom AI Systems & Dashboards landing page.
 * Features aggressive, results-focused messaging about the difference
 * between generic AI chatbots and custom revenue-generating systems.
 */

import React from 'react';
import Button from '../common/Button';
import { Zap, Bot, TrendingUp } from 'lucide-react';

const CustomAIHeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Custom AI Systems & Dashboards
          </h1>

          {/* Subheadline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-secondary animate-fade-in leading-tight">
            The Difference Between "Talking About AI" and "Dominating with AI"
          </h2>

          {/* Opening Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10 animate-slide-up">
            <p className="text-xl md:text-2xl mb-6 text-white leading-relaxed font-semibold">
              LISTEN TO ME CAREFULLY.
            </p>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              While your competitors are getting excited about ChatGPT and selling you generic chatbots that respond
              <span className="text-error-light font-bold"> "Sorry, I can't help you with that"</span> every second question...
            </p>
            <p className="text-lg md:text-xl text-white font-bold mt-4 leading-relaxed">
              We're building AI systems that generate real, measurable revenue, and work 24/7 without taking vacations.
            </p>
          </div>

          {/* The Difference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* They Sell */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-error-light">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="h-8 w-8 text-error-light" />
                <h3 className="text-xl font-bold text-error-light">They Sell You</h3>
              </div>
              <p className="text-2xl font-bold text-white">A Toy</p>
              <p className="text-gray-200 mt-2">Generic chatbots that frustrate customers</p>
            </div>

            {/* We Build */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-success">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-success" />
                <h3 className="text-xl font-bold text-success">We Build You</h3>
              </div>
              <p className="text-2xl font-bold text-white">A Cash Machine</p>
              <p className="text-gray-200 mt-2">Revenue-generating AI that works 24/7</p>
            </div>
          </div>

          {/* See the Difference */}
          <p className="text-2xl font-bold mb-10 text-secondary animate-slide-up" style={{ animationDelay: '0.2s' }}>
            You see the difference?
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Zap className="h-5 w-5" />
              Book Your Strategy Call
            </Button>
            <Button
              to="/ecommerce-ai-agent"
              variant="outline"
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl"
            >
              See Our AI Systems in Action
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-gray-300 mb-4">TRUSTED BY BUSINESSES THAT REFUSE TO SETTLE FOR MEDIOCRITY</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-75">
              <div className="text-gray-200 font-semibold">Multi-Agent Architecture</div>
              <div className="text-gray-200 font-semibold">24/7 Revenue Generation</div>
              <div className="text-gray-200 font-semibold">Real-Time Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAIHeroSection;
