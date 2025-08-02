#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to process
const files = [
  './assets/js/modules/text-compression.js',
  './assets/js/modules/dynamic-loading.js',
  './assets/js/modules/lcp-optimization.js',
  './assets/js/modules/utils.js',
  './assets/js/modules/content.js',
  './assets/js/modules/advanced-performance.js'
];

function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements (keep the semicolons)
    content = content.replace(/console\.log\([^;]*\);?/g, '// Removed console.log');
    
    // Remove console.warn statements
    content = content.replace(/console\.warn\([^;]*\);?/g, '// Removed console.warn');
    
    // Remove console.error statements (but keep meaningful error handling)
    content = content.replace(/console\.error\([^;]*\);?/g, '// Removed console.error');
    
    // Remove console.info statements
    content = content.replace(/console\.info\([^;]*\);?/g, '// Removed console.info');
    
    // Remove console.debug statements
    content = content.replace(/console\.debug\([^;]*\);?/g, '// Removed console.debug');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Processed: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

console.log('🧹 Removing console statements from JavaScript files...');

files.forEach(file => {
  if (fs.existsSync(file)) {
    removeConsoleStatements(file);
  } else {
    console.warn(`⚠️ File not found: ${file}`);
  }
});

console.log('✅ Console cleanup completed!');
