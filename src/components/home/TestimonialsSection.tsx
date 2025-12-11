/**
 * TestimonialsSection Component - NuroAI-Inspired Design
 *
 * Three-column grid layout with company logos and testimonial cards.
 * Clean, professional design with subtle shadows.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';

interface TestimonialCardProps {
  companyLogo: string;
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyLogo,
  companyName,
  quote,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <img
          src={companyLogo}
          alt={companyName}
          className="h-6 w-auto object-contain"
        />
        <span className="text-sm font-medium text-secondary">{companyName}</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        "{quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent2/20 flex items-center justify-center overflow-hidden">
          {authorImage ? (
            <img src={authorImage} alt={authorName} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm font-semibold text-primary">
              {authorName.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary">{authorName}</p>
          <p className="text-xs text-gray-500">{authorTitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      companyLogo: "https://tourismebrome-missisquoi.ca/app/themes/baserock/assets/img/logo_tourisme-cantons-de-lest-fr-v2.png",
      companyName: "Tourisme",
      quote: "HookTXT has transformed our customer service. We've reduced response times by 65% while improving customer satisfaction scores. The efficiency and intelligence it brings to my workflow are unmatched!",
      authorName: "Sarah J.",
      authorTitle: "VP of Customer Experience",
    },
    {
      companyLogo: "https://360.agency/wp-content/uploads/2021/09/logo_dark_360.agency-400x135-1.png",
      companyName: "360.agency",
      quote: "I recently started using HookTXT to help marketing agents automate their workflows, and the results have been impressive. It streamlines processes, boosts efficiency, and saves a ton of time.",
      authorName: "Michael R.",
      authorTitle: "Director of Marketing",
    },
    {
      companyLogo: "https://www.villasport.com/the-woodlands/wp-content/themes/villasport/assets/src/images/logo-athletic.png",
      companyName: "VillaSport",
      quote: "I absolutely love building with HookTXT! It has enabled me to create incredibly powerful, production-ready workflows that drive efficiency for both my team and our clients. It's a game-changer for automation!",
      authorName: "Jennifer L.",
      authorTitle: "CTO",
    },
  ];

  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What sales teams are saying
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by high-performing sales teams worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
