/**
 * DealershipNumbersSection Component - Mia.inc Minimal Style
 *
 * Clean ROI and impact metrics.
 */

import React from 'react';
import Section from '../common/Section';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const DealershipNumbersSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            The Numbers
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            What this system does for your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
            <p className="text-neutral-900 font-semibold mb-1">Lead Capture</p>
            <p className="text-neutral-600 text-sm">More after-hours leads</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Target className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-primary mb-2">82%</div>
            <p className="text-neutral-900 font-semibold mb-1">Reduction</p>
            <p className="text-neutral-600 text-sm">In lost opportunities</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <p className="text-neutral-900 font-semibold mb-1">Coverage</p>
            <p className="text-neutral-600 text-sm">Never miss a lead</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-primary mb-2">$25K+</div>
            <p className="text-neutral-900 font-semibold mb-1">Monthly Revenue</p>
            <p className="text-neutral-600 text-sm">Additional per month</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DealershipNumbersSection;
