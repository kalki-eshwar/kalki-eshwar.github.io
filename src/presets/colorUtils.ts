/**
 * Color utility functions for working with the centralized color system
 */

import { COLORS, SEMANTIC_COLORS, COMPONENT_COLORS, TAILWIND_COLORS } from './colors';

/**
 * Get a color value by path (e.g., 'primary.600' -> COLORS.primary[600])
 */
export function getColor(path: string): string {
  const parts = path.split('.');
  let current: any = COLORS;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      throw new Error(`Color path '${path}' not found`);
    }
  }
  
  if (typeof current !== 'string') {
    throw new Error(`Color path '${path}' does not resolve to a string value`);
  }
  
  return current;
}

/**
 * Get semantic color value by component and variant
 */
export function getSemanticColor(component: keyof typeof SEMANTIC_COLORS, path: string): string {
  const parts = path.split('.');
  let current: any = SEMANTIC_COLORS[component];
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      throw new Error(`Semantic color path '${component}.${path}' not found`);
    }
  }
  
  if (typeof current !== 'string') {
    throw new Error(`Semantic color path '${component}.${path}' does not resolve to a string value`);
  }
  
  return current;
}

/**
 * Get component-specific color value
 */
export function getComponentColor(component: keyof typeof COMPONENT_COLORS, path: string): string {
  const parts = path.split('.');
  let current: any = COMPONENT_COLORS[component];
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      throw new Error(`Component color path '${component}.${path}' not found`);
    }
  }
  
  if (typeof current !== 'string') {
    throw new Error(`Component color path '${component}.${path}' does not resolve to a string value`);
  }
  
  return current;
}

/**
 * Generate CSS custom properties from color constants
 */
export function generateCSSVariables(): Record<string, string> {
  const variables: Record<string, string> = {};
  
  // Primary colors
  Object.entries(COLORS.primary).forEach(([key, value]) => {
    variables[`--color-primary-${key}`] = value;
  });
  
  // Neutral colors
  Object.entries(COLORS.neutral).forEach(([key, value]) => {
    variables[`--color-neutral-${key}`] = value;
  });
  
  // Accent colors
  Object.entries(COLORS.accent).forEach(([key, value]) => {
    variables[`--color-accent-${key}`] = value;
  });
  
  // Secondary colors
  Object.entries(COLORS.secondary).forEach(([key, value]) => {
    variables[`--color-secondary-${key}`] = value;
  });
  
  // Base colors
  variables['--color-white'] = COLORS.base.white;
  variables['--color-black'] = COLORS.base.black;
  
  return variables;
}

/**
 * Convert RGB color to RGBA with opacity
 */
export function withOpacity(rgbColor: string, opacity: number): string {
  // Extract RGB values from rgb(r, g, b) format
  const match = rgbColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) {
    throw new Error(`Invalid RGB color format: ${rgbColor}`);
  }
  
  const [, r, g, b] = match;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get card colors based on featured status
 */
export function getCardColors(featured: boolean = false) {
  return featured ? COMPONENT_COLORS.card.featured : COMPONENT_COLORS.card.default;
}

/**
 * Get button colors based on variant
 */
export function getButtonColors(variant: 'primary' | 'secondary' = 'primary') {
  return COMPONENT_COLORS.button[variant];
}

/**
 * Get badge colors based on variant
 */
export function getBadgeColors(variant: 'primary' | 'featured' | 'category' = 'primary') {
  return COMPONENT_COLORS.badge[variant];
}

/**
 * Generate Tailwind class names that are safe to use (for purging)
 */
export function getTailwindClass(colorKey: keyof typeof TAILWIND_COLORS): string {
  return TAILWIND_COLORS[colorKey];
}

/**
 * Common color combinations for different UI states
 */
export const COLOR_COMBINATIONS = {
  // For primary actions and highlights
  primary: {
    default: {
      text: 'text-red-600',
      background: 'bg-red-600',
      border: 'border-red-200',
    },
    hover: {
      text: 'hover:text-red-700',
      background: 'hover:bg-red-700',
      border: 'hover:border-red-400',
    },
  },
  
  // For secondary/neutral elements
  neutral: {
    default: {
      text: 'text-gray-600',
      background: 'bg-white',
      border: 'border-gray-200',
    },
    hover: {
      text: 'hover:text-gray-700',
      background: 'hover:bg-gray-100',
      border: 'hover:border-gray-300',
    },
  },
  
  // For featured content
  featured: {
    default: {
      text: 'text-gray-900',
      background: 'bg-red-50/20',
      border: 'border-red-200',
    },
    hover: {
      border: 'hover:border-red-400',
    },
  },
} as const;
