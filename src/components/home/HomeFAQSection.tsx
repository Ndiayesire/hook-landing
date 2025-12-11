/**
 * HomeFAQSection Component - NuroAI-Inspired Design
 *
 * FAQ accordion with dashboard preview image on the left.
 * Clean, professional design matching the overall theme.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp, Users } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-neutral-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left hover:text-primary transition-colors"
      >
        <span className="font-medium text-secondary pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HomeFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does your AI improve my sales process?',
      answer: 'It analyzes customer interactions, forecasts trends, and provides actionable insights to close more deals. Our multi-agent system handles qualification, objections, and follow-ups automatically.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption and follow industry best practices for data security. Your data is never shared with third parties and is stored securely in compliance with privacy regulations.',
    },
    {
      question: 'Can I integrate this with my CRM?',
      answer: 'Absolutely! We integrate seamlessly with Salesforce, HubSpot, and other major CRM platforms. Custom integrations are also available for enterprise clients.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a personalized demo where we show you exactly how the system would work for your specific business. This helps ensure the solution is the right fit before you commit.',
    },
  ];

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">FAQs</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need to know before getting started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-secondary">Close Rate</p>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-end gap-2 h-32 mb-4">
                {[30, 45, 35, 60, 50, 75, 65, 85, 70].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-t transition-all duration-300"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="w-full bg-primary rounded-t"
                      style={{ height: '70%' }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Obi Potter</p>
                  <p className="text-xs text-gray-400">Sales Lead</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-neutral-100 p-6"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQSection;
