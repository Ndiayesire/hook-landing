/**
 * DealershipFAQSection Component
 *
 * FAQ section addressing common questions about dealership AI implementation.
 * Setup time, integration, specific scenarios, and technical details.
 */

import React, { useState } from 'react';
import Section from '../common/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const DealershipFAQSection: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How long does it take to set up the system?",
      answer: "Typically 2-4 weeks from kickoff to live operation. This includes: Week 1-2: Discovery, system design, and integration planning. Week 3-4: Development, DMS integration, agent training and testing. Week 5-6: Team training, launch, and monitoring. Week 7-8: Optimization and fine-tuning. You'll start capturing leads within 4-6 weeks."
    },
    {
      question: "How does it integrate with my existing DMS?",
      answer: "We connect directly to your DMS system to pull real-time inventory data. Our system supports all major DMS platforms (CDK, Reynolds & Reynolds, Dealertrack, etc.). We handle all the technical integration - you just need to provide API access. Your inventory, pricing, and vehicle details sync automatically in real-time."
    },
    {
      question: "What if a customer asks something the AI doesn't know?",
      answer: "The system is designed to handle edge cases intelligently. For questions outside its knowledge: It acknowledges the question professionally. It captures the lead's contact info. It promises a callback from a human specialist. It notifies your team immediately. The AI never makes up answers - it's trained to be honest and helpful."
    },
    {
      question: "Can it handle trade-ins and financing questions?",
      answer: "Yes! The AI can: Capture trade-in details (year, make, model, mileage, condition). Provide general financing information. Explain your current promotions and offers. Route to the finance department for detailed quotes. The goal is to QUALIFY and CAPTURE - your finance team closes the details."
    },
    {
      question: "What happens to leads scored as 1 or 2?",
      answer: "Score 1 (Service): Automatically routed to service department. Captured for service follow-up. No sales team time wasted. Score 2 (Just Browsing): Captured in database for nurturing. Added to email follow-up sequence. Re-engaged when they return. Not pushed to sales team until score increases. This prevents your closers from wasting time on tire-kickers."
    },
    {
      question: "How accurate is the lead scoring?",
      answer: "Our BANT-based scoring system is highly accurate because it analyzes: Budget indicators from conversation. Authority signals (decision-maker or not). Need urgency and specific requirements. Timeline for purchase. The system improves over time by learning from your actual conversions. Typical accuracy: 85%+ for hot leads (Score 4-5)."
    },
    {
      question: "What if my inventory changes constantly?",
      answer: "That's exactly what the system is built for! Real-time sync with your DMS. Inventory updates reflect instantly. Vehicles marked as sold disappear from suggestions. New arrivals appear immediately. No manual updates needed - it's all automatic."
    },
    {
      question: "Can it handle multiple locations?",
      answer: "Absolutely! The system can: Manage inventory across multiple locations. Route leads to the correct dealership. Handle location-specific promotions. Provide location-aware responses. Each location gets its own dashboard view while you see the full picture."
    },
    {
      question: "Is it bilingual?",
      answer: "Yes - seamless English/French support. The AI detects language automatically. Switches mid-conversation if needed. Maintains professional tone in both languages. Perfect for Quebec and bilingual markets."
    },
    {
      question: "What kind of support do we get?",
      answer: "Comprehensive ongoing support: Priority support channel (email/chat). 4-hour response time for issues. Monthly performance reviews. Quarterly strategy sessions. Continuous AI optimization. Regular updates and improvements. Dedicated account manager (Enterprise). You're never left in the dark."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing is customized based on: Dealership size and volume. Number of locations. Integration complexity. Specific requirements. Typical ROI: 8-12X in year one. Most dealerships see $300K-$500K in additional annual revenue. Schedule a consultation for your custom quote and ROI calculation."
    },
    {
      question: "Can we test it before committing?",
      answer: "We offer: Custom demo with YOUR inventory data. Live conversation examples. ROI calculation for your specific dealership. Trial period available for qualified dealerships. Contact us to schedule a demo and see it in action with your real data."
    }
  ];

  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Frequently Asked <span className="text-accent2">Questions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about HookTXT Dealership AI
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent2/10 rounded-2xl p-8 text-center border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help. Schedule a call and we'll answer everything.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </Section>
  );
};

export default DealershipFAQSection;
