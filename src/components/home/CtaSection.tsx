/**
 * CtaSection Component - Mia.inc Minimal Style
 *
 * Clean, bold final CTA with minimal design.
 * Focus on clarity and single action.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="relative bg-primary text-white py-32 md:py-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Message */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Scale Your
            <br />
            Customer Conversations?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Let's show you what's possible when AI is built specifically for your business.
          </p>

          {/* CTA Button */}
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-neutral-50 px-10 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all group inline-flex items-center"
          >
            Schedule a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Statement */}
          <p className="text-base text-white/70 mt-8">
            Join businesses generating $150K-$500K+ in additional revenue
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
