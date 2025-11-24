/**
 * FeaturesBreakdownSection Component
 *
 * Detailed breakdown of all features across 6 major categories.
 * Shows comprehensive feature lists with checkmarks.
 */

import React from 'react';
import Section from '../common/Section';
import { Check } from 'lucide-react';

interface FeatureCategoryProps {
  icon: string;
  title: string;
  features: string[];
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ icon, title, features }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesBreakdownSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            What You Get: <span className="text-accent2">The Complete AI Sales System</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCategory
            icon="🧠"
            title="CORE AI ENGINE"
            features={[
              'GPT-4o powered intelligence',
              'Trained on your products, brand, and FAQs',
              'Conversational memory (25-message history)',
              'Natural language understanding',
              'Multi-language support available',
            ]}
          />

          <FeatureCategory
            icon="🎯"
            title="LEAD SCORING SYSTEM"
            features={[
              'Real-time qualification (0-100 scale)',
              'Buying signal detection',
              'Intent analysis',
              'Adaptive response strategies',
              'Priority routing for hot leads',
            ]}
          />

          <FeatureCategory
            icon="💬"
            title="SALES CONVERSATION ENGINE"
            features={[
              'Proven closing techniques built-in',
              'Objection handling frameworks',
              'Product recommendation logic',
              'Urgency and scarcity deployment',
              'Upsell and cross-sell automation',
            ]}
          />

          <FeatureCategory
            icon="🛡️"
            title="COMPLIANCE & SAFETY"
            features={[
              'Medical question filtering',
              'Inappropriate content blocking',
              'Brand voice consistency',
              'Escalation protocols',
              'Audit trail for every conversation',
            ]}
          />

          <FeatureCategory
            icon="📊"
            title="TRACKING & ANALYTICS"
            features={[
              'UTM-tagged cart links',
              'Shopify Analytics integration',
              'Conversion tracking by lead score',
              'Revenue attribution',
              'Performance dashboards',
            ]}
          />

          <FeatureCategory
            icon="🔌"
            title="INTEGRATIONS"
            features={[
              'Shopify (native)',
              'Product catalog sync',
              'FAQ database connection',
              'Email/SMS escalation (optional)',
              'CRM integration (optional)',
            ]}
          />
        </div>

        {/* Ongoing Optimization */}
        <div className="mt-8 bg-gradient-to-r from-primary to-accent2 text-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>⚡</span>
            ONGOING OPTIMIZATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Monthly performance reviews</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>A/B testing of responses</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Prompt refinement</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>New product training</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Seasonal campaign updates</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturesBreakdownSection;
