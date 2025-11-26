/**
 * CustomAIFAQSection Component
 *
 * Frequently Asked Questions specific to Custom AI Systems & Dashboards.
 * Covers multi-agent approach, implementation timeline, ROI, system integration,
 * industries served, ChatGPT differences, and support.
 */

import React, { useState } from 'react';
import Section from '../common/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-bold text-secondary text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-8 border-t border-neutral-200">
          <div
            className="text-neutral-700 leading-relaxed space-y-3 pt-6"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
};

const CustomAIFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes your multi-agent system different from ChatGPT or other AI chatbots?',
      answer: `
        <p><strong>ChatGPT is a tool. Our system is a revenue-generating machine.</strong></p>
        <p class="mt-3">Here's the difference:</p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li><strong>ChatGPT:</strong> One generalist trying to do everything. Says "I can't help with that" constantly.</li>
          <li><strong>Our Multi-Agent System:</strong> A team of specialists. The Orchestro routes customers. The SalesAgent closes deals. The InventoryAgent knows every product. The LeadScoringAgent qualifies buyers.</li>
        </ul>
        <p class="mt-3">Think of it this way: Would you rather have one employee doing 10 jobs poorly, or a team of experts each mastering their role?</p>
        <p class="mt-3"><strong>That's not even the best part.</strong> Our system learns from YOUR business, connects to YOUR data, and works 24/7 without taking vacations.</p>
      `,
    },
    {
      question: 'How long does implementation take?',
      answer: `
        <p><strong>Depends on complexity, but here's the typical timeline:</strong></p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Discovery & Planning:</strong> 1-2 weeks (we analyze your business, identify pain points, map out the multi-agent architecture)</li>
          <li><strong>Agent Development:</strong> 3-4 weeks (building and training each specialized agent)</li>
          <li><strong>Dashboard Setup:</strong> 1-2 weeks (client dashboard + team dashboard implementation)</li>
          <li><strong>Integration & Testing:</strong> 1-2 weeks (connecting to your systems, QA, refinement)</li>
          <li><strong>Launch & Optimization:</strong> Ongoing (we monitor, tweak, and improve continuously)</li>
        </ul>
        <p class="mt-3"><strong>Total: 6-10 weeks from start to launch.</strong></p>
        <p class="mt-3">But here's what matters more: You'll see progress in REAL-TIME through your dashboard. No waiting for status updates. No anxiety about what's happening. You're in the driver's seat from day one.</p>
      `,
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: `
        <p><strong>Let's talk numbers:</strong></p>
        <p class="mt-3"><strong>Time Savings:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>50% reduction in status meetings (that's hours back every week)</li>
          <li>70% fewer follow-up emails (less friction, faster execution)</li>
          <li>Problems identified in hours, not days (faster fixes = less cost)</li>
        </ul>
        <p class="mt-3"><strong>Revenue Generation:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>AI agents work 24/7 — that's leads qualified and sales closed while you sleep</li>
          <li>80% of customer interactions handled automatically (your team focuses on high-value tasks)</li>
          <li>Bilingual support (French/English) without hiring additional staff</li>
        </ul>
        <p class="mt-3"><strong>Typical ROI: 3-5X within the first year.</strong></p>
        <p class="mt-3">But the real question is: How much are you losing RIGHT NOW by NOT having this system?</p>
      `,
    },
    {
      question: 'Do you work with my existing systems (CRM, database, etc.)?',
      answer: `
        <p><strong>Absolutely. Integration is where the magic happens.</strong></p>
        <p class="mt-3">Our AI agents connect to:</p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li><strong>CRMs:</strong> Salesforce, HubSpot, Pipedrive, and more</li>
          <li><strong>Databases:</strong> Your product inventory, customer data, order history</li>
          <li><strong>Communication Tools:</strong> Email, SMS, web chat, social media</li>
          <li><strong>Analytics:</strong> Google Analytics, custom reporting tools</li>
          <li><strong>E-commerce Platforms:</strong> Shopify, WooCommerce, custom solutions</li>
        </ul>
        <p class="mt-3">We don't replace your systems — we make them SMARTER. Your AI agents pull from your existing data in real-time, so they're always accurate and up-to-date.</p>
        <p class="mt-3"><strong>And the best part?</strong> You see all of this happening through your dashboard. Complete transparency into how the system connects and operates.</p>
      `,
    },
    {
      question: 'What industries do you serve?',
      answer: `
        <p><strong>Any business that values revenue and efficiency.</strong></p>
        <p class="mt-3">We've built custom AI systems for:</p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li><strong>E-commerce:</strong> Turn browsers into buyers 24/7</li>
          <li><strong>Automotive:</strong> Qualify leads, recommend inventory, book test drives</li>
          <li><strong>Real Estate:</strong> Property recommendations, appointment scheduling, lead qualification</li>
          <li><strong>SaaS:</strong> Product demos, pricing inquiries, trial signups</li>
          <li><strong>Professional Services:</strong> Consultation booking, service explanations, client onboarding</li>
          <li><strong>Healthcare:</strong> Appointment scheduling, insurance verification, FAQs</li>
        </ul>
        <p class="mt-3">If you have customers asking questions, leads to qualify, or sales to close — we can build a system that dominates.</p>
        <p class="mt-3"><strong>The question isn't "Will this work for my industry?"</strong></p>
        <p class="mt-2"><strong>The question is: "How much am I losing by not having this?"</strong></p>
      `,
    },
    {
      question: 'How is this different from just using ChatGPT directly?',
      answer: `
        <p><strong>Using ChatGPT for business is like using a Swiss Army knife to build a house.</strong></p>
        <p class="mt-3">Sure, it's got tools. But it's not BUILT for the job.</p>
        <p class="mt-3"><strong>ChatGPT:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Generic knowledge (knows nothing about YOUR business)</li>
          <li>No access to your inventory, CRM, or customer data</li>
          <li>Can't qualify leads or score prospects</li>
          <li>No bilingual switching or specialized sales training</li>
          <li>You have to ask it questions — it doesn't work FOR you</li>
        </ul>
        <p class="mt-3"><strong>Our Custom AI System:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Trained on YOUR products, YOUR services, YOUR brand voice</li>
          <li>Connected to YOUR data in real-time (inventory, pricing, availability)</li>
          <li>Qualifies and scores leads automatically using YOUR criteria</li>
          <li>Bilingual (French/English), switches seamlessly mid-conversation</li>
          <li>Works 24/7 on autopilot — generates revenue while you sleep</li>
        </ul>
        <p class="mt-3"><strong>ChatGPT is a toy. Our system is a cash machine.</strong></p>
      `,
    },
    {
      question: 'What kind of support do you provide?',
      answer: `
        <p><strong>The kind of support that makes you wonder why you ever worked with anyone else.</strong></p>
        <p class="mt-3"><strong>During Implementation:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Dedicated project manager (you're not passed around to different people)</li>
          <li>24/7 access to your client dashboard (see progress anytime, no waiting for updates)</li>
          <li>Weekly strategy calls (or more if you need them)</li>
          <li>Direct communication channel (no ticket systems, no phone trees)</li>
        </ul>
        <p class="mt-3"><strong>After Launch:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Continuous monitoring and optimization (we don't just launch and disappear)</li>
          <li>Monthly performance reviews (what's working, what's improving, what's next)</li>
          <li>System updates and improvements (your AI gets smarter over time)</li>
          <li>Priority support (issues resolved in hours, not days)</li>
        </ul>
        <p class="mt-3"><strong>Most importantly:</strong> You're not just a client. You're a partner. Your success is our success.</p>
        <p class="mt-3">And with your dashboard, you'll never wonder "what's going on with my system?" because you can SEE IT yourself, 24/7.</p>
      `,
    },
  ];

  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Everything you need to know about Custom AI Systems
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CustomAIFAQSection;
