#!/usr/bin/env node

/**
 * Final validation script for color migration
 * Checks that no hardcoded colors remain in the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Running final color migration validation...\n');

// Directories to check
const dirsToCheck = [
  'src/components',
  'src/pages',
  'src/sections'
];

// Patterns to search for hardcoded colors (excluding our presets directory)
const colorPatterns = [
  'text-red-[0-9]',
  'bg-red-[0-9]',
  'border-red-[0-9]',
  'text-gray-[0-9]',
  'bg-gray-[0-9]',
  'border-gray-[0-9]',
  '#[a-fA-F0-9]{6}',
  'rgb\\([0-9]'
];

let issues = [];

// Function to search for patterns in files
function searchInFile(filePath, pattern) {
  try {
    const result = execSync(`grep -n "${pattern}" "${filePath}"`, { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    // No matches found (grep returns non-zero exit code when no matches)
    return [];
  }
}

// Check each directory
for (const dir of dirsToCheck) {
  const fullDir = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(fullDir)) {
    console.log(`⚠️  Directory ${dir} not found, skipping...`);
    continue;
  }

  console.log(`📂 Checking ${dir}/`);
  
  // Get all .tsx and .ts files recursively
  try {
    const files = execSync(`find "${fullDir}" -name "*.tsx" -o -name "*.ts"`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    for (const file of files) {
      for (const pattern of colorPatterns) {
        const matches = searchInFile(file, pattern);
        if (matches.length > 0) {
          const relativePath = path.relative(process.cwd(), file);
          issues.push({
            file: relativePath,
            pattern,
            matches
          });
        }
      }
    }
  } catch (error) {
    console.log(`❌ Error checking ${dir}: ${error.message}`);
  }
}

// Check for missing imports
console.log(`\n📦 Checking for missing imports...`);

try {
  const componentFiles = execSync(`find src/components src/pages -name "*.tsx" | head -20`, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  for (const file of componentFiles) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file uses getTailwindClass but doesn't import it
    if (content.includes('getTailwindClass') && !content.includes("from '@/presets'")) {
      issues.push({
        file: path.relative(process.cwd(), file),
        pattern: 'missing-import',
        matches: ['Uses getTailwindClass but missing import from @/presets']
      });
    }
  }
} catch (error) {
  console.log(`❌ Error checking imports: ${error.message}`);
}

// Report results
console.log(`\n📊 Validation Results:`);
console.log(`======================`);

if (issues.length === 0) {
  console.log(`✅ SUCCESS: No hardcoded colors or missing imports found!`);
  console.log(`🎉 Color migration is complete and validated.`);
} else {
  console.log(`❌ Found ${issues.length} potential issues:`);
  
  for (const issue of issues) {
    console.log(`\n📄 ${issue.file}`);
    console.log(`   Pattern: ${issue.pattern}`);
    for (const match of issue.matches) {
      console.log(`   ${match}`);
    }
  }
  
  console.log(`\n⚠️  Please review and fix these issues.`);
  process.exit(1);
}

// Additional checks
console.log(`\n🔧 Additional Checks:`);
console.log(`===================`);

// Check if central presets exist
const presetFiles = [
  'src/presets/colors.ts',
  'src/presets/colorUtils.ts',
  'src/presets/index.ts'
];

for (const file of presetFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
}

// Check build works
console.log(`\n🏗️  Checking build...`);
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`✅ Build successful`);
} catch (error) {
  console.log(`❌ Build failed`);
  process.exit(1);
}

console.log(`\n🎊 All validations passed! Color migration is complete.`);
