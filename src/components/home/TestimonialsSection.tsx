import React from 'react';
import Section from '../common/Section';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. See what our clients have to say about their experiences with HookTXT.
        </p>
      </div>
      
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* Client logos with gray background and clean styling */}
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://tourismebrome-missisquoi.ca/app/themes/baserock/assets/img/logo_tourisme-cantons-de-lest-fr-v2.png" alt="Tourisme Cantons de l'Est" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://www.villasport.com/the-woodlands/wp-content/themes/villasport/assets/src/images/logo-athletic.png" alt="VillaSport" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://360.agency/wp-content/uploads/2021/09/logo_dark_360.agency-400x135-1.png" alt="360.agency" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://www.chauffeur-services.com/wp-content/uploads/cs-logo_horizontal.svg" alt="Chauffeur Services" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://www.vivreenresidence.com/img/logo.svg" alt="Vivre en Résidence" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-3 rounded-md w-36 h-20 flex items-center justify-center border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://www.speedyglass.ca/includes/images/SpeedyGlass-2-logo-fr_CA.png" alt="Speedy Glass" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <TestimonialCarousel />
      </div>
    </Section>
  );
};

export default TestimonialsSection;