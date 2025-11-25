/**
 * DealershipAIHeroSection Component
 *
 * Hero section for Dealership AI page.
 * Aggressive hook about losing leads at 2 AM and after-hours shoppers.
 * Comparison between most dealerships and HookTXT solution.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Clock, TrendingDown, TrendingUp, Moon } from 'lucide-react';

const DealershipAIHeroSection: React.FC = () => {
  return (
    <Section background="gradient" className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Dealership AI: Your 24/7 Sales Team <br />
            <span className="text-secondary">That Never Sleeps</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-100 mb-8 font-semibold">
            Stop Losing Leads at 2 AM. Start Closing Deals While You Sleep.
          </p>
        </div>

        {/* The Problem Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-secondary mb-6">LET ME ASK YOU SOMETHING.</h2>
          <div className="space-y-4 text-lg text-white">
            <div>
              <p className="font-semibold mb-2">How many leads walked into your showroom at 9 PM last night?</p>
              <p className="text-4xl font-bold text-error">ZERO.</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold mb-2">How many people were on your website at 9 PM researching vehicles?</p>
              <p className="text-4xl font-bold text-secondary">Probably 15-20.</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold mb-2">And what did your website do for them?</p>
              <ul className="list-disc list-inside space-y-2 text-gray-100 mt-4">
                <li>Showed them a phone number.</li>
                <li>Told them to "contact us during business hours."</li>
                <li className="text-error font-bold">Let them walk straight to your competitor.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Brutal Truth */}
        <div className="bg-gradient-to-br from-error/20 to-error/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-error/30">
          <div className="flex items-center gap-3 mb-6">
            <Moon className="h-10 w-10 text-secondary" />
            <h2 className="text-3xl font-bold text-white">While You're Sleeping, Your Competitors Are Selling</h2>
          </div>
          <p className="text-xl text-white mb-6 font-semibold">Here's the brutal truth:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">63%</div>
              <p className="text-white">of car shoppers research online between 8 PM and midnight</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">18</div>
              <p className="text-white">websites visited by average shopper before making a decision</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">NOW</div>
              <p className="text-white">They're ready to buy - not during your business hours</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-secondary mb-2">82%</div>
              <p className="text-white">won't call - they want instant answers</p>
            </div>
          </div>
        </div>

        {/* The Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Most Dealerships */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="h-8 w-8 text-error" />
              <h3 className="text-2xl font-bold text-gray-800">Most Dealerships</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-error">❌</span>
                <div>
                  <p className="font-semibold text-gray-800">Generic chatbot:</p>
                  <p className="text-gray-600">"Sorry, our team is offline"</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-error">❌</span>
                <div>
                  <p className="font-semibold text-gray-800">Contact form</p>
                  <p className="text-gray-600">Sits unanswered until 9 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-error">❌</span>
                <div>
                  <p className="font-semibold text-gray-800">Customer moves</p>
                  <p className="text-gray-600">To the next dealership</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-3xl text-error font-bold">❌</span>
                <div>
                  <p className="text-xl font-bold text-error">LEAD LOST</p>
                </div>
              </li>
            </ul>
          </div>

          {/* HookTXT Dealership AI */}
          <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-8 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold">HookTXT Dealership AI</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-secondary">✅</span>
                <div>
                  <p className="font-semibold">Intelligent conversation</p>
                  <p className="text-gray-100">Within 2 seconds</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-secondary">✅</span>
                <div>
                  <p className="font-semibold">Answers specific questions</p>
                  <p className="text-gray-100">About YOUR inventory</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-secondary">✅</span>
                <div>
                  <p className="font-semibold">Qualifies the lead</p>
                  <p className="text-gray-100">Automatically</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-secondary">✅</span>
                <div>
                  <p className="font-semibold">Books the appointment</p>
                  <p className="text-gray-100">Ready for your sales team</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-3xl text-secondary font-bold">✅</span>
                <div>
                  <p className="text-xl font-bold text-secondary">LEAD CAPTURED</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button to="/contact" variant="secondary" size="xl" className="text-lg px-12">
            Stop Losing Leads Today
          </Button>
          <p className="mt-6 text-white text-lg">
            Your customers are online right now. Are you capturing them?
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DealershipAIHeroSection;
