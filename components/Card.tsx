import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const interactiveClasses = onClick ? 'cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-base-300' : '';
  
  return (
    <div
      className={`bg-base-200 p-6 rounded-xl shadow-lg ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;