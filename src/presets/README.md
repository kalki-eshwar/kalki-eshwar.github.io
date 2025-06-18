# Color System Documentation

This document explains how to use the centralized color system in the portfolio website.

## Overview

All color constants are now centralized in `src/presets/` directory, providing:
- Consistent color usage across the application
- Easy theme maintenance and updates
- Type-safe color access
- Semantic color mappings for UI components

## File Structure

```
src/presets/
├── index.ts          # Main exports
├── colors.ts         # Color constants and definitions
├── colorUtils.ts     # Utility functions
└── README.md         # This documentation
```

## Basic Usage

### Importing Colors

```typescript
// Import specific color constants
import { COLORS, SEMANTIC_COLORS, COMPONENT_COLORS } from '@/presets';

// Import utility functions
import { getColor, getCardColors, getTailwindClass } from '@/presets';
```

### Using Raw Color Values

```typescript
// Access color values directly
const primaryRed = COLORS.primary[600]; // 'rgb(220, 38, 38)'
const neutralGray = COLORS.neutral[900]; // 'rgb(17, 24, 39)'
const backgroundWhite = COLORS.base.white; // 'rgb(255, 255, 255)'
```

### Using Semantic Colors

```typescript
// Get semantic colors for UI components
const cardBackground = SEMANTIC_COLORS.neutral.background.primary;
const primaryText = SEMANTIC_COLORS.primary.text;
const borderColor = SEMANTIC_COLORS.neutral.border.medium;
```

### Using Component Colors

```typescript
// Get pre-defined component color combinations
const buttonColors = COMPONENT_COLORS.button.primary;
// Returns: { text: 'rgb(255, 255, 255)', background: 'rgb(220, 38, 38)', backgroundHover: 'rgb(185, 28, 28)' }

const cardColors = COMPONENT_COLORS.card.featured;
// Returns: { background: 'rgba(254, 242, 242, 0.2)', border: 'rgb(254, 202, 202)', borderHover: 'rgb(248, 113, 113)' }
```

## Utility Functions

### Color Path Access

```typescript
import { getColor, getSemanticColor, getComponentColor } from '@/presets';

// Access colors by path
const primaryColor = getColor('primary.600');
const neutralText = getSemanticColor('neutral', 'text.primary');
const buttonBg = getComponentColor('button', 'primary.background');
```

### Component-Specific Helpers

```typescript
import { getCardColors, getButtonColors, getBadgeColors } from '@/presets';

// Get colors based on component state
const featuredCardColors = getCardColors(true);  // featured=true
const defaultCardColors = getCardColors(false); // featured=false

const primaryButtonColors = getButtonColors('primary');
const secondaryButtonColors = getButtonColors('secondary');

const badgeColors = getBadgeColors('primary');
```

### Tailwind CSS Classes

```typescript
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

// Get Tailwind classes (useful for dynamic class generation)
const textClass = getTailwindClass('text-red-600');
const bgClass = getTailwindClass('bg-red-600');

// Use predefined color combinations
const primaryCombo = COLOR_COMBINATIONS.primary;
// Returns: { default: { text: 'text-red-600', background: 'bg-red-600', border: 'border-red-200' }, hover: { ... } }
```

## Migration Guide

### From Hardcoded Colors

Before:
```tsx
<div className="text-red-600 bg-white border-gray-200">
```

After:
```tsx
import { COLOR_COMBINATIONS } from '@/presets';

<div className={`${COLOR_COMBINATIONS.primary.default.text} ${COLOR_COMBINATIONS.neutral.default.background} ${COLOR_COMBINATIONS.neutral.default.border}`}>
```

### From Inline Styles

Before:
```tsx
<div style={{ color: '#dc2626', backgroundColor: '#ffffff' }}>
```

After:
```tsx
import { COLORS } from '@/presets';

<div style={{ color: COLORS.primary[600], backgroundColor: COLORS.base.white }}>
```

### Component Pattern

```tsx
import { getCardColors, COLOR_COMBINATIONS } from '@/presets';

interface CardProps {
  featured?: boolean;
  children: React.ReactNode;
}

function Card({ featured = false, children }: CardProps) {
  const colors = featured ? COLOR_COMBINATIONS.featured : COLOR_COMBINATIONS.neutral;
  
  return (
    <div className={`
      ${colors.default.background} 
      ${colors.default.border} 
      ${colors.hover?.border || ''} 
      rounded-lg p-6 transition-colors duration-200
    `}>
      {children}
    </div>
  );
}
```

## Color Categories

### Primary Colors (Red)
- Used for: Primary actions, highlights, featured content
- Range: `COLORS.primary[50]` to `COLORS.primary[800]`
- Main color: `COLORS.primary[600]` (rgb(220, 38, 38))

### Secondary Colors (Green)
- Used for: Success states, active indicators
- Available: `COLORS.secondary[600]` (rgb(22, 163, 74))

### Neutral Colors (Gray)
- Used for: Text, backgrounds, borders
- Range: `COLORS.neutral[50]` to `COLORS.neutral[900]`
- Text: `COLORS.neutral[600]` for secondary text, `COLORS.neutral[900]` for primary text

### Accent Colors (Blue)
- Used for: Special highlights, icons
- Range: `COLORS.accent[100]` to `COLORS.accent[700]`

### Base Colors
- `COLORS.base.white`: Pure white
- `COLORS.base.black`: Pure black

## Component Patterns

### Cards with Featured State

```tsx
const cardClasses = featured 
  ? `${COLOR_COMBINATIONS.featured.default.background} ${COLOR_COMBINATIONS.featured.default.border} ${COLOR_COMBINATIONS.featured.hover.border}`
  : `${COLOR_COMBINATIONS.neutral.default.background} ${COLOR_COMBINATIONS.neutral.default.border} ${COLOR_COMBINATIONS.neutral.hover.border}`;
```

### Buttons

```tsx
// Primary button
const primaryBtn = `${COLOR_COMBINATIONS.primary.default.background} text-white ${COLOR_COMBINATIONS.primary.hover.background}`;

// Secondary button
const secondaryBtn = `${COLOR_COMBINATIONS.neutral.default.background} ${COLOR_COMBINATIONS.neutral.default.text} ${COLOR_COMBINATIONS.neutral.hover.background}`;
```

### Text Hierarchy

```tsx
// Primary heading
<h1 className="text-gray-900">

// Secondary text
<p className="text-gray-600">

// Muted text
<span className="text-gray-500">

// Highlighted text
<span className="text-red-600">
```

## Best Practices

1. **Use semantic colors** when possible instead of raw color values
2. **Use component-specific color helpers** for consistent UI patterns
3. **Maintain the existing Tailwind classes** for easy migration - the system supports both approaches
4. **Use the utility functions** for dynamic color generation
5. **Test color combinations** for accessibility and contrast ratios

## CSS Custom Properties

Generate CSS variables for use in stylesheets:

```typescript
import { generateCSSVariables } from '@/presets';

const cssVars = generateCSSVariables();
// Returns: { '--color-primary-600': 'rgb(220, 38, 38)', ... }
```

Use in CSS:
```css
.custom-element {
  color: var(--color-primary-600);
  background-color: var(--color-neutral-50);
}
```

## Type Safety

All color constants are fully typed:

```typescript
import type { ColorKey, SemanticColorKey, ComponentColorKey } from '@/presets';

function useColor(key: ColorKey) {
  return COLORS[key]; // TypeScript will validate the key
}
```
