/**
 * PricingSection Component - Mia.inc Minimal Style
 *
 * Clean pricing display.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { ArrowRight, Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Pricing
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Custom AI agent built for your e-commerce store.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-primary rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-secondary mb-4">E-commerce AI Agent</h3>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Every store is different. We build a custom solution based on your products, traffic, and goals.
            </p>

            <div className="space-y-4 mb-8 text-left">
              {[
                'AI sales agent trained on your products',
                'Cart abandonment recovery',
                'Lead qualification & scoring',
                'Shopify integration',
                'Analytics dashboard',
                'Custom brand voice',
                'Continuous optimization'
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
              Typical ROI: 3X conversion increase + 72% cart recovery
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
