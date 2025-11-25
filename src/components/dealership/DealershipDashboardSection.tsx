/**
 * DealershipDashboardSection Component
 *
 * Showcases the custom dashboard features for dealership AI.
 * Real-time lead dashboard, performance metrics, and lead intelligence insights.
 */

import React from 'react';
import Section from '../common/Section';
import { LayoutDashboard, BarChart2, Lightbulb, Eye } from 'lucide-react';

const DealershipDashboardSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Your Custom Dashboard: <span className="text-accent2">Transparency = Trust</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            While Other Systems Keep You in the Dark, We Show You EVERYTHING.
          </p>
        </div>

        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Real-Time Lead Dashboard */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Real-Time Lead Dashboard</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Every conversation, every lead, every score</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Filter by: Hot leads (4-5), Follow-ups needed (2-3), Service (1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>See conversations in real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Know exactly what's working</span>
              </li>
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent2/10 p-4 rounded-xl">
                <BarChart2 className="h-8 w-8 text-accent2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Performance Metrics</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-accent2">✓</span>
                <span>Leads captured per day/week/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2">✓</span>
                <span>Conversion rates by lead score</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2">✓</span>
                <span>Response times (always under 2 seconds)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2">✓</span>
                <span>Peak traffic hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent2">✓</span>
                <span>Data-driven decisions</span>
              </li>
            </ul>
          </div>

          {/* Lead Intelligence */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-success/10 p-4 rounded-xl">
                <Lightbulb className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Lead Intelligence</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Which vehicles get most interest?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>What questions do customers ask most?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>What objections come up?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Optimize your inventory and sales approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Dashboard Preview</h3>
          </div>

          {/* Mockup Content */}
          <div className="space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">47</div>
                <p className="text-sm text-gray-700">Leads This Week</p>
              </div>
              <div className="bg-accent2/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-accent2 mb-1">12</div>
                <p className="text-sm text-gray-700">Hot Leads (4-5)</p>
              </div>
              <div className="bg-success/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-success mb-1">1.8s</div>
                <p className="text-sm text-gray-700">Avg Response Time</p>
              </div>
              <div className="bg-warning/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-warning mb-1">38%</div>
                <p className="text-sm text-gray-700">Conversion Rate</p>
              </div>
            </div>

            {/* Recent Leads Table */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Recent Leads</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-l-4 border-error">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="font-bold text-gray-800">Mike Johnson</span>
                    <span className="bg-error text-white text-xs px-3 py-1 rounded-full font-bold">Score 5</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">Interest: 2024 Tacoma TRD Sport</p>
                  <p className="text-xs text-gray-600">11:07 PM - Contact: 514-555-7890</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-accent2">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="font-bold text-gray-800">Marc Tremblay</span>
                    <span className="bg-accent2 text-white text-xs px-3 py-1 rounded-full font-bold">Score 4</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">Interest: 7-seater SUVs (Highlander, Pilot)</p>
                  <p className="text-xs text-gray-600">10:42 PM - Contact: 514-555-1234</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-warning">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="font-bold text-gray-800">Sarah Williams</span>
                    <span className="bg-warning text-white text-xs px-3 py-1 rounded-full font-bold">Score 3</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">Interest: Honda CR-V (capacity question)</p>
                  <p className="text-xs text-gray-600">9:15 PM - Contact: sarah.w@email.com</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="font-bold text-gray-800">John Smith</span>
                    <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full font-bold">Score 2</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">Interest: General browsing</p>
                  <p className="text-xs text-gray-600">8:30 PM - No contact captured yet</p>
                </div>
              </div>
            </div>

            {/* Popular Vehicles */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Most Searched Vehicles This Week</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Toyota Tacoma</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '180px' }}></div>
                    <span className="text-sm font-bold text-gray-800 w-8">18</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Honda Pilot</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-accent2 h-3 rounded-full" style={{ width: '140px' }}></div>
                    <span className="text-sm font-bold text-gray-800 w-8">14</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Toyota Highlander</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-success h-3 rounded-full" style={{ width: '120px' }}></div>
                    <span className="text-sm font-bold text-gray-800 w-8">12</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Honda CR-V</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-warning h-3 rounded-full" style={{ width: '100px' }}></div>
                    <span className="text-sm font-bold text-gray-800 w-8">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Complete Visibility. Zero Guesswork.</h3>
          <p className="text-xl">
            You'll know exactly how many leads you're capturing, which vehicles they want, and how your AI is performing.
          </p>
          <p className="text-2xl font-bold text-secondary mt-4">
            No more "black box" systems. Full transparency, 24/7.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DealershipDashboardSection;
