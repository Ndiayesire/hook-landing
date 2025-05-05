import React, { useEffect } from 'react';
import Section from '../components/common/Section';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | HookTXT';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Terms of <span className="text-secondary">Service</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Last updated: May 1st 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead">
            These Terms of Service ("Terms") govern the access and use of the services offered by Technologies HookTXT Inc., operating under the brands ChatInsight, Hook (SaaS), and Hook Services ("we", "our", "us"), a company incorporated in Quebec, Canada, with headquarters located at 41 King West, Sherbrooke, Quebec, Canada, J1H 1P1.
          </p>
          
          <p>
            By accessing or using our platforms and services, you ("the Client", "you", "your") agree to be bound by these Terms. If you do not agree, you may not access or use our services.
          </p>

          <h2>1. Scope of Services</h2>
          <p>We offer the following services:</p>
          <ul>
            <li>ChatInsight: A software-as-a-service (SaaS) analytics tool for analyzing conversations and user interactions</li>
            <li>Hook SaaS: A conversational platform combining AI and human-managed live chat features</li>
            <li>Hook Services: A managed service that includes chatbot design, live chat staffing, and conversational AI configuration</li>
          </ul>
          <p>Specific service terms may be outlined in a separate service agreement or subscription plan.</p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and have legal capacity to enter into a contract. If you are using the Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
          </p>

          <h2>3. Client Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and up-to-date information</li>
            <li>Keep your account credentials confidential</li>
            <li>Ensure that your use complies with applicable laws (including privacy laws)</li>
            <li>Obtain all necessary consents for processing of personal information, especially when integrating with chat transcripts or customer data</li>
            <li>Not use our services for illegal, fraudulent, or abusive purposes</li>
          </ul>

          <h2>4. Data Privacy & Security</h2>
          <p>
            Our handling of personal data is governed by our <a href="/privacy">Privacy Policy</a>, which forms part of these Terms. By using our services, you consent to the collection and use of personal data as described therein.
          </p>
          <p>
            We implement industry-standard security measures but cannot guarantee absolute data security. You are responsible for securing access to your systems and integrations.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All technology, content, and tools provided by Technologies HookTXT Inc. — including AI models, chat templates, interfaces, analytics dashboards, and documentation — are the intellectual property of Technologies HookTXT Inc.
          </p>
          <p>
            You are granted a limited, non-transferable, non-exclusive license to use the software and tools solely for your business use. You may not copy, reverse-engineer, resell, or sublicense the platform or its components.
          </p>

          <h2>6. Fees and Payment</h2>
          <p>For SaaS and service-based offerings, fees are outlined in your subscription or service agreement. All fees are:</p>
          <ul>
            <li>Due in advance unless otherwise agreed</li>
            <li>Subject to applicable Quebec and federal taxes</li>
            <li>Non-refundable, except where required by law</li>
          </ul>
          <p>Unpaid balances may result in suspension or termination of services.</p>

          <h2>7. Termination</h2>
          <p>We reserve the right to suspend or terminate access to our services if:</p>
          <ul>
            <li>You breach these Terms or any applicable laws</li>
            <li>You fail to pay for your subscription or services</li>
            <li>Continued use would pose a security or legal risk</li>
          </ul>
          <p>
            You may terminate your subscription or contract with prior written notice, subject to the terms of your agreement (e.g., minimum term or notice period).
          </p>

          <h2>8. Service Availability</h2>
          <p>
            We strive for 99.9% uptime but do not guarantee uninterrupted access. We may perform maintenance or updates that may temporarily affect service availability. We are not liable for any losses arising from such interruptions.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by Quebec and Canadian law:</p>
          <ul>
            <li>We shall not be liable for indirect, incidental, special, or consequential damages</li>
            <li>Our total liability shall not exceed the amount paid by you in the past 3 months for the relevant service</li>
            <li>We are not liable for losses caused by third-party platforms, system failures, or unauthorized access beyond our reasonable control</li>
          </ul>

          <h2>10. Indemnification</h2>
          <p>You agree to indemnify and hold Technologies HookTXT Inc. harmless from any claims, damages, or expenses arising from:</p>
          <ul>
            <li>Your misuse of the services</li>
            <li>Violation of any law or third-party rights</li>
            <li>Breach of these Terms</li>
          </ul>

          <h2>11. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of the Province of Quebec and the federal laws of Canada. Any dispute shall be brought before the competent courts in Sherbrooke, Quebec, to the exclusion of any other jurisdiction.
          </p>

          <h2>12. Changes to the Terms</h2>
          <p>
            We may update these Terms at any time. Updates will be posted on our website and, where appropriate, sent via email. Continued use of our services after changes take effect constitutes acceptance.
          </p>
        </div>
      </Section>
    </>
  );
};

export default TermsPage;