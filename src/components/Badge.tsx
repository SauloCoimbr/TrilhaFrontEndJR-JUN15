import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
  to?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className,to }) => {
  const baseClasses = 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium m-1';

  const colorClasses = classNames({
    'bg-blue-100 text-blue-800': color === 'primary',
    'bg-gray-100 text-gray-800': color === 'secondary',
    'bg-green-100 text-green-800': color === 'success',
    'bg-red-100 text-red-800': color === 'danger',
    'bg-yellow-100 text-yellow-800': color === 'warning',
  });

  return (
    <a href={to} className={`${baseClasses} ${colorClasses} ${className} target="_blank" rel="noopener noreferrer`}>
      {children}
    </a>
  );
};

export default Badge;
