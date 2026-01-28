/**
 * AuditBenefitsSection Component
 *
 * Showcases what businesses will gain from the AI audit discovery call.
 * Highlights specific deliverables and value propositions.
 */

import React from 'react';
import { Target, TrendingUp, Lightbulb, CheckCircle2, MessageSquare, Zap } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';

const AuditBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Opportunity Analysis',
      description: 'Identify specific areas where AI can capture leads, answer questions, and close deals your team is currently missing.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Projections',
      description: 'Get realistic estimates of how much additional revenue AI chat agents could generate for your specific business model.'
    },
    {
      icon: Lightbulb,
      title: 'Custom Strategy',
      description: 'Receive a tailored roadmap showing exactly how AI would integrate with your current operations and tech stack.'
    },
    {
      icon: MessageSquare,
      title: 'Use Case Discovery',
      description: 'Uncover hidden opportunities in your customer journey where AI can provide instant value and improve experience.'
    },
    {
      icon: Zap,
      title: 'Quick Wins',
      description: 'Learn about immediate improvements you can make today, even before implementing a full AI solution.'
    },
    {
      icon: CheckCircle2,
      title: 'Implementation Timeline',
      description: 'Understand what it takes to get started, from initial setup to seeing measurable results in your business.'
    }
  ];

  return (
    <div className="relative bg-neutral-50 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            What You'll Get From
            <br />
            <span className="text-primary">Your Discovery Call</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            This isn't a sales pitch. It's a genuine assessment of how AI can help your business,
            with actionable insights you can use immediately.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Schedule Your Free Audit
          </a>
          <p className="text-sm text-neutral-500 mt-4">
            Takes 2 minutes to book • Available slots fill up fast
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditBenefitsSection;
