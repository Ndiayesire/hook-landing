/**
 * MultiAgentSystemSection Component - Dan Martell Educational Approach
 *
 * Explains multi-agent architecture through clear analogy and examples.
 * Educational and insights-driven, not aggressive.
 */

import React from 'react';
import Section from '../common/Section';
import { Network, User, Database, TrendingUp, Sparkles } from 'lucide-react';

const MultiAgentSystemSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Multi-Agent Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
            Why Specialist Teams Beat <br />Single-Agent Systems
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Think of it like your business—you do not hire one person to do sales, support, and operations.
            Why would you ask one AI to handle everything?
          </p>
        </div>

        {/* The Analogy */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-card">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 mb-4">
                  <User className="h-8 w-8 text-neutral-400" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Single-Agent Approach</h3>
                <p className="text-neutral-600">One employee doing ten different jobs</p>
              </div>
              <div className="space-y-3 bg-neutral-50 rounded-2xl p-6">
                <p className="text-neutral-700 leading-relaxed">
                  When one AI tries to handle routing, product knowledge, sales, and support—it becomes mediocre at everything.
                </p>
                <p className="text-neutral-600 text-sm italic">
                  Like asking your top salesperson to also manage inventory and handle customer service.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20 shadow-large">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Multi-Agent System</h3>
                <p className="text-neutral-700 font-medium">Specialized team working together</p>
              </div>
              <div className="space-y-3 bg-white rounded-2xl p-6">
                <p className="text-neutral-900 leading-relaxed font-medium">
                  Each agent excels at their specific role—routing, product expertise, qualification, closing.
                </p>
                <p className="text-primary text-sm font-semibold">
                  Like your actual business: specialists collaborating for exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Specialized Agents */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-neutral-900">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Network,
                title: 'Router Agent',
                role: 'First Contact',
                description: 'Analyzes intent and routes to the right specialist instantly. Like a skilled receptionist who knows exactly who can help.',
                color: 'primary'
              },
              {
                icon: Database,
                title: 'Knowledge Agent',
                role: 'Product Expert',
                description: 'Deep expertise in your products and services. Answers technical questions with accuracy and context.',
                color: 'secondary'
              },
              {
                icon: User,
                title: 'Sales Agent',
                role: 'The Closer',
                description: 'Qualifies leads, handles objections, and guides prospects toward decisions based on their needs.',
                color: 'accent1'
              },
              {
                icon: TrendingUp,
                title: 'Scoring Agent',
                role: 'The Qualifier',
                description: 'Identifies high-intent prospects and prioritizes them for your team. No more time wasted on tire-kickers.',
                color: 'primary'
              }
            ].map((agent, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 border border-neutral-100 hover:shadow-large hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-${agent.color}/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <agent.icon className={`h-7 w-7 text-${agent.color}`} />
                </div>
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-neutral-900">{agent.title}</h4>
                  <p className={`text-sm font-medium text-${agent.color} mt-1`}>{agent.role}</p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How They Work Together */}
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-large border border-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-900">
              How They Work Together
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Customer Arrives</h4>
                  <p className="text-neutral-600">Router Agent instantly analyzes their intent and language</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center font-bold text-secondary">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Smart Routing</h4>
                  <p className="text-neutral-600">Connects them with the specialist best equipped to help</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent1/10 rounded-xl flex items-center justify-center font-bold text-accent1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Expert Engagement</h4>
                  <p className="text-neutral-600">Specialist agent provides accurate, relevant responses</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Intelligent Scoring</h4>
                  <p className="text-neutral-600">Scoring Agent evaluates intent and prioritizes for follow-up</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 text-center">
              <p className="text-lg font-semibold text-neutral-900">
                The result: Every customer gets expert-level service, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiAgentSystemSection;
