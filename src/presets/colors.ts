/**
 * Central color constants repository
 * All color values used throughout the application
 */

export const COLORS = {
  // Primary Colors
  primary: {
    50: 'rgb(254, 242, 242)', // red-50
    100: 'rgb(254, 226, 226)', // red-100
    200: 'rgb(254, 202, 202)', // red-200
    400: 'rgb(248, 113, 113)', // red-400
    500: 'rgb(239, 68, 68)', // red-500
    600: 'rgb(220, 38, 38)', // red-600
    700: 'rgb(185, 28, 28)', // red-700
    800: 'rgb(153, 27, 27)', // red-800
  },
  
  // Secondary Colors (Green for active states)
  secondary: {
    600: 'rgb(22, 163, 74)', // green-600
  },
  
  // Neutral Colors (Gray scale)
  neutral: {
    50: 'rgb(249, 250, 251)', // gray-50
    100: 'rgb(243, 244, 246)', // gray-100
    200: 'rgb(229, 231, 235)', // gray-200
    300: 'rgb(209, 213, 219)', // gray-300
    400: 'rgb(156, 163, 175)', // gray-400
    500: 'rgb(107, 114, 128)', // gray-500
    600: 'rgb(75, 85, 99)', // gray-600
    700: 'rgb(55, 65, 81)', // gray-700
    900: 'rgb(17, 24, 39)', // gray-900
  },
  
  // Blue accent colors
  accent: {
    100: 'rgb(219, 234, 254)', // blue-100
    200: 'rgb(191, 219, 254)', // blue-200
    300: 'rgb(147, 197, 253)', // blue-300
    700: 'rgb(29, 78, 216)', // blue-700
  },
  
  // Base colors
  base: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
  },
  
  // Background gradients and overlays
  overlay: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Text colors with transparency
  text: {
    white: 'rgb(255, 255, 255)',
    gray200: 'rgb(229, 231, 235)', // gray-200
  }
} as const;

/**
 * Tailwind CSS class mappings for easy migration
 * These map to the exact Tailwind classes currently used in the codebase
 */
export const TAILWIND_COLORS = {
  // Primary red colors
  'text-red-500': 'text-red-500',
  'text-red-600': 'text-red-600',
  'text-red-700': 'text-red-700',
  'text-red-800': 'text-red-800',
  'bg-red-50': 'bg-red-50',
  'bg-red-50/20': 'bg-red-50/20',
  'bg-red-100': 'bg-red-100',
  'bg-red-200': 'bg-red-200',
  'bg-red-600': 'bg-red-600',
  'bg-red-700': 'bg-red-700',
  'border-red-200': 'border-red-200',
  'border-red-400': 'border-red-400',
  'hover:text-red-600': 'hover:text-red-600',
  'hover:text-red-700': 'hover:text-red-700',
  'hover:bg-red-700': 'hover:bg-red-700',
  'hover:border-red-400': 'hover:border-red-400',
  
  // Secondary green colors
  'bg-green-600': 'bg-green-600',
  
  // Neutral gray colors
  'text-gray-200': 'text-gray-200',
  'text-gray-400': 'text-gray-400',
  'text-gray-500': 'text-gray-500',
  'text-gray-600': 'text-gray-600',
  'text-gray-700': 'text-gray-700',
  'text-gray-900': 'text-gray-900',
  'bg-gray-50': 'bg-gray-50',
  'bg-gray-100': 'bg-gray-100',
  'bg-gray-200': 'bg-gray-200',
  'border-gray-100': 'border-gray-100',
  'border-gray-200': 'border-gray-200',
  'border-gray-300': 'border-gray-300',
  'hover:text-gray-700': 'hover:text-gray-700',
  'hover:text-gray-900': 'hover:text-gray-900',
  'hover:bg-gray-200': 'hover:bg-gray-200',
  'hover:border-gray-300': 'hover:border-gray-300',
  
  // Blue accent colors
  'text-blue-700': 'text-blue-700',
  'bg-blue-100': 'bg-blue-100',
  'bg-blue-200': 'bg-blue-200',
  'border-blue-300': 'border-blue-300',
  
  // Base colors
  'text-white': 'text-white',
  'bg-white': 'bg-white',
  'hover:bg-white': 'hover:bg-white',
} as const;

