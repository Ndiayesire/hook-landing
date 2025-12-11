/**
 * FloatingDashboardMockup Component
 *
 * Creates floating stat cards and dashboard elements for the hero section.
 * Displays key metrics with subtle animations.
 */

import React from 'react';
import { motion } from 'framer-motion';

const FloatingDashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-4 md:left-8 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-sm text-gray-500">Conversion Rate</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-secondary">48%</span>
          <span className="text-sm text-green-500 font-medium">+12%</span>
        </div>
        <div className="mt-2 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
          <div className="h-full w-[48%] bg-primary rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-32 left-12 md:left-24 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-500">Live Sales</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-secondary">$7,854</span>
          <span className="text-sm text-gray-400">.21</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">Previous: $6,213.40</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-4 right-4 md:right-12 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100"
      >
        <p className="text-xs text-gray-500 mb-2">Sales Figures</p>
        <div className="text-2xl font-bold text-secondary">$4,686<span className="text-lg">.82</span></div>
        <div className="mt-3 flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 55, 70, 85].map((height, i) => (
            <div
              key={i}
              className="w-3 bg-primary/20 rounded-t"
              style={{ height: `${height}%` }}
            >
              <div
                className="w-full bg-primary rounded-t"
                style={{ height: `${height * 0.6}%` }}
              ></div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-48 right-8 md:right-20 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100"
      >
        <p className="text-xs text-gray-500 mb-2">Average Total Sales</p>
        <div className="relative w-20 h-20 mx-auto">
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
            <span className="text-lg font-bold text-secondary">88%</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-24 right-4 md:right-16 bg-white rounded-2xl shadow-lg p-3 border border-neutral-100"
      >
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex justify-between gap-6">
            <span className="text-gray-500">Annual Rev</span>
            <span className="font-semibold text-secondary">$4,377.86</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-gray-500">Monthly</span>
            <span className="font-semibold text-secondary">$2,517.75</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-8 left-8 md:left-16 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100 w-48"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-accent2/20 flex items-center justify-center">
            <span className="text-xs">68%</span>
          </div>
          <div className="h-1.5 flex-1 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-accent2 rounded-full"></div>
          </div>
        </div>
        <p className="text-xs text-gray-400">vs this year's last note</p>
      </motion.div>
    </div>
  );
};

export default FloatingDashboardMockup;
