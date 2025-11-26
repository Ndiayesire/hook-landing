/**
 * SolutionSection Component - Mia.inc Minimal Style
 *
 * Clean solution explanation.
 */

import React from 'react';
import Section from '../common/Section';
import { Bot, MessageSquare, TrendingUp } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            The Solution
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            AI Sales Agent that engages every visitor, answers questions, and guides them to purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <Bot className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-secondary mb-4">Instant Engagement</h3>
            <p className="text-neutral-600 leading-relaxed">
              Engages visitors immediately. Answers questions in real-time. Works 24/7.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-secondary mb-4">Smart Conversations</h3>
            <p className="text-neutral-600 leading-relaxed">
              Understands context. Handles objections. Adapts to buyer readiness.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-secondary mb-4">Proven Results</h3>
            <p className="text-neutral-600 leading-relaxed">
              72% cart recovery rate. 3X conversion increase. Tracked ROI.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
