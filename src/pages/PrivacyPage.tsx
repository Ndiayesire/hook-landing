import React, { useEffect } from 'react';
import Section from '../components/common/Section';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | HookTXT';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Privacy <span className="text-secondary">Policy</span>
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
            This Privacy Policy applies to all services operated by Technologies HookTXT Inc., doing business as ChatInsight, Hook (SaaS), and Hook Services, headquartered at 1639 rue Mondor, Sherbrooke, Quebec, Canada.
          </p>
          
          <p>
            We are committed to protecting the privacy of our customers, users, and website visitors in accordance with Quebec's Law 25 (Act to Modernize the Protection of Personal Information) and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            Depending on the service (ChatInsight, Hook SaaS, or Hook Services), we may collect the following types of personal information:
          </p>
          <ul>
            <li>Identification details: name, email address, phone number</li>
            <li>Professional information: company name, role, industry</li>
            <li>Browsing data: IP address, language preferences, pages visited, cookies</li>
            <li>Chat transcripts: collected as part of chatbot/live chat analysis or management</li>
            <li>Analytical data: user behavior, chat response rates, conversation history</li>
            <li>Technical data: browser type, operating system, device type</li>
          </ul>

          <h2>2. How We Use the Information</h2>
          <p>We collect and use personal information for the following purposes:</p>
          <ul>
            <li>To provide our services (SaaS platforms, managed live chat, AI chatbot solutions)</li>
            <li>To improve the performance, reliability, and usability of our platforms</li>
            <li>To communicate with users about updates, support, and relevant content</li>
            <li>To comply with legal or regulatory obligations</li>
            <li>To train AI models (only when explicit consent is granted)</li>
          </ul>

          <h2>3. Consent</h2>
          <p>
            We obtain explicit consent before collecting or using sensitive personal data. You may withdraw your consent at any time by contacting us at privacy@hooktxt.com.
          </p>

          <h2>4. Disclosure to Third Parties</h2>
          <p>We do not sell or rent your personal data. We may share it with:</p>
          <ul>
            <li>Service providers (e.g., hosting, analytics, customer support), bound by strict confidentiality agreements</li>
            <li>Employees or subcontractors who need the information to perform their duties</li>
            <li>Authorities, when legally required</li>
          </ul>
          <p>All third parties are required to comply with protections equal to or exceeding those of Law 25.</p>

          <h2>5. Transfers Outside of Quebec</h2>
          <p>
            If your data must be transferred outside of Quebec, we will conduct a Privacy Impact Assessment (PIA) and ensure that adequate data protection standards are in place before proceeding.
          </p>

          <h2>6. Security Measures</h2>
          <p>We implement strong technical and organizational security measures, including:</p>
          <ul>
            <li>Secure cloud infrastructure (e.g., Supabase, AWS)</li>
            <li>Data encryption in transit and at rest</li>
            <li>Role-based access controls</li>
            <li>Detailed access logging and auditing</li>
          </ul>

          <h2>7. Access, Correction, and Deletion Rights</h2>
          <p>In accordance with Law 25, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate or outdated information</li>
            <li>Request the deletion of your personal data, subject to legal retention requirements</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@hooktxt.com.</p>

          <h2>8. Privacy Officer</h2>
          <p>
            Name: Kevin Michaud<br />
            Email: privacy@hooktxt.com<br />
            Address: 1639 rue Mondor, Sherbrooke, Quebec, J1J 3X7, Canada
          </p>

          <h2>9. Cookies</h2>
          <p>Our websites and platforms use cookies to:</p>
          <ul>
            <li>Enhance navigation and user experience</li>
            <li>Remember your preferences</li>
            <li>Collect usage statistics</li>
          </ul>
          <p>You may disable cookies in your browser settings at any time.</p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy. Significant changes will be communicated, and the revision date will be posted at the top of this page.
          </p>

          <h2>11. Complaints</h2>
          <p>If you believe your privacy rights have been violated, you may:</p>
          <ul>
            <li>Contact us directly at privacy@hooktxt.com</li>
            <li>File a complaint with the Commission d'accès à l'information du Québec: www.cai.gouv.qc.ca</li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;