import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  gradient = false 
}) => {
  const baseClasses = 'rounded-2xl shadow-lg border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 hover:scale-105' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-r from-green-600 to-green-700 text-white' : 'bg-white';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;