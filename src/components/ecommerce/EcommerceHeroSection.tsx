/**
 * EcommerceHeroSection Component
 *
 * Hero section for the Ecommerce AI Agent landing page.
 * Displays the main value proposition with dramatic headline about visitors
 * leaving money on the table, includes dual CTAs and trust badges.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const EcommerceHeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Your Website Visitors Are <span className="text-secondary">Leaving Money On The Table</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-6 text-gray-100 animate-slide-up max-w-4xl mx-auto leading-relaxed">
            Turn Curious Browsers Into Paying Customers — Automatically, 24/7
          </p>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl mb-10 text-gray-100 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Introducing the <span className="text-secondary font-bold">AI Sales Agent</span>: The intelligent chatbot that qualifies leads, handles objections, and closes sales while you sleep.
          </p>

          {/* Problems and Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Problems Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4 text-error-light">Stop losing revenue to:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-error-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Unanswered questions at 2 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-error-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Leads leaving for competitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-error-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Generic chatbots that frustrate customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-error-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Overwhelmed support teams</span>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4 text-success-light">Start capturing every dollar with:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">A trained AI salesperson that never sleeps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Lead qualification in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Proven closing techniques, every conversation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Tracked ROI down to the penny</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button to="/demo" variant="secondary" size="lg" className="flex items-center justify-center shadow-lg hover:shadow-xl">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button to="/demo" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl">
              See It In Action
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-gray-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Trusted by e-commerce brands generating <span className="font-bold text-secondary">$XXX,XXX+</span> in chatbot sales monthly
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeroSection;
