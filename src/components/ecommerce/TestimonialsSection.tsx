/**
 * TestimonialsSection Component
 *
 * Customer testimonials section with quotes from real business owners.
 * Shows social proof and validation from satisfied clients.
 */

import React from 'react';
import Section from '../common/Section';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300 h-full">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            What Business Owners <span className="text-accent2">Are Saying</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="We were skeptical at first. 'An AI that can actually close sales?' But after the first month seeing it track $47K in revenue directly attributed to the chatbot, we're believers. Best ROI of any tool we use."
            author="Sarah M."
            role="E-Commerce Store Owner"
          />

          <TestimonialCard
            quote="The lead scoring is insane. It knows who's ready to buy better than our human team did. Hot leads get closed fast. Researchers get nurtured. Time-wasters get filtered out. Our conversion rate doubled."
            author="Mike T."
            role="Marketing Director"
          />

          <TestimonialCard
            quote="I sleep better knowing no leads are falling through the cracks at 2 AM. And the compliance filter? Huge relief. We sell health products and can't risk medical claims. The AI handles it perfectly."
            author="Jennifer L."
            role="Wellness Brand Founder"
          />

          <TestimonialCard
            quote="Setup was easier than expected. The CrowdChat team handled everything. We were live in 10 days. Started seeing sales attributed to the chatbot within 48 hours. Can't imagine going back."
            author="David R."
            role="Tech Accessories Store"
          />
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
