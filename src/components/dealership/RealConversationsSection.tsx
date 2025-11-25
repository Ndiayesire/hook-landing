/**
 * RealConversationsSection Component
 *
 * Showcases 3 real conversation scenarios with the dealership AI.
 * Includes the 11 PM buyer, capacity mismatch intelligence, and bilingual customer.
 */

import React from 'react';
import Section from '../common/Section';
import { MessageCircle, CheckCircle, Globe } from 'lucide-react';

const RealConversationsSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Real Conversations, <span className="text-accent2">Real Results</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See exactly how our AI captures leads your competitors are losing.
          </p>
        </div>

        {/* Scenario 1: The 11 PM Buyer */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-12 border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Scenario 1: The 11 PM Buyer</h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-600 mb-4">11:07 PM - Customer on your website</p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                <p className="text-gray-800"><strong>Customer:</strong> "You have any Tacomas in stock?"</p>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 text-sm text-gray-700">
                <p className="font-mono">Orchestro: [Analyzes] → Sales inquiry → Routes to InventoryAgent</p>
                <p className="font-mono">InventoryAgent: [Searches] → 3 Tacomas found</p>
                <p className="font-mono">LeadScoringAgent: [Scores] → Score 3 (Interested, specific model)</p>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent2 rounded-lg p-4 text-white">
                <p className="mb-3"><strong>SalesAgent:</strong> "Yes! Here are our Tacomas:</p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li>• 2024 Toyota Tacoma TRD Sport - $48,995 - 8,500 km</li>
                  <li>• 2025 Toyota Tacoma Limited - $52,450 - New</li>
                  <li>• 2024 Toyota Tacoma SR5 - $44,900 - 12,000 km</li>
                </ul>
                <p className="mb-3">Our advisor will call you tomorrow morning with:</p>
                <ul className="space-y-1 ml-4 mb-3">
                  <li>- Financing options</li>
                  <li>- Trade-in evaluation</li>
                  <li>- Test drive appointment</li>
                </ul>
                <p className="font-semibold">Your name and phone number?"</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                <p className="text-gray-800"><strong>Customer:</strong> "Mike Johnson, 514-555-7890"</p>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent2 rounded-lg p-4 text-white">
                <p><strong>SalesAgent:</strong> "Perfect Mike! Expect a call by 9 AM tomorrow."</p>
              </div>
            </div>
          </div>

          <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-6 w-6 text-success" />
              <h4 className="font-bold text-lg text-gray-800">LEAD CAPTURED</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Score:</p>
                <p className="font-bold text-gray-800">3</p>
              </div>
              <div>
                <p className="text-gray-600">Vehicle Interest:</p>
                <p className="font-bold text-gray-800">Tacoma</p>
              </div>
              <div>
                <p className="text-gray-600">Contact:</p>
                <p className="font-bold text-gray-800">Name + Phone</p>
              </div>
              <div>
                <p className="text-gray-600">Action:</p>
                <p className="font-bold text-gray-800">Morning callback</p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-success">Result: Lead that would have gone to your competitor → YOURS.</p>
          </div>
        </div>

        {/* Scenario 2: The Capacity Mismatch */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-12 border-l-4 border-accent2">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-accent2" />
            <h3 className="text-2xl font-bold text-gray-800">Scenario 2: The Capacity Mismatch (Intelligence)</h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                <p className="text-gray-800"><strong>Customer:</strong> "Do you have Honda CR-V with 7 seats?"</p>
              </div>

              <div className="bg-accent2/5 rounded-lg p-4 text-sm text-gray-700">
                <p className="font-mono">Orchestro: [Detects] → Capacity mismatch → CR-V = 5 seats</p>
                <p className="font-mono">InventoryAgent: [Searches alternatives] → Honda Pilot, 7-8 seats</p>
                <p className="font-mono">LeadScoringAgent: [Scores] → Score 2-3 (Curious, needs education)</p>
              </div>

              <div className="bg-gradient-to-br from-accent2 to-primary rounded-lg p-4 text-white">
                <p className="mb-3"><strong>SalesAgent:</strong> "The CR-V offers 5 seats, not 7.</p>
                <p className="mb-3">For 7-8 seats, check out the Honda Pilot:</p>
                <ul className="ml-4 mb-3">
                  <li>• 2025 Honda Pilot Touring - $54,995 - 7 seats</li>
                </ul>
                <p className="mb-3">Our advisor will show you all 7-seater options.</p>
                <p className="font-semibold">Your name and phone number? He'll call within the hour!"</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-error/10 rounded-xl p-6 border-l-4 border-error">
              <h4 className="font-bold text-lg text-error mb-3">Traditional chatbot would have:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Shown CR-V anyway (wrong capacity)</li>
                <li>• Confused customer</li>
                <li>• Lost credibility</li>
                <li className="font-bold text-error">• Lost sale</li>
              </ul>
            </div>

            <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
              <h4 className="font-bold text-lg text-success mb-3">Our system:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Identifies the problem</li>
                <li>• Educates intelligently</li>
                <li>• Suggests correct alternative</li>
                <li className="font-bold text-success">• Captures lead anyway</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scenario 3: The Bilingual Customer */}
        <div className="bg-white rounded-2xl shadow-soft p-8 border-l-4 border-success">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-8 w-8 text-success" />
            <h3 className="text-2xl font-bold text-gray-800">Scenario 3: The Bilingual Customer</h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                <p className="text-gray-800"><strong>Customer:</strong> "Bonjour, avez-vous des véhicules 7 places?"</p>
              </div>

              <div className="bg-gradient-to-br from-success to-primary rounded-lg p-4 text-white">
                <p className="mb-3"><strong>SalesAgent:</strong> "Bonjour! Oui, voici nos véhicules 7 places:</p>
                <ul className="ml-4 mb-3">
                  <li>• 2025 Toyota Highlander - $46,995</li>
                  <li>• 2024 Honda Pilot - $52,450</li>
                </ul>
                <p className="mb-3">Notre conseiller va vous préparer toutes les options.</p>
                <p className="font-semibold">Votre nom et téléphone?"</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                <p className="text-gray-800"><strong>Customer:</strong> "Can we switch to English? Marc Tremblay, 514-555-1234"</p>
              </div>

              <div className="bg-gradient-to-br from-success to-primary rounded-lg p-4 text-white">
                <p className="mb-3"><strong>SalesAgent:</strong> "Of course Marc! Our advisor will call you within the hour to discuss:</p>
                <ul className="ml-4 mb-3">
                  <li>- Financing options</li>
                  <li>- Trade-in evaluation</li>
                  <li>- Test drive booking</li>
                </ul>
                <p className="font-semibold">Talk soon!"</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent2/10 rounded-xl p-6">
            <p className="text-lg font-semibold text-gray-800 text-center">
              Seamless language switching. Your customer feels understood, comfortable, ready to buy.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-4">These Conversations Are Happening Right Now</h3>
          <p className="text-xl mb-6">The only question is: Who's capturing them?</p>
          <p className="text-2xl font-bold text-secondary">Your dealership? Or your competitor's?</p>
        </div>
      </div>
    </Section>
  );
};

export default RealConversationsSection;
