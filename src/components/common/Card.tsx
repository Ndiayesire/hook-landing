import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false,
}) => {
  return (
    <div 
      className={`bg-white rounded-lg border border-gray-100 ${hover ? 'transition-all duration-300 hover:shadow-sm hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;