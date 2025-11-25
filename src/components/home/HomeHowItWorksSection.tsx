/**
 * HomeHowItWorksSection Component
 *
 * Explains HookTXT's multi-agent approach and how the systems work
 * to generate revenue 24/7.
 */

import React from 'react';
import { Wrench, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const HomeHowItWorksSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent2/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From custom build to measurable results. Our proven 3-step process turns AI into revenue.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Wrench className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  We Build Custom
                </h3>

                <p className="text-gray-700 mb-4 text-center leading-relaxed">
                  Not off-the-shelf. Not templates. We build YOUR AI system from scratch.
                </p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Deep-dive into your business processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Design multi-agent architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Train on YOUR data and products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Integrate with your existing systems</span>
                  </li>
                </ul>
              </div>

              {/* Arrow */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  AI Works 24/7
                </h3>

                <p className="text-gray-700 mb-4 text-center leading-relaxed">
                  Your multi-agent system captures, qualifies, and converts leads automatically.
                </p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Engages visitors instantly (2 seconds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Answers specific questions about YOUR business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Qualifies leads intelligently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Books appointments or closes sales</span>
                  </li>
                </ul>
              </div>

              {/* Arrow */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  You Get Results
                </h3>

                <p className="text-gray-700 mb-4 text-center leading-relaxed">
                  Real-time dashboard shows every conversation, lead, and dollar generated.
                </p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Live conversation monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Lead scoring and prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Revenue tracking and ROI metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-gray-700">Continuous optimization and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multi-Agent Advantage */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-primary/20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Multi-Agent Advantage
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Unlike generic chatbots with one AI brain trying to do everything, our systems use <span className="font-bold text-primary">specialized agents</span> that work together like a real team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="font-bold text-primary text-lg mb-2">Agent 1</p>
                  <p className="text-gray-700 font-semibold mb-1">The Router</p>
                  <p className="text-gray-600 text-sm">Understands intent, routes to specialist</p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="font-bold text-primary text-lg mb-2">Agent 2</p>
                  <p className="text-gray-700 font-semibold mb-1">The Specialist</p>
                  <p className="text-gray-600 text-sm">Deep knowledge, handles complex questions</p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="font-bold text-primary text-lg mb-2">Agent 3</p>
                  <p className="text-gray-700 font-semibold mb-1">The Closer</p>
                  <p className="text-gray-600 text-sm">Qualifies, converts, books appointments</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent2/10 rounded-xl border border-primary/20">
                <p className="text-gray-800 font-bold text-lg">
                  Result: Higher quality conversations. Better lead qualification. More revenue.
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
