/**
 * ResultsImpactSection Component - Dan Martell Value-Focus
 *
 * Show business impact without aggressive fear messaging.
 * Focus on transformation and growth opportunities.
 */

import React from 'react';
import Section from '../common/Section';
import { Calendar, Users, Clock, TrendingUp, BarChart3, Zap } from 'lucide-react';

const ResultsImpactSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <BarChart3 className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Business Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
            What This Means for Your Business
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The measurable impact custom AI systems have on operations and growth.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              stat: '87%',
              label: 'Tasks Automated',
              description: 'Conversations handled without human intervention',
              color: 'primary'
            },
            {
              icon: Clock,
              stat: '24/7',
              label: 'Always Available',
              description: 'Capturing leads and answering questions around the clock',
              color: 'secondary'
            },
            {
              icon: TrendingUp,
              stat: '3-5x',
              label: 'Response Speed',
              description: 'Faster than traditional support channels',
              color: 'accent1'
            },
            {
              icon: Calendar,
              stat: '60%',
              label: 'Time Saved',
              description: 'Your team focuses on high-value activities',
              color: 'primary'
            },
            {
              icon: Zap,
              stat: '100%',
              label: 'Consistency',
              description: 'Same quality every interaction, every time',
              color: 'secondary'
            },
            {
              icon: BarChart3,
              stat: '92%',
              label: 'Accuracy Rate',
              description: 'Trained on your specific business knowledge',
              color: 'accent1'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-large hover:border-primary/30 transition-all duration-300 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-8 w-8 text-${item.color}`} />
              </div>
              <div className={`text-5xl font-bold text-${item.color} mb-2`}>{item.stat}</div>
              <p className="text-neutral-900 font-semibold mb-2">{item.label}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-12 text-white shadow-large mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Real Question
            </h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              It is not about whether AI can help your business. That is already proven.
              The question is: will your AI be built for everyone, or built for you?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="font-bold text-secondary mb-2">Generic Solutions</p>
                <p className="text-white/80 text-sm">Work okay for basic needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="font-bold text-secondary mb-2">Custom Systems</p>
                <p className="text-white/80 text-sm">Built around your specific process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="font-bold text-secondary mb-2">The Difference</p>
                <p className="text-white/80 text-sm">Strategic advantage vs commodity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Transformation */}
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-10 md:p-12 border border-neutral-100 shadow-card">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-900">
              From Operational Tool to Strategic Asset
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">What Changes</h4>
                <ul className="space-y-3">
                  {[
                    'Team focuses on complex, high-value work',
                    'Consistent service quality 24/7',
                    'Faster response times for customers',
                    'Real-time insights from every interaction'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">What Stays the Same</h4>
                <ul className="space-y-3">
                  {[
                    'Your brand voice and values',
                    'Human oversight and control',
                    'Your existing tools and process',
                    'Personal touch for key moments'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResultsImpactSection;