/**
 * Semantic color mappings for different UI components
 */
export const SEMANTIC_COLORS = {
  // Primary action colors
  primary: {
    text: COLORS.primary[600],
    textHover: COLORS.primary[700],
    background: COLORS.primary[600],
    backgroundHover: COLORS.primary[700],
    border: COLORS.primary[200],
    borderHover: COLORS.primary[400],
    light: COLORS.primary[50],
    lightWithOpacity: 'rgba(254, 242, 242, 0.2)', // red-50/20
  },
  
  // Secondary/success colors
  secondary: {
    background: COLORS.secondary[600],
  },
  
  // Neutral/default colors
  neutral: {
    text: {
      primary: COLORS.neutral[900],
      secondary: COLORS.neutral[600],
      tertiary: COLORS.neutral[500],
      muted: COLORS.neutral[400],
      white: COLORS.base.white,
      lightGray: COLORS.text.gray200,
    },
    background: {
      primary: COLORS.base.white,
      secondary: COLORS.neutral[50],
      tertiary: COLORS.neutral[100],
    },
    border: {
      light: COLORS.neutral[100],
      medium: COLORS.neutral[200],
      dark: COLORS.neutral[300],
    },
    hover: {
      text: COLORS.neutral[700],
      background: COLORS.neutral[200],
      border: COLORS.neutral[300],
    }
  },
  
  // Accent colors
  accent: {
    text: COLORS.accent[700],
    background: {
      light: COLORS.accent[100],
      medium: COLORS.accent[200],
    },
    border: COLORS.accent[300],
  },
  
  // Special use cases
  overlay: {
    light: COLORS.overlay.light,
    medium: COLORS.overlay.medium,
  },
  
  // Featured/highlighted content
  featured: {
    background: 'rgba(254, 242, 242, 0.2)', // red-50/20
    border: COLORS.primary[200],
    borderHover: COLORS.primary[400],
  }
} as const;

/**
 * Component-specific color presets
 */
export const COMPONENT_COLORS = {
  // Button variants
  button: {
    primary: {
      text: COLORS.base.white,
      background: COLORS.primary[600],
      backgroundHover: COLORS.primary[700],
    },
    secondary: {
      text: COLORS.neutral[700],
      background: COLORS.neutral[100],
      backgroundHover: COLORS.neutral[200],
    },
  },
  
  // Card variants
  card: {
    default: {
      background: COLORS.base.white,
      border: COLORS.neutral[200],
      borderHover: COLORS.neutral[300],
    },
    featured: {
      background: SEMANTIC_COLORS.featured.background,
      border: COLORS.primary[200],
      borderHover: COLORS.primary[400],
    },
  },
  
  // Badge/Tag variants
  badge: {
    primary: {
      text: COLORS.primary[800],
      background: COLORS.primary[100],
    },
    featured: {
      text: COLORS.primary[800],
      background: COLORS.primary[100],
    },
    category: {
      text: COLORS.primary[600],
      background: COLORS.primary[50],
    },
  },
  
  // Navigation
  navigation: {
    text: COLORS.neutral[600],
    textHover: COLORS.primary[600],
    background: COLORS.base.white,
    backgroundHover: COLORS.base.white,
  },
  
  // Timeline/Status indicators
  status: {
    active: COLORS.secondary[600],
    inactive: COLORS.primary[600],
  }
} as const;

export type ColorKey = keyof typeof COLORS;
export type TailwindColorKey = keyof typeof TAILWIND_COLORS;
export type SemanticColorKey = keyof typeof SEMANTIC_COLORS;
export type ComponentColorKey = keyof typeof COMPONENT_COLORS;
