/**
 * CustomAIPage Component
 *
 * Landing page for Custom AI Systems & Dashboards product offering.
 * Comprehensive page showcasing multi-agent AI architecture, dual dashboard system,
 * competitive advantages, results impact, FAQs, and aggressive CTAs.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import CustomAIHeroSection from '../components/customai/CustomAIHeroSection';
import MultiAgentSystemSection from '../components/customai/MultiAgentSystemSection';
import DualDashboardSection from '../components/customai/DualDashboardSection';
import CompetitiveAdvantagesSection from '../components/customai/CompetitiveAdvantagesSection';
import ComparisonSection from '../components/customai/ComparisonSection';
import ResultsImpactSection from '../components/customai/ResultsImpactSection';
import CustomAIPricingSection from '../components/customai/CustomAIPricingSection';
import CustomAIFAQSection from '../components/customai/CustomAIFAQSection';
import CustomAIFinalCTASection from '../components/customai/CustomAIFinalCTASection';

const CustomAIPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Custom AI Systems & Dashboards | Dominate with AI | HookTXT"
        description="Custom multi-agent AI systems built for YOUR business. Generate $150K-$500K+ in additional revenue year one. Real-time dashboards, intelligent lead qualification, 24/7 operations. Not templates, actual custom development."
        canonicalUrl="https://hooktxt.com/custom-ai-systems"
        keywords="custom AI systems, multi-agent AI, AI dashboards, business AI, AI automation, custom chatbot, AI development, revenue AI"
        ogImage="https://hooktxt.com/og-custom-ai.jpg"
      />
      <CustomAIHeroSection />
      <MultiAgentSystemSection />
      <DualDashboardSection />
      <CompetitiveAdvantagesSection />
      <ComparisonSection />
      <ResultsImpactSection />
      <CustomAIPricingSection />
      <CustomAIFAQSection />
      <CustomAIFinalCTASection />
    </>
  );
};

export default CustomAIPage;
