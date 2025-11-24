/**
 * SolutionSection Component
 *
 * Showcases the AI Sales Agent solution with 6 key differentiators.
 * Each pillar includes an icon, headline, translation line, and description.
 */

import React from 'react';
import Section from '../common/Section';
import { Target, Brain, TrendingUp, Shield, MessageSquare, Zap } from 'lucide-react';

interface PillarProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  translation: string;
  description: string;
}

const SolutionPillar: React.FC<PillarProps> = ({ icon, number, title, translation, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-primary font-bold text-sm mb-1">{number}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        </div>
      </div>
      <p className="text-sm font-semibold text-accent2 mb-3 italic">
        Translation: {translation}
      </p>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Introducing The AI Sales Agent: <span className="text-accent2">Your 24/7 Revenue Generator</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            This isn't a generic FAQ bot. This is a <span className="font-bold">trained sales professional powered by AI</span> — built specifically for your business, your products, and your customers.
          </p>
          <p className="text-lg font-semibold text-primary">
            Here's what makes it different:
          </p>
        </div>

        {/* Six Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SolutionPillar
            icon={<Target className="h-6 w-6 text-primary" />}
            number="🎯 1."
            title="INTELLIGENT LEAD SCORING"
            translation="Your AI knows who's ready to buy and adapts instantly."
            description="Every visitor gets rated 0-100 based on buying signals. Hot leads get an aggressive close. Researchers get education. Time-wasters get politely redirected."
          />

          <SolutionPillar
            icon={<Brain className="h-6 w-6 text-primary" />}
            number="💰 2."
            title="PROVEN SALES PSYCHOLOGY"
            translation="Your AI uses the same tactics your best salesperson would — every single time."
            description="Trained on techniques used by top closers: assumptive closes, objection handling, trial closes, urgency creation, social proof deployment."
          />

          <SolutionPillar
            icon={<TrendingUp className="h-6 w-6 text-primary" />}
            number="📊 3."
            title="TRACKABLE ROI"
            translation="No guessing. You know if it's working (spoiler: it will be)."
            description="Every cart link is tagged. Every sale is tracked. You see exactly how much revenue your AI generates in your Shopify dashboard."
          />

          <SolutionPillar
            icon={<Shield className="h-6 w-6 text-primary" />}
            number="🛡️ 4."
            title="COMPLIANCE PROTECTION"
            translation="Your brand stays protected while the AI sells 24/7."
            description="Medical questions? Blocked automatically. Health claims? Never made. Inappropriate requests? Redirected to human support."
          />

          <SolutionPillar
            icon={<MessageSquare className="h-6 w-6 text-primary" />}
            number="🧠 5."
            title="CONVERSATIONAL MEMORY"
            translation="Customers don't know they're talking to AI (until you tell them)."
            description="Remembers the entire conversation. Never repeats questions. Builds on previous answers. Feels human."
          />

          <SolutionPillar
            icon={<Zap className="h-6 w-6 text-primary" />}
            number="⚡ 6."
            title="INSTANT DEPLOYMENT"
            translation="Live and generating revenue in 2 weeks, not 2 months."
            description="Integrated with your Shopify store, product catalog, FAQ database, and brand voice in 7-14 days."
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-accent2 text-white rounded-xl p-8">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            The difference between a helper and a closer.
          </p>
          <p className="text-lg text-gray-100">
            Generic chatbot: "I can help you with FAQs!"<br />
            <span className="font-bold text-secondary text-xl">Your AI Sales Agent:</span> "Based on what you told me, the BTS2 is perfect for you. Here's your cart link — ready to try it risk-free for 30 days?"
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
