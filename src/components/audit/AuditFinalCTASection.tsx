/**
 * AuditFinalCTASection Component
 *
 * Final call-to-action section encouraging visitors to book
 * their free AI audit discovery call with strong urgency and value messaging.
 */

import React from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

const AuditFinalCTASection: React.FC = () => {
  return (
    <div className="relative bg-primary text-white py-32 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Message */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Discover
            <br />
            Your AI Opportunity?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Book your free 30-minute discovery call and walk away with
            a clear understanding of how AI can transform your business.
          </p>

          {/* CTA Button */}
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-neutral-50 px-12 py-6 text-xl font-semibold rounded-lg shadow-md hover:shadow-lg transition-all mb-8"
          >
            <Calendar className="inline-block mr-2 h-6 w-6" />
            Schedule Your Free Audit
          </a>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">30 Minutes</h3>
              <p className="text-white/80 text-sm">
                Quick, focused, and packed with insights
              </p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Immediate Value</h3>
              <p className="text-white/80 text-sm">
                Actionable strategies you can use right away
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Zero Pressure</h3>
              <p className="text-white/80 text-sm">
                No obligation, no pushy sales tactics
              </p>
            </div>
          </div>

          {/* Final Urgency Line */}
          <p className="text-base text-white/70 mt-12">
            Limited slots available • Book now to secure your spot
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditFinalCTASection;
