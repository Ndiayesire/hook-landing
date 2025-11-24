/**
 * BenefitsSection Component
 *
 * Shows the four major benefits: Financial Impact, Time Freedom,
 * Scalable Growth, and Competitive Advantage with ROI calculator.
 */

import React from 'react';
import Section from '../common/Section';
import { DollarSign, Clock, TrendingUp, Trophy } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            What This Means For <span className="text-accent2">Your Business</span>
          </h2>
        </div>

        {/* Benefit 1: Financial Impact with ROI Calculator */}
        <div className="mb-12 bg-white rounded-xl p-8 md:p-10 border-2 border-primary shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-success/10 rounded-lg">
              <DollarSign className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">IMMEDIATE FINANCIAL IMPACT</h3>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-primary mb-4">Scenario: Your store gets 10,000 visitors/month</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">Current conversion rate: 2%</span>
                <span className="font-bold text-gray-800">200 sales</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border-2 border-success">
                <span className="text-gray-700 font-semibold">With AI Sales Agent: 4%</span>
                <span className="font-bold text-success text-xl">400 sales</span>
              </div>

              <div className="text-center py-4">
                <div className="text-3xl font-bold text-primary mb-2">200 extra sales per month</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-success to-success-dark text-white rounded-xl p-8 text-center">
            <p className="text-lg mb-4">If your average order value is <span className="font-bold text-2xl">$300</span>:</p>
            <div className="space-y-3">
              <div className="text-2xl">
                → <span className="font-bold text-3xl">$60,000</span> in additional monthly revenue
              </div>
              <div className="text-2xl">
                → <span className="font-bold text-3xl">$720,000</span> annually
              </div>
            </div>
            <p className="text-xl font-semibold mt-6 pt-6 border-t border-white/30">
              From a one-time setup investment.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Benefit 2: Time Freedom */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
            <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">⏰ TIME FREEDOM</h3>

            <div className="mb-4">
              <p className="text-sm font-semibold text-error mb-2">Before:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Answering same questions 50x/day</li>
                <li>• Responding to inquiries at odd hours</li>
                <li>• Hiring, training, managing support staff</li>
                <li>• Worrying about coverage gaps</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-success mb-2">After:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• AI handles 80% of inquiries automatically</li>
                <li>• You focus on growth, not repetitive tasks</li>
                <li>• Support team handles complex issues only</li>
                <li>• Sleep at night knowing no leads are lost</li>
              </ul>
            </div>
          </div>

          {/* Benefit 3: Scalable Growth */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
            <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">📈 SCALABLE GROWTH</h3>

            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-sm font-semibold text-error mb-2">The problem with human sales teams:</p>
              <p className="text-sm text-gray-600">
                → More traffic = need more people = higher costs
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-success mb-2">The advantage of AI:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ Handles 1 conversation or 1,000 simultaneously</li>
                <li>→ Same quality every time</li>
                <li>→ Zero additional cost to scale</li>
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-bold text-primary">
                You can 10X your traffic tomorrow. Your AI won't break a sweat.
              </p>
            </div>
          </div>

          {/* Benefit 4: Competitive Advantage */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
            <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 COMPETITIVE ADVANTAGE</h3>

            <p className="text-sm text-gray-600 mb-4">
              Your competitors have chatbots. But theirs are dumb.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-1">Generic chatbot:</p>
              <p className="text-sm text-gray-700">"I can help you with FAQs!"</p>
            </div>

            <div className="bg-success/10 rounded-lg p-4 border-2 border-success">
              <p className="text-xs font-semibold text-success mb-1">Your AI Sales Agent:</p>
              <p className="text-sm text-gray-800 font-medium">
                "Based on what you told me, the BTS2 is perfect for you. Here's your cart link — ready to try it risk-free for 30 days?"
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700">
                One is a helper. The other is a closer.
              </p>
              <p className="text-sm font-bold text-primary mt-2">
                Guess which one makes sales?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;
