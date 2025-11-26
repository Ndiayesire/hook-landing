/**
 * FeaturesBreakdownSection Component - Mia.inc Minimal Style
 *
 * Clean features grid.
 */

import React from 'react';
import Section from '../common/Section';
import { Check } from 'lucide-react';

const FeaturesBreakdownSection: React.FC = () => {
  const features = [
    'Instant visitor engagement',
    'Real-time product recommendations',
    'Cart abandonment recovery',
    'Lead qualification scoring',
    'Objection handling',
    'FAQ answering',
    '24/7 availability',
    'Multi-language support',
    'Shopify integration',
    'Analytics dashboard',
    'Custom brand voice',
    'Continuous optimization'
  ];

  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Features
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Everything you need to convert more visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-lg p-6">
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-neutral-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesBreakdownSection;
