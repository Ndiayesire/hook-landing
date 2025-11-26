/**
 * DealershipFinalCTASection Component - Mia.inc Minimal Style
 *
 * Clean, bold final CTA for Dealership AI page.
 */

import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const DealershipFinalCTASection: React.FC = () => {
  return (
    <div className="bg-primary text-white py-32 md:py-48">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to Capture
            <br />
            Every Lead?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Stop losing after-hours customers. Start closing deals 24/7 with AI that never sleeps.
          </p>

          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-neutral-50 px-10 py-5 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all group inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-base text-white/70 mt-8">
            See how much revenue you're losing. Free consultation, no obligation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealershipFinalCTASection;
