import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-gray-600 mb-8">
              Join hundreds of businesses using HookTXT to deliver exceptional customer experiences through the power of conversational AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="primary" size="lg" className="flex items-center justify-center">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/trial" variant="secondary" size="lg" showTrialModal>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;