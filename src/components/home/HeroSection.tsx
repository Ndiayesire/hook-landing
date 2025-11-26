/**
 * HeroSection Component - Dan Martell Consultative Approach
 *
 * Premium homepage hero with educational, value-first messaging.
 * Focus on scaling systems, not fear-based tactics.
 * Clean, modern design with generous spacing and subtle interactions.
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-neutral-50 to-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-700">
                  Trusted by Growth-Focused Businesses
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
                  Scale Your Sales Team Without{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Scaling Headcount
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                  The most successful businesses we work with have one thing in common:
                  they've systemized their customer conversations.
                </p>
              </div>

              {/* Value Points */}
              <div className="space-y-3">
                {[
                  'Capture 3-5X more qualified leads',
                  'Without hiring additional sales reps',
                  'Custom-built systems for your business'
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="group flex items-center justify-center text-lg px-8 py-4 bg-primary hover:bg-primary-dark transition-all duration-300"
                >
                  Schedule a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  to="/custom-ai-systems"
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center text-lg px-8 py-4 border-2 border-neutral-200 hover:border-primary transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-neutral-500 pt-2">
                Join businesses generating $150K-$500K+ in additional revenue year one
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Main Card - Dashboard Preview */}
              <div className="relative bg-white rounded-3xl shadow-large border border-neutral-100 p-8 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Live Dashboard</h3>
                    <p className="text-sm text-neutral-500">Real-time performance</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-secondary">Active</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-4 rounded-2xl border border-primary/10">
                    <p className="text-sm text-neutral-600 mb-1">Leads Captured</p>
                    <p className="text-3xl font-bold text-primary">127</p>
                    <p className="text-xs text-secondary mt-1">↑ 34% this week</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-transparent p-4 rounded-2xl border border-secondary/10">
                    <p className="text-sm text-neutral-600 mb-1">Conversations</p>
                    <p className="text-3xl font-bold text-secondary">482</p>
                    <p className="text-xs text-accent1 mt-1">24/7 Active</p>
                  </div>
                </div>

                {/* Conversation Preview */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0"></div>
                    <div className="flex-1 bg-neutral-50 rounded-2xl rounded-tl-none p-4">
                      <p className="text-sm text-neutral-700">How can I help qualify this lead for you?</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 max-w-[80%] bg-primary text-white rounded-2xl rounded-tr-none p-4">
                      <p className="text-sm">Looking for a solution that scales with us</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card border border-neutral-100 p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent1 to-accent1/50 flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Response Time</p>
                    <p className="text-lg font-bold text-neutral-900">&lt;2 sec</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card border border-neutral-100 p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Qualified Leads</p>
                    <p className="text-lg font-bold text-neutral-900">+247%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;
