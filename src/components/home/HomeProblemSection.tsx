/**
 * HomeProblemSection Component - Dan Martell Educational Approach
 *
 * Educational section explaining why most chatbots fail.
 * Focus on understanding, not fear. Consultative and informative.
 */

import React from 'react';
import { TrendingDown, Target, Users, Brain } from 'lucide-react';

const HomeProblemSection: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mb-6">
              <span className="text-sm font-medium text-neutral-600">The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              Why Most Chatbots{' '}
              <span className="bg-gradient-to-r from-neutral-600 to-neutral-400 bg-clip-text text-transparent">
                Don't Work
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              It's not about the technology. It's about how it's implemented.
            </p>
          </div>

          {/* The 4 Problems - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: TrendingDown,
                title: 'Generic Responses',
                description: 'Most chatbots use templated answers that do not understand your specific business context.',
                insight: 'Your customers ask nuanced questions. They need specialized knowledge.'
              },
              {
                icon: Target,
                title: 'No Lead Qualification',
                description: 'They collect contact info but cannot distinguish between tire-kickers and serious buyers.',
                insight: 'Your sales team wastes time on unqualified leads.'
              },
              {
                icon: Users,
                title: 'Disconnected Systems',
                description: 'Chatbots that do not integrate with your CRM, inventory, or existing tools create more work.',
                insight: 'Data silos hurt efficiency and customer experience.'
              },
              {
                icon: Brain,
                title: 'Single-Agent Limitation',
                description: 'One bot trying to do everything ends up doing nothing well.',
                insight: 'Just like teams, AI needs specialized roles to excel.'
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-primary hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl group-hover:from-primary/10 group-hover:to-secondary/10 transition-all">
                    <problem.icon className="h-6 w-6 text-neutral-700 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 leading-relaxed">
                      {problem.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      → {problem.insight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The Solution Approach */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl border border-primary/10 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                A Better Approach
              </h3>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                The businesses seeing real results from AI do not use generic chatbots.
                They build <span className="font-bold text-primary">custom systems</span> that understand their unique processes,
                integrate with their tools, and work like an extension of their team.
              </p>

              {/* Key Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-2">Specialized Agents</p>
                  <p className="text-sm text-neutral-600">Each AI handles what it does best</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-2">Deep Integration</p>
                  <p className="text-sm text-neutral-600">Connected to your actual systems</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent1">3</span>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-2">Custom Training</p>
                  <p className="text-sm text-neutral-600">Built for your specific business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProblemSection;
