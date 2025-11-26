/**
 * HomeWhyHookTXTSection Component - Dan Martell Value-First Approach
 *
 * Showcases unique methodology and approach without bashing competitors.
 * Focus on what makes the system effective, not what others lack.
 */

import React from 'react';
import { Target, Layers, TrendingUp, Users, Settings, Globe, MessageSquare, LineChart } from 'lucide-react';

const HomeWhyHookTXTSection: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-secondary">What Makes Us Different</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              Our Unique Approach
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Here is what we have learned building AI systems for businesses that actually scale.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: 'Business-First Design',
                description: 'We start with your revenue model, not the technology. Every feature serves your specific business goals.',
                benefits: [
                  'Custom workflows match your sales process',
                  'Integrated with tools you already use',
                  'Aligned with your customer journey'
                ]
              },
              {
                icon: Layers,
                title: 'Multi-Agent Architecture',
                description: 'Specialized AI agents working together, each excellent at their specific role.',
                benefits: [
                  'Router for intent understanding',
                  'Specialists for deep expertise',
                  'Qualifier for conversion optimization'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven Development',
                description: 'We measure what matters. Every conversation tracked, every lead scored, every dollar attributed.',
                benefits: [
                  'Real-time performance dashboards',
                  'Clear ROI metrics',
                  'Continuous optimization based on data'
                ]
              },
              {
                icon: Users,
                title: 'Partnership Model',
                description: 'You are not just a client. We succeed when you succeed. Ongoing optimization included.',
                benefits: [
                  'Monthly strategy sessions',
                  'Proactive improvements',
                  'Dedicated support team'
                ]
              }
            ].map((principle, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-large transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                      <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4">
                        <principle.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl border border-primary/10 p-10 md:p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What You Get With HookTXT
              </h3>
              <p className="text-lg text-neutral-600">
                Everything needed to scale your customer conversations effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Settings,
                  title: 'Custom Built',
                  description: 'Designed specifically for your business, not a template'
                },
                {
                  icon: Globe,
                  title: 'Bilingual',
                  description: 'Seamless English and French for Canadian markets'
                },
                {
                  icon: MessageSquare,
                  title: 'Transparent',
                  description: 'Real-time dashboard showing every conversation'
                },
                {
                  icon: LineChart,
                  title: 'Optimized',
                  description: 'Continuous improvement based on performance data'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Framework CTA */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center text-white shadow-large">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Built for Scale, Not Subscription
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Most AI tools are designed to scale the vendor, not your business.
                We build systems designed to grow with you—from first conversation to thousands per day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-sm text-white/80">Custom Development</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <p className="text-sm text-white/80">Active Performance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-secondary mb-2">∞</div>
                  <p className="text-sm text-white/80">Scaling Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyHookTXTSection;
