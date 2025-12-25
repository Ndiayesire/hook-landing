/**
 * HeroSection - Lumea-inspired hero with floating UI elements
 *
 * Split layout with content on left and floating cards on right.
 * Features social proof, badge, and trust logos.
 */

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import HeroFloatingCards from './HeroFloatingCards';
import LogoBar from './LogoBar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              AI-Powered Customer Engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-6">
              Boost Sales Efficiency with{' '}
              <span className="text-primary">Smart AI Assistant</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
              HookTXT captures every moment of your customer interactions, so you can focus on meaningful decisions and closing deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full text-base font-semibold hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
              >
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-semibold text-neutral-900">4.9</span>
              </div>
              <span className="text-sm text-neutral-500">750+ Reviews</span>
            </div>
          </div>

          <div className="relative lg:h-[550px] hidden lg:block">
            <HeroFloatingCards />
          </div>
        </div>

        <LogoBar />
      </div>
    </section>
  );
};

export default HeroSection;
