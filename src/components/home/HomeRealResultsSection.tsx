/**
 * HomeRealResultsSection Component - Mia.inc Minimal Style
 *
 * Clean stats and results with minimal design.
 * Focus on metrics and clarity.
 */

import React from 'react';
import { TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

const HomeRealResultsSection: React.FC = () => {
  return (
    <div className="py-32 md:py-48 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Real Results
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              See how businesses like yours are scaling conversations and capturing more revenue.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-secondary mb-2">$3.2M+</div>
              <p className="text-neutral-900 font-semibold mb-1">Revenue Generated</p>
              <p className="text-neutral-600 text-sm">Across all implementations</p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-secondary mb-2">18,500+</div>
              <p className="text-neutral-900 font-semibold mb-1">Leads Captured</p>
              <p className="text-neutral-600 text-sm">That would have been lost</p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-secondary mb-2">87%</div>
              <p className="text-neutral-900 font-semibold mb-1">Average ROI</p>
              <p className="text-neutral-600 text-sm">Within first 6 months</p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-neutral-900 font-semibold mb-1">Always Working</p>
              <p className="text-neutral-600 text-sm">Including holidays & weekends</p>
            </div>
          </div>

          {/* Case Study Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dealership Case */}
            <div className="bg-white border border-neutral-200 rounded-lg p-8">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary mb-4">
                AUTO DEALERSHIP
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                $372K Additional Revenue
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                A mid-size Quebec dealership was losing leads every night and weekend.
                Now capturing leads 24/7 with qualified appointments ready each morning.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">42 qualified leads per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">&lt;2 min average response time</span>
                </div>
              </div>
            </div>

            {/* Ecommerce Case */}
            <div className="bg-white border border-neutral-200 rounded-lg p-8">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary mb-4">
                E-COMMERCE
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                68% Cart Recovery Rate
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                A fashion brand watched 73% of shoppers abandon carts. Real-time AI assistance
                now converts hesitant browsers into confident buyers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">$180K recovered in 90 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">+31% average order value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRealResultsSection;
