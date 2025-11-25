/**
 * DealershipAIPage Component
 *
 * Landing page for Dealership AI product offering.
 * Comprehensive page showcasing multi-agent AI for dealerships, real conversations,
 * ROI calculator, dashboard features, and aggressive CTAs focused on capturing after-hours leads.
 */

import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Dealership AI: 24/7 Sales Team | Stop Losing Leads | HookTXT';
  }, []);

  return (
    <>
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
