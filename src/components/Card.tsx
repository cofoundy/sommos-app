import React from 'react';
import { CardProps } from '../utils/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
}) => {
  const baseClasses = 'bg-surface rounded-2xl shadow-card';
  
  const paddingClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  };
  
  return (
    <div className={`${baseClasses} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 