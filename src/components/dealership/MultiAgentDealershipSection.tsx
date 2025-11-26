/**
 * MultiAgentDealershipSection Component - Mia.inc Minimal Style
 *
 * Clean explanation of the 4-agent dealership system.
 */

import React from 'react';
import Section from '../common/Section';
import { Brain, Target, Database, BarChart3 } from 'lucide-react';

const MultiAgentDealershipSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Your Digital Sales Floor
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Four specialized agents working together to qualify leads and close deals 24/7.
          </p>
        </div>

        {/* The 4 Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Brain,
              title: 'The Orchestro',
              role: 'Sales Manager',
              description: 'Analyzes every inquiry, detects buyer intent, and routes to the right specialist instantly.'
            },
            {
              icon: Target,
              title: 'The SalesAgent',
              role: 'The Closer',
              description: 'Qualifies leads using 5-level scoring, adapts conversation style, and books appointments automatically.'
            },
            {
              icon: Database,
              title: 'The InventoryAgent',
              role: 'Product Expert',
              description: 'Connected to your entire inventory. Provides intelligent recommendations with real-time availability.'
            },
            {
              icon: BarChart3,
              title: 'The LeadScoringAgent',
              role: 'The Qualifier',
              description: 'Scores every lead using BANT framework. Your sales team only talks to qualified buyers.'
            }
          ].map((agent, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <agent.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-secondary mb-2">{agent.title}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{agent.role}</p>
              <p className="text-neutral-600 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lead Scoring Explained */}
        <div className="mt-20 bg-white border border-neutral-200 rounded-lg p-12 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-secondary text-center">
              5-Level Lead Scoring
            </h3>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Every lead is automatically scored from 1 to 5 based on buyer readiness.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg">
                <span className="bg-neutral-400 text-white font-bold px-4 py-2 rounded text-lg min-w-[80px] text-center">Score 1</span>
                <span className="text-neutral-700">Service Request</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg">
                <span className="bg-neutral-500 text-white font-bold px-4 py-2 rounded text-lg min-w-[80px] text-center">Score 2</span>
                <span className="text-neutral-700">Just Browsing</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg">
                <span className="bg-warning text-white font-bold px-4 py-2 rounded text-lg min-w-[80px] text-center">Score 3</span>
                <span className="text-neutral-700">Getting Serious</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <span className="bg-primary text-white font-bold px-4 py-2 rounded text-lg min-w-[80px] text-center">Score 4</span>
                <span className="text-neutral-900 font-semibold">Hot Lead - Ready to Buy</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary">
                <span className="bg-error text-white font-bold px-4 py-2 rounded text-lg min-w-[80px] text-center">Score 5</span>
                <span className="text-neutral-900 font-bold">Ultra Hot - Close NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiAgentDealershipSection;
