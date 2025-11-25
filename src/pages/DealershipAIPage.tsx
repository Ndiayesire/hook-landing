/**
 * DealershipAIPage Component
 *
 * Landing page for Dealership AI product offering.
 * Comprehensive page showcasing multi-agent AI for dealerships, real conversations,
 * ROI calculator, dashboard features, and aggressive CTAs focused on capturing after-hours leads.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import DealershipAIHeroSection from '../components/dealership/DealershipAIHeroSection';
import MultiAgentDealershipSection from '../components/dealership/MultiAgentDealershipSection';
import RealConversationsSection from '../components/dealership/RealConversationsSection';
import DealershipNumbersSection from '../components/dealership/DealershipNumbersSection';
import DealershipDashboardSection from '../components/dealership/DealershipDashboardSection';
import DealershipComparisonSection from '../components/dealership/DealershipComparisonSection';
import DealershipPricingSection from '../components/dealership/DealershipPricingSection';
import DealershipFAQSection from '../components/dealership/DealershipFAQSection';
import DealershipFinalCTASection from '../components/dealership/DealershipFinalCTASection';

const DealershipAIPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dealership AI: 24/7 Sales Team | Stop Losing Leads | HookTXT"
        description="Capture after-hours leads automatically with AI that never sleeps. $25K-$50K+ additional revenue per month. Multi-agent sales team, real-time inventory integration, intelligent lead scoring. Built for auto dealerships."
        canonicalUrl="https://hooktxt.com/dealership-ai"
        keywords="dealership AI, auto dealer chatbot, car dealership AI, automotive AI, lead capture, after-hours sales, dealership automation, car sales AI"
        ogImage="https://hooktxt.com/og-dealership-ai.jpg"
      />
      <DealershipAIHeroSection />
      <MultiAgentDealershipSection />
      <RealConversationsSection />
      <DealershipNumbersSection />
      <DealershipDashboardSection />
      <DealershipComparisonSection />
      <DealershipPricingSection />
      <DealershipFAQSection />
      <DealershipFinalCTASection />
    </>
  );
};

export default DealershipAIPage;
