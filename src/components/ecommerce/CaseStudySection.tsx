/**
 * CaseStudySection Component - Mia.inc Minimal Style
 *
 * Clean case study display.
 */

import React from 'react';
import Section from '../common/Section';

const CaseStudySection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Real Results
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            See what's possible with AI Sales Agent.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-12 md:p-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-secondary mb-8 text-center">
              E-commerce Fashion Store
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">72%</div>
                <p className="text-neutral-600">Cart Recovery Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">3.2x</div>
                <p className="text-neutral-600">Conversion Increase</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">$45K</div>
                <p className="text-neutral-600">Monthly Revenue Increase</p>
              </div>
            </div>

            <p className="text-xl text-neutral-600 text-center italic">
              "The AI agent captures leads we would have lost. It's like having a sales team that never sleeps."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudySection;
