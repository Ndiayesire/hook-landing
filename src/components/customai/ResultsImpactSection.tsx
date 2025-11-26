/**
 * ResultsImpactSection Component - Mia.inc Minimal Style
 *
 * Clean results and impact metrics.
 */

import React from 'react';
import Section from '../common/Section';
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';

const ResultsImpactSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Real Impact
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Businesses using custom AI systems see measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-secondary mb-2">3-5x</div>
            <p className="text-neutral-900 font-semibold mb-1">ROI</p>
            <p className="text-neutral-600 text-sm">Within first year</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-secondary mb-2">80%</div>
            <p className="text-neutral-900 font-semibold mb-1">Automation</p>
            <p className="text-neutral-600 text-sm">Of customer interactions</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
            <p className="text-neutral-900 font-semibold mb-1">Always Working</p>
            <p className="text-neutral-600 text-sm">Never stops qualifying</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-secondary mb-2">50%</div>
            <p className="text-neutral-900 font-semibold mb-1">Time Saved</p>
            <p className="text-neutral-600 text-sm">On status meetings</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResultsImpactSection;
