/**
 * CustomAIFinalCTASection Component
 *
 * Final call-to-action section for Custom AI Systems & Dashboards page.
 * Aggressive, results-focused messaging with clear next steps
 * and a provocative closing question.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { Zap, MessageSquare } from 'lucide-react';

const CustomAIFinalCTASection: React.FC = () => {
  return (
    <>
      <Section background="light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Ready to Stop Playing Small?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              This isn't about "trying AI."<br />
              This is about dominating your market with systems that work while you sleep.
            </p>
          </div>

          {/* Three-Part Message */}
          <div className="bg-white rounded-2xl p-10 shadow-soft border-2 border-primary/20 mb-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Your Custom AI System</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multi-agent architecture. Specialized AI for every customer interaction.
                  Revenue generation on autopilot, 24/7.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-success mb-4">Let's Implement Your Dual Dashboards</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time transparency for you. Operational efficiency for your team.
                  Complete control and visibility—no more guessing, no more waiting.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent2 mb-4">Let's Turn Your Business Into a 24/7 Revenue Machine</h3>
                <p className="text-gray-700 leading-relaxed">
                  While your competitors waste time with generic chatbots, you'll be closing sales,
                  qualifying leads, and growing your business—automatically.
                </p>
              </div>
            </div>
          </div>

          {/* The Contrast */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 mb-12 border-l-4 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-error mb-4">The Amateurs</h4>
                <p className="text-gray-700 text-lg">
                  Still figuring out ChatGPT.<br />
                  Selling generic solutions.<br />
                  Keeping clients in the dark.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-success mb-4">The Professionals</h4>
                <p className="text-gray-700 text-lg font-semibold">
                  Already winning with custom multi-agent systems.<br />
                  Real-time dashboards.<br />
                  Complete transparency.
                </p>
              </div>
            </div>
          </div>

          {/* The Question */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Which one are you?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Zap className="h-5 w-5" />
                Let's Build Your AI System
              </Button>
              <Button
                to="/ecommerce-ai-agent"
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                See a Live Example
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Waiting. Start Dominating.
            </h3>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Your competitors are still talking about AI.<br />
              Let's build you a system that GENERATES revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Book Your Strategy Call Now
              </Button>
            </div>
            <p className="mt-8 text-gray-200 text-sm">
              No obligation. No sales pitch. Just a conversation about turning your business into a 24/7 revenue machine.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAIFinalCTASection;
