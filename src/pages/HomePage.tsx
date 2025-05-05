import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'HookTXT | Conversational AI. Real Results.';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;