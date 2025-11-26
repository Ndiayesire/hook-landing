/**
 * CustomAIPricingSection Component - Mia.inc Minimal Style
 *
 * Clean pricing section.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { ArrowRight, Check } from 'lucide-react';

const CustomAIPricingSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Investment
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Custom development built specifically for your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-primary rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-secondary mb-4">Custom AI System</h3>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Every business is different. We build a custom solution based on your specific needs, systems, and goals.
            </p>

            <div className="space-y-4 mb-8 text-left">
              {[
                'Multi-agent AI architecture',
                'Custom system integration',
                'Real-time dashboards',
                'Bilingual support (EN/FR)',
                'Training & documentation',
                'Ongoing optimization',
                'Priority support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              to="/contact"
              variant="primary"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all group inline-flex items-center font-semibold text-lg"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-neutral-500 mt-6 text-sm">
              Typical timeline: 6-10 weeks from discovery to launch
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CustomAIPricingSection;
