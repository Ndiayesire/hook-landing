/**
 * HeroFloatingCards - Floating UI elements for hero section
 *
 * Creates a dynamic composition of floating cards with chat bubble,
 * analytics card, and person image like the Lumea design.
 */

import React from 'react';
import { MessageSquare, TrendingUp, Zap, Play } from 'lucide-react';

const HeroFloatingCards: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute right-0 top-8 w-80 h-96 rounded-3xl overflow-hidden shadow-lumea-lg">
        <img
          src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Customer service representative"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
        </div>
      </div>

      <div className="absolute left-0 top-0 bg-white rounded-2xl shadow-float p-4 animate-float z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-neutral-500">Welcome to HookTXT</p>
            <p className="text-sm font-semibold text-neutral-900">Hi! How can I help?</p>
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-float p-4 animate-float-slow z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-neutral-500">AI-Driven Analytics</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-bold text-neutral-900">+47%</span>
            <span className="text-xs text-primary font-medium mb-1">Conversion</span>
          </div>
        </div>
      </div>

      <div className="absolute left-4 bottom-16 bg-white rounded-2xl shadow-float p-4 animate-float-delayed z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">24/7 Availability</p>
            <p className="text-xs text-neutral-500">Always online for leads</p>
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-0 bg-dark text-white rounded-2xl shadow-float p-4 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-bold">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60">Response Time</span>
              <span className="text-lg font-bold">&lt;2s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-24 top-1/3 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute left-1/3 bottom-8 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
    </div>
  );
};

export default HeroFloatingCards;
