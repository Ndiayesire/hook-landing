/**
 * DealershipFinalCTASection Component
 *
 * Final aggressive CTA section for Dealership AI page.
 * "Which one are you?" provocative question with strong CTAs.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Zap, TrendingUp, Clock } from 'lucide-react';

const DealershipFinalCTASection: React.FC = () => {
  return (
    <Section background="gradient">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            The Bottom Line
          </h2>
          <p className="text-2xl md:text-3xl text-gray-100 mb-8 font-semibold">
            Your Competitors Are Already Behind.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-secondary" />
            </div>
            <p className="text-xl font-bold text-white mb-2">While they're still trying to figure out ChatGPT...</p>
            <p className="text-gray-100">You're capturing leads at 2 AM.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-secondary" />
            </div>
            <p className="text-xl font-bold text-white mb-2">While they're answering the same questions manually...</p>
            <p className="text-gray-100">Your AI is qualifying buyers automatically.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-secondary" />
            </div>
            <p className="text-xl font-bold text-white mb-2">While they're losing 50+ leads per month...</p>
            <p className="text-gray-100">You're closing deals while you sleep.</p>
          </div>
        </div>

        {/* The Reality Check */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-white/20">
          <h3 className="text-3xl font-bold text-secondary text-center mb-6">The Reality</h3>
          <div className="space-y-4 text-xl text-white max-w-3xl mx-auto">
            <p>Your customers are online RIGHT NOW.</p>
            <p>They're researching vehicles.</p>
            <p>They're ready to buy.</p>
            <p className="text-2xl font-bold text-secondary">Are you capturing them?</p>
            <p className="text-2xl font-bold text-error">Or are they buying from your competitor?</p>
          </div>
        </div>

        {/* Three Types Reminder */}
        <div className="bg-white rounded-2xl p-10 mb-12">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Three Types of Dealerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-3">🦕</div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">The Dinosaurs</h4>
              <p className="text-gray-600">Still taking phone messages.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎮</div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">The Amateurs</h4>
              <p className="text-gray-600">Playing with toys.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🏆</div>
              <h4 className="font-bold text-xl text-success mb-2">The Professionals</h4>
              <p className="text-gray-700 font-semibold">Using HookTXT.</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-center text-primary">
            Which One Are You?
          </p>
        </div>

        {/* Final Stats Reminder */}
        <div className="bg-gradient-to-br from-accent2/20 to-primary/20 backdrop-blur-sm rounded-2xl p-10 mb-12 border-2 border-white/30">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Here's What You're Risking:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-error mb-2">50+</div>
              <p className="text-white text-lg">Leads lost every month</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-error mb-2">$300K+</div>
              <p className="text-white text-lg">Annual revenue left on table</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-error mb-2">24/7</div>
              <p className="text-white text-lg">Competitors working while you're not</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stop Losing Leads?
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Let's build your custom dealership AI system.<br />
            Let's turn your website into a 24/7 lead-generating machine.<br />
            Let's put your sales team on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/contact" variant="secondary" size="xl" className="text-lg px-12">
              Schedule Your Demo
            </Button>
            <Button to="/contact" variant="outline" size="xl" className="text-lg px-12 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Calculate My ROI
            </Button>
          </div>
          <p className="mt-8 text-gray-100 text-lg">
            The dealerships that win aren't the ones with the most inventory.
          </p>
          <p className="text-2xl font-bold text-secondary mt-2">
            They're the ones that capture the most leads.
          </p>
        </div>

        {/* Final Provocative Statement */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            And in 2025, that means AI that actually works.
          </p>
          <p className="text-xl text-secondary font-bold">
            Not tomorrow. Not next month. NOW.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DealershipFinalCTASection;
