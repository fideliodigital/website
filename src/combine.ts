// TypeScript version of original JavaScript file
// This script combines all component JavaScript files into a single minified file

const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

// Create the combined files directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Function to combine and minify component files
function combineComponents() {
  const componentsDir = path.join(__dirname, 'components');
  const files = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js') && file !== 'desktop.ini')
    .map(file => path.join(componentsDir, file));

  // Read all component files (not minified versions)
  const filesContent = {};
  files.forEach(file => {
    filesContent[file] = fs.readFileSync(file, 'utf8');
  });

  // Add global.js to the beginning
  const globalJsPath = path.join(__dirname, 'global.js');
  if (fs.existsSync(globalJsPath)) {
    filesContent[globalJsPath] = fs.readFileSync(globalJsPath, 'utf8');
  }

  // Minify the combined content
  const minified = UglifyJS.minify(filesContent);
  
  if (minified.error) {
    console.error('Error minifying components:', minified.error);
    return;
  }

  // Write the combined minified file
  fs.writeFileSync(path.join(distDir, 'fidelio.min.js'), minified.code);
  console.log('All JavaScript files combined and minified successfully!');
}

// Run the combination process
combineComponents();

console.log('JavaScript combination complete!'); 