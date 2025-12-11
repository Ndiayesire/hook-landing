/**
 * TestimonialsSection Component - Modern Card-Based Style
 *
 * Modern testimonials with card-based grid layout.
 * Each testimonial displayed as an individual card.
 */

import React from 'react';
import Section from '../common/Section';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "HookTXT has transformed our customer service. We've reduced response times by 65% while improving customer satisfaction scores.",
    author: "Sarah J.",
    position: "VP of Customer Experience",
    company: "loom"
  },
  {
    quote: "The Custom AI System and dashboards have given us a whole new perspective on customer interactions. We're now making data-driven decisions that deliver real results.",
    author: "Michael R.",
    position: "Director of Marketing",
    company: "Evernote"
  },
  {
    quote: "We've seen a 40% increase in qualified leads since implementing HookTXT. The hybrid AI + human approach makes all the difference.",
    author: "David W.",
    position: "Sales Director",
    company: "Lattice"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            What sales teams are saying
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Trusted by high-performing sales teams worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-neutral-500">{testimonial.company}</span>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-semibold text-secondary">{testimonial.author}</p>
                <p className="text-sm text-neutral-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our trusted partners section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-10">Our trusted partners</h3>
        </div>

        {/* Client Logos */}
        <div className="flex justify-center">
          <div className="bg-neutral-50 rounded-2xl p-12 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[
                {
                  src: "https://tourismebrome-missisquoi.ca/app/themes/baserock/assets/img/logo_tourisme-cantons-de-lest-fr-v2.png",
                  alt: "Tourisme Cantons de l'Est"
                },
                {
                  src: "https://www.villasport.com/the-woodlands/wp-content/themes/villasport/assets/src/images/logo-athletic.png",
                  alt: "VillaSport"
                },
                {
                  src: "https://360.agency/wp-content/uploads/2021/09/logo_dark_360.agency-400x135-1.png",
                  alt: "360.agency"
                },
                {
                  src: "https://www.chauffeur-services.com/wp-content/uploads/cs-logo_horizontal.svg",
                  alt: "Chauffeur Services"
                },
                {
                  src: "https://www.vivreenresidence.com/img/logo.svg",
                  alt: "Vivre en Résidence"
                },
                {
                  src: "https://www.speedyglass.ca/includes/images/SpeedyGlass-2-logo-fr_CA.png",
                  alt: "Speedy Glass"
                }
              ].map((logo, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
