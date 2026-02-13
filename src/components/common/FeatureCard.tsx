import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-200 hover:scale-105 ${className}`}>
      <div className="mb-6 p-3 rounded-full bg-primary inline-flex">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;