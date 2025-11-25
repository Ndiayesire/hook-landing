/**
 * DealershipNumbersSection Component
 *
 * Shows the ROI numbers and business impact of the dealership AI system.
 * Includes lead capture improvements, sales efficiency, conversion rates, and revenue impact.
 */

import React from 'react';
import Section from '../common/Section';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const DealershipNumbersSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            The Numbers <span className="text-accent2">Don't Lie</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            What This System Does For Your Bottom Line
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Lead Capture */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Users className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Lead Capture</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-primary">3-5X</strong> more leads captured after hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-primary">82%</strong> reduction in lost opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-primary">24/7</strong> coverage - never miss a hot lead</span>
              </li>
            </ul>
          </div>

          {/* Sales Efficiency */}
          <div className="bg-gradient-to-br from-accent2/10 to-accent2/5 rounded-2xl p-6 border-2 border-accent2/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-accent2/10 p-4 rounded-xl">
                <Target className="h-10 w-10 text-accent2" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Sales Efficiency</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-accent2 font-bold">•</span>
                <span><strong className="text-accent2">67%</strong> of inquiries handled without human intervention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2 font-bold">•</span>
                <span>Sales team focuses on <strong className="text-accent2">Score 4-5</strong> leads only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2 font-bold">•</span>
                <span><strong className="text-accent2">4+ hours</strong> saved daily on tire-kickers</span>
              </li>
            </ul>
          </div>

          {/* Conversion Rates */}
          <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border-2 border-success/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-success/10 p-4 rounded-xl">
                <TrendingUp className="h-10 w-10 text-success" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Conversion Rates</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">•</span>
                <span><strong className="text-success">35%</strong> higher conversion on AI-qualified leads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">•</span>
                <span><strong className="text-success">Faster</strong> sales cycle - customers pre-qualified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">•</span>
                <span><strong className="text-success">Higher</strong> satisfaction - instant responses</span>
              </li>
            </ul>
          </div>

          {/* Revenue Impact */}
          <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-2xl p-6 border-2 border-warning/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-warning/10 p-4 rounded-xl">
                <DollarSign className="h-10 w-10 text-warning" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Revenue Impact</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-warning font-bold">•</span>
                <span><strong className="text-warning">15-25</strong> additional vehicles sold per month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warning font-bold">•</span>
                <span><strong className="text-warning">$300K-$500K</strong> additional revenue annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warning font-bold">•</span>
                <span>ROI: <strong className="text-warning">8-12X</strong> in first year</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed ROI Breakdown */}
        <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Average Dealership Impact</h3>
          <p className="text-center text-xl mb-8 text-gray-100">Based on dealerships selling 20 vehicles/month</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">50</div>
              <p className="text-lg font-semibold mb-1">Lost After-Hours Leads/Month</p>
              <p className="text-sm text-gray-100">Before HookTXT AI</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">35</div>
              <p className="text-lg font-semibold mb-1">Leads Captured/Month</p>
              <p className="text-sm text-gray-100">70% capture rate with AI</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">9</div>
              <p className="text-lg font-semibold mb-1">Additional Sales/Month</p>
              <p className="text-sm text-gray-100">25% close rate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">$3,500</div>
              <p className="text-lg font-semibold mb-1">Average Gross Profit</p>
              <p className="text-sm text-gray-100">Per vehicle</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">$31,500</div>
              <p className="text-lg font-semibold mb-1">Additional Monthly Revenue</p>
              <p className="text-sm text-gray-100">From captured leads</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-4 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-2">$378,000</div>
              <p className="text-lg font-semibold mb-1">Additional Annual Revenue</p>
              <p className="text-sm text-gray-100">Year one impact</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-secondary">
              And this is conservative. Many dealerships see even better results.
            </p>
          </div>
        </div>

        {/* Real-World Impact Statement */}
        <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What This Really Means:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg text-primary mb-3">Before HookTXT AI:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 50+ hot leads lost every month to competitors</li>
                <li>• Sales team wasting hours on unqualified leads</li>
                <li>• No visibility into after-hours traffic</li>
                <li>• Missing $300K+ in annual revenue</li>
                <li>• Competitors capturing YOUR customers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-success mb-3">After HookTXT AI:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Every lead captured and qualified automatically</li>
                <li>• Sales team focuses on high-value conversations</li>
                <li>• Complete transparency with real-time dashboard</li>
                <li>• $300K-$500K additional revenue yearly</li>
                <li>• You're capturing THEIR customers now</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DealershipNumbersSection;
