/**
 * HomeRealResultsSection Component - Dan Martell Case Study Approach
 *
 * Authentic case studies with context and storytelling.
 * Focus on business transformation, not just numbers.
 */

import React from 'react';
import { TrendingUp, DollarSign, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const HomeRealResultsSection: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-secondary">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              Real Businesses, Real Results
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              See how businesses like yours are scaling conversations and capturing more revenue.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12 mb-20">
            {/* Case Study 1 - Dealership */}
            <div className="bg-white rounded-3xl shadow-large border border-neutral-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Story */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <span className="text-xs font-medium text-primary">AUTO DEALERSHIP</span>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    From Missed Calls to 24/7 Lead Capture
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    A mid-size Quebec dealership was losing leads every night and weekend.
                    Their sales team could not answer calls after hours, and by morning,
                    prospects had already contacted competitors.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Challenge</p>
                        <p className="text-neutral-600 text-sm">35+ leads lost monthly to competitors who responded first</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Solution</p>
                        <p className="text-neutral-600 text-sm">Custom AI trained on their inventory, pricing, and sales process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Result</p>
                        <p className="text-neutral-600 text-sm">Now capturing leads 24/7 with qualified appointments ready for morning</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/dealership-ai"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    View Dealership AI Solution
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>

                {/* Right: Metrics */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-xl">
                          <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-4xl font-bold text-primary">$372K</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Additional Annual Revenue</p>
                      <p className="text-neutral-600 text-sm">From previously missed after-hours leads</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-secondary/10 rounded-xl">
                          <Users className="h-6 w-6 text-secondary" />
                        </div>
                        <span className="text-4xl font-bold text-secondary">42</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Qualified Leads Per Month</p>
                      <p className="text-neutral-600 text-sm">Ready for sales team follow-up</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-accent1/10 rounded-xl">
                          <Clock className="h-6 w-6 text-accent1" />
                        </div>
                        <span className="text-4xl font-bold text-accent1">&lt;2 min</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Average Response Time</p>
                      <p className="text-neutral-600 text-sm">24/7, including 2 AM inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Ecommerce */}
            <div className="bg-white rounded-3xl shadow-large border border-neutral-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Metrics */}
                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-secondary/10 rounded-xl">
                          <TrendingUp className="h-6 w-6 text-secondary" />
                        </div>
                        <span className="text-4xl font-bold text-secondary">68%</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Cart Recovery Rate</p>
                      <p className="text-neutral-600 text-sm">Industry average is 8-15%</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-xl">
                          <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-4xl font-bold text-primary">$180K</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Recovered Revenue (90 Days)</p>
                      <p className="text-neutral-600 text-sm">From abandoned carts</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-accent1/10 rounded-xl">
                          <Users className="h-6 w-6 text-accent1" />
                        </div>
                        <span className="text-4xl font-bold text-accent1">+31%</span>
                      </div>
                      <p className="text-neutral-900 font-semibold mb-1">Average Order Value Increase</p>
                      <p className="text-neutral-600 text-sm">Through personalized recommendations</p>
                    </div>
                  </div>
                </div>

                {/* Right: Story */}
                <div className="p-8 md:p-12 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-4">
                    <span className="text-xs font-medium text-secondary">E-COMMERCE</span>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    Turning Browsers Into Buyers
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    A fashion e-commerce brand watched 73% of shoppers abandon carts.
                    Standard email sequences were not working—customers needed immediate help
                    with sizing, shipping, and product questions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Challenge</p>
                        <p className="text-neutral-600 text-sm">High abandonment, late-night shoppers with questions, no support available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Solution</p>
                        <p className="text-neutral-600 text-sm">AI trained on product catalog, sizing guides, and shipping policies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-900">The Result</p>
                        <p className="text-neutral-600 text-sm">Real-time assistance converting hesitant browsers into confident buyers</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/ecommerce-ai"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    View E-commerce AI Solution
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Banner */}
          <div className="bg-gradient-to-r from-primary via-primary-dark to-secondary rounded-3xl shadow-large p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Impact Across All Clients</h3>
              <p className="text-white/80 text-lg">Measured results over the last 12 months</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-secondary">$3.2M+</div>
                <p className="text-white font-semibold mb-1">Revenue Generated</p>
                <p className="text-white/70 text-sm">Across all implementations</p>
              </div>

              <div className="text-center border-t sm:border-t-0 sm:border-l border-white/20 pt-8 sm:pt-0">
                <div className="text-5xl font-bold mb-2 text-secondary">18,500+</div>
                <p className="text-white font-semibold mb-1">Leads Captured</p>
                <p className="text-white/70 text-sm">That would have been lost</p>
              </div>

              <div className="text-center border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0">
                <div className="text-5xl font-bold mb-2 text-secondary">87%</div>
                <p className="text-white font-semibold mb-1">Average ROI</p>
                <p className="text-white/70 text-sm">Within first 6 months</p>
              </div>

              <div className="text-center border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0">
                <div className="text-5xl font-bold mb-2 text-secondary">24/7</div>
                <p className="text-white font-semibold mb-1">Always Working</p>
                <p className="text-white/70 text-sm">Including holidays and weekends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRealResultsSection;
