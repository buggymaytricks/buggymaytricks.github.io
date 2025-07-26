#!/bin/bash
# Project Cleanup Script for buggymaytricks.github.io
# Run this script to clean up unnecessary files and optimize the project

echo "🧹 Starting project cleanup..."

# 1. Remove debug files
echo "🔴 Removing debug files..."
if [ -f "debug.js" ]; then
    rm debug.js
    echo "✅ Removed debug.js"
fi

# 2. Remove duplicate excluded repos files
echo "🟡 Removing duplicate configuration files..."
if [ -f ".excluded-repos" ]; then
    rm .excluded-repos
    echo "✅ Removed .excluded-repos"
fi

if [ -f "_data/excluded_repos.yml" ]; then
    rm _data/excluded_repos.yml
    echo "✅ Removed _data/excluded_repos.yml"
fi

# 3. Remove unused font variations (keep only essential ones)
echo "🟠 Cleaning up font files..."
cd assets/fonts/

# Keep these essential fonts
KEEP_FONTS=(
    "JetBrainsMono-Regular.woff2"
    "JetBrainsMono-Medium.woff2"
    "JetBrainsMono-Bold.woff2"
    "JetBrainsMono-Italic.woff2"
    "AUTHORS.txt"
    "OFL.txt"
)

# List all font files
for font in JetBrainsMono-*.woff2; do
    if [[ ! " ${KEEP_FONTS[*]} " =~ " ${font} " ]]; then
        echo "🗑️  Removing unused font: $font"
        # Uncomment the next line to actually remove fonts
        # rm "$font"
    fi
done

cd ../..

# 4. Clean up CSS optimization rules that might be redundant
echo "🟠 Checking CSS optimization..."
if [ -f "assets/css/performance.css" ]; then
    echo "ℹ️  Performance CSS exists - review for overlapping rules with main CSS"
fi

# 5. Check for any temporary or backup files
echo "🔍 Scanning for temporary files..."
find . -name "*.tmp" -o -name "*.bak" -o -name "*.backup" -o -name "*~" 2>/dev/null | while read file; do
    echo "🗑️  Found temporary file: $file"
    # Uncomment to remove: rm "$file"
done

# 6. Summary
echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📋 MANUAL ACTIONS NEEDED:"
echo "1. Review console.log statements in JavaScript files"
echo "2. Choose between skills-config.json OR hardcoded data in data.js"
echo "3. Consider replacing favicon redirects with actual image files"
echo "4. Test the site after cleanup to ensure nothing is broken"
echo ""
echo "🚀 Your project is now cleaner and more optimized!"
