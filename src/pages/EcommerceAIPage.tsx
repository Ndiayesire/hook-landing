/**
 * EcommerceAIPage Component
 *
 * Landing page for the Ecommerce AI Agent product offering.
 * Comprehensive sales page with hero, problem, solution, benefits,
 * case studies, pricing, testimonials, FAQ, and final CTA sections.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import EcommerceHeroSection from '../components/ecommerce/EcommerceHeroSection';
import RevenueLeakSection from '../components/ecommerce/RevenueLeakSection';
import SolutionSection from '../components/ecommerce/SolutionSection';
import HowItWorksSection from '../components/ecommerce/HowItWorksSection';
import BenefitsSection from '../components/ecommerce/BenefitsSection';
import CaseStudySection from '../components/ecommerce/CaseStudySection';
import FeaturesBreakdownSection from '../components/ecommerce/FeaturesBreakdownSection';
import PricingSection from '../components/ecommerce/PricingSection';
import FAQSection from '../components/ecommerce/FAQSection';
import FinalCTASection from '../components/ecommerce/FinalCTASection';

const EcommerceAIPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Ecommerce AI Agent | Turn Browsers Into Buyers 24/7 | HookTXT"
        description="Recover abandoned carts automatically with 72% success rate. AI agent that converts browsers into buyers, handles objections, and generates sales 24/7. Built for online stores. Stop losing revenue to cart abandonment."
        canonicalUrl="https://hooktxt.com/ecommerce-ai-agent"
        keywords="ecommerce AI, abandoned cart recovery, online store chatbot, e-commerce automation, sales AI, shopping cart AI, conversion optimization, retail AI"
        ogImage="https://hooktxt.com/og-ecommerce-ai.jpg"
      />
      <EcommerceHeroSection />
      <RevenueLeakSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CaseStudySection />
      <FeaturesBreakdownSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default EcommerceAIPage;
