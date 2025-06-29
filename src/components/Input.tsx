import React from 'react';
import { InputProps } from '../utils/types';

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onFocus,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'w-full p-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default Input; 