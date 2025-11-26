/**
 * RealConversationsSection Component - Mia.inc Minimal Style
 *
 * Clean section showing example conversations.
 */

import React from 'react';
import Section from '../common/Section';

const RealConversationsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            See It In Action
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Real conversations that capture leads your competitors are losing.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-12 md:p-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-900 font-semibold mb-2">Customer (11 PM):</p>
                <p className="text-neutral-600">"You have any Tacomas in stock?"</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <p className="text-secondary font-semibold mb-2">AI Agent:</p>
                <p className="text-neutral-700">
                  "Yes! We have 3 Tacomas available. Here are your options with pricing and availability.
                  Would you like to schedule a test drive?"
                </p>
              </div>
            </div>

            <div className="text-center py-8">
              <p className="text-2xl font-bold text-primary">Lead Captured. Appointment Booked.</p>
              <p className="text-neutral-600 mt-2">All while your competitors slept.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RealConversationsSection;
