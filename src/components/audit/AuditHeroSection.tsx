/**
 * AuditHeroSection Component
 *
 * Hero section for the AI Audit page featuring a compelling headline
 * and direct CTA to book a discovery call via Calendly.
 */

import React from 'react';
import Button from '../common/Button';
import { Calendar, ArrowRight } from 'lucide-react';

const AuditHeroSection: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-32 md:pt-48 md:pb-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] mb-8 tracking-tight">
            Is Your Business
            <br />
            Leaving Money
            <br />
            <span className="text-primary">On The Table?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Book a free discovery call to uncover how AI chat agents can transform
            your customer conversations into revenue-generating opportunities.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Your Free Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Button
              to="#what-to-expect"
              variant="outline"
              size="lg"
              className="text-secondary border-2 border-neutral-200 hover:border-primary font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
            >
              What to Expect
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-neutral-500 font-medium">
            30-Minute Call • No Sales Pressure • Actionable Insights
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">Free</div>
            <p className="text-neutral-600 font-medium">Zero cost, zero obligation</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">30 Min</div>
            <p className="text-neutral-600 font-medium">Quick & focused session</p>
          </div>
          <div className="text-center p-8 bg-white border border-neutral-100 rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">Insights</div>
            <p className="text-neutral-600 font-medium">Walk away with clear next steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditHeroSection;
