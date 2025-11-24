/**
 * DualDashboardSection Component
 *
 * Explains the dual dashboard system (Client Dashboard + Team Dashboard)
 * that provides transparency and operational efficiency. Highlights the
 * competitive advantage of real-time visibility and coordination.
 */

import React from 'react';
import Section from '../common/Section';
import { Eye, Clock, Shield, Users, Zap, TrendingUp } from 'lucide-react';

const DualDashboardSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          Dual Dashboard System: Transparency = Trust = Money
        </h2>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Here's the Truth Nobody Wants to Tell You:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your competitors keep clients in the dark because they're scared.<br />
            Scared you'll see they're moving slow.<br />
            Scared you'll question their progress.<br />
            Scared you'll realize you're not getting value.
          </p>
          <p className="text-2xl font-bold text-primary mt-6">
            I Do the OPPOSITE.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-primary">
          Two Dashboards, One Goal: Your Success
        </h3>

        {/* Client Dashboard */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-soft border-2 border-primary/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">CLIENT DASHBOARD</h4>
              <p className="text-gray-600 text-lg font-semibold">You're Not a Client, You're a Partner</p>
            </div>
          </div>

          {/* Real-Time Transparency */}
          <div className="mb-8">
            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              Real-Time Transparency:
            </h5>
            <ul className="space-y-3 ml-9">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">See EXACTLY where your project is at, any time, day or night</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">No more "let me check with my team" bullshit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">No more waiting for weekly update emails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">No more anxiety about "what's happening with my project?"</span>
              </li>
            </ul>
          </div>

          {/* 24/7 Access */}
          <div className="mb-8">
            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              24/7 Access Without the Hassle:
            </h5>
            <ul className="space-y-3 ml-9">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">Check progress at 2 AM if you want</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">No emails, no phone calls, no meetings needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">Complete project history at your fingertips</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">YOU'RE in control, not waiting on US</span>
              </li>
            </ul>
          </div>

          {/* Why This Matters */}
          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
            <h5 className="text-xl font-bold text-primary mb-3">Why This Matters:</h5>
            <ul className="space-y-2">
              <li className="text-gray-700">• Most vendors hide behind "we're working on it"</li>
              <li className="text-gray-700">• We show you PROOF of progress in real-time</li>
              <li className="text-gray-700">• You can make decisions faster because you have the data</li>
              <li className="text-gray-700 font-bold">• Faster decisions = faster results = faster ROI</li>
            </ul>
          </div>
        </div>

        {/* Team Dashboard */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border-2 border-success/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-success">TEAM DASHBOARD</h4>
              <p className="text-gray-600 text-lg font-semibold">Efficiency is Profit</p>
            </div>
          </div>

          {/* Centralized Coordination */}
          <div className="mb-8">
            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Zap className="h-6 w-6 text-success" />
              Centralized Coordination:
            </h5>
            <ul className="space-y-3 ml-9">
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">Entire team sees project status instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">No more "did you update the client?" emails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">Automated status updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">Bird's eye view of ALL projects simultaneously</span>
              </li>
            </ul>
          </div>

          {/* Measurable Efficiency */}
          <div className="mb-8">
            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-success" />
              Measurable Efficiency Gains:
            </h5>
            <ul className="space-y-3 ml-9">
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700"><span className="font-bold">50% reduction</span> in status meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700"><span className="font-bold">70% fewer</span> follow-up emails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">Faster decision-making—no information bottlenecks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">→</span>
                <span className="text-gray-700">Problems identified in hours, not days</span>
              </li>
            </ul>
          </div>

          {/* Why This Saves Money */}
          <div className="bg-success/10 rounded-lg p-6 border-l-4 border-success">
            <h5 className="text-xl font-bold text-success mb-3">Why This Saves You Money:</h5>
            <ul className="space-y-2">
              <li className="text-gray-700">• Less time in meetings = more time building</li>
              <li className="text-gray-700">• Fewer miscommunications = fewer costly revisions</li>
              <li className="text-gray-700">• Better coordination = faster delivery</li>
              <li className="text-gray-700 font-bold">• Our efficiency = your better price or better quality</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DualDashboardSection;
