/**
 * AuditProcessSection Component
 *
 * Explains the step-by-step process of the discovery call
 * and what participants should expect during the audit.
 */

import React from 'react';
import { ClipboardList, Users, BarChart3, Rocket } from 'lucide-react';

const AuditProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Understand Your Business',
      description: 'We start by learning about your current customer interaction process, pain points, and business goals. This helps us identify where AI can make the biggest impact.'
    },
    {
      number: '02',
      icon: Users,
      title: 'Analyze Customer Journey',
      description: 'We map out your customer touchpoints to find opportunities where conversations are falling through the cracks or could be more efficient with AI assistance.'
    },
    {
      number: '03',
      icon: BarChart3,
      title: 'Calculate ROI Potential',
      description: 'Based on your business model, we project realistic revenue increases and time savings you could achieve with a custom AI chat agent solution.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deliver Action Plan',
      description: 'You walk away with a clear roadmap: what AI could do for you, implementation steps, timeline expectations, and immediate improvements you can make.'
    }
  ];

  return (
    <div id="what-to-expect" className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            What Happens On
            <br />
            <span className="text-primary">The Call?</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Our discovery process is designed to give you maximum value in minimal time.
            Here's exactly what we'll cover together.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-8 bg-neutral-50 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Indicator */}
        <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-secondary mb-2">
            Total Time: 30 Minutes
          </p>
          <p className="text-neutral-600">
            Focused, efficient, and packed with insights you can use immediately.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Book Your Discovery Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuditProcessSection;
