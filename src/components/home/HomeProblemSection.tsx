/**
 * HomeProblemSection Component - Mia.inc Minimal Style
 *
 * Clean, educational section with minimal design.
 * Focus on clarity and whitespace.
 */

import React from 'react';
import { TrendingDown, Target, Users, Brain } from 'lucide-react';

const HomeProblemSection: React.FC = () => {
  return (
    <div className="py-32 md:py-48 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Why Most Chatbots
              <br />
              Don't Work
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              It's not about the technology. It's about how it's implemented.
            </p>
          </div>

          {/* The 4 Problems - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {[
              {
                icon: TrendingDown,
                title: 'Generic Responses',
                description: 'Most chatbots use templated answers that don\'t understand your specific business context.'
              },
              {
                icon: Target,
                title: 'No Lead Qualification',
                description: 'They collect contact info but cannot distinguish between tire-kickers and serious buyers.'
              },
              {
                icon: Users,
                title: 'Disconnected Systems',
                description: 'Chatbots that don\'t integrate with your CRM, inventory, or existing tools create more work.'
              },
              {
                icon: Brain,
                title: 'Single-Agent Limitation',
                description: 'One bot trying to do everything ends up doing nothing well.'
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-primary transition-all duration-300"
              >
                <div className="mb-4">
                  <problem.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* The Solution Approach */}
          <div className="bg-white rounded-lg border border-neutral-200 p-12 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              A Better Approach
            </h3>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              The businesses seeing real results from AI don't use generic chatbots.
              They build <span className="font-bold text-primary">custom systems</span> that understand their unique processes,
              integrate with their tools, and work like an extension of their team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProblemSection;
