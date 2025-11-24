/**
 * PricingSection Component
 *
 * Three-tier pricing structure: Starter, Professional, and Enterprise.
 * Includes ROI guarantee and feature comparisons.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Check, Star } from 'lucide-react';

interface PricingTierProps {
  name: string;
  bestFor: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  setupTime: string;
  expectedROI: string;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  bestFor,
  setupPrice,
  monthlyPrice,
  features,
  setupTime,
  expectedROI,
  isPopular = false,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className={`bg-white rounded-xl p-8 border-2 ${isPopular ? 'border-primary shadow-xl scale-105' : 'border-gray-200'} relative`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <Star className="h-4 w-4 fill-current" />
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">Best for: {bestFor}</p>

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-1">One-Time Setup:</div>
          <div className="text-3xl font-bold text-primary">{setupPrice}</div>
        </div>

        <div>
          <div className="text-sm text-gray-600 mb-1">Monthly:</div>
          <div className="text-2xl font-bold text-accent2">{monthlyPrice}</div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3">Includes:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Setup Time:</span>
          <span className="font-semibold text-gray-800">{setupTime}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Expected ROI:</span>
          <span className="font-semibold text-success">{expectedROI}</span>
        </div>
      </div>

      <Button
        to={ctaLink}
        variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Investment Options: <span className="text-accent2">Choose Your Growth Path</span>
          </h2>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Starter Package */}
          <PricingTier
            name="⚡ STARTER PACKAGE"
            bestFor="Stores doing $50K-$200K/month"
            setupPrice="$4,997"
            monthlyPrice="$497/month"
            features={[
              'AI Sales Agent implementation',
              'Lead scoring system (0-100)',
              'Product catalog integration',
              'FAQ database setup',
              'UTM tracking implementation',
              'Basic compliance filtering',
              '30-day post-launch support',
              'Monthly performance reports',
            ]}
            setupTime="14 days"
            expectedROI="60-90 days"
            ctaText="Get Started"
            ctaLink="/demo"
          />

          {/* Professional Package */}
          <PricingTier
            name="🚀 PROFESSIONAL PACKAGE"
            bestFor="Stores doing $200K-$500K/month"
            setupPrice="$7,997"
            monthlyPrice="$797/month"
            features={[
              'Everything in Starter, PLUS:',
              'Advanced medical/compliance filtering',
              'Multi-agent system (triage + sales)',
              'Upsell/cross-sell automation',
              'A/B testing & optimization',
              'Weekly performance reviews',
              'Priority support (4-hour response)',
              'Quarterly strategy sessions',
              'Custom integrations (email/SMS)',
            ]}
            setupTime="21 days"
            expectedROI="30-60 days"
            isPopular={true}
            ctaText="Get Started"
            ctaLink="/demo"
          />

          {/* Enterprise Package */}
          <PricingTier
            name="💎 ENTERPRISE PACKAGE"
            bestFor="Stores doing $500K+/month"
            setupPrice="Custom"
            monthlyPrice="Custom"
            features={[
              'Everything in Professional, PLUS:',
              'Multi-store deployment',
              'Custom AI model training',
              'White-label options',
              'Dedicated account manager',
              'CRM/ERP integrations',
              'Advanced analytics dashboards',
              'Conversion optimization workshops',
              '24/7 priority support',
            ]}
            setupTime="30-45 days"
            expectedROI="30 days or less"
            ctaText="Schedule Enterprise Consultation"
            ctaLink="/demo"
          />
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
