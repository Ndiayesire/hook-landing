/**
 * FinalCTASection Component
 *
 * Final call-to-action section with next steps process and urgency questions.
 * Drives visitors to take action with dual CTA buttons.
 */

import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { ArrowRight, Calendar, FileText, Rocket, TrendingUp } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <>
      {/* Main CTA Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Ready To Turn Browsers Into Buyers — <span className="text-accent2">24/7</span>?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Here's What Happens Next:
            </p>
          </div>

          {/* Next Steps Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl mb-4">
                1
              </div>
              <div className="mb-3">
                <Calendar className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Book A Strategy Call</h3>
              <p className="text-sm text-gray-600">
                (30 min, free) We'll review your store, traffic, and conversion challenges. If it's a fit, we'll show you exactly how the AI Sales Agent would work for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl mb-4">
                2
              </div>
              <div className="mb-3">
                <FileText className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Get Your Custom Proposal</h3>
              <p className="text-sm text-gray-600">
                No generic packages. We'll build a system tailored to your products, brand voice, and revenue goals — with projected ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl mb-4">
                3
              </div>
              <div className="mb-3">
                <Rocket className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Launch In 14-21 Days</h3>
              <p className="text-sm text-gray-600">
                We handle everything: setup, training, integration, testing. You approve. We launch.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success text-white font-bold text-2xl mb-4">
                4
              </div>
              <div className="mb-3">
                <TrendingUp className="h-8 w-8 text-success mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Watch The Sales Roll In</h3>
              <p className="text-sm text-gray-600">
                Track every dollar in your Shopify dashboard. Watch your conversion rate climb. Sleep better knowing no leads are lost.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-12">
            <p className="text-lg font-semibold text-gray-700 mb-6">Two Options:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/demo" variant="primary" size="lg" className="flex items-center justify-center shadow-lg">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/demo" variant="outline" size="lg" className="shadow-lg">
                Get Started With Starter Package
              </Button>
            </div>
          </div>

          {/* Fence Questions */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Still On The Fence?</h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">Ask yourself:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">→</span>
                  <span>How much revenue did you lose last month to unanswered questions?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">→</span>
                  <span>How many leads left your site at 2 AM because no one was there?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">→</span>
                  <span>How many sales went to competitors who responded faster?</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-center mt-6 pt-6 border-t border-gray-300">
                What if you could capture even <span className="text-success">20%</span> of those lost opportunities?
              </p>
              <p className="text-center text-gray-700">
                That's not a cost. That's an investment with a <span className="font-bold text-primary">3-5X return</span>.
              </p>
              <p className="text-center text-xl font-bold text-primary mt-4">
                The only question is: How much longer can you afford to wait?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-primary via-accent2 to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's talk.</h3>
            <Button
              to="/demo"
              variant="secondary"
              size="lg"
              className="shadow-xl hover:shadow-2xl"
            >
              Book Your Strategy Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Trust Section */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Trusted by 20+ e-commerce brands</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Generating $XXX,XXX+ in tracked chatbot revenue</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Based in Montreal, QC | Serving North America</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Bilingual support (EN/FR)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>90-day ROI guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-success font-bold">✓</span>
                <span>CrowdChat.ca | AI Automation</span>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-300">
              <p className="text-gray-700 mb-2">
                📧 <a href="mailto:hello@crowdchat.ca" className="text-primary hover:underline font-semibold">hello@crowdchat.ca</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalCTASection;
