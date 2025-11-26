/**
 * CustomAIFinalCTASection Component - Mia.inc Minimal Style
 *
 * Clean, bold final CTA for Custom AI Systems page.
 * Simple teal background with clear action.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const CustomAIFinalCTASection: React.FC = () => {
  return (
    <div className="bg-primary text-white py-32 md:py-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Build Your
            <br />
            Custom AI System?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Let's turn your business into a 24/7 revenue machine with multi-agent AI architecture.
          </p>

          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-neutral-50 px-10 py-5 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all group inline-flex items-center"
          >
            Let's Build Your AI System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-base text-white/70 mt-8">
            No obligation. Just a conversation about what's possible for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomAIFinalCTASection;
