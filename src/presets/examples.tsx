/**
 * Example component demonstrating how to use the centralized color system
 * This shows migration patterns and best practices
 */

import React from 'react';
import {
  COLORS,
  SEMANTIC_COLORS,
  COLOR_COMBINATIONS,
  getCardColors,
  getBadgeColors,
  getTailwindClass
} from '@/presets';

interface ExampleCardProps {
  title: string;
  description: string;
  featured?: boolean;
  badge?: string;
  variant?: 'primary' | 'secondary';
}

/**
 * Example 1: Using Tailwind class combinations
 */
export function ExampleCardWithTailwind({ title, description, featured = false, badge }: ExampleCardProps) {
  // Get color combinations based on state
  const colors = featured ? COLOR_COMBINATIONS.featured : COLOR_COMBINATIONS.neutral;
  const badgeColors = featured ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700';
  
  return (
    <div className={`
      rounded-lg p-6 transition-colors duration-200
      ${colors.default.background}
      ${colors.default.border}
      ${colors.hover?.border || ''}
    `}>
      {badge && (
        <span className={`
          inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3
          ${badgeColors}
        `}>
          {badge}
        </span>
      )}
      
      <h3 className={`text-xl font-medium mb-2 ${getTailwindClass('text-gray-900')}`}>
        {title}
      </h3>
      
      <p className={`leading-relaxed ${getTailwindClass('text-gray-600')}`}>
        {description}
      </p>
    </div>
  );
}

/**
 * Example 2: Using inline styles with color constants
 */
export function ExampleCardWithInlineStyles({ title, description, featured = false, badge }: ExampleCardProps) {
  const cardColors = getCardColors(featured);
  const badgeColors = getBadgeColors(featured ? 'featured' : 'primary');
  
  return (
    <div 
      style={{
        backgroundColor: cardColors.background,
        borderColor: cardColors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = cardColors.borderHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = cardColors.border;
      }}
    >
      {badge && (
        <span 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: badgeColors.background,
            color: badgeColors.text,
            fontSize: '0.75rem',
            fontWeight: '500',
            padding: '0.125rem 0.625rem',
            borderRadius: '9999px',
            marginBottom: '0.75rem',
          }}
        >
          {badge}
        </span>
      )}
      
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '500', 
        marginBottom: '0.5rem',
        color: SEMANTIC_COLORS.neutral.text.primary 
      }}>
        {title}
      </h3>
      
      <p style={{ 
        lineHeight: '1.6',
        color: SEMANTIC_COLORS.neutral.text.secondary 
      }}>
        {description}
      </p>
    </div>
  );
}

/**
 * Example 3: Using CSS-in-JS with color constants
 */
export function ExampleCardWithStyledComponents({ title, description, featured = false, variant = 'primary' }: ExampleCardProps) {
  const cardColors = getCardColors(featured);
  const textColors = SEMANTIC_COLORS.neutral.text;
  const primaryColor = variant === 'primary' ? COLORS.primary[600] : COLORS.neutral[600];
  
  const cardStyles: React.CSSProperties = {
    backgroundColor: cardColors.background,
    border: `1px solid ${cardColors.border}`,
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  };
  
  const titleStyles: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: textColors.primary,
  };
  
  const descriptionStyles: React.CSSProperties = {
    lineHeight: '1.6',
    color: textColors.secondary,
  };
  
  const accentStyles: React.CSSProperties = {
    color: primaryColor,
    borderLeft: `3px solid ${primaryColor}`,
    paddingLeft: '1rem',
  };
  
  return (
    <div 
      style={cardStyles}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = cardColors.borderHover;
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = cardColors.border;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={accentStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <p style={descriptionStyles}>{description}</p>
      </div>
    </div>
  );
}

/**
 * Example 4: Button component using color system
 */
interface ExampleButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function ExampleButton({ children, variant = 'primary', size = 'md', onClick }: ExampleButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg 
    transition-colors duration-200 cursor-pointer
    ${sizeClasses[size]}
  `;
  
  if (variant === 'primary') {
    return (
      <button 
        className={`${baseClasses} ${getTailwindClass('bg-red-600')} ${getTailwindClass('text-white')} ${getTailwindClass('hover:bg-red-700')}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button 
      className={`${baseClasses} ${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-gray-700')} ${getTailwindClass('hover:bg-gray-200')}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * Example 5: Color demonstration component
 */
export function ColorPalette() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Color System Demonstration</h2>
      
      {/* Primary Colors */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Primary Colors (Red)</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(COLORS.primary).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-16 h-16 rounded-lg border border-gray-300 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-sm">
                <div className="font-medium">{key}</div>
                <div className="text-gray-500 text-xs">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Neutral Colors */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Neutral Colors (Gray)</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(COLORS.neutral).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-16 h-16 rounded-lg border border-gray-300 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-sm">
                <div className="font-medium">{key}</div>
                <div className="text-gray-500 text-xs">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Component Examples */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Component Examples</h3>
        <div className="space-y-4">
          <ExampleCardWithTailwind 
            title="Featured Card with Tailwind" 
            description="This card uses Tailwind classes with the centralized color system."
            featured={true}
            badge="Featured"
          />
          
          <ExampleCardWithInlineStyles 
            title="Card with Inline Styles" 
            description="This card uses inline styles with color constants."
            featured={false}
            badge="Standard"
          />
          
          <ExampleCardWithStyledComponents 
            title="Card with CSS-in-JS" 
            description="This card demonstrates CSS-in-JS patterns with color constants."
            featured={false}
            variant="primary"
          />
        </div>
      </div>
      
      {/* Button Examples */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Button Examples</h3>
        <div className="flex flex-wrap gap-3">
          <ExampleButton variant="primary" size="sm">Small Primary</ExampleButton>
          <ExampleButton variant="primary" size="md">Medium Primary</ExampleButton>
          <ExampleButton variant="primary" size="lg">Large Primary</ExampleButton>
          <ExampleButton variant="secondary" size="md">Secondary</ExampleButton>
        </div>
      </div>
    </div>
  );
}
