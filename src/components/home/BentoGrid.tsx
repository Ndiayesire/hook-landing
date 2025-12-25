/**
 * BentoGrid - Lumea-inspired feature grid
 *
 * Modern bento grid layout with varying card sizes,
 * showcasing key features and statistics.
 */

import React from 'react';
import { Users, Globe, Zap, Check, Clock } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            Advanced AI and thoughtful design
            <br />
            <span className="text-primary">elevate your productivity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[180px]">
          <div className="bento-card lg:col-span-1 lg:row-span-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Join 10,000+ Users Who Trust HookTXT</h3>
            </div>
            <div className="flex -space-x-2">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold border-2 border-white">
                +7K
              </div>
            </div>
          </div>

          <div className="bento-card-teal lg:col-span-2 lg:row-span-1 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Connecting Businesses Across 50+ Countries</h3>
              <p className="text-white/70 text-sm">Stay productive and connected, no matter where your team collaborates.</p>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Globe className="absolute right-4 bottom-4 w-32 h-32 text-white" />
            </div>
          </div>

          <div className="bento-card lg:col-span-1 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Simplify Complex Tasks</h3>
              <p className="text-neutral-600 text-sm">HookTXT makes tough tasks simple with smart, seamless integrations.</p>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-neutral-700">Lead Qualification</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-neutral-700">Instant Replies</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-neutral-700">CRM Integration</span>
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-1 lg:row-span-1">
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-neutral-500">Live Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-neutral-700">Team Meeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-neutral-700">Product Launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm text-neutral-400">Client Feedback</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card-gradient lg:col-span-1 lg:row-span-1">
            <div className="h-full flex flex-col justify-between">
              <h3 className="text-lg font-bold">Successfully managed over</h3>
              <div>
                <span className="text-4xl font-extrabold">$1.2M+</span>
                <p className="text-white/70 text-sm mt-1">in additional revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
