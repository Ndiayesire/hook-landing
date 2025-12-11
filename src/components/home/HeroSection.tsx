/**
 * HeroSection Component - NuroAI-Inspired Design
 *
 * Visually rich hero section with floating UI mockups,
 * chat interface, and stat cards. Soft gradient background.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const partnerLogos = [
    { src: "https://tourismebrome-missisquoi.ca/app/themes/baserock/assets/img/logo_tourisme-cantons-de-lest-fr-v2.png", alt: "Tourisme Cantons de l'Est" },
    { src: "https://www.villasport.com/the-woodlands/wp-content/themes/villasport/assets/src/images/logo-athletic.png", alt: "VillaSport" },
    { src: "https://360.agency/wp-content/uploads/2021/09/logo_dark_360.agency-400x135-1.png", alt: "360.agency" },
    { src: "https://www.chauffeur-services.com/wp-content/uploads/cs-logo_horizontal.svg", alt: "Chauffeur Services" },
    { src: "https://www.vivreenresidence.com/img/logo.svg", alt: "Vivre en Residence" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl pt-32 pb-16 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6"
          >
            AI-Driven sales teams with
            <br />
            <span className="text-primary">human-level precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8"
          >
            Empower your business with AI-driven teams that execute tasks with
            human-level precision, efficiency, and reliability.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-4 left-4 md:left-8 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100 z-20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-secondary">48%</span>
              <span className="text-xs text-green-500 font-medium">+12%</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">The best deals for this year</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-20 left-0 md:left-4 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100 z-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500">Sales</span>
              <span className="text-xs text-green-500">+8.2%</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-secondary">$7,854</span>
              <span className="text-sm text-gray-400">.21</span>
            </div>
            <p className="text-xs text-gray-400">Previous year ($6,213.40)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden max-w-md mx-auto relative z-10"
          >
            <div className="bg-neutral-50/80 px-6 py-4 border-b border-neutral-100">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-secondary">New chat</span>
                <button className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-orange-600" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  Provide a detailed summary of my company's latest investment including key metrics.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  What are the key performance trends for my company this quarter?
                </p>
              </div>
            </div>

            <div className="px-5 pb-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask or search for anything"
                  className="w-full px-4 py-3 pr-12 bg-neutral-50 border border-neutral-200 rounded-full text-sm focus:outline-none"
                  readOnly
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-4 right-4 md:right-8 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100 z-20"
          >
            <p className="text-xs text-gray-500 mb-2">Sales Figures</p>
            <div className="text-xl font-bold text-secondary">$4,686<span className="text-base text-gray-400">.82</span></div>
            <div className="text-xs text-gray-400">Monitoring Report</div>
            <div className="mt-3 flex items-end gap-1 h-10">
              {[35, 55, 40, 70, 50, 65, 80].map((height, i) => (
                <div
                  key={i}
                  className="w-2 bg-primary/30 rounded-t"
                  style={{ height: `${height}%` }}
                >
                  <div className="w-full bg-primary rounded-t" style={{ height: '60%' }}></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-24 right-0 md:right-4 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100 z-20"
          >
            <p className="text-xs text-gray-500 mb-2">Average Total Sales</p>
            <div className="relative w-16 h-16 mx-auto">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E5E5"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#15373E"
                  strokeWidth="3"
                  strokeDasharray="88, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-secondary">88%</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Target Growth %</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-4 right-8 md:right-16 bg-white rounded-xl shadow-lg p-3 border border-neutral-100 z-20"
          >
            <div className="text-xs space-y-1">
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Annual Rev</span>
                <span className="font-semibold text-secondary">$4,377.86</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Monthly</span>
                <span className="font-semibold text-secondary">$2,517.75</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Try for free
          </a>
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white text-secondary font-medium border border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
          >
            Request a Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-sm text-neutral-500 mb-6">Our trusted partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
