/**
 * AuditHeroSection Component - Chat360 Gradient Style
 *
 * Modern hero section with gradient background for AI Audit page.
 * Features bold typography with teal gradient and decorative elements.
 */

import React from 'react';
import Button from '../common/Button';
import { Calendar, ArrowRight } from 'lucide-react';

const AuditHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-teal-200 pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="blur-circle w-96 h-96 bg-teal-light top-10 -right-20"></div>
      <div className="blur-circle w-80 h-80 bg-primary-light bottom-20 -left-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Is Your Business
            <br />
            Leaving Money
            <br />
            <span className="text-teal-light">On The Table?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
            Book a free discovery call to uncover how AI chat agents can transform
            your customer conversations into revenue-generating opportunities.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Your Free Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Button
              to="#what-to-expect"
              variant="outline"
              size="lg"
              className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              What to Expect
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-base text-white/80 font-medium">
            30-Minute Call • No Sales Pressure • Actionable Insights
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">Free</div>
            <p className="text-white/90 font-medium">Zero cost, zero obligation</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">30 Min</div>
            <p className="text-white/90 font-medium">Quick & focused session</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">Insights</div>
            <p className="text-white/90 font-medium">Walk away with clear next steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditHeroSection;
