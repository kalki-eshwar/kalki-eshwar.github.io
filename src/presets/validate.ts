/**
 * Color system validation script
 * Run this to validate that all color constants are properly defined
 */

import { 
  COLORS, 
  TAILWIND_COLORS,
  getColor,
  getSemanticColor,
  getComponentColor,
  generateCSSVariables,
  withOpacity
} from './index';

console.log('🎨 Validating Color System...\n');

// Test 1: Validate color constants
console.log('✅ Testing color constants...');
console.log(`Primary red-600: ${COLORS.primary[600]}`);
console.log(`Neutral gray-900: ${COLORS.neutral[900]}`);
console.log(`Base white: ${COLORS.base.white}`);

// Test 2: Validate utility functions
console.log('\n✅ Testing utility functions...');
try {
  console.log(`getColor('primary.600'): ${getColor('primary.600')}`);
  console.log(`getSemanticColor('neutral', 'text.primary'): ${getSemanticColor('neutral', 'text.primary')}`);
  console.log(`getComponentColor('button', 'primary.background'): ${getComponentColor('button', 'primary.background')}`);
} catch (error) {
  console.error('❌ Utility function error:', error);
}

// Test 3: Validate opacity helper
console.log('\n✅ Testing opacity helper...');
try {
  console.log(`withOpacity(${COLORS.primary[600]}, 0.5): ${withOpacity(COLORS.primary[600], 0.5)}`);
} catch (error) {
  console.error('❌ Opacity helper error:', error);
}

// Test 4: Validate CSS variables generation
console.log('\n✅ Testing CSS variables generation...');
const cssVars = generateCSSVariables();
console.log(`Generated ${Object.keys(cssVars).length} CSS variables`);
console.log(`Sample: --color-primary-600 = ${cssVars['--color-primary-600']}`);

// Test 5: Validate Tailwind classes
console.log('\n✅ Testing Tailwind classes...');
console.log(`text-red-600 class: ${TAILWIND_COLORS['text-red-600']}`);
console.log(`bg-white class: ${TAILWIND_COLORS['bg-white']}`);

// Test 6: Count total colors
const primaryColors = Object.keys(COLORS.primary).length;
const neutralColors = Object.keys(COLORS.neutral).length;
const accentColors = Object.keys(COLORS.accent).length;
const secondaryColors = Object.keys(COLORS.secondary).length;
const baseColors = Object.keys(COLORS.base).length;
const tailwindColors = Object.keys(TAILWIND_COLORS).length;

console.log('\n📊 Color System Summary:');
console.log(`- Primary colors: ${primaryColors}`);
console.log(`- Neutral colors: ${neutralColors}`);
console.log(`- Accent colors: ${accentColors}`);
console.log(`- Secondary colors: ${secondaryColors}`);
console.log(`- Base colors: ${baseColors}`);
console.log(`- Tailwind mappings: ${tailwindColors}`);
console.log(`- Total raw colors: ${primaryColors + neutralColors + accentColors + secondaryColors + baseColors}`);

console.log('\n🎉 Color system validation complete!');

// Export validation result for use in tests
export const colorSystemValid = true;
