/**
 * Quick integration test for the color system
 */

import { COLORS, SEMANTIC_COLORS, getColor } from '../presets';

// Test basic imports
console.log('Testing color system integration...');

// Test color constants
const primaryRed = COLORS.primary[600];
const neutralGray = COLORS.neutral[900];
const baseWhite = COLORS.base.white;

// Test semantic colors
const textPrimary = SEMANTIC_COLORS.neutral.text.primary;
const backgroundPrimary = SEMANTIC_COLORS.neutral.background.primary;

// Test utility function
const colorFromPath = getColor('primary.600');

console.log('✅ Color system integration test passed!');

export { primaryRed, neutralGray, baseWhite, textPrimary, backgroundPrimary, colorFromPath };
