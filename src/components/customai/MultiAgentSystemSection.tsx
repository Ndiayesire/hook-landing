/**
 * MultiAgentSystemSection Component - Mia.inc Minimal Style
 *
 * Clean explanation of multi-agent architecture.
 * Simple, educational, and clear.
 */

import React from 'react';
import Section from '../common/Section';
import { Network, User, Database, TrendingUp } from 'lucide-react';

const MultiAgentSystemSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Why Specialist Teams Beat
            <br />
            Single-Agent Systems
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Think of it like your business—you don't hire one person to do sales, support, and operations.
            Why would you ask one AI to handle everything?
          </p>
        </div>

        {/* The Specialized Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Network,
              title: 'Router Agent',
              role: 'First Contact',
              description: 'Analyzes intent and routes to the right specialist instantly.'
            },
            {
              icon: Database,
              title: 'Knowledge Agent',
              role: 'Product Expert',
              description: 'Deep expertise in your products and services with accuracy.'
            },
            {
              icon: User,
              title: 'Sales Agent',
              role: 'The Closer',
              description: 'Qualifies leads and guides prospects toward decisions.'
            },
            {
              icon: TrendingUp,
              title: 'Scoring Agent',
              role: 'The Qualifier',
              description: 'Identifies high-intent prospects and prioritizes them.'
            }
          ].map((agent, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <agent.icon className="h-10 w-10 text-primary mb-6" />
              <h4 className="text-2xl font-bold text-secondary mb-2">{agent.title}</h4>
              <p className="text-sm font-semibold text-primary mb-3">{agent.role}</p>
              <p className="text-neutral-600 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        {/* How They Work Together */}
        <div className="bg-white border border-neutral-200 rounded-lg p-12 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              How They Work Together
            </h3>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Each agent excels at their specific role. Together, they create expert-level service for every customer interaction.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiAgentSystemSection;
