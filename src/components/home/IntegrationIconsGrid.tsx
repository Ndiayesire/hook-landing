/**
 * IntegrationIconsGrid Component
 *
 * Floating grid of integration/app icons showing compatibility
 * with various tools and platforms. Similar to NuroAI design.
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Mail,
  Calendar,
  BarChart3,
  Users,
  Zap,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  CreditCard,
  FileText,
  Settings,
  Bell,
  Shield,
  Cloud,
} from 'lucide-react';

interface IconItemProps {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  delay: number;
  size?: 'sm' | 'md' | 'lg';
}

const IconItem: React.FC<IconItemProps> = ({ icon, color, bgColor, delay, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`${sizeClasses[size]} rounded-xl ${bgColor} flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={color}>{icon}</div>
    </motion.div>
  );
};

const IntegrationIconsGrid: React.FC = () => {
  const topRowIcons = [
    { icon: <MessageSquare className="w-5 h-5" />, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: <Zap className="w-5 h-5" />, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { icon: <Database className="w-5 h-5" />, color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: <Globe className="w-5 h-5" />, color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: <Mail className="w-5 h-5" />, color: 'text-red-500', bgColor: 'bg-red-50' },
    { icon: <Cloud className="w-5 h-5" />, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
  ];

  const bottomRowIcons = [
    { icon: <BarChart3 className="w-5 h-5" />, color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: <Calendar className="w-5 h-5" />, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: <CreditCard className="w-5 h-5" />, color: 'text-accent2', bgColor: 'bg-accent2/10' },
    { icon: <Users className="w-5 h-5" />, color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: <ShoppingCart className="w-5 h-5" />, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { icon: <Smartphone className="w-5 h-5" />, color: 'text-gray-600', bgColor: 'bg-gray-100' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {topRowIcons.map((item, index) => (
            <IconItem
              key={`top-${index}`}
              icon={item.icon}
              color={item.color}
              bgColor={item.bgColor}
              delay={index * 0.1}
              size={index % 2 === 0 ? 'md' : 'lg'}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {bottomRowIcons.map((item, index) => (
            <IconItem
              key={`bottom-${index}`}
              icon={item.icon}
              color={item.color}
              bgColor={item.bgColor}
              delay={0.3 + index * 0.1}
              size={index % 2 === 0 ? 'lg' : 'md'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationIconsGrid;
