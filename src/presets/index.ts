/**
 * Central presets repository
 * Export all preset constants from this directory
 */

export * from './colors';
export * from './colorUtils';

// Re-export commonly used color constants for convenience
export {
  COLORS,
  SEMANTIC_COLORS,
  COMPONENT_COLORS,
  TAILWIND_COLORS
} from './colors';

// Re-export utility functions
export {
  getColor,
  getSemanticColor,
  getComponentColor,
  getCardColors,
  getButtonColors,
  getBadgeColors,
  getTailwindClass,
  COLOR_COMBINATIONS,
  generateCSSVariables,
  withOpacity
} from './colorUtils';
