import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            24/7 <span className="text-primary">AI support</span> for<br />instant help
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Engage customers with intelligent chatbots powered by AI, backed by human experts when needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/demo" variant="primary" size="lg" className="flex items-center justify-center" href="https://calendly.com/kevin-crowdchat/chatinsight-demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button to="/trial" variant="secondary" size="lg" showTrialModal>
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-8 top-1/4 w-24 h-24 rounded-full bg-primary opacity-5"></div>
        <div className="absolute right-1/4 top-1/3 w-32 h-32 rounded-full bg-accent2 opacity-5"></div>
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 rounded-full bg-secondary opacity-10"></div>

        {/* Profile Images with animation */}
        <div className="absolute left-16 top-1/3 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden animate-float">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute right-24 top-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden animate-float delay-500">
          <img src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-1/3 bottom-1/4 w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden animate-float delay-1000">
          <img src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mt-24 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">97%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l md:border-r border-gray-100 py-6 md:py-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">24/7</h3>
            <p className="text-gray-600">Availability</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">45%</h3>
            <p className="text-gray-600">Increased Conversions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
