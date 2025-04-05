const fs = require('fs');
const path = require('path');

// Directories
const jsComponentsDir = path.join(__dirname, 'js', 'components');
const tsComponentsDir = path.join(__dirname, 'ts', 'components');
const jsDir = path.join(__dirname, 'js');
const tsDir = path.join(__dirname, 'ts');

// Ensure TS directories exist
if (!fs.existsSync(tsComponentsDir)) {
  fs.mkdirSync(tsComponentsDir, { recursive: true });
}

// Function to migrate a JavaScript file to TypeScript
function migrateFile(sourceFile, destFile) {
  console.log(`Migrating: ${sourceFile} -> ${destFile}`);
  
  // Read the JavaScript file
  const jsContent = fs.readFileSync(sourceFile, 'utf8');
  
  // Convert to TypeScript (basic conversion)
  // This is a simple conversion, you might need to do more complex changes manually
  let tsContent = jsContent;
  
  // Add TypeScript annotations to function declarations
  tsContent = tsContent.replace(/function\s*\(/g, 'function(): void (');
  tsContent = tsContent.replace(/function\s*(\w+)\s*\(/g, 'function $1(): void (');
  
  // Simple variable type annotations (this is very basic)
  tsContent = tsContent.replace(/var\s+(\w+)\s*=\s*(\d+)/g, 'var $1: number = $2');
  tsContent = tsContent.replace(/var\s+(\w+)\s*=\s*true|false/g, 'var $1: boolean = $2');
  tsContent = tsContent.replace(/var\s+(\w+)\s*=\s*["']/g, 'var $1: string = $2');
  
  // Write the TypeScript file
  fs.writeFileSync(destFile, tsContent);
}

// Migrate component files
const componentFiles = fs.readdirSync(jsComponentsDir)
  .filter(file => file.endsWith('.js') && !file.endsWith('.min.js') && file !== 'desktop.ini');

componentFiles.forEach(file => {
  const jsFile = path.join(jsComponentsDir, file);
  const tsFile = path.join(tsComponentsDir, file.replace('.js', '.ts'));
  migrateFile(jsFile, tsFile);
});

// Migrate root JS files
const rootJsFiles = fs.readdirSync(jsDir)
  .filter(file => file.endsWith('.js') && !file.endsWith('.min.js') && 
          file !== 'combine.js' && // We've already migrated this
          file !== 'desktop.ini');

rootJsFiles.forEach(file => {
  const jsFile = path.join(jsDir, file);
  const tsFile = path.join(tsDir, file.replace('.js', '.ts'));
  migrateFile(jsFile, tsFile);
});

console.log("Migration complete. Please check the TypeScript files and fix any issues manually.");
console.log("Then run 'npm run build' to compile the TypeScript files."); 