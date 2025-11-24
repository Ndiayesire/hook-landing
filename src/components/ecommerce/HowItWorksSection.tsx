/**
 * HowItWorksSection Component
 *
 * Shows the 4-step process: Qualify, Educate, Close, Track.
 * Includes timing information and conversion rate improvements.
 */

import React from 'react';
import Section from '../common/Section';
import { UserCheck, GraduationCap, DollarSign, BarChart3 } from 'lucide-react';

interface ProcessStepProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, icon, title, description }) => {
  return (
    <div className="relative">
      {/* Step Card */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex-shrink-0">
            {stepNumber}
          </div>
          <div className="p-2 bg-primary/10 rounded-lg">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            The 4-Step System That <span className="text-accent2">Turns Browsers Into Buyers</span>
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ProcessStep
            stepNumber={1}
            icon={<UserCheck className="h-6 w-6 text-primary" />}
            title="QUALIFY"
            description="Visitor lands on your site. AI greets them and asks smart questions to understand intent. Lead score generated in real-time (0-100)."
          />

          <ProcessStep
            stepNumber={2}
            icon={<GraduationCap className="h-6 w-6 text-primary" />}
            title="EDUCATE"
            description="Based on lead score, AI adapts approach. Hot leads get assumptive closes. Warm leads get objection handling. Cool leads get soft nurturing."
          />

          <ProcessStep
            stepNumber={3}
            icon={<DollarSign className="h-6 w-6 text-primary" />}
            title="CLOSE"
            description="AI provides direct cart links with tracked UTM parameters. Handles last-minute objections. Uses proven closing techniques. Moves toward the sale."
          />

          <ProcessStep
            stepNumber={4}
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            title="TRACK"
            description="Every click tracked. Every sale attributed. Full reporting in Shopify Analytics. You see exactly what's working."
          />
        </div>

        {/* Process Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary to-accent2 text-white rounded-xl p-8 text-center">
            <div className="text-5xl font-bold mb-3 text-secondary">3-7 min</div>
            <p className="text-xl font-semibold mb-2">Average Process Time</p>
            <p className="text-gray-100">The entire process takes 3-7 minutes per visitor</p>
          </div>

          <div className="bg-gradient-to-br from-success to-success-dark text-white rounded-xl p-8 text-center">
            <div className="text-5xl font-bold mb-3">2-5X</div>
            <p className="text-xl font-semibold mb-2">Conversion Rate Improvement</p>
            <p className="text-gray-100">Expect 2-5X improvement on qualified traffic</p>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary">From Visitor to Customer</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold">
                Anonymous Visitor
              </div>
              <span className="text-primary font-bold text-2xl hidden md:block">→</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-warning text-white px-4 py-2 rounded-lg font-semibold">
                Qualified Lead
              </div>
              <span className="text-primary font-bold text-2xl hidden md:block">→</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">
                Educated Prospect
              </div>
              <span className="text-primary font-bold text-2xl hidden md:block">→</span>
            </div>
            <div className="bg-success text-white px-4 py-2 rounded-lg font-semibold">
              Paying Customer
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
