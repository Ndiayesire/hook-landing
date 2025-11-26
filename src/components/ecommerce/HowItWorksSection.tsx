/**
 * HowItWorksSection Component - Mia.inc Minimal Style
 *
 * Clean step-by-step process.
 */

import React from 'react';
import Section from '../common/Section';

const HowItWorksSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Simple setup. Powerful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '1', title: 'Visitor Arrives', desc: 'Customer lands on your site' },
            { number: '2', title: 'AI Engages', desc: 'Agent starts conversation instantly' },
            { number: '3', title: 'Qualifies Lead', desc: 'Understands needs and handles objections' },
            { number: '4', title: 'Closes Sale', desc: 'Guides to purchase or captures contact' }
          ].map((step, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
