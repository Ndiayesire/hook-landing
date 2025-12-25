/**
 * StatsSection - Dark stats section with feature cards
 *
 * Displays key metrics and feature highlights on a dark background,
 * similar to Lumea's productivity stats section.
 */

import React from 'react';
import { Mic, Brain, Share2 } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '90%', label: 'Time Save Effectively' },
    { value: '300+', label: 'Businesses Supported' },
    { value: '$1.2M+', label: 'Revenue Generated' },
  ];

  const features = [
    {
      icon: Mic,
      title: 'Automatic Recording',
      description: 'Never miss a lead. Our AI records and processes all customer interactions 24/7.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Transform raw data into actionable insights that drive conversions.',
    },
    {
      icon: Share2,
      title: 'Seamless Sharing',
      description: 'Connect with your CRM, email, and other tools for unified workflows.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Unlock maximum productivity{' '}
              <span className="text-primary">with intelligent features</span>
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Experience seamless AI-powered solutions designed to streamline your workflow and enhance efficiency.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
