/**
 * DealershipAIPage Component
 *
 * Landing page for Dealership AI product offering.
 * Comprehensive page showcasing multi-agent AI for dealerships, real conversations,
 * ROI calculator, dashboard features, and aggressive CTAs focused on capturing after-hours leads.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import FAQSchema from '../components/common/FAQSchema';
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
  const dealershipFAQs = [
    { question: "How long does it take to set up the system?", answer: "Typically 2-4 weeks from kickoff to live operation, including discovery, system design, DMS integration, agent training, testing, team training, launch, and optimization. You'll start capturing leads within 4-6 weeks." },
    { question: "How does it integrate with my existing DMS?", answer: "We connect directly to your DMS system to pull real-time inventory data. Our system supports all major DMS platforms including CDK, Reynolds & Reynolds, and Dealertrack. We handle all technical integration - you just provide API access for automatic real-time syncing." },
    { question: "What if a customer asks something the AI doesn't know?", answer: "The system handles edge cases intelligently by acknowledging the question professionally, capturing the lead's contact info, promising a callback from a human specialist, and notifying your team immediately. The AI never makes up answers." },
    { question: "Can it handle trade-ins and financing questions?", answer: "Yes, the AI captures trade-in details (year, make, model, mileage, condition), provides general financing information, explains current promotions, and routes to the finance department for detailed quotes. The goal is to qualify and capture leads." },
    { question: "What happens to leads scored as 1 or 2?", answer: "Score 1 (Service) leads are automatically routed to the service department. Score 2 (Just Browsing) leads are captured for nurturing and added to email follow-up sequences, preventing your sales team from wasting time on tire-kickers." },
    { question: "How accurate is the lead scoring?", answer: "Our BANT-based scoring system analyzes Budget, Authority, Need, and Timeline indicators from conversations. The system improves over time by learning from actual conversions. Typical accuracy is 85%+ for hot leads (Score 4-5)." },
    { question: "What if my inventory changes constantly?", answer: "The system features real-time sync with your DMS. Inventory updates reflect instantly, sold vehicles disappear from suggestions, and new arrivals appear immediately - all automatically with no manual updates needed." },
    { question: "Can it handle multiple locations?", answer: "Yes, the system manages inventory across multiple locations, routes leads to the correct dealership, handles location-specific promotions, and provides location-aware responses. Each location gets its own dashboard view." },
    { question: "Is it bilingual?", answer: "Yes, with seamless English/French support. The AI detects language automatically, switches mid-conversation if needed, and maintains professional tone in both languages. Perfect for Quebec and bilingual markets." },
    { question: "What kind of support do we get?", answer: "Comprehensive support includes priority support channel, 4-hour response time for issues, monthly performance reviews, quarterly strategy sessions, continuous AI optimization, regular updates, and dedicated account manager for Enterprise plans." },
    { question: "How much does it cost?", answer: "Pricing is customized based on dealership size, volume, number of locations, integration complexity, and specific requirements. Typical ROI is 8-12X in year one with most dealerships seeing $300K-$500K in additional annual revenue. Schedule a consultation for your custom quote." },
    { question: "Can we test it before committing?", answer: "Yes, we offer custom demos with YOUR inventory data, live conversation examples, ROI calculations for your specific dealership, and trial periods for qualified dealerships. Contact us to schedule a demo with your real data." }
  ];

  return (
    <>
      <SEO
        title="Dealership AI: 24/7 Sales Team | Stop Losing Leads | HookTXT"
        description="Capture after-hours leads automatically with AI that never sleeps. $25K-$50K+ additional revenue per month. Multi-agent sales team, real-time inventory integration, intelligent lead scoring. Built for auto dealerships."
        canonicalUrl="https://hooktxt.com/dealership-ai"
        keywords="dealership AI, auto dealer chatbot, car dealership AI, automotive AI, lead capture, after-hours sales, dealership automation, car sales AI"
        ogImage="https://hooktxt.com/og-dealership-ai.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hooktxt.com" },
          { name: "Dealership AI", url: "https://hooktxt.com/dealership-ai" }
        ]}
      />
      <FAQSchema faqs={dealershipFAQs} />
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
