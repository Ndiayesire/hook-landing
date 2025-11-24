/**
 * ResultsImpactSection Component
 *
 * Highlights the measurable impact and ROI of the Custom AI System
 * with large stat cards and reframes the investment question
 * from "Can you afford it?" to "Can you afford NOT to?"
 */

import React from 'react';
import Section from '../common/Section';
import { Calendar, Mail, Clock, TrendingUp } from 'lucide-react';

const ResultsImpactSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
          What This Means for Your Bottom Line
        </h2>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 50% Fewer Meetings */}
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-md transition-shadow border-2 border-primary/20">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-primary mb-2">50%</div>
            <p className="text-gray-700 font-semibold">Fewer Status Meetings</p>
            <p className="text-sm text-gray-600 mt-2">Your team focuses on growth, not updates</p>
          </div>

          {/* 70% Fewer Emails */}
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-md transition-shadow border-2 border-success/20">
            <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-success mb-2">70%</div>
            <p className="text-gray-700 font-semibold">Fewer Emails</p>
            <p className="text-sm text-gray-600 mt-2">Less friction, faster execution</p>
          </div>

          {/* 24/7 AI */}
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-md transition-shadow border-2 border-accent2/20">
            <div className="h-16 w-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-accent2 mb-2">24/7</div>
            <p className="text-gray-700 font-semibold">AI Conversion</p>
            <p className="text-sm text-gray-600 mt-2">Revenue while you sleep</p>
          </div>

          {/* Total Transparency */}
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-md transition-shadow border-2 border-primary/20">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-700 font-semibold">Total Transparency</p>
            <p className="text-sm text-gray-600 mt-2">Trust = Long-term relationships</p>
          </div>
        </div>

        {/* Reframed Question */}
        <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The Question Isn't "Can You Afford This?"
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
            The Question Is: Can You Afford NOT To?
          </h3>

          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-100">
            <p className="leading-relaxed">
              While your competitors waste time with generic chatbots and keep clients in the dark with weekly email updates...
            </p>
            <div className="space-y-4 my-8">
              <p className="font-bold text-white">✓ Your customers are getting instant, intelligent responses from specialized AI agents.</p>
              <p className="font-bold text-white">✓ Your team is coordinating seamlessly through a unified dashboard.</p>
              <p className="font-bold text-white">✓ You're watching your project progress in real-time, 24/7.</p>
            </div>
          </div>
        </div>

        {/* Competitive Contrast */}
        <div className="mt-12 bg-white rounded-2xl p-10 shadow-soft border-l-4 border-primary">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
              While They Promise, We Deliver
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-bold text-error mb-4">Your Competitors:</h5>
                <ul className="space-y-3">
                  <li className="text-gray-700">• Still figuring out ChatGPT</li>
                  <li className="text-gray-700">• Sending weekly status emails</li>
                  <li className="text-gray-700">• Selling generic solutions</li>
                  <li className="text-gray-700">• Keeping clients guessing</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold text-success mb-4">You (With HookTXT):</h5>
                <ul className="space-y-3">
                  <li className="text-gray-700 font-semibold">• Dominating with custom AI systems</li>
                  <li className="text-gray-700 font-semibold">• Real-time transparency, always</li>
                  <li className="text-gray-700 font-semibold">• Specialized multi-agent approach</li>
                  <li className="text-gray-700 font-semibold">• Complete control and visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResultsImpactSection;
