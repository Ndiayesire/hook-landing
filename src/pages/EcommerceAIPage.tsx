/**
 * EcommerceAIPage Component
 *
 * Landing page for the Ecommerce AI Agent product offering.
 * Comprehensive sales page with hero, problem, solution, benefits,
 * case studies, pricing, testimonials, FAQ, and final CTA sections.
 */

import React, { useEffect } from 'react';
import EcommerceHeroSection from '../components/ecommerce/EcommerceHeroSection';
import RevenueLeakSection from '../components/ecommerce/RevenueLeakSection';
import SolutionSection from '../components/ecommerce/SolutionSection';
import HowItWorksSection from '../components/ecommerce/HowItWorksSection';
import BenefitsSection from '../components/ecommerce/BenefitsSection';
import CaseStudySection from '../components/ecommerce/CaseStudySection';
import FeaturesBreakdownSection from '../components/ecommerce/FeaturesBreakdownSection';
import TestimonialsSection from '../components/ecommerce/TestimonialsSection';
import PricingSection from '../components/ecommerce/PricingSection';
import FAQSection from '../components/ecommerce/FAQSection';
import FinalCTASection from '../components/ecommerce/FinalCTASection';

const EcommerceAIPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Ecommerce AI Agent | Turn Browsers Into Buyers 24/7 | HookTXT';
  }, []);

  return (
    <>
      <EcommerceHeroSection />
      <RevenueLeakSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CaseStudySection />
      <FeaturesBreakdownSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default EcommerceAIPage;
