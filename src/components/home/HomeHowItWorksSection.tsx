/**
 * HomeHowItWorksSection Component - Dan Martell Framework Approach
 *
 * Clear 4-step framework explaining the process.
 * Educational and transparent, showing methodology.
 */

import React from 'react';
import { Search, Users, Zap, BarChart3, ArrowRight } from 'lucide-react';

const HomeHowItWorksSection: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              The 4-Step System
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A proven framework for building AI systems that actually drive results.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent1 opacity-20"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-hover hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Step Number Badge */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-card">
                      1
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                      <Search className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Discovery
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    We learn your business inside and out. Your processes, your customers, your goals.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Business process audit',
                      'Customer journey mapping',
                      'System integration review',
                      'Success metrics definition'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-hover hover:border-secondary/30 transition-all duration-300 h-full">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-card">
                      2
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Architecture
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    We design your multi-agent system. Specialized AI working together like a real team.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Agent role definition',
                      'Workflow design',
                      'Integration planning',
                      'Training data preparation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-hover hover:border-accent1/30 transition-all duration-300 h-full">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent1 to-accent1-dark rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-accent1 to-accent1-dark rounded-2xl w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-card">
                      3
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-accent1/10 to-accent1/5 rounded-2xl">
                      <Zap className="h-8 w-8 text-accent1" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Implementation
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    We build, train, and deploy your system. Integrated with your existing tools.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Custom AI development',
                      'System integration',
                      'Rigorous testing',
                      'Team training'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent1 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-hover hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-card">
                      4
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                      <BarChart3 className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Optimization
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    We monitor, measure, and continuously improve your system for maximum ROI.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Performance monitoring',
                      'A/B testing',
                      'Continuous refinement',
                      'Monthly strategy calls'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Agent Explanation */}
          <div className="mt-20 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-large border border-neutral-100 p-10 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Why Multi-Agent Systems Work Better
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Think of it like a company. You would not hire one person to do sales, support, and operations.
                  Why would you ask one AI to handle everything?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: 'The Router',
                    role: 'First Contact',
                    description: 'Understands visitor intent and routes to the right specialist instantly.'
                  },
                  {
                    title: 'The Specialist',
                    role: 'Expert Knowledge',
                    description: 'Deep expertise in your products, services, and industry to answer any question.'
                  },
                  {
                    title: 'The Qualifier',
                    role: 'Lead Conversion',
                    description: 'Scores leads, identifies hot prospects, and moves them to action.'
                  }
                ].map((agent, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-1">{agent.title}</h4>
                    <p className="text-sm font-medium text-secondary mb-3">{agent.role}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{agent.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-6 text-center">
                <p className="text-lg font-semibold text-neutral-900">
                  Each agent excels at their role. Together, they create exceptional experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorksSection;
