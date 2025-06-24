import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { HeaderProps } from '../utils/types';

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <div className="bg-surface shadow-sm p-4">
      <div className="flex items-center">
        {showBackButton && onBackPress && (
          <button onClick={onBackPress} className="mr-4">
            <ArrowLeft className="text-text-primary" size={24} />
          </button>
        )}
        <div>
          <h1 className="text-xl font-bold text-text-primary">{title}</h1>
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header; 