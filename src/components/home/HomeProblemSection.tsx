/**
 * HomeProblemSection Component - NuroAI-Inspired Benefits Design
 *
 * Benefits-focused layout with floating dashboard previews,
 * feature cards, and visual examples.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, QrCode, MessageSquare, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import IntegrationIconsGrid from './IntegrationIconsGrid';

const HomeProblemSection: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary mb-3 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Why sales teams love our
              <br />
              AI-Powered dashboard
            </h2>
          </div>
          <Link
            to="/custom-ai-systems"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">S</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">sofume.com</p>
                  <p className="text-xs text-gray-400">22.4k sold</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Pro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent2/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent2">S</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">sofume.co</p>
                  <p className="text-xs text-gray-400">12.4k sold</p>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Real-time Analytics</h3>
            <p className="text-sm text-gray-500">Track performance across all your channels instantly.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <p className="text-sm font-medium text-secondary mb-3">QR Code Design</p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">QR Code Preview</span>
                    <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">*</span>
                    </span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Smart Automation</h3>
            <p className="text-sm text-gray-500">Automate repetitive tasks and focus on closing deals.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">
                    I would recommend using more branding elements there
                  </p>
                  <button className="px-3 py-1.5 bg-primary text-white text-xs rounded-full">
                    Install help
                  </button>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-secondary mb-2">AI Recommendations</h3>
            <p className="text-sm text-gray-500">Get intelligent suggestions to improve conversion rates.</p>
          </motion.div>
        </div>

        <IntegrationIconsGrid />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">AI-Powered Sales Forecasting</h4>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Track and analyze your team's performance in real-time with detailed analytics, key
                sales metrics, and actionable insights to drive smarter decision-making.
              </p>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[40, 55, 35, 70, 45, 80, 60, 90, 75].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t transition-all duration-300 hover:bg-primary/40"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Real-Time Performance Tracking</h4>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Sync effortlessly with Salesforce, HubSpot, and other major
                platforms to maintain seamless workflow integration.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { color: 'bg-blue-100', icon: 'text-blue-600' },
                { color: 'bg-green-100', icon: 'text-green-600' },
                { color: 'bg-orange-100', icon: 'text-orange-600' },
                { color: 'bg-primary/10', icon: 'text-primary' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} rounded-xl p-4 flex items-center justify-center`}>
                  <Star className={`w-6 h-6 ${item.icon}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeProblemSection;
