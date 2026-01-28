/**
 * AuditFAQSection Component
 *
 * Frequently asked questions about the AI audit discovery call.
 * Addresses common concerns and objections to encourage bookings.
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const AuditFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is this really free?',
      answer: 'Yes, completely free. There\'s no catch, no hidden fees, and no obligation. We believe in showing value first. If we can help your business, you\'ll know it by the end of the call.'
    },
    {
      question: 'Who is this call best for?',
      answer: 'This discovery call is ideal for businesses that handle customer inquiries, sales conversations, or support through chat, email, or messaging. Whether you\'re in e-commerce, dealerships, B2B, or professional services, if you talk to customers, we can help.'
    },
    {
      question: 'What should I prepare before the call?',
      answer: 'Nothing extensive. Just come ready to discuss your current customer interaction process, any pain points you\'re experiencing, and your business goals. The more context you provide, the more specific insights we can give you.'
    },
    {
      question: 'Will you try to sell me something?',
      answer: 'This isn\'t a sales pitch. Our goal is to understand your business and provide genuine value. If AI makes sense for you, we\'ll show you how. If it doesn\'t, we\'ll tell you that too. You\'ll never feel pressured.'
    },
    {
      question: 'How technical do I need to be?',
      answer: 'Not at all. We speak business, not jargon. You don\'t need to understand AI or technology. We\'ll explain everything in plain English focused on business outcomes, not technical specs.'
    },
    {
      question: 'What happens after the audit?',
      answer: 'You\'ll receive a summary of our discussion, including the opportunities we identified and recommended next steps. What you do with that information is completely up to you. There\'s no commitment or follow-up unless you want it.'
    },
    {
      question: 'Can I bring team members to the call?',
      answer: 'Absolutely. In fact, we encourage it. Having your sales manager, customer service lead, or operations manager can make the conversation even more valuable since they know the day-to-day challenges.'
    },
    {
      question: 'How quickly can I see results if I move forward?',
      answer: 'Most clients see their AI agent live within 2-4 weeks, and measurable results typically appear within 30-60 days. We\'ll give you a realistic timeline during the discovery call based on your specific situation.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-neutral-50 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            Common Questions
            <br />
            <span className="text-primary">About The Audit</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Everything you need to know before booking your discovery call.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-secondary pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 pt-2">
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 mb-6">
            Still have questions? We'll answer them on the call.
          </p>
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Schedule Your Free Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuditFAQSection;
