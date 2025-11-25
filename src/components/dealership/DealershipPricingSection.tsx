/**
 * DealershipPricingSection Component
 *
 * Pricing section for Dealership AI with ROI calculator.
 * Shows setup costs, monthly subscription, and typical ROI expectations.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Calculator, TrendingUp, Check } from 'lucide-react';

const DealershipPricingSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            The Investment: <span className="text-accent2">ROI That Actually Makes Sense</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This isn't an expense. It's the smartest investment you'll make this year.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calculator className="h-10 w-10 text-secondary" />
            <h3 className="text-3xl font-bold">ROI Calculator</h3>
          </div>

          <p className="text-center text-xl mb-8">Average Dealership (20 vehicles/month):</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">~50</div>
              <p className="text-lg font-semibold mb-1">Lost after-hours leads/month</p>
              <p className="text-sm text-gray-100">Before HookTXT AI</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">70%</div>
              <p className="text-lg font-semibold mb-1">Capture rate with AI</p>
              <p className="text-sm text-gray-100">= 35 leads captured</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">25%</div>
              <p className="text-lg font-semibold mb-1">Close rate</p>
              <p className="text-sm text-gray-100">= 9 additional sales/month</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">$3,500</div>
              <p className="text-lg font-semibold mb-1">Average gross profit</p>
              <p className="text-sm text-gray-100">Per vehicle</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-2">$31,500</div>
              <p className="text-lg font-semibold mb-1">Additional monthly revenue</p>
              <p className="text-sm text-gray-100">From captured leads</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-4 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-2">$378K</div>
              <p className="text-lg font-semibold mb-1">Additional annual revenue</p>
              <p className="text-sm text-gray-100">Year one impact</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-secondary">
              Typical ROI: 8-12X in Year One
            </p>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">System Cost</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Setup Cost */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border-2 border-primary/20">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Setup</h4>
                <p className="text-sm text-gray-600 mb-4">One-time investment</p>
                <div className="text-5xl font-bold text-primary mb-2">Custom</div>
                <p className="text-gray-600">Based on your requirements</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom multi-agent system design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>DMS integration and inventory sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Agent training and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dashboard setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Team training and onboarding</span>
                </li>
              </ul>
            </div>

            {/* Monthly Cost */}
            <div className="bg-gradient-to-br from-accent2 to-primary rounded-2xl shadow-2xl p-8 text-white border-2 border-accent2">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">Monthly</h4>
                <p className="text-sm text-gray-100 mb-4">Subscription based on volume</p>
                <div className="text-5xl font-bold text-secondary mb-2">Custom</div>
                <p className="text-gray-100">Scaled to your dealership size</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>24/7 AI operation and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Continuous optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Real-time dashboard access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Performance reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Regular strategy sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white rounded-2xl shadow-soft p-10 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Multi-Agent System</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ The Orchestro (Sales Manager)</li>
                <li>✓ SalesAgent (The Closer)</li>
                <li>✓ InventoryAgent (Product Expert)</li>
                <li>✓ LeadScoringAgent (Qualifier)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Intelligence Features</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ 5-level lead scoring (BANT)</li>
                <li>✓ Semantic inventory search</li>
                <li>✓ Capacity verification</li>
                <li>✓ Alternative recommendations</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Bilingual Support</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ English/French seamless switching</li>
                <li>✓ Mid-conversation language change</li>
                <li>✓ Cultural awareness</li>
                <li>✓ Professional tone in both languages</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Integration</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ DMS system integration</li>
                <li>✓ Real-time inventory sync</li>
                <li>✓ CRM connection</li>
                <li>✓ Website embedding</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Dashboard & Reporting</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Real-time lead dashboard</li>
                <li>✓ Performance metrics</li>
                <li>✓ Lead intelligence insights</li>
                <li>✓ Monthly reports</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-accent2">Support & Optimization</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Priority support channel</li>
                <li>✓ Continuous AI optimization</li>
                <li>✓ Regular strategy sessions</li>
                <li>✓ Performance tuning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-primary/10 to-accent2/10 rounded-2xl p-10 mb-12 border-2 border-primary/20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Implementation Timeline</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">Week 1-2</div>
              <p className="text-gray-700 font-semibold mb-2">Discovery & Design</p>
              <p className="text-sm text-gray-600">System architecture, integration planning</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-accent2 mb-2">Week 3-4</div>
              <p className="text-gray-700 font-semibold mb-2">Development & Integration</p>
              <p className="text-sm text-gray-600">Build agents, connect inventory, testing</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-success mb-2">Week 5-6</div>
              <p className="text-gray-700 font-semibold mb-2">Training & Launch</p>
              <p className="text-sm text-gray-600">Team training, go-live, monitoring</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-success">
              <div className="text-3xl font-bold text-success mb-2">Week 7-8</div>
              <p className="text-gray-700 font-semibold mb-2">Optimization</p>
              <p className="text-sm text-gray-600">Fine-tuning, performance optimization</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-gray-800">
            Total Setup Time: <span className="text-primary">2-4 weeks</span> from kickoff to capturing leads
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Stop Losing Leads?</h3>
          <p className="text-xl mb-6">
            Let's calculate your exact ROI and build a system tailored to your dealership.
          </p>
          <Button to="/contact" variant="secondary" size="xl" className="text-lg px-12">
            Schedule Your ROI Consultation
          </Button>
          <p className="mt-6 text-gray-100">
            We'll show you exactly how much revenue you're leaving on the table.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DealershipPricingSection;
