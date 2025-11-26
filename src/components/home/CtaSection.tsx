/**
 * CtaSection Component - Dan Martell Helpful CTA
 *
 * Warm, inviting final CTA without pressure or fear.
 * Focus on helping, not closing.
 */

import React from 'react';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Button from '../common/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Message */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Scale Your <br />
              <span className="text-secondary">Customer Conversations?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Let us show you what is possible when AI is built specifically for your business.
            </p>
          </div>

          {/* CTA Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Primary CTA */}
            <div className="bg-white text-neutral-900 rounded-3xl p-8 shadow-large">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Book a Strategy Call</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                30-minute conversation to understand your business and explore if AI makes sense for you.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'No sales pitch',
                  'Free consultation',
                  'Honest recommendations'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="primary" className="w-full group">
                Schedule Your Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Explore Solutions</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Learn more about our three specialized AI systems and which might fit your business.
              </p>
              <div className="space-y-3">
                <Button to="/custom-ai-systems" variant="outline" className="w-full border-white/30 hover:bg-white hover:text-primary transition-colors text-white">
                  Custom AI Systems
                </Button>
                <Button to="/dealership-ai" variant="outline" className="w-full border-white/30 hover:bg-white hover:text-primary transition-colors text-white">
                  Dealership AI
                </Button>
                <Button to="/ecommerce-ai-agent" variant="outline" className="w-full border-white/30 hover:bg-white hover:text-primary transition-colors text-white">
                  E-commerce AI
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="text-center">
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Join businesses generating $150K-$500K+ in additional revenue through intelligent customer conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Custom-built for you</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute -right-20 top-0 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CtaSection;
