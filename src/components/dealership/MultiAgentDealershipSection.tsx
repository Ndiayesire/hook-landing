/**
 * MultiAgentDealershipSection Component
 *
 * Explains the 4 specialized agents in the dealership AI system.
 * Showcases The Orchestro, SalesAgent with 5-level scoring, InventoryAgent, and LeadScoringAgent.
 */

import React from 'react';
import Section from '../common/Section';
import { Brain, Target, Database, BarChart3, Zap, User, Clock } from 'lucide-react';

const MultiAgentDealershipSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            The Multi-Agent System: <span className="text-accent2">Your Digital Sales Floor</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Forget Generic Chatbots. This is a Full Sales Team.
          </p>
        </div>

        {/* Traditional vs Our System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Chatbot:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-error">✗</span>
                <span>One brain trying to do everything</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">✗</span>
                <span>Gets confused after 3 questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">✗</span>
                <span>Transfers to human (who's not there at 10 PM)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error font-bold">✗</span>
                <span className="font-bold">Closes ZERO deals</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent2/10 rounded-xl p-8 border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Multi-Agent Dealership AI:</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">✓</span>
                <span className="font-semibold">Four specialized agents, each an expert in their domain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">✓</span>
                <span className="font-semibold">Handles complex conversations from start to close</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">✓</span>
                <span className="font-semibold">Bilingual (English/French) - switches mid-conversation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success font-bold">✓</span>
                <span className="font-semibold">Works 24/7/365 - never takes a day off</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Meet Your New Sales Team */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Meet Your New Sales Team
          </h2>

          {/* The Orchestro */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border-l-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">The Orchestro</h3>
                <p className="text-accent2 font-semibold">The Sales Manager</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">What it does:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span>Analyzes EVERY customer inquiry in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span>Detects buyer intent before they finish typing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span>Routes to the right specialist instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span>Manages conversation flow like your best floor manager</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Why this matters:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Customer looking for service? → Routes to service department</li>
                  <li>✓ Customer asking about inventory? → Connects to inventory specialist</li>
                  <li>✓ Customer asking about financing? → Handles it intelligently</li>
                  <li className="font-bold text-primary">Zero wasted time. Zero confusion.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <p className="font-semibold text-gray-800 mb-2">Real example:</p>
              <p className="text-gray-700 mb-3"><strong>Customer:</strong> "Do you have any 7-seaters under $40K?"</p>
              <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 space-y-1">
                <p>→ Detects: SALES (not service)</p>
                <p>→ Identifies: Specific capacity requirement (7 seats)</p>
                <p>→ Routes to: InventoryAgent</p>
                <p>→ Validates: Vehicle capacity matches</p>
                <p>→ Sends to: SalesAgent with lead score</p>
                <p className="font-bold text-primary">→ Time: 1.2 seconds</p>
              </div>
            </div>
          </div>

          {/* The SalesAgent */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border-l-4 border-accent2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent2/10 p-4 rounded-xl">
                <Target className="h-10 w-10 text-accent2" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">The SalesAgent</h3>
                <p className="text-accent2 font-semibold">The Closer</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-gray-800 mb-3">What it does:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent2 flex-shrink-0 mt-1" />
                  <span>Doesn't just answer questions - it QUALIFIES and CONVERTS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent2 flex-shrink-0 mt-1" />
                  <span>Adapts conversation style based on buyer readiness (Score 1-5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent2 flex-shrink-0 mt-1" />
                  <span>Captures contact info strategically</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent2 flex-shrink-0 mt-1" />
                  <span>Books appointments automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent2 flex-shrink-0 mt-1" />
                  <span>Bilingual - seamlessly switches English ↔ French</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent2/10 to-primary/10 rounded-xl p-6">
              <h4 className="font-bold text-xl text-gray-800 mb-4">The 5-Level Lead Scoring System:</h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gray-400 text-white font-bold px-3 py-1 rounded">Score 1</span>
                    <span className="font-bold text-gray-800">Service Request</span>
                  </div>
                  <p className="text-gray-700 text-sm">Customer needs parts/service (not buying). Fast handoff to service department.</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gray-500 text-white font-bold px-3 py-1 rounded">Score 2</span>
                    <span className="font-bold text-gray-800">Curiosity (Just Browsing)</span>
                  </div>
                  <p className="text-gray-700 text-sm">Early stage, exploring options. Agent provides info, qualifies subtly: "What are you looking for? When do you need it?"</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-warning">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-warning text-white font-bold px-3 py-1 rounded">Score 3</span>
                    <span className="font-bold text-gray-800">Interested (Getting Serious)</span>
                  </div>
                  <p className="text-gray-700 text-sm">Defined criteria, asking specific questions. Agent shows 1-2 perfect matches. <strong>CAPTURES: Name, phone, email.</strong> "Our advisor will call you within the hour."</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-accent2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent2 text-white font-bold px-3 py-1 rounded">Score 4</span>
                    <span className="font-bold text-gray-800">Ready to Buy (Hot Lead)</span>
                  </div>
                  <p className="text-gray-700 text-sm">Budget confirmed, model identified. Agent creates urgency. <strong>BOOKS appointment immediately.</strong> "We'll call you in 15 minutes to confirm your test drive."</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-error">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-error text-white font-bold px-3 py-1 rounded">Score 5</span>
                    <span className="font-bold text-gray-800">Ultra Hot (Close NOW)</span>
                  </div>
                  <p className="text-gray-700 text-sm">Test drive requested, ready to move. Agent celebrates and confirms. <strong>INSTANT HANDOFF to sales team.</strong> "Your sales advisor is calling you in 5 minutes!"</p>
                </div>
              </div>
            </div>
          </div>

          {/* The InventoryAgent */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border-l-4 border-success">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-success/10 p-4 rounded-xl">
                <Database className="h-10 w-10 text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">The InventoryAgent</h3>
                <p className="text-success font-semibold">The Product Expert</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">What it does:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                    <span>Connected to your ENTIRE inventory via vector database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                    <span>Semantic search - understands human language, not just keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                    <span>Real-time availability and specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                    <span>Intelligent recommendations and comparisons</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Intelligence Built-In:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ <strong>Capacity Verification:</strong> Customer asks for "CR-V 7-seater"? Agent knows CR-V only has 5 seats, suggests Pilot instead</li>
                  <li>✓ <strong>Alternative Recommendations:</strong> No exact match? Suggests similar vehicles</li>
                  <li>✓ <strong>Real-time Data:</strong> Inventory updates instantly</li>
                  <li>✓ <strong>URL Precision:</strong> Every vehicle has exact link to your website</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="font-semibold text-gray-800 mb-2">Example:</p>
              <p className="text-gray-700 mb-3"><strong>Customer:</strong> "Family SUV under $40K"</p>
              <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                <p className="text-gray-700">→ Semantic understanding: "family" = 7+ seats, safety, space</p>
                <p className="text-gray-700">→ Budget filter: $40K max</p>
                <p className="text-gray-700">→ Searches vector database</p>
                <p className="text-gray-700">→ Returns: Top 3 perfect matches</p>
                <p className="font-bold text-success">Time: 0.8 seconds</p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>• 2024 Toyota Highlander - $38,995 - 7 seats - [LINK]</p>
                  <p>• 2025 Honda Pilot - $39,450 - 8 seats - [LINK]</p>
                  <p>• 2024 Mazda CX-9 - $37,500 - 7 seats - [LINK]</p>
                </div>
              </div>
            </div>
          </div>

          {/* The LeadScoringAgent */}
          <div className="bg-white rounded-2xl shadow-soft p-8 border-l-4 border-warning">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-warning/10 p-4 rounded-xl">
                <BarChart3 className="h-10 w-10 text-warning" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">The LeadScoringAgent</h3>
                <p className="text-warning font-semibold">The Qualifier</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-gray-800 mb-3">What it does:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-warning flex-shrink-0 mt-1" />
                  <span>Scores EVERY lead in real-time using BANT framework</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="font-bold text-gray-800">Budget:</p>
                <p className="text-sm text-gray-700">Do they have money?</p>
              </div>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="font-bold text-gray-800">Authority:</p>
                <p className="text-sm text-gray-700">Are they the decision maker?</p>
              </div>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="font-bold text-gray-800">Need:</p>
                <p className="text-sm text-gray-700">What's driving the purchase?</p>
              </div>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="font-bold text-gray-800">Timeline:</p>
                <p className="text-sm text-gray-700">When are they buying?</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent2/10 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-3">"Controlled Decrease" Scoring:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Hot leads stay hot (Score 4-5)</li>
                <li>✓ Tire-kickers get filtered (Score 2)</li>
                <li>✓ Service requests routed correctly (Score 1)</li>
                <li className="font-bold text-primary">Your sales team only talks to QUALIFIED leads</li>
              </ul>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-3">Why this saves you money:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-error mb-2">Without Lead Scoring:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sales team wastes 4 hours on "just browsing" customers</li>
                    <li>• Misses the hot lead who was ready to buy TODAY</li>
                    <li>• Frustration, inefficiency, lost commissions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-success mb-2">With Lead Scoring:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Score 5 lead? → Sales manager's phone rings IMMEDIATELY</li>
                    <li>• Score 2 lead? → Nurtured automatically, followed up later</li>
                    <li>• Score 1 (service)? → Routed to service department</li>
                    <li className="font-bold">Your closers focus on CLOSABLE leads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiAgentDealershipSection;
