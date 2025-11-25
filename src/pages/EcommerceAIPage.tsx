/**
 * EcommerceAIPage Component
 *
 * Landing page for the Ecommerce AI Agent product offering.
 * Comprehensive sales page with hero, problem, solution, benefits,
 * case studies, pricing, testimonials, FAQ, and final CTA sections.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import FAQSchema from '../components/common/FAQSchema';
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
  const ecommerceFAQs = [
    { question: "How is this different from other chatbots?", answer: "Most chatbots are glorified FAQs that just answer questions. Our AI Sales Agent closes sales. It's trained on proven sales psychology, lead scoring, objection handling, and closing techniques. It adapts to each buyer in real-time and actively guides them toward purchase." },
    { question: "Will customers know they're talking to AI?", answer: "The conversation feels natural. Most don't realize it's AI unless they ask. We can add a disclosure like 'Hi! I'm the AI assistant' if you prefer transparency. Many brands don't disclose and let the experience speak for itself. Either way, it works." },
    { question: "How do I know it's actually generating sales?", answer: "Every cart link includes tracking codes so you see exactly which sales came from the chatbot in your Shopify Analytics. You can track traffic source, orders, revenue, and conversion rate - no guessing, just data." },
    { question: "What if it says something wrong?", answer: "We have five layers of protection: Medical/compliance filter blocks inappropriate topics, trained on YOUR products (specs, pricing, policies), connected to FAQ database for accurate info, escalation protocol for complex questions, and audit trail for continuous refinement. Wrong answers are rare and fixed fast." },
    { question: "How long until it's live?", answer: "Starter: 14 days, Professional: 21 days, Enterprise: 30-45 days. Timeline includes discovery and brand voice training, product catalog integration, FAQ database setup, testing and refinement, and launch with monitoring. You're live in weeks, not months." },
    { question: "What if my products change?", answer: "We handle updates for new products, price changes, seasonal campaigns, and new FAQs. Update cycles: Starter (monthly), Professional (bi-weekly), Enterprise (on-demand)." },
    { question: "Can it integrate with my email/SMS tools?", answer: "Yes, we can route hot leads to email (SendGrid, Mailchimp), SMS (Twilio), Slack notifications, and your CRM (HubSpot, Salesforce, etc.). Example: Lead scores 90+ → AI sends cart link + notifies your team via Slack for follow-up." },
    { question: "What's the catch?", answer: "No catch. This works best for e-commerce stores with clear products, brands with FAQ-heavy niches, businesses generating $50K+/month, and teams ready to trust AI with oversight. It doesn't work if your products are too complex/custom, you need human-only consultations, or you're not willing to test and optimize." }
  ];

  return (
    <>
      <SEO
        title="Ecommerce AI Agent | Turn Browsers Into Buyers 24/7 | HookTXT"
        description="Recover abandoned carts automatically with 72% success rate. AI agent that converts browsers into buyers, handles objections, and generates sales 24/7. Built for online stores. Stop losing revenue to cart abandonment."
        canonicalUrl="https://hooktxt.com/ecommerce-ai-agent"
        keywords="ecommerce AI, abandoned cart recovery, online store chatbot, e-commerce automation, sales AI, shopping cart AI, conversion optimization, retail AI"
        ogImage="https://hooktxt.com/og-ecommerce-ai.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hooktxt.com" },
          { name: "Ecommerce AI Agent", url: "https://hooktxt.com/ecommerce-ai-agent" }
        ]}
      />
      <FAQSchema faqs={ecommerceFAQs} />
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
