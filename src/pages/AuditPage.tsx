/**
 * AuditPage Component
 *
 * Free AI Business Audit page offering a discovery call to assess
 * how HookTXT's AI solutions can help businesses improve their
 * customer interactions and generate revenue through AI agents.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import AuditHeroSection from '../components/audit/AuditHeroSection';
import AuditBenefitsSection from '../components/audit/AuditBenefitsSection';
import AuditProcessSection from '../components/audit/AuditProcessSection';
import AuditFAQSection from '../components/audit/AuditFAQSection';
import AuditFinalCTASection from '../components/audit/AuditFinalCTASection';

const AuditPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Free AI Business Audit | HookTXT"
        description="Get a free discovery call to see how AI chat agents can transform your business. Uncover opportunities to increase revenue, capture more leads, and automate customer conversations with custom AI solutions."
        canonicalUrl="https://hooktxt.com/ai-audit"
        keywords="AI business audit, free AI consultation, AI discovery call, business AI assessment, chatbot audit, AI agent consultation"
        ogImage="https://hooktxt.com/og-audit.jpg"
      />
      <AuditHeroSection />
      <AuditBenefitsSection />
      <AuditProcessSection />
      <AuditFAQSection />
      <AuditFinalCTASection />
    </>
  );
};

export default AuditPage;
