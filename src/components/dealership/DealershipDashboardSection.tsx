/**
 * DealershipDashboardSection Component - Mia.inc Minimal Style
 *
 * Clean dashboard features section.
 */

import React from 'react';
import Section from '../common/Section';
import { LayoutDashboard, BarChart2 } from 'lucide-react';

const DealershipDashboardSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Your Custom Dashboard
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Complete visibility into every lead, conversation, and performance metric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <LayoutDashboard className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-3xl font-bold text-secondary mb-4">Real-Time Leads</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              See every conversation, lead score, and action taken in real-time. No more wondering what's happening.
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li>• Live conversation monitoring</li>
              <li>• Lead qualification scores</li>
              <li>• Appointment scheduling</li>
              <li>• Performance analytics</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <BarChart2 className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-3xl font-bold text-secondary mb-4">Performance Metrics</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Track what matters: conversion rates, response times, and revenue attribution.
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li>• After-hours lead capture rate</li>
              <li>• Conversion by lead score</li>
              <li>• Revenue attribution</li>
              <li>• System performance</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DealershipDashboardSection;
