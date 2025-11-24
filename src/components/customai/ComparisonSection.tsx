/**
 * ComparisonSection Component
 *
 * Direct comparison between other agencies and HookTXT,
 * highlighting the differences in approach, transparency, and results.
 * Features contrasting columns showing problems vs solutions.
 */

import React from 'react';
import Section from '../common/Section';
import { X, CheckCircle2 } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
          The Bottom Line
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">
          While They Sell You Promises, I Show You Proof.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Other Agencies */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-error/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 bg-error rounded-full flex items-center justify-center">
                <X className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-error">Other Agencies</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">"Trust us, we're working on it"</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Weekly email updates with vague progress</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Chatbots that frustrate customers</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Keep you in the dark until launch day</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Generic AI that responds "I can't help with that"</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">No transparency into project status</span>
              </li>
            </ul>
          </div>

          {/* HookTXT */}
          <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8 border-2 border-success shadow-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 bg-success rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-success">HookTXT</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">Real-time transparency—see it yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">Multi-agent AI that actually WORKS and SELLS</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">24/7 visibility into your project</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">Partnership, not just "vendor-client" relationship</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">Specialized AI agents for every task</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-semibold">Complete project control at your fingertips</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComparisonSection;
