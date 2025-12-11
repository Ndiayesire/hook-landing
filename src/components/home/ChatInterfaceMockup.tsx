/**
 * ChatInterfaceMockup Component
 *
 * Creates a floating chat interface mockup for the hero section.
 * Shows sample conversation with AI assistant.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus } from 'lucide-react';

const ChatInterfaceMockup: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden max-w-md mx-auto"
    >
      <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-secondary">New chat</span>
          <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Plus className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-neutral-50 rounded-2xl p-4">
          <p className="text-sm text-gray-700">
            Provide a detailed summary of my company's latest investment including key metrics.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-4">
          <p className="text-sm text-gray-700">
            What are the key performance trends for my company this quarter?
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask or search for anything"
            className="w-full px-4 py-3 pr-12 bg-neutral-50 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            readOnly
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInterfaceMockup;
