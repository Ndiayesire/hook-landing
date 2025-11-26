/**
 * TestimonialsSection Component - Premium Dan Martell Style
 *
 * Authentic testimonials with client context.
 * Premium design with real photos and business details.
 */

import React from 'react';
import Section from '../common/Section';
import TestimonialCarousel from './TestimonialCarousel';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Star className="h-4 w-4 text-secondary fill-current" />
            <span className="text-sm font-medium text-secondary">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Here is what business owners say about working with us.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
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
                className="bg-white p-4 rounded-2xl w-36 h-24 flex items-center justify-center border border-neutral-100 shadow-sm grayscale hover:grayscale-0 hover:shadow-card transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
