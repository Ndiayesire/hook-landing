/**
 * RevenueLeakSection Component
 *
 * Problem agitation section highlighting the hidden revenue leak.
 * Shows the brutal statistics of visitor behavior and conversion opportunities.
 */

import React from 'react';
import Section from '../common/Section';

const RevenueLeakSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-primary">
          The Hidden Revenue Leak <span className="text-error">Killing Your E-Commerce Store</span>
        </h2>

        {/* Opening Narrative */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            You've invested thousands in traffic. Your ads are working. Visitors are landing on your site.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
            But then what happens?
          </p>
        </div>

        {/* Problem Scenarios */}
        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-primary font-bold text-xl">→</span>
            <p className="text-gray-700 leading-relaxed">
              They have a question at 11 PM. No one's there to answer.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-primary font-bold text-xl">→</span>
            <p className="text-gray-700 leading-relaxed">
              They comparison shop. Your competitor responds faster.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-primary font-bold text-xl">→</span>
            <p className="text-gray-700 leading-relaxed">
              They add to cart. Then abandon it. No follow-up.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-primary font-bold text-xl">→</span>
            <p className="text-gray-700 leading-relaxed">
              They email support. Wait 24 hours. Buy elsewhere.
            </p>
          </div>
        </div>

        {/* Brutal Truth Section */}
        <div className="bg-primary text-white rounded-xl p-8 md:p-10 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Here's the brutal truth:</h3>

          <p className="text-lg mb-6 text-center text-gray-100">
            For every <span className="text-secondary font-bold text-2xl">100 visitors</span> to your site:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-secondary mb-2">70</div>
              <p className="text-sm text-gray-100">leave without engaging</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-secondary mb-2">20</div>
              <p className="text-sm text-gray-100">ask basic questions your team answers 100x/day</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-secondary mb-2">7</div>
              <p className="text-sm text-gray-100">are ready to buy but need a small push</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-success-light mb-2">3</div>
              <p className="text-sm text-gray-100">actually purchase</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">
              You're converting <span className="text-error-light text-2xl">3%</span>. The other <span className="text-error-light text-2xl">97%</span> walk away.
            </p>
          </div>
        </div>

        {/* Opportunity Section */}
        <div className="text-center space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-primary">
            What if you could capture even <span className="text-success">10% more</span>?
          </p>

          <div className="bg-success/10 border-2 border-success rounded-xl p-8">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              That's not 10% more revenue.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-success">
              That's 3X your current sales.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-lg text-gray-700 mb-2">
              The difference? <span className="font-bold text-primary">Having the right conversation at the right time.</span>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              And unless you're hiring a 24/7 sales team (spoiler: you can't afford that), you need AI.
            </p>
            <p className="text-2xl font-bold text-primary">
              But not just any chatbot...
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RevenueLeakSection;
