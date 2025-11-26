/**
 * FAQSection Component - Mia.inc Minimal Style
 *
 * Clean FAQ accordion.
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
          <p className="text-neutral-700 leading-relaxed pt-6">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is this different from other chatbots?",
      answer: "Most chatbots just answer questions. Our AI Sales Agent closes sales. It's trained on sales psychology, handles objections, and actively guides visitors toward purchase."
    },
    {
      question: "Will customers know they're talking to AI?",
      answer: "The conversation feels natural. We can add disclosure if you prefer transparency, or let the experience speak for itself."
    },
    {
      question: "How do I know it's generating sales?",
      answer: "Every cart link includes tracking codes. You see exactly which sales came from the chatbot in your analytics - no guessing, just data."
    },
    {
      question: "What if it says something wrong?",
      answer: "We have five layers of protection: filters, product training, FAQ database, escalation protocol, and audit trail. Wrong answers are rare and fixed fast."
    },
    {
      question: "How long until it's live?",
      answer: "Typically 14-30 days depending on complexity. Includes discovery, training, testing, and launch. You're live in weeks, not months."
    },
    {
      question: "Can it integrate with my tools?",
      answer: "Yes, we can route leads to email platforms, SMS services, Slack, and CRMs like HubSpot or Salesforce."
    }
  ];

  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Everything you need to know about E-commerce AI.
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

export default FAQSection;
