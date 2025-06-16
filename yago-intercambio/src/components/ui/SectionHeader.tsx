import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  icon,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className="flex items-center justify-center space-x-2 mb-4">
          {icon}
          <span className="text-green-500 font-semibold text-lg tracking-wide">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;