/**
 * CaseStudySection Component
 *
 * Real case study from Mitolux showing results and proof.
 * Includes aggregate statistics across all clients.
 */

import React from 'react';
import Section from '../common/Section';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const CaseStudySection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Real Results From <span className="text-accent2">Real Businesses</span>
          </h2>
        </div>

        {/* Main Case Study */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 md:p-10 border-2 border-primary mb-12 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              CASE STUDY: Mitolux
            </h3>
            <p className="text-lg text-gray-600">(Light Therapy E-Commerce)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Challenge */}
            <div>
              <h4 className="text-xl font-bold text-error mb-4">Challenge:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-error mt-1">•</span>
                  <span>High traffic, low conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error mt-1">•</span>
                  <span>Complex products requiring education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error mt-1">•</span>
                  <span>Medical questions creating compliance risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error mt-1">•</span>
                  <span>Small team stretched thin</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Solution:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI Sales Agent with lead scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Medical question filter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Product recommendation engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tracked cart links</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="bg-success/10 rounded-xl p-6 border-2 border-success mb-6">
            <h4 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Results:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">24/7 coverage with zero additional headcount</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">80% of questions handled automatically</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">Zero compliance incidents (medical filter working)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">Trackable ROI via Shopify Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">Higher conversion rates on qualified traffic</span>
              </div>
            </div>
          </div>

          {/* Owner Quote */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">Owner's Take:</p>
            <p className="text-gray-700 italic leading-relaxed">
              "It's like having our best salesperson available 24/7. And we can prove exactly how much revenue it generates. No other investment gives us that kind of transparency."
            </p>
          </div>
        </div>

        {/* Aggregate Statistics */}
        <div className="bg-primary text-white rounded-xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-secondary">
            THE NUMBERS THAT MATTER
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2-5X</div>
              <p className="text-sm text-gray-100">Average conversion rate lift on engaged traffic</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">&lt;2 sec</div>
              <p className="text-sm text-gray-100">Average response time</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">80-85%</div>
              <p className="text-sm text-gray-100">Questions handled automatically</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4.7/5</div>
              <p className="text-sm text-gray-100">Customer satisfaction on chatbot interactions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30-60</div>
              <p className="text-sm text-gray-100">Days to positive ROI (typically)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-gray-100">Continuous availability</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudySection;
