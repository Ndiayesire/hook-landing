/**
 * MultiAgentSystemSection Component
 *
 * Explains the multi-agent approach vs single chatbots.
 * Features 4 specialized AI agents (Orchestro, SalesAgent, InventoryAgent, LeadScoringAgent)
 * and includes a comparison table showing advantages over traditional chatbots.
 */

import React from 'react';
import Section from '../common/Section';
import { Workflow, Briefcase, Database, BarChart3, X, CheckCircle2 } from 'lucide-react';

const MultiAgentSystemSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          My AI Agents Aren't Your Typical Shitty Chatbots
        </h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            The Multi-Agent Approach: Why Single Bots Are for Amateurs
          </h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-error">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Here's what most "AI experts" don't understand:</span>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">One AI agent =</span> One employee trying to do 10 jobs at once.
            </p>
            <p className="text-lg font-bold text-error mb-4">Result? Mediocre at everything.</p>
          </div>
          <div className="bg-success bg-opacity-10 rounded-lg p-6 border-l-4 border-success">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">My multi-agent system =</span> A team of specialists, each expert in THEIR job.
            </p>
            <p className="text-lg font-bold text-success">Result? Excellence in EVERY interaction.</p>
          </div>
        </div>
      </div>

      {/* Specialized Agents */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-primary">
          My Specialized Agents in Action
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Orchestro */}
          <div className="bg-gradient-to-br from-primary/5 to-accent2/5 rounded-2xl p-8 border-2 border-primary/20 shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                <Workflow className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">The Orchestro</h4>
                <p className="text-gray-600 font-semibold">(The Conductor)</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Analyzes EVERY customer in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Detects intent before they even finish their sentence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Routes to the right specialist instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Zero wasted time, zero confusion</span>
              </li>
            </ul>
            <p className="mt-6 text-primary font-bold text-lg">
              Your customer gets the expert they need, immediately
            </p>
          </div>

          {/* The SalesAgent */}
          <div className="bg-gradient-to-br from-success/5 to-accent2/5 rounded-2xl p-8 border-2 border-success/20 shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-success">The SalesAgent</h4>
                <p className="text-gray-600 font-semibold">(The Closer)</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Doesn't just answer questions—it qualifies and converts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Knows when to push, when to nurture, when to escalate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Bilingual (French/English)—switches seamlessly mid-conversation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Captures lead data automatically while having a natural conversation</span>
              </li>
            </ul>
            <p className="mt-6 text-success font-bold text-lg">
              This agent doesn't take coffee breaks, and it NEVER has a bad day
            </p>
          </div>

          {/* The InventoryAgent */}
          <div className="bg-gradient-to-br from-accent2/5 to-primary/5 rounded-2xl p-8 border-2 border-accent2/20 shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-accent2 rounded-full flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-accent2">The InventoryAgent</h4>
                <p className="text-gray-600 font-semibold">(The Product Expert)</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Connected to your ENTIRE inventory via vector database</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Semantic search—understands "family SUV under $40K" not just model numbers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Real-time availability and specifications</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Can compare, recommend, and upsell intelligently</span>
              </li>
            </ul>
            <p className="mt-6 text-accent2 font-bold text-lg">
              Knows your inventory better than your top salesperson
            </p>
          </div>

          {/* The LeadScoringAgent */}
          <div className="bg-gradient-to-br from-primary/5 to-success/5 rounded-2xl p-8 border-2 border-primary/20 shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">The LeadScoringAgent</h4>
                <p className="text-gray-600 font-semibold">(The Qualifier)</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Scores every lead in real-time using intelligent metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">"Controlled decrease" scoring—hot leads stay hot, tire-kickers get filtered</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Identifies high-intent buyers vs. researchers instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Automatic routing based on lead quality</span>
              </li>
            </ul>
            <p className="mt-6 text-primary font-bold text-lg">
              Your sales team only talks to QUALIFIED leads—no more time wasters
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-primary">
          Why This Destroys Traditional Chatbots
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Chatbot */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-error/30">
            <h4 className="text-2xl font-bold mb-6 text-error flex items-center gap-3">
              <X className="h-8 w-8" />
              Traditional Chatbot
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">"I'm sorry, I don't understand"</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Transfers to human after 2 questions</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Can't handle complex requests</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700">Forgets context constantly</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-error flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-bold">COSTS you sales</span>
              </li>
            </ul>
          </div>

          {/* Multi-Agent System */}
          <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8 border-2 border-success">
            <h4 className="text-2xl font-bold mb-6 text-success flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8" />
              My Multi-Agent System
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Understands intent with AI precision</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Handles 80% of interactions start to finish</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Gets SMARTER with every conversation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700">Never forgets a customer or their history</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-bold">GENERATES revenue 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiAgentSystemSection;
