/**
 * ComparisonSection Component - Dan Martell Educational Approach
 *
 * Educational comparison showing why custom AI works better.
 * Focus on insights and learning, not attacking competitors.
 */

import React from 'react';
import Section from '../common/Section';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
            Why Custom-Built Works Better
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The difference between template solutions and systems built specifically for your business.
          </p>
        </div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Built Around Your Process',
              challenge: 'Generic platforms force you to adapt your workflow to their system.',
              solution: 'We build AI that adapts to how you already work, integrating seamlessly with your existing process.'
            },
            {
              icon: Zap,
              title: 'Trained on Your Data',
              challenge: 'Off-the-shelf AI knows generic information but nothing about your business.',
              solution: 'Custom systems trained on your products, services, and customer interactions for relevant responses every time.'
            },
            {
              icon: Users,
              title: 'Multi-Agent Specialization',
              challenge: 'Single chatbots try to do everything and end up being mediocre at all of it.',
              solution: 'Specialized agents working together—each excellent at their specific role in your customer journey.'
            },
            {
              icon: Lightbulb,
              title: 'Continuous Optimization',
              challenge: 'Set-it-and-forget-it solutions get outdated and less effective over time.',
              solution: 'Ongoing refinement based on performance data and your evolving business needs.'
            }
          ].map((principle, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-large transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {principle.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500 mb-1">The Challenge</p>
                      <p className="text-neutral-600 leading-relaxed">{principle.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">Our Approach</p>
                      <p className="text-neutral-700 leading-relaxed font-medium">{principle.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              The Result
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              When AI is custom-built for your business, it does not just automate tasks—it becomes a strategic asset that grows more valuable over time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                <div className="text-4xl font-bold text-primary mb-2">3-4x</div>
                <p className="text-sm text-neutral-600">Faster implementation vs rebuilding your process</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                <div className="text-4xl font-bold text-secondary mb-2">87%</div>
                <p className="text-sm text-neutral-600">Of tasks handled without human intervention</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                <div className="text-4xl font-bold text-accent1 mb-2">24/7</div>
                <p className="text-sm text-neutral-600">Consistent performance, no off hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComparisonSection;
