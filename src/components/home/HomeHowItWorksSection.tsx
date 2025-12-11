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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <Search className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Discovery
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We learn your business inside and out. Your processes, your customers, your goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Architecture
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We design your multi-agent system. Specialized AI working together like a real team.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Implementation
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We build, train, and deploy your system. Integrated with your existing tools.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6">
                4
              </div>
              <BarChart3 className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Optimization
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We monitor, measure, and continuously improve your system for maximum ROI.
              </p>
            </div>
          </div>

          {/* Multi-Agent Explanation */}
          <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-12 md:p-16">
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
