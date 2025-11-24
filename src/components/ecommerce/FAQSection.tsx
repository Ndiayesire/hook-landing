/**
 * FAQSection Component
 *
 * Frequently Asked Questions with expandable accordion items.
 * Covers key questions about differentiation, tracking, timeline, etc.
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
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-gray-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div
            className="text-gray-700 leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is this different from other chatbots?',
      answer: `
        <p>Most chatbots are glorified FAQs. They answer questions. Ours closes sales.</p>
        <p class="mt-2"><strong>Generic chatbot:</strong> "Here are our products: [link]"</p>
        <p class="mt-2"><strong>Our AI Sales Agent:</strong> "Based on what you told me, the BTS2 is perfect. Here's your cart link — ready to try it risk-free?"</p>
        <p class="mt-2">It's trained on proven sales psychology. Lead scoring. Objection handling. Closing techniques. And it adapts to each buyer in real-time.</p>
      `,
    },
    {
      question: 'Will customers know they\'re talking to AI?',
      answer: `
        <p>The conversation feels natural. Most don't realize it's AI unless they ask.</p>
        <p class="mt-2">We can add a disclosure like "Hi! I'm the AI assistant" if you prefer transparency. Many brands don't — they let the experience speak for itself.</p>
        <p class="mt-2">Either way, it works.</p>
      `,
    },
    {
      question: 'How do I know it\'s actually generating sales?',
      answer: `
        <p>Every cart link includes tracking codes. You see exactly which sales came from the chatbot in your Shopify Analytics.</p>
        <p class="mt-3"><strong>Example dashboard view:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Traffic source: Chatbot</li>
          <li>Orders: 47</li>
          <li>Revenue: $14,230</li>
          <li>Conversion rate: 4.2%</li>
        </ul>
        <p class="mt-3">No guessing. No "trust us." Just data.</p>
      `,
    },
    {
      question: 'What if it says something wrong?',
      answer: `
        <p><strong>Five layers of protection:</strong></p>
        <ol class="list-decimal pl-5 mt-2 space-y-2">
          <li>Medical/compliance filter blocks inappropriate topics automatically</li>
          <li>Trained on YOUR products — knows specs, pricing, policies</li>
          <li>Connected to FAQ database — pulls accurate info</li>
          <li>Escalation protocol — sends complex questions to humans</li>
          <li>Audit trail — we review every conversation and refine</li>
        </ol>
        <p class="mt-3">We've deployed dozens of these. Wrong answers? Rare. And when they happen, we fix them fast.</p>
      `,
    },
    {
      question: 'How long until it\'s live?',
      answer: `
        <ul class="space-y-2">
          <li><strong>Starter:</strong> 14 days</li>
          <li><strong>Professional:</strong> 21 days</li>
          <li><strong>Enterprise:</strong> 30-45 days</li>
        </ul>
        <p class="mt-3"><strong>Timeline includes:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Discovery & brand voice training</li>
          <li>Product catalog integration</li>
          <li>FAQ database setup</li>
          <li>Testing & refinement</li>
          <li>Launch & monitoring</li>
        </ul>
        <p class="mt-3">You're not waiting 6 months. You're live in weeks.</p>
      `,
    },
    {
      question: 'What if my products change?',
      answer: `
        <p>We handle updates:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>New products? We add them.</li>
          <li>Price changes? We update automatically.</li>
          <li>Seasonal campaigns? We adjust messaging.</li>
          <li>New FAQs? We integrate them.</li>
        </ul>
        <p class="mt-3"><strong>Update cycles:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Starter: Monthly update cycles</li>
          <li>Professional: Bi-weekly updates</li>
          <li>Enterprise: On-demand updates</li>
        </ul>
      `,
    },
    {
      question: 'Can it integrate with my email/SMS tools?',
      answer: `
        <p>Yes. We can route hot leads to:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Email (via SendGrid, Mailchimp, etc.)</li>
          <li>SMS (via Twilio)</li>
          <li>Slack notifications</li>
          <li>Your CRM (HubSpot, Salesforce, etc.)</li>
        </ul>
        <p class="mt-3"><strong>Example flow:</strong> Lead scores 90+ → AI sends cart link + notifies your team via Slack → Your closer can follow up if needed</p>
      `,
    },
    {
      question: 'What\'s the catch?',
      answer: `
        <p>No catch. Just reality:</p>
        <p class="mt-3"><strong>This works best for:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>E-commerce stores with clear products</li>
          <li>Brands with FAQ-heavy niches</li>
          <li>Businesses generating $50K+/month</li>
          <li>Teams ready to trust AI (with oversight)</li>
        </ul>
        <p class="mt-3"><strong>This doesn't work if:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Your products are too complex/custom</li>
          <li>You need human-only consultations</li>
          <li>You're not willing to test and optimize</li>
        </ul>
        <p class="mt-3">If you're in the "works best" category, this will transform your business.</p>
      `,
    },
  ];

  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Frequently Asked <span className="text-accent2">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
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

export default FAQSection;
