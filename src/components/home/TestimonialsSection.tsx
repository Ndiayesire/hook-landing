/**
 * TestimonialsSection Component - Mia.inc Minimal Style
 *
 * Clean testimonials with minimal design.
 * Simple client logos and quotes.
 */

import React from 'react';
import Section from '../common/Section';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Here's what business owners say about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <TestimonialCarousel />
        </div>

        {/* Client Logos */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-50">
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
                className="h-16 flex items-center justify-center grayscale"
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
    </Section>
  );
};

export default TestimonialsSection;
