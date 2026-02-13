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
      className={`bg-white rounded-3xl shadow-lg ${hover ? 'transition-all duration-200 hover:shadow-xl hover:scale-105' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;