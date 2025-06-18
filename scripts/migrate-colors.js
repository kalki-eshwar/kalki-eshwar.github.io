#!/usr/bin/env node

/**
 * Color Migration Script
 * Helps migrate hardcoded color classes to centralized color system
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Color mappings for common patterns
const COLOR_MAPPINGS = {
  // Text colors
  'text-red-600': 'COLOR_COMBINATIONS.primary.default.text',
  'text-red-700': 'COLOR_COMBINATIONS.primary.hover.text',
  'text-red-800': 'getBadgeColors("primary").text',
  'text-gray-900': 'getTailwindClass("text-gray-900")',
  'text-gray-600': 'getTailwindClass("text-gray-600")',
  'text-gray-500': 'getTailwindClass("text-gray-500")',
  'text-gray-700': 'getTailwindClass("text-gray-700")',
  'text-white': 'getTailwindClass("text-white")',
  'text-gray-200': 'getTailwindClass("text-gray-200")',
  
  // Background colors
  'bg-red-600': 'getTailwindClass("bg-red-600")',
  'bg-red-700': 'getTailwindClass("bg-red-700")',
  'bg-red-100': 'getBadgeColors("primary").background',
  'bg-red-50': 'getBadgeColors("category").background',
  'bg-red-50/20': 'COLOR_COMBINATIONS.featured.default.background',
  'bg-white': 'COLOR_COMBINATIONS.neutral.default.background',
  'bg-gray-50': 'getTailwindClass("bg-gray-50")',
  'bg-gray-100': 'getTailwindClass("bg-gray-100")',
  'bg-gray-200': 'getTailwindClass("bg-gray-200")',
  
  // Border colors
  'border-red-200': 'COLOR_COMBINATIONS.featured.default.border',
  'border-red-400': 'COLOR_COMBINATIONS.featured.hover.border',
  'border-gray-100': 'getTailwindClass("border-gray-100")',
  'border-gray-200': 'COLOR_COMBINATIONS.neutral.default.border',
  'border-gray-300': 'COLOR_COMBINATIONS.neutral.hover.border',
  
  // Hover colors
  'hover:text-red-600': 'COLOR_COMBINATIONS.primary.hover.text',
  'hover:text-red-700': 'COLOR_COMBINATIONS.primary.hover.text',
  'hover:text-gray-700': 'COLOR_COMBINATIONS.neutral.hover.text',
  'hover:text-gray-900': 'getTailwindClass("hover:text-gray-900")',
  'hover:bg-red-700': 'getTailwindClass("hover:bg-red-700")',
  'hover:bg-gray-200': 'getTailwindClass("hover:bg-gray-200")',
  'hover:bg-white': 'getTailwindClass("hover:bg-white")',
  'hover:border-red-400': 'COLOR_COMBINATIONS.featured.hover.border',
  'hover:border-gray-300': 'COLOR_COMBINATIONS.neutral.hover.border',
};

// Combined patterns for easier migration
const COMPONENT_PATTERNS = {
  // Featured card pattern
  'bg-red-50/20 border border-red-200 hover:border-red-400': 
    '${COLOR_COMBINATIONS.featured.default.background} border ${COLOR_COMBINATIONS.featured.default.border} ${COLOR_COMBINATIONS.featured.hover.border}',
  
  // Default card pattern
  'bg-white border border-gray-200 hover:border-gray-300':
    '${COLOR_COMBINATIONS.neutral.default.background} border ${COLOR_COMBINATIONS.neutral.default.border} ${COLOR_COMBINATIONS.neutral.hover.border}',
  
  // Primary button pattern
  'bg-red-600 text-white hover:bg-red-700':
    '${getTailwindClass("bg-red-600")} ${getTailwindClass("text-white")} ${getTailwindClass("hover:bg-red-700")}',
  
  // Badge pattern
  'bg-red-100 text-red-800':
    '${getBadgeColors("primary").background} ${getBadgeColors("primary").text}',
  
  // Navigation pattern
  'text-gray-600 hover:text-red-600':
    '${COLOR_COMBINATIONS.neutral.default.text} ${COLOR_COMBINATIONS.primary.hover.text}',
};

function generateMigrationReport(files) {
  console.log('\n🎨 COLOR MIGRATION REPORT\n');
  console.log('Files to migrate:');
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const colors = [];
    
    Object.keys(COLOR_MAPPINGS).forEach(pattern => {
      if (content.includes(pattern)) {
        colors.push(pattern);
      }
    });
    
    if (colors.length > 0) {
      console.log(`\n📄 ${file}`);
      console.log(`   Colors found: ${colors.join(', ')}`);
    }
  });
  
  console.log('\n💡 MIGRATION TIPS:');
  console.log('1. Add import: import { COLOR_COMBINATIONS, getTailwindClass, getBadgeColors } from "@/presets";');
  console.log('2. Replace hardcoded classes with centralized references');
  console.log('3. Use template literals for dynamic classes: className={`...${colorVar}...`}');
  console.log('4. Test the component after migration');
}

function generateMigrationCode() {
  console.log('\n🔧 MIGRATION HELPER PATTERNS:\n');
  
  console.log('// Import statement to add:');
  console.log('import { COLOR_COMBINATIONS, getTailwindClass, getBadgeColors } from "@/presets";\n');
  
  console.log('// Common replacement patterns:');
  Object.entries(COLOR_MAPPINGS).forEach(([old, newPattern]) => {
    console.log(`"${old}" → ${newPattern}`);
  });
  
  console.log('\n// Component patterns:');
  Object.entries(COMPONENT_PATTERNS).forEach(([old, newPattern]) => {
    console.log(`"${old}"`);
    console.log(`→ ${newPattern}\n`);
  });
}

// Find all component and page files
const files = [
  ...glob.sync('src/components/**/*.tsx'),
  ...glob.sync('src/pages/**/*.tsx'),
].filter(file => !file.includes('presets/examples.tsx'));

if (process.argv.includes('--report')) {
  generateMigrationReport(files);
} else if (process.argv.includes('--patterns')) {
  generateMigrationCode();
} else {
  console.log('🎨 Color Migration Helper\n');
  console.log('Usage:');
  console.log('  node migrate-colors.js --report   # Generate migration report');
  console.log('  node migrate-colors.js --patterns # Show replacement patterns');
  console.log('\nThis tool helps identify files that need color migration and provides');
  console.log('the patterns needed to migrate to the centralized color system.');
}

module.exports = {
  COLOR_MAPPINGS,
  COMPONENT_PATTERNS,
  generateMigrationReport,
  generateMigrationCode
};
