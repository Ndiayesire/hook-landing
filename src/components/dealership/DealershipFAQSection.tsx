/**
 * DealershipFAQSection Component - Mia.inc Minimal Style
 *
 * Clean FAQ section.
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

const DealershipFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Typically 2-4 weeks from kickoff to live operation, including DMS integration, agent training, and team onboarding. You'll start capturing leads within a month."
    },
    {
      question: "How does it integrate with my DMS?",
      answer: "We connect directly to your DMS system (CDK, Reynolds & Reynolds, Dealertrack, etc.) to pull real-time inventory data. All technical integration is handled by our team."
    },
    {
      question: "What if a customer asks something the AI doesn't know?",
      answer: "The system acknowledges the question, captures the lead's contact info, and notifies your team immediately. It never makes up answers."
    },
    {
      question: "Can it handle trade-ins and financing?",
      answer: "Yes, the AI captures trade-in details, provides general financing information, and routes to your finance department for detailed quotes."
    },
    {
      question: "How accurate is the lead scoring?",
      answer: "Our BANT-based scoring system is typically 85%+ accurate for identifying hot leads (Score 4-5). The system improves over time by learning from actual conversions."
    },
    {
      question: "Is it bilingual?",
      answer: "Yes, seamless English/French support. The AI detects language automatically and switches mid-conversation if needed. Perfect for Quebec and bilingual markets."
    },
    {
      question: "What kind of support do we get?",
      answer: "Priority support with 4-hour response time, monthly performance reviews, quarterly strategy sessions, continuous optimization, and a dedicated account manager."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing is customized based on dealership size, volume, and requirements. Typical ROI is 8-12X in year one. Schedule a consultation for your custom quote."
    }
  ];

  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600">
            Everything you need to know about Dealership AI.
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

export default DealershipFAQSection;
