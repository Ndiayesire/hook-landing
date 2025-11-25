/**
 * DealershipComparisonSection Component
 *
 * Compares generic AI chatbots vs HookTXT system.
 * Shows the three types of dealerships: Dinosaurs, Amateurs, Winners.
 */

import React from 'react';
import Section from '../common/Section';
import { AlertTriangle, Frown, Trophy } from 'lucide-react';

const DealershipComparisonSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            What Makes This Different <span className="text-accent2">from "AI Chatbots"</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Generic AI Chatbot Companies */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Generic AI Chatbot Companies</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-error text-xl">✗</span>
                <div>
                  <p className="font-semibold text-gray-800">One-size-fits-all solution</p>
                  <p className="text-sm text-gray-600">Same bot for every dealership</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error text-xl">✗</span>
                <div>
                  <p className="font-semibold text-gray-800">Can't handle your specific inventory</p>
                  <p className="text-sm text-gray-600">Generic responses, no real data</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error text-xl">✗</span>
                <div>
                  <p className="font-semibold text-gray-800">Forgets context after 2 messages</p>
                  <p className="text-sm text-gray-600">Starts over constantly</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error text-xl">✗</span>
                <div>
                  <p className="font-semibold text-gray-800">Transfers to human (or dies trying)</p>
                  <p className="text-sm text-gray-600">Lead lost at 11 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error text-xl font-bold">✗</span>
                <div>
                  <p className="font-semibold text-gray-800">Can't close leads</p>
                  <p className="text-sm text-gray-600">Just a fancy contact form</p>
                </div>
              </li>
            </ul>
          </div>

          {/* HookTXT Dealership AI */}
          <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">HookTXT Dealership AI</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Custom-built for YOUR dealership</p>
                  <p className="text-sm text-gray-100">Tailored to your brand and inventory</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Connected to YOUR inventory database</p>
                  <p className="text-sm text-gray-100">Real-time data, accurate answers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Remembers entire conversation history</p>
                  <p className="text-sm text-gray-100">Context from start to finish</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Four specialized agents working as a team</p>
                  <p className="text-sm text-gray-100">Orchestro, Sales, Inventory, Lead Scoring</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Intelligent lead scoring</p>
                  <p className="text-sm text-gray-100">BANT framework, 1-5 scoring</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Bilingual support</p>
                  <p className="text-sm text-gray-100">English/French seamlessly</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold">Real-time promotions integration</p>
                  <p className="text-sm text-gray-100">Always up-to-date offers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-secondary text-lg">Built to CLOSE, not just chat</p>
                  <p className="text-sm text-gray-100">Captures leads, books appointments</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Three Types of Dealerships */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Three Types of Dealerships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Dinosaurs */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center border-2 border-gray-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-300 p-4 rounded-full">
                  <AlertTriangle className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. The Dinosaurs</h3>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-error">•</span>
                  <span>"We don't need AI"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error">•</span>
                  <span>Generic chatbot or none at all</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error">•</span>
                  <span>Losing 50+ leads per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span className="font-bold text-error">Going extinct</span>
                </li>
              </ul>
            </div>

            {/* The Amateurs */}
            <div className="bg-warning/10 rounded-2xl p-8 text-center border-2 border-warning/30">
              <div className="flex justify-center mb-4">
                <div className="bg-warning/20 p-4 rounded-full">
                  <Frown className="h-12 w-12 text-warning" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. The Amateurs</h3>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span>Bought a generic "AI chatbot" off the shelf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span>Frustrates more customers than it helps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span>Can't handle real conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning font-bold">•</span>
                  <span className="font-bold text-warning">Wasting money</span>
                </li>
              </ul>
            </div>

            {/* The Winners */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 rounded-2xl p-8 text-center border-2 border-success shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="bg-success/20 p-4 rounded-full">
                  <Trophy className="h-12 w-12 text-success" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-success mb-4">3. The Winners</h3>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Custom multi-agent AI system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Captures every lead, 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Qualifies automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Sales team focuses on closing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="font-bold text-success text-lg">Dominating the market</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Which One Are You?</h3>
          <p className="text-xl mb-6">The dinosaurs are still taking phone messages.</p>
          <p className="text-xl mb-6">The amateurs are playing with toys.</p>
          <p className="text-2xl font-bold text-secondary">The professionals are using HookTXT.</p>
        </div>
      </div>
    </Section>
  );
};

export default DealershipComparisonSection;
