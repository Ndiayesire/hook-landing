/**
 * PricingPreview - Pricing cards section
 *
 * Displays pricing tiers with feature lists,
 * similar to Lumea's affordable pricing plans section.
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPreview: React.FC = () => {
  const plans = [
    {
      name: 'Pro',
      price: '$497',
      period: '/month',
      description: 'For most businesses that want to optimize web queries.',
      features: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
      highlighted: true,
      badge: 'MOST POPULAR',
    },
    {
      name: 'Enterprise',
      price: '$997',
      period: '/month',
      description: 'For most businesses that want to optimize web queries.',
      features: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
      highlighted: false,
      badge: null,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Affordable Pricing Plans{' '}
              <span className="text-primary">for Every Budget</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              AI-powered engagement tools are now within everyone's reach. Discover the right plan for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-900 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-neutral-500 mt-8">
              Need help finding a pricing plan that fits your needs?{' '}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-6 ${
                  plan.highlighted
                    ? 'bg-white border-2 border-primary shadow-lumea-lg'
                    : 'bg-neutral-50 border border-neutral-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-neutral-900">{plan.price}</span>
                    <span className="text-neutral-500">{plan.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-primary/10' : 'bg-neutral-200'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-primary' : 'text-neutral-500'}`} />
                      </div>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-white border border-neutral-200 text-neutral-900 hover:border-primary hover:text-primary'
                  }`}
                >
                  Choose plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
