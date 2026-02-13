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
              Last updated: February 13, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>DEFINITION AND SCOPE</h2>
          <p>
            Thank you for visiting HookTXT, ChatWidgetPro, or using any of our products and services (the "Platform"), operated by Technologies HookTXT Inc. ("we," "our," or "us"), doing business as ChatInsight, Hook (SaaS), Hook Services, and ChatWidgetPro. We respect the privacy of every individual who visits or uses the Platform and are sensitive to privacy issues on the Internet. We believe it is important that you know how we deal with information received about you.
          </p>
          <p>
            This Privacy Policy (the "Privacy Policy") explains how we collect, use, disclose, and protect the personal information of our customers, website users, and end users who interact with chat widgets powered by our Platform ("you"). It describes the types of information we may collect from you or that you may provide to us, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          <p>
            Our platforms include Software-as-a-Service (SaaS) solutions that enable businesses to create, configure, and deploy customizable chat widgets with AI-powered responses on their websites, as well as managed live chat services and custom AI chatbot solutions. This Privacy Policy applies to both our customers who use the Platform to create and manage widgets, and to end users who interact with those widgets on third-party websites.
          </p>
          <p>
            We will only use your personal information in accordance with this Privacy Policy unless otherwise required by applicable law. We take steps to ensure that the personal information we collect about you is accurate, adequate, relevant, not excessive, and used for limited purposes. We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA), Quebec's Act respecting the protection of personal information in the private sector (Law 25), and the General Data Protection Regulation (GDPR) for users in the European Economic Area. Privacy laws in Canada generally define "Personal Information" as any information about an identifiable individual, which includes information that can be used on its own or with other information to identify, contact, or locate a single person.
          </p>
          <p>
            We do not knowingly collect personal information directly from children under the age of 13 (or 16 in the European Economic Area). The Platform is for general business audiences and is not specifically targeted to or intended for use by children.
          </p>
          <p>
            By accessing or using the Platform, you are accepting the practices described in this Privacy Policy, and you are consenting to our processing of your information as set out herein. We may modify or update this Privacy Policy from time to time; if we change this Privacy Policy in a manner that materially impacts your privacy rights, we will provide notice to you. Your continued use of the Platform or our services after any modification to this Privacy Policy will constitute your acceptance of such modification. However, when required by law, we will confirm your consent to the revised Privacy Policy terms. This Privacy Policy is incorporated into and considered a part of the Terms of Service.
          </p>

          <h2>WHAT INFORMATION WE COLLECT</h2>
          <p>We collect and use several types of information from and about you, including:</p>

          <h3>Personal Information</h3>
          <p>
            Information that we can reasonably use to directly or indirectly identify you, such as your name, email address, password (stored in encrypted form using bcrypt hashing), telephone number, Internet Protocol (IP) address used to connect your device to the Internet, company name, website URL, billing and account information processed through Stripe (we do not store full credit card numbers), and any other identifier we may use to contact you online or offline.
          </p>

          <h3>Non-Personal Information</h3>
          <p>
            Information that does not directly or indirectly reveal your identity or directly relate to an identified individual, such as demographic information, or statistical or aggregated information. Statistical or aggregated data does not directly identify a specific person, but we may derive non-personal statistical or aggregated data from Personal Information. For example, we may aggregate Personal Information to calculate the percentage of users accessing a specific Platform feature, or to analyze chat widget usage patterns across our customer base.
          </p>

          <h3>Usage Information</h3>
          <p>
            Information about your interaction with the Platform, including your login information, Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating systems and platform, device information, or information about your Internet connection and the equipment you use to access the Platform.
          </p>

          <h3>Chat Interaction Data</h3>
          <p>
            Messages exchanged through chat widgets powered by our Platform, including text content, timestamps, visitor identifiers, consent status, file attachments (when file upload is enabled), and metadata associated with chat sessions. This data is collected for the purpose of providing AI-powered chat responses, analytics, and service improvement.
          </p>

          <h3>Widget Configuration Data</h3>
          <p>
            Settings, customizations, appearance preferences, behavioral configurations, knowledge base content, and other data our customers provide when creating and configuring their chat widgets.
          </p>

          <h3>Analytics Data</h3>
          <p>
            Non-personal details about your Platform interactions, including page views, feature usage, click patterns, session durations, chat widget interaction metrics (such as messages sent, response times, satisfaction ratings), and other behavioral data used to improve our services.
          </p>

          <h2>HOW WE COLLECT THE INFORMATION</h2>

          <h3>Information You Provide to Us</h3>
          <p>The information we collect directly from you may include:</p>
          <ul>
            <li><strong>Account Registration:</strong> When you sign up for an account, we collect your name, email address, and password. You may optionally provide a company name, website URL, and profile picture.</li>
            <li><strong>Widget Configuration:</strong> When you create and configure chat widgets, we collect the settings, customizations, knowledge base content, AI instructions, and other configuration data you provide.</li>
            <li><strong>Payment Information:</strong> When you subscribe to a paid plan, your payment information is collected and processed directly by Stripe, our PCI-DSS compliant payment processor. We receive only payment confirmation, subscription status, and basic billing details — we never store your full credit card number.</li>
            <li><strong>Chat Messages:</strong> When end users interact with chat widgets on third-party websites, the messages they send are transmitted to our Platform for processing and AI-powered response generation. End users are notified of data collection through a consent notice displayed in the widget.</li>
            <li><strong>Support Communications:</strong> When you contact us for customer service or support, we collect the content of those communications and any additional information about the method of communication.</li>
            <li><strong>Marketing Communications:</strong> If you opt in to receive marketing communications from us, we collect your email address to send relevant updates and promotional materials.</li>
          </ul>

          <h3>Information We Collect Through Cookies and Automatic Data Collection Technologies</h3>
          <p>
            As you navigate through and interact with the Platform, we may use cookies or other automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns.
          </p>
          <p>The technologies we use for automatic data collection may include:</p>
          <ul>
            <li><strong>Cookies (Browser Cookies):</strong> Small files placed on your device. You may refuse to accept browser cookies by adjusting your browser settings. However, if you do so, you may be unable to access certain parts of the Platform.</li>
            <li><strong>Web Beacons:</strong> Small electronic files (also known as clear gifs, pixel tags, and single-pixel gifs) that allow us to count users who have visited certain pages and for other related website statistics.</li>
            <li><strong>Analytics Tools:</strong> Google Analytics with IP anonymization enabled to collect anonymized usage statistics about how you interact with the Platform.</li>
            <li><strong>Session Data:</strong> Information about your browsing session, including pages visited, features used, and interactions with the Platform interface.</li>
          </ul>

          <h3>Information Collected Through Chat Widgets</h3>
          <p>When our customers embed chat widgets on their websites, the following information may be collected from end users who interact with those widgets:</p>
          <ul>
            <li>Chat messages and their content</li>
            <li>Visitor identifiers (generated for session tracking)</li>
            <li>Consent status (whether the end user has accepted the consent notice)</li>
            <li>Timestamps of interactions</li>
            <li>File attachments (when file upload is enabled by the widget owner)</li>
            <li>Device and browser information</li>
            <li>IP address</li>
          </ul>
          <p>
            <strong>Note for End Users:</strong> Chat widgets display a consent notice before data collection begins. By sending a message through a chat widget, you consent to the collection and processing of your information as described in this Privacy Policy. The widget is loaded within an isolated iframe for security, ensuring separation from the host website's data.
          </p>

          <h3>Information from Third Parties</h3>
          <p>We may receive Personal Information about you from various third parties, including:</p>
          <ul>
            <li><strong>Payment Processor (Stripe):</strong> Payment confirmation, subscription status, and fraud prevention data.</li>
            <li><strong>Authentication Providers:</strong> If you sign in using third-party authentication services, we may receive basic profile information.</li>
            <li><strong>Integration Partners:</strong> Data from services you connect to your widgets, such as n8n workflows or custom backend integrations.</li>
          </ul>

          <h2>HOW WE USE YOUR INFORMATION</h2>
          <p>
            We use your information, including your Personal Information, to manage our business and to maintain and develop commercial relationships with you. We will collect, use, and disclose such information only to the extent that is necessary for those purposes.
          </p>
          <p>We use information that we collect about you or that you provide to us, including any Personal Information:</p>
          <ul>
            <li>To present the Platform and its contents to you.</li>
            <li>To provide, maintain, and improve our chat widget services, including AI-powered chat responses.</li>
            <li>To create and manage your account, process payments, and manage subscriptions.</li>
            <li>To fulfill the purposes for which you provided the information or that were described when it was collected.</li>
            <li>To provide you with notices about your account, including subscription and billing notifications.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts with you, including billing and collection.</li>
            <li>To notify you about changes to the Platform or any products or services we offer.</li>
            <li>To improve the Platform, products or services, marketing, or customer relationships and experiences.</li>
            <li>To process and deliver chat messages through widgets, including generating AI-powered responses using the knowledge base and instructions configured by widget owners.</li>
            <li>To provide analytics and reporting to widget owners about their chat widget performance, including message volumes, response times, and visitor engagement metrics.</li>
            <li>To detect fraud, prevent abuse, and ensure the security and integrity of the Platform.</li>
            <li>To measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant communications.</li>
            <li>To comply with applicable laws and regulations.</li>
            <li>For marketing purposes, with your consent, including sending promotional content (you can opt out at any time).</li>
            <li>For any other purpose with your consent.</li>
          </ul>
          <p>
            Your Personal Information is also accessible to our employees or representatives who require it in the performance of their duties. Employees or representatives must maintain the confidentiality of your Personal Information at all times and are required to follow our internal policies on security and the protection of personal information.
          </p>

          <h2>HOW WE SHARE YOUR INFORMATION</h2>
          <p>We will not rent or sell your information to third parties without your consent. We only share your data as specifically provided in this Privacy Policy.</p>

          <h3>Sharing With Our Service Providers</h3>
          <p>We may provide your data, including your Personal Information, to third-party service providers who assist us in operating the Platform and delivering our services:</p>
          <ul>
            <li><strong>Supabase:</strong> Database hosting, authentication, and backend infrastructure services. Your account data, widget configurations, and chat message history are stored on Supabase's secure servers.</li>
            <li><strong>Stripe:</strong> Payment processing for subscriptions and credits. Stripe is PCI-DSS compliant and handles all payment card data directly.</li>
            <li><strong>AI/LLM Providers:</strong> Chat messages may be processed by third-party AI language model providers to generate responses. Messages are sent to these providers for processing and are subject to their respective data handling practices.</li>
            <li><strong>Google Analytics:</strong> Anonymized usage analytics with IP anonymization enabled.</li>
            <li><strong>Email Service Providers:</strong> For transactional and marketing communications.</li>
            <li><strong>Cloud Hosting (Vercel):</strong> Application hosting and content delivery services.</li>
          </ul>

          <h3>Sharing With Widget Owners</h3>
          <p>
            When end users interact with a chat widget, the messages, analytics data, and interaction details are made available to the customer who owns and operates that widget. Each widget owner is responsible for their own handling of end-user data in accordance with their own privacy policies and applicable laws.
          </p>

          <h3>Other Disclosures</h3>
          <p>In addition to any disclosure you may have consented to or permitted under the terms of this Privacy Policy, we may transfer your data, including Personal Information, to third parties in the following limited circumstances:</p>
          <ul>
            <li>Information you expressly consent to be shared.</li>
            <li>When relating to anonymized information (individuals cannot be identified by it).</li>
            <li>To satisfy any applicable law, regulation, legal process or enforceable governmental request within or outside your country of residence when we have a good faith belief that the law requires it.</li>
            <li>To enforce this Privacy Policy, the Terms of Service, or an agreement, including investigation of potential violations thereof.</li>
            <li>To detect, prevent, or otherwise address fraud, security or technical issues, or protect our operations or you.</li>
            <li>To protect our rights, property or safety as well as yours, the public, or others.</li>
            <li>In connection with an acquisition, merger, change in control, debt financing, reorganization, sale of assets, bankruptcy or other change of our corporate structure or status.</li>
            <li>As necessary in connection with the performance of requested services or solutions, or as otherwise appropriate in connection with a legitimate need.</li>
          </ul>

          <h2>HOW WE STORE AND SECURE YOUR INFORMATION</h2>

          <h3>Information Security</h3>
          <p>
            We are committed to protecting the confidentiality, integrity, availability, and privacy of your Personal Information. We have implemented appropriate physical, technological, and procedural security measures designed to help prevent your Personal Information from being lost, used, modified, or accessed in an unauthorized way, or improperly disclosed.
          </p>
          <p>Our security measures include:</p>
          <ul>
            <li>Encryption of data in transit using TLS/SSL protocols.</li>
            <li>Encryption of data at rest on our database servers.</li>
            <li>Secure password hashing using bcrypt algorithm.</li>
            <li>Infrastructure hosted on Supabase with enterprise-grade security.</li>
            <li>Restricted access controls and authentication requirements.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Regular backups and disaster recovery procedures.</li>
            <li>Widget embedding via isolated iframes to ensure separation from host website data.</li>
            <li>Row-Level Security (RLS) on database tables to ensure data isolation between customers.</li>
          </ul>
          <p>
            We also limit access to your Personal Information to those employees, agents, contractors, and other third parties who have a legitimate business reason for accessing your Personal Information. They are required to process your Personal Information only on our instructions and are subject to an obligation of confidentiality. Our service providers are required to maintain adequate security protections and are not permitted to use your Personal Information for any purpose other than fulfilling services to us.
          </p>
          <p>
            <strong>Important:</strong> Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. Any transmission you provide is at your own risk. Once we have received your information, we will apply our security practices to try to prevent unauthorized access, use, and/or disclosure. If you have reason to believe that your interaction with us is no longer secure, please immediately notify us by contacting us at privacy@hooktxt.com.
          </p>

          <h3>Information Retention</h3>
          <p>We will retain your Personal Information for as long as reasonably necessary to fulfill the purposes we collected it for, including:</p>
          <ul>
            <li>To provide the products and services that you have requested.</li>
            <li>To communicate with you about a purchase or request you have made to us.</li>
            <li>To manage your choices and rights you have exercised pursuant to this Privacy Policy.</li>
            <li>To enable you to maintain an account with us.</li>
            <li>To comply with our legal and regulatory obligations and to demonstrate compliance.</li>
            <li>To resolve disputes and to enforce our rights and agreements.</li>
          </ul>
          <p>
            After account deletion, we retain certain data for 30 days for recovery purposes, then permanently delete all personal information, except as required by law for tax, legal, or audit purposes (up to 7 years). Chat message history may be retained in accordance with the widget owner's configured retention settings.
          </p>
          <p>We may retain non-personal information that has been sufficiently aggregated or anonymized for a longer period.</p>

          <h3>International Data Transfers</h3>
          <p>
            As a Canadian company, we process data in Canada and the United States. By providing us with Personal Information, you understand that it may be communicated to or stored outside your country of residence by us or one of our service providers or partners.
          </p>
          <p>
            If you are located in the European Economic Area (EEA), your data may be transferred to countries outside the EEA. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission, to protect your data during international transfers.
          </p>

          <h2>THIRD-PARTY WEBSITES AND SERVICES</h2>
          <p>
            The Platform may contain links to other websites and services. They are provided for reference purposes only and may have practices and policies of confidentiality that are different from ours. We are not responsible for, and this Privacy Policy does not address, the privacy practices of these other third parties.
          </p>
          <p>
            Chat widgets are embedded on third-party websites operated by our customers. While we are responsible for the data collected through our widgets, each website on which a widget is embedded has its own privacy policy that governs data collection on that website. We encourage you to review the privacy policy of each website you visit.
          </p>
          <p>
            Our customers may integrate their widgets with third-party services such as n8n workflows, custom backend APIs, or other automation tools. Data shared through these integrations is governed by the respective third party's privacy policies and the widget owner's own data handling practices. We do not control how widget owners or their integration partners use the data collected through their widgets.
          </p>
          <p>
            The Platform may include links to third-party websites, plug-ins, services, social networks, or applications. Clicking on those links or enabling those connections may allow the third party to collect or share data about you. If you follow a link to a third-party website or engage a third-party plugin, please note that these third parties have their own privacy policies and we do not accept any responsibility or liability for these policies.
          </p>

          <h2>ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION</h2>
          <p>
            It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes. By law you have the right to request access to and to correct the personal information that we hold about you.
          </p>
          <p>
            You can review and change your personal information by logging into the Platform and visiting your Account Settings page. From there, you can update your profile information, manage your subscription, and configure your privacy preferences.
          </p>
          <p>Under PIPEDA and GDPR, you have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten").</li>
            <li><strong>Portability:</strong> Receive your data in a machine-readable format.</li>
            <li><strong>Objection:</strong> Object to processing of your data for certain purposes.</li>
            <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances.</li>
          </ul>
          <p>
            If you want to review, verify, or correct the use of your personal information, you may also contact us at privacy@hooktxt.com.
          </p>
          <p>
            We may request specific information from you to help us confirm your identity and your right to access, and to provide you with the personal information that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all of the personal information that we hold about you, or we may have destroyed, erased, or made your personal information anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your personal information, we will inform you of the reasons why, subject to any legal or regulatory restrictions.
          </p>

          <h2>WITHDRAWING YOUR CONSENT</h2>
          <p>
            Where you have provided your consent to the collection, use, and transfer of your personal information, you may have the legal right to withdraw your consent under certain circumstances. To withdraw your consent, if applicable, contact us at privacy@hooktxt.com.
          </p>
          <p>
            Please note that if you withdraw your consent, we may not be able to provide you with a particular product or service. We will explain the impact to you at the time to help you with your decision.
          </p>
          <p>
            For end users interacting with chat widgets: you may cease using the widget at any time. If you wish to request deletion of chat messages you have sent through a widget, please contact the website operator (the widget owner) or reach out to us directly at privacy@hooktxt.com.
          </p>
          <p>
            We also provide an opportunity for any user to unsubscribe from our marketing email communications or opt out of contact for marketing or informational purposes on an ongoing basis using the unsubscribe mechanism at the bottom of our emails.
          </p>

          <h2>HANDLING OF COMPLAINTS</h2>

          <h3>Reception</h3>
          <p>
            Any person wishing to make a complaint concerning the application of this Privacy Policy or, more generally, the protection of his or her Personal Information, must do so by writing to the Privacy Officer at privacy@hooktxt.com. The individual must provide his or her name, contact information, including a telephone number, as well as the subject of the complaint and the reasons for it, giving sufficient details to allow the complaint to be evaluated. If the complaint is not specific enough, the Privacy Officer may request any additional information deemed necessary to assess the complaint.
          </p>

          <h3>Treatment</h3>
          <p>We undertake to treat all complaints received confidentially.</p>
          <p>
            Within 30 days of receipt of the complaint, or of receipt of any additional information deemed necessary and required by the Privacy Officer in order to process the complaint, the Privacy Officer shall assess the complaint and provide a reasoned written response by email to the complainant. The purpose of this assessment will be to determine whether the processing of personal information complies with this Privacy Policy, any other policies and practices in place within the organization, and applicable legislation or regulations.
          </p>
          <p>
            If the complaint cannot be processed within this timeframe, the complainant must be informed of the reasons for the extension, the status of the complaint, and the reasonable time required to provide a definitive response.
          </p>
          <p>You may also file a complaint with the relevant privacy oversight body:</p>
          <ul>
            <li><strong>Canada:</strong> Office of the Privacy Commissioner of Canada (www.priv.gc.ca)</li>
            <li><strong>Quebec:</strong> Commission d'accès à l'information du Québec (www.cai.gouv.qc.ca)</li>
            <li><strong>EU/EEA:</strong> Your local data protection authority</li>
          </ul>
          <p>However, we invite anyone interested to first contact the Privacy Officer and wait until the processing is complete.</p>

          <h2>HOW TO CONTACT US</h2>
          <p>We welcome your questions, comments, complaints, and requests regarding this Privacy Policy and our privacy practices. Please contact us at:</p>
          <p>
            <strong>Privacy Officer:</strong> Kevin Michaud<br />
            <strong>Email:</strong> privacy@hooktxt.com<br />
            <strong>Response Time:</strong> Within 30 days
          </p>

          <h2>UPDATES</h2>
          <p>This document may be updated on a regular basis in line with legislative, technological, and organizational developments. We will notify you of material changes by:</p>
          <ul>
            <li>Posting the updated policy with a new "Last Updated" date.</li>
            <li>Sending an email notification to your registered email address for material changes.</li>
            <li>Displaying a prominent notice on our Platform.</li>
          </ul>
          <p>Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.</p>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;