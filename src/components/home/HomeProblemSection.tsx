/**
 * HomeProblemSection Component
 *
 * Explains the problem with generic AI chatbots and positions HookTXT
 * as the solution. Uses aggressive comparison messaging.
 */

import React from 'react';
import { XCircle, CheckCircle, Bot, Zap } from 'lucide-react';

const HomeProblemSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              The Problem with <span className="text-error">Generic AI</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Your competitors are using AI that apologizes. We build AI that closes.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Generic AI - Left Side */}
            <div className="bg-white rounded-2xl p-8 border-2 border-error/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-error/10 p-3 rounded-xl">
                  <Bot className="h-8 w-8 text-error" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Generic AI Chatbots</h3>
                  <p className="text-error font-semibold">What Everyone Else Is Selling</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-error flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">One-size-fits-all responses</p>
                    <p className="text-gray-600 text-sm">"Sorry, I can't help with that"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-error flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">No real business knowledge</p>
                    <p className="text-gray-600 text-sm">Can't answer specific questions about YOUR business</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-error flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Zero lead qualification</p>
                    <p className="text-gray-600 text-sm">Just collects emails and hopes for the best</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-error flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">No integration with your systems</p>
                    <p className="text-gray-600 text-sm">Sits in isolation, provides no real value</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-error flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">You're just a monthly subscription</p>
                    <p className="text-gray-600 text-sm">Zero customization, take it or leave it</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-error/5 rounded-lg border border-error/20">
                <p className="text-center text-error font-bold">
                  Result: Leads walk away. Revenue lost.
                </p>
              </div>
            </div>

            {/* HookTXT AI - Right Side */}
            <div className="bg-gradient-to-br from-primary/5 to-accent2/5 rounded-2xl p-8 border-2 border-primary shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">HookTXT AI Systems</h3>
                  <p className="text-primary font-semibold">Custom-Built Revenue Machines</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Custom responses for YOUR business</p>
                    <p className="text-gray-600 text-sm">Knows your products, services, and pricing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Deep business integration</p>
                    <p className="text-gray-600 text-sm">Connected to inventory, CRM, and your data</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Intelligent lead qualification</p>
                    <p className="text-gray-600 text-sm">Scores leads, prioritizes hot prospects automatically</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Multi-agent architecture</p>
                    <p className="text-gray-600 text-sm">Specialized agents work together for better results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Built specifically for YOU</p>
                    <p className="text-gray-600 text-sm">Custom development, not a template</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center text-primary font-bold">
                  Result: Leads captured. Revenue generated.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-error mb-2">78%</div>
                <p className="text-gray-700 font-semibold mb-1">Of generic chatbots</p>
                <p className="text-gray-600 text-sm">fail to answer industry-specific questions</p>
              </div>
              <div className="border-t md:border-t-0 md:border-l md:border-r border-gray-200 py-6 md:py-0">
                <div className="text-4xl font-bold text-primary mb-2">5X</div>
                <p className="text-gray-700 font-semibold mb-1">Higher conversion rate</p>
                <p className="text-gray-600 text-sm">with custom-built AI vs generic chatbots</p>
              </div>
              <div className="border-t md:border-t-0 border-gray-200 pt-6 md:pt-0">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-700 font-semibold mb-1">Your AI never sleeps</p>
                <p className="text-gray-600 text-sm">capturing leads while competitors miss them</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProblemSection;
