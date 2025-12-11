/**
 * HomeWhyHookTXTSection Component - Mia.inc Minimal Style
 *
 * Clean feature grid with minimal design.
 * Focus on key differentiators.
 */

import React from 'react';
import { Target, Layers, TrendingUp, Users } from 'lucide-react';

const HomeWhyHookTXTSection: React.FC = () => {
  return (
    <div className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Why HookTXT
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Here's what we've learned building AI systems for businesses that actually scale.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'Business-First Design',
                description: 'We start with your revenue model, not the technology. Every feature serves your specific business goals.'
              },
              {
                icon: Layers,
                title: 'Multi-Agent Architecture',
                description: 'Specialized AI agents working together, each excellent at their specific role.'
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven Development',
                description: 'We measure what matters. Every conversation tracked, every lead scored, every dollar attributed.'
              },
              {
                icon: Users,
                title: 'Partnership Model',
                description: 'You\'re not just a client. We succeed when you succeed. Ongoing optimization included.'
              }
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyHookTXTSection;
