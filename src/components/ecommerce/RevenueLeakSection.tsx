/**
 * RevenueLeakSection Component - Mia.inc Minimal Style
 *
 * Clean problem statement section.
 */

import React from 'react';
import Section from '../common/Section';

const RevenueLeakSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            The Problem
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            You're paying for traffic. But most visitors leave without buying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-8 bg-white border border-neutral-200 rounded-lg">
            <div className="text-5xl font-bold text-neutral-400 mb-2">70%</div>
            <p className="text-neutral-600 text-sm">Leave without engaging</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-200 rounded-lg">
            <div className="text-5xl font-bold text-neutral-400 mb-2">20%</div>
            <p className="text-neutral-600 text-sm">Have basic questions</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-200 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">7%</div>
            <p className="text-neutral-600 text-sm">Need a small push</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-200 rounded-lg">
            <div className="text-5xl font-bold text-success mb-2">3%</div>
            <p className="text-neutral-600 text-sm">Actually purchase</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            What if you could capture 10% more?
          </p>
          <div className="bg-white border-2 border-primary rounded-lg p-12">
            <p className="text-xl text-neutral-600 mb-4">
              That's not 10% more revenue.
            </p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              That's 3X your sales.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RevenueLeakSection;
