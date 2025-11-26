/**
 * ComparisonSection Component - Mia.inc Minimal Style
 *
 * Clean comparison showing the difference.
 */

import React from 'react';
import Section from '../common/Section';

const ComparisonSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            The Difference
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            See how custom AI systems compare to generic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Generic AI Platforms</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>• One-size-fits-all templates</li>
              <li>• No integration with your systems</li>
              <li>• Generic responses</li>
              <li>• Limited customization</li>
              <li>• Monthly subscription fees</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Custom AI Systems</h3>
            <ul className="space-y-3 text-neutral-900 font-medium">
              <li>• Built specifically for your business</li>
              <li>• Deep system integration</li>
              <li>• Trained on your data</li>
              <li>• Fully customizable</li>
              <li>• Owned by you</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComparisonSection;
