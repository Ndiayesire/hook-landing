/**
 * HomePage Component
 *
 * Main landing page showcasing HookTXT's 3 specialized AI products.
 * Features aggressive, results-focused messaging emphasizing revenue
 * generation over generic chatbot functionality.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import HeroSection from '../components/home/HeroSection';
import HomeProblemSection from '../components/home/HomeProblemSection';
import ServicesOverview from '../components/home/ServicesOverview';
import HomeHowItWorksSection from '../components/home/HomeHowItWorksSection';
import HomeRealResultsSection from '../components/home/HomeRealResultsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import HomeWhyHookTXTSection from '../components/home/HomeWhyHookTXTSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="HookTXT | AI That Closes Deals, Not Just Chats"
        description="Stop losing revenue to generic chatbots. HookTXT builds custom multi-agent AI systems that generate $300K+ in additional revenue. 24/7 lead capture for dealerships, e-commerce, and any business."
        canonicalUrl="https://hooktxt.com"
        keywords="AI chatbot, custom AI systems, multi-agent AI, dealership AI, e-commerce AI, revenue generation, lead capture, conversational AI"
        ogImage="https://hooktxt.com/og-home.jpg"
      />
      <StructuredData />
      <HeroSection />
      <HomeProblemSection />
      <ServicesOverview />
      <HomeHowItWorksSection />
      <HomeRealResultsSection />
      <TestimonialsSection />
      <HomeWhyHookTXTSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
