import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { HeaderProps } from '../utils/types';

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  isTransparent = false,
}) => {
  const headerClasses = isTransparent
    ? 'bg-transparent p-4'
    : 'bg-surface shadow-sm p-4';
  
  const titleClasses = isTransparent
    ? 'text-xl font-bold text-white'
    : 'text-xl font-bold text-text-primary';

  const subtitleClasses = isTransparent
    ? 'text-white/80'
    : 'text-gray-600';
  
  const iconClasses = isTransparent ? 'text-white' : 'text-text-primary';

  return (
    <div className={headerClasses}>
      <div className="flex items-center">
        {showBackButton && onBackPress && (
          <button onClick={onBackPress} className="mr-4">
            <ArrowLeft className={iconClasses} size={24} />
          </button>
        )}
        <div>
          <h1 className={titleClasses}>{title}</h1>
          {subtitle && (
            <p className={subtitleClasses}>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header; 