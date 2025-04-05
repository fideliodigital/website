// This script combines all component TypeScript files into a single minified file

import * as fs from 'fs';
import * as path from 'path';
import * as UglifyJS from 'uglify-js';

// Create the combined files directory if it doesn't exist
const distDir: string = path.join(__dirname, '../js/dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Function to combine and minify component files
function combineComponents(): void {
  const componentsDir: string = path.join(__dirname, 'components');
  const files: string[] = fs.readdirSync(componentsDir)
    .filter((file: string) => file.endsWith('.ts') && !file.endsWith('.min.ts') && file !== 'desktop.ini')
    .map((file: string) => path.join(componentsDir, file));

  // Read all component files (not minified versions)
  const filesContent: { [key: string]: string } = {};
  files.forEach((file: string) => {
    filesContent[file] = fs.readFileSync(file, 'utf8');
  });

  // Add global.ts to the beginning
  const globalTsPath: string = path.join(__dirname, 'global.ts');
  if (fs.existsSync(globalTsPath)) {
    filesContent[globalTsPath] = fs.readFileSync(globalTsPath, 'utf8');
  }

  // Minify the combined content
  const minified = UglifyJS.minify(filesContent);
  
  if (minified.error) {
    console.error('Error minifying components:', minified.error);
    return;
  }

  // Write the combined minified file
  fs.writeFileSync(path.join(distDir, 'fidelio.min.js'), minified.code);
  console.log('All TypeScript files combined and minified successfully!');
}

// Run the combination process
combineComponents();

console.log('TypeScript combination complete!'); 