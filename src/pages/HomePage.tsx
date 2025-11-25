/**
 * HomePage Component
 *
 * Main landing page showcasing HookTXT's 3 specialized AI products.
 * Features aggressive, results-focused messaging emphasizing revenue
 * generation over generic chatbot functionality.
 */

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HomeProblemSection from '../components/home/HomeProblemSection';
import ServicesOverview from '../components/home/ServicesOverview';
import HomeHowItWorksSection from '../components/home/HomeHowItWorksSection';
import HomeRealResultsSection from '../components/home/HomeRealResultsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import HomeWhyHookTXTSection from '../components/home/HomeWhyHookTXTSection';
import CtaSection from '../components/home/CtaSection';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'HookTXT | AI That Closes Deals, Not Just Chats';
  }, []);

  return (
    <>
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
