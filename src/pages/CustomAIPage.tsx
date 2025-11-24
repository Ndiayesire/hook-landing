/**
 * CustomAIPage Component
 *
 * Landing page for Custom AI Systems & Dashboards product offering.
 * Comprehensive page showcasing multi-agent AI architecture, dual dashboard system,
 * competitive advantages, results impact, FAQs, and aggressive CTAs.
 */

import React, { useEffect } from 'react';
import CustomAIHeroSection from '../components/customai/CustomAIHeroSection';
import MultiAgentSystemSection from '../components/customai/MultiAgentSystemSection';
import DualDashboardSection from '../components/customai/DualDashboardSection';
import CompetitiveAdvantagesSection from '../components/customai/CompetitiveAdvantagesSection';
import ComparisonSection from '../components/customai/ComparisonSection';
import ResultsImpactSection from '../components/customai/ResultsImpactSection';
import CustomAIFAQSection from '../components/customai/CustomAIFAQSection';
import CustomAIFinalCTASection from '../components/customai/CustomAIFinalCTASection';

const CustomAIPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Custom AI Systems & Dashboards | Dominate with AI | HookTXT';
  }, []);

  return (
    <>
      <CustomAIHeroSection />
      <MultiAgentSystemSection />
      <DualDashboardSection />
      <CompetitiveAdvantagesSection />
      <ComparisonSection />
      <ResultsImpactSection />
      <CustomAIFAQSection />
      <CustomAIFinalCTASection />
    </>
  );
};

export default CustomAIPage;
