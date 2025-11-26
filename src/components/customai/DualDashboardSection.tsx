/**
 * DualDashboardSection Component - Mia.inc Minimal Style
 *
 * Clean section explaining dashboard features.
 */

import React from 'react';
import Section from '../common/Section';
import { BarChart3, Users } from 'lucide-react';

const DualDashboardSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Real-Time Dashboards
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Complete visibility into your AI system with dashboards built for transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <BarChart3 className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-3xl font-bold text-secondary mb-4">Client Dashboard</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              See every conversation, lead qualification, and performance metric in real-time. No more waiting for updates.
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li>• Live conversation monitoring</li>
              <li>• Lead scoring and qualification</li>
              <li>• Revenue attribution</li>
              <li>• Performance analytics</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <Users className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-3xl font-bold text-secondary mb-4">Team Dashboard</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Your team sees what matters most: high-priority leads, task status, and system health—all in one place.
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li>• Prioritized lead queue</li>
              <li>• Task management</li>
              <li>• System status monitoring</li>
              <li>• Team collaboration tools</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DualDashboardSection;
