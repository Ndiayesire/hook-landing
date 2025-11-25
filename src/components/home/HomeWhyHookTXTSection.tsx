/**
 * HomeWhyHookTXTSection Component
 *
 * Differentiates HookTXT from competitors with comparison table and
 * key advantages.
 */

import React from 'react';
import { CheckCircle, XCircle, Shield, Zap, BarChart3, Globe } from 'lucide-react';

const HomeWhyHookTXTSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why <span className="text-primary">HookTXT</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're not just different. We're the only ones actually building custom AI systems that generate revenue.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent2 text-white">
                    <th className="py-6 px-6 text-left text-lg font-bold">Feature</th>
                    <th className="py-6 px-6 text-center text-lg font-bold">Generic AI Chatbots</th>
                    <th className="py-6 px-6 text-center text-lg font-bold bg-secondary text-primary">
                      HookTXT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Custom-built for YOUR business</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Multi-agent architecture</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Knows YOUR products/services</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Real-time transparency dashboard</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Integration with YOUR systems</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Intelligent lead qualification</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Bilingual support (EN/FR)</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Dedicated support team</td>
                    <td className="py-4 px-6 text-center text-gray-600 text-sm">Email only</td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">Continuous optimization</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-6 w-6 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-primary/10 to-accent2/10">
                    <td className="py-4 px-6 font-bold text-gray-900 text-lg">Actually generates revenue</td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="h-7 w-7 text-error mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/10">
                      <CheckCircle className="h-7 w-7 text-primary mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all">
              <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built to Close</h3>
              <p className="text-gray-700 leading-relaxed">
                Not just chat. Our systems are designed to qualify leads and generate revenue, not just answer questions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all">
              <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Transparency</h3>
              <p className="text-gray-700 leading-relaxed">
                Real-time dashboard shows every conversation, lead score, and revenue metric. No black boxes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all">
              <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bilingual by Default</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamlessly switches between English and French. Perfect for Canadian businesses serving both markets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all">
              <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Partner</h3>
              <p className="text-gray-700 leading-relaxed">
                We're invested in your success. Continuous optimization and dedicated support included.
              </p>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent2/10 rounded-2xl p-8 border-2 border-primary/20">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Bottom Line
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              While others sell you subscription chatbots that apologize, we build custom AI systems that <span className="font-bold text-primary">actually work</span> and <span className="font-bold text-primary">generate measurable revenue</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyHookTXTSection;
