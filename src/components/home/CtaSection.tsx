/**
 * CtaSection Component - NuroAI-Inspired Design
 *
 * Final CTA with dashboard preview mockup.
 * Light background with centered content and floating dashboard.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <div className="relative py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Supercharge your sales
            <br />
            with AI today!
          </h2>
          <a
            href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-100 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="text-sm font-medium text-secondary">HookTXT Dashboard</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Dashboard</h3>
                  <p className="text-xs text-gray-500">Overview</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Sales</p>
                  <p className="text-xl font-bold text-secondary">$2,854.21</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-xl font-bold text-secondary">$3,274.52</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Growth</p>
                  <p className="text-xl font-bold text-secondary">$2,763.42</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Leads</p>
                  <p className="text-xl font-bold text-secondary">$4,784.55</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">Sales Figures</p>
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg font-bold text-secondary mb-2">$4,686.82</p>
                  <div className="flex items-end gap-1 h-12">
                    {[40, 60, 45, 75, 55, 80, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/30 rounded-t"
                        style={{ height: `${h}%` }}
                      >
                        <div className="w-full bg-primary rounded-t" style={{ height: '60%' }}></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">Conversion</p>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
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
                          strokeDasharray="68, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-secondary">68%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">48%</p>
                      <p className="text-xs text-gray-400">vs last month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">Average Total Sales</p>
                    <Users className="w-4 h-4 text-accent2" />
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaSection;
