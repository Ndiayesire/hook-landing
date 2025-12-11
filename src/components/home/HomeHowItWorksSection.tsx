/**
 * HomeHowItWorksSection Component - Mia.inc Minimal Style
 *
 * Clean 4-step process with minimal design.
 * Simple numbered timeline.
 */

import React from 'react';
import { Search, Users, Zap, BarChart3 } from 'lucide-react';

const HomeHowItWorksSection: React.FC = () => {
  return (
    <div className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              A proven framework for building AI systems that drive results.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Step 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl text-xl font-bold mb-4">
                1
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Discovery
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                We learn your business inside and out. Your processes, your customers, your goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl text-xl font-bold mb-4">
                2
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Architecture
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                We design your multi-agent system. Specialized AI working together like a real team.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl text-xl font-bold mb-4">
                3
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Implementation
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                We build, train, and deploy your system. Integrated with your existing tools.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl text-xl font-bold mb-4">
                4
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Optimization
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                We monitor, measure, and continuously improve your system for maximum ROI.
              </p>
            </div>
          </div>

          {/* Multi-Agent Explanation */}
          <div className="bg-white rounded-2xl p-12 md:p-16 shadow-card">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Why Multi-Agent Systems Work Better
              </h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Think of it like a company. You wouldn't hire one person to do sales, support, and operations.
                Why would you ask one AI to handle everything?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorksSection;
