/**
 * ServicesOverview Component - NuroAI-Inspired Design
 *
 * Modern presentation of the 3 solutions with visual cards,
 * animations, and clean typography.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Car, ShoppingCart, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bestFor: string;
  features: string[];
  link: string;
  isPopular?: boolean;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  bestFor,
  features,
  link,
  isPopular,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
        isPopular ? 'border-primary shadow-md' : 'border-neutral-100 hover:border-primary/50'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
            POPULAR
          </span>
        </div>
      )}

      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Best for</p>
        <p className="text-sm text-secondary font-medium">{bestFor}</p>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all duration-300 ${
          isPopular
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-neutral-100 text-secondary hover:bg-primary hover:text-white'
        }`}
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: 'Custom AI',
      description: 'Built from the ground up for your unique business needs, processes, and customer journey.',
      bestFor: 'B2B, SaaS, Services, Complex Sales',
      features: [
        'Multi-agent architecture',
        'Deep system integration',
        'Custom training & workflows',
        'Real-time dashboards',
      ],
      link: '/custom-ai-systems',
      isPopular: false,
    },
    {
      icon: <Car className="w-6 h-6 text-primary" />,
      title: 'Dealership AI',
      description: 'Capture after-hours leads and qualify prospects automatically while your team sleeps.',
      bestFor: 'Auto Dealerships, Vehicle Sales',
      features: [
        'Inventory integration',
        '5-level lead scoring',
        'Bilingual (EN/FR)',
        '24/7 availability',
      ],
      link: '/dealership-ai',
      isPopular: false,
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      title: 'Ecommerce AI',
      description: 'Turn browsers into buyers with intelligent cart recovery and product recommendations.',
      bestFor: 'E-commerce, Online Retail, D2C',
      features: [
        'Cart recovery system',
        'Product recommendations',
        'Instant support 24/7',
        'Objection handling',
      ],
      link: '/ecommerce-ai-agent',
      isPopular: true,
    },
  ];

  return (
    <div className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Three Solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each system is custom-built for specific industries and use cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12 text-center border border-neutral-100 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Schedule a conversation with our team. We'll help you understand which solution makes the most sense for your business goals.
          </p>
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Schedule a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOverview;
