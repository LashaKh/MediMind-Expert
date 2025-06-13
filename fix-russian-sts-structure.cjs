#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing Russian STS translation structure...\n');

const filePath = 'src/i18n/translations/ru/calculators/cardiology.ts';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all the misplaced keys after badge_sts_database and before the closing brace
  const badPattern = /(badge_sts_database: '[^']*')\s*\n\s*(select_gender:[^}]*)(}\s*,?\s*\n)/s;
  
  if (content.match(badPattern)) {
    console.log('❌ Found misplaced keys outside STS section');
    
    // Extract the misplaced keys
    const match = content.match(badPattern);
    const badgeKey = match[1];
    const misplacedKeys = match[2];
    const closingBrace = match[3];
    
    // Clean up the misplaced keys to proper format
    const cleanedKeys = misplacedKeys
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('},'))
      .map(line => line.endsWith(',') ? line : line + ',')
      .join('\n    ');
    
    // Reconstruct the STS section properly
    const fixedSection = badgeKey + ',\n    \n    ' + cleanedKeys + '\n  ' + closingBrace;
    
    // Replace in content
    content = content.replace(badPattern, fixedSection);
    
    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log('✅ Fixed Russian STS section structure');
    console.log('📝 All missing keys are now properly inside the STS section');
  } else {
    console.log('ℹ️  No structure issues found');
  }
  
} catch (error) {
  console.log('❌ Error:', error.message);
}

console.log('\n🧪 **Next Steps:**');
console.log('1. Run npm run build to verify the fix worked');
console.log('2. Test the STS Calculator in Russian language'); 