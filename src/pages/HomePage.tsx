/**
 * HomePage Component - Lumea-inspired design
 *
 * Main landing page with modern bento grid layout, floating UI elements,
 * teal accent colors, and clean sections showcasing HookTXT's AI products.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import HeroSection from '../components/home/HeroSection';
import BentoGrid from '../components/home/BentoGrid';
import FeaturesShowcase from '../components/home/FeaturesShowcase';
import StatsSection from '../components/home/StatsSection';
import PricingPreview from '../components/home/PricingPreview';
import NewsletterCTA from '../components/home/NewsletterCTA';

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
      <BentoGrid />
      <FeaturesShowcase />
      <StatsSection />
      <PricingPreview />
      <NewsletterCTA />
    </>
  );
};

export default HomePage;
