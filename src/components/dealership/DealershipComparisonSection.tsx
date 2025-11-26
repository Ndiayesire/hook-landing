/**
 * DealershipComparisonSection Component - Mia.inc Minimal Style
 *
 * Clean comparison section.
 */

import React from 'react';
import Section from '../common/Section';

const DealershipComparisonSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            What Makes This Different
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            See how our system compares to generic chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Generic Chatbots</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>• One-size-fits-all solution</li>
              <li>• Can't access your inventory</li>
              <li>• No lead scoring</li>
              <li>• Basic question answering</li>
              <li>• Monthly subscription</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">HookTXT Dealership AI</h3>
            <ul className="space-y-3 text-neutral-900 font-medium">
              <li>• Built specifically for your dealership</li>
              <li>• Real-time DMS integration</li>
              <li>• Intelligent 5-level scoring</li>
              <li>• Qualifies and closes leads</li>
              <li>• Custom system you own</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DealershipComparisonSection;
