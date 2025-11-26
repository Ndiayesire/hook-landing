/**
 * BenefitsSection Component - Mia.inc Minimal Style
 *
 * Clean benefits grid.
 */

import React from 'react';
import Section from '../common/Section';
import { Clock, DollarSign, Users, Zap } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Benefits
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            What this means for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary mb-3">24/7 Coverage</h3>
            <p className="text-neutral-600">Never miss a sale, any time of day</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary mb-3">Higher Revenue</h3>
            <p className="text-neutral-600">Recover abandoned carts automatically</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary mb-3">Better Experience</h3>
            <p className="text-neutral-600">Instant answers for every customer</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary mb-3">Scalable</h3>
            <p className="text-neutral-600">Handle unlimited conversations</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;
