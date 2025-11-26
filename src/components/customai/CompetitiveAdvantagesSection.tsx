/**
 * CompetitiveAdvantagesSection Component - Mia.inc Minimal Style
 *
 * Clean section highlighting competitive advantages.
 */

import React from 'react';
import Section from '../common/Section';
import { Zap, Target, Shield, TrendingUp } from 'lucide-react';

const CompetitiveAdvantagesSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            What Makes Us Different
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Not templates. Not plugins. Real custom development built for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Zap,
              title: 'Multi-Agent Architecture',
              description: 'Specialized AI agents working together, each excellent at their specific role.'
            },
            {
              icon: Target,
              title: 'Custom Integration',
              description: 'Connects to your existing systems—CRM, databases, communication tools.'
            },
            {
              icon: Shield,
              title: 'Complete Transparency',
              description: 'Real-time dashboards showing every conversation and system action.'
            },
            {
              icon: TrendingUp,
              title: 'Continuous Optimization',
              description: 'We monitor, measure, and improve your system for maximum ROI.'
            }
          ].map((advantage, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <advantage.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {advantage.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CompetitiveAdvantagesSection;
