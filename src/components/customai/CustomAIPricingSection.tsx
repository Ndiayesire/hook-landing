/**
 * CustomAIPricingSection Component
 *
 * Pricing structure for Custom AI Systems & Dashboards.
 * Features $3,000 one-time build fee and $497/month management.
 * Includes what's covered and ROI expectations.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Check, Star, Zap } from 'lucide-react';

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
            RECOMMENDED
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">Best for: {bestFor}</p>

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-1">One-Time Build:</div>
          <div className="text-3xl font-bold text-primary">{setupPrice}</div>
        </div>

        <div>
          <div className="text-sm text-gray-600 mb-1">Monthly Management:</div>
          <div className="text-2xl font-bold text-accent2">{monthlyPrice}</div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3">What's Included:</p>
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
          <span className="text-gray-600">Implementation Time:</span>
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

const CustomAIPricingSection: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Investment: <span className="text-accent2">Turn Your Business Into a 24/7 Revenue Machine</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This isn't an expense. It's an investment that pays for itself—fast.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Essential Package */}
          <PricingTier
            name="⚡ ESSENTIAL SYSTEM"
            bestFor="Small to mid-size businesses"
            setupPrice="$3,000"
            monthlyPrice="$497/month"
            features={[
              'Multi-agent AI system (2-3 specialized agents)',
              'Client dashboard with real-time visibility',
              'Team coordination dashboard',
              'Integration with existing systems (CRM, database)',
              'Lead scoring and qualification',
              'Bilingual support (French/English)',
              '30-day optimization period',
              'Monthly performance reports',
              'Email support (24-hour response)',
            ]}
            setupTime="6-8 weeks"
            expectedROI="3-5 months"
            ctaText="Get Started"
            ctaLink="/contact"
          />

          {/* Professional Package */}
          <PricingTier
            name="🚀 PROFESSIONAL SYSTEM"
            bestFor="Growing businesses scaling operations"
            setupPrice="$5,500"
            monthlyPrice="$797/month"
            features={[
              'Everything in Essential, PLUS:',
              'Full multi-agent system (4+ specialized agents)',
              'Advanced dashboard customization',
              'A/B testing and optimization',
              'Multi-platform integration (email, SMS, social)',
              'Weekly performance reviews',
              'Priority support (4-hour response)',
              'Quarterly strategy sessions',
              'Custom agent training for your industry',
            ]}
            setupTime="8-10 weeks"
            expectedROI="2-3 months"
            isPopular={true}
            ctaText="Get Started"
            ctaLink="/contact"
          />

          {/* Enterprise Package */}
          <PricingTier
            name="💎 ENTERPRISE SYSTEM"
            bestFor="Large organizations with complex needs"
            setupPrice="Custom"
            monthlyPrice="Custom"
            features={[
              'Everything in Professional, PLUS:',
              'Multi-department AI deployment',
              'Custom AI model training',
              'White-label dashboard options',
              'Dedicated account manager',
              'Advanced CRM/ERP integrations',
              'Custom analytics and reporting',
              'Conversion optimization workshops',
              '24/7 priority support',
              'On-site training and onboarding',
            ]}
            setupTime="10-12 weeks"
            expectedROI="1-2 months"
            ctaText="Schedule Enterprise Consultation"
            ctaLink="/contact"
          />
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-primary to-accent2 rounded-2xl p-10 text-white text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="h-8 w-8 text-secondary" />
            <h3 className="text-3xl font-bold">Why This Investment Makes Sense</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50%</div>
              <p className="text-gray-100">Reduction in status meetings</p>
              <p className="text-sm text-gray-200 mt-2">= More time building, less time talking</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-gray-100">AI working for you</p>
              <p className="text-sm text-gray-200 mt-2">= Revenue while you sleep</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">3-5X</div>
              <p className="text-gray-100">ROI within first year</p>
              <p className="text-sm text-gray-200 mt-2">= This pays for itself, then keeps paying</p>
            </div>
          </div>
          <p className="mt-8 text-xl font-semibold">
            Your competitors are still talking about AI. You'll be profiting from it.
          </p>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-soft border-l-4 border-success">
          <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Commitment to Your Success</h4>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success flex-shrink-0 mt-1" />
              <span><strong>Transparent Progress:</strong> See exactly what we're building through your dashboard, 24/7</span>
            </p>
            <p className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success flex-shrink-0 mt-1" />
              <span><strong>No Hidden Costs:</strong> One build fee, one monthly rate. That's it.</span>
            </p>
            <p className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success flex-shrink-0 mt-1" />
              <span><strong>Continuous Optimization:</strong> Your AI gets smarter every month based on real data</span>
            </p>
            <p className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success flex-shrink-0 mt-1" />
              <span><strong>Cancel Anytime:</strong> Monthly management is month-to-month. No long-term lock-in.</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CustomAIPricingSection;
