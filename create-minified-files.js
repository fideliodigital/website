/**
 * Script to create minified versions of all JavaScript files
 */

const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

// Directories
const distJsDir = path.join(__dirname, 'dist', 'js');
const distComponentsDir = path.join(distJsDir, 'components');

// Function to minify a file
function minifyFile(filePath) {
  if (!filePath.endsWith('.js') || filePath.endsWith('.min.js')) return;
  
  const minFilePath = filePath.replace('.js', '.min.js');
  console.log(`Minifying ${filePath} -> ${minFilePath}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = UglifyJS.minify(content);
    
    if (minified.error) {
      console.error(`Error minifying ${filePath}:`, minified.error);
      return;
    }
    
    fs.writeFileSync(minFilePath, minified.code);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to combine and minify component files
function combineJsFiles() {
  console.log('Combining JavaScript files...');
  
  // Read all component files
  const componentFiles = fs.readdirSync(distComponentsDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js'))
    .map(file => path.join(distComponentsDir, file));
  
  // Read global.js
  const globalJsPath = path.join(distJsDir, 'global.js');
  
  // Combine content
  const filesContent = {};
  
  // Add global.js first
  if (fs.existsSync(globalJsPath)) {
    filesContent[globalJsPath] = fs.readFileSync(globalJsPath, 'utf8');
  }
  
  // Add component files
  componentFiles.forEach(file => {
    filesContent[file] = fs.readFileSync(file, 'utf8');
  });
  
  // Minify combined content
  const minified = UglifyJS.minify(filesContent);
  
  if (minified.error) {
    console.error('Error minifying combined files:', minified.error);
    return;
  }
  
  // Write combined minified file
  const fidelioMinPath = path.join(distJsDir, 'fidelio.min.js');
  fs.writeFileSync(fidelioMinPath, minified.code);
  console.log(`Combined JavaScript files into ${fidelioMinPath}`);
}

// Process all JS files
function processAllFiles() {
  // Minify root JS files
  fs.readdirSync(distJsDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js'))
    .forEach(file => {
      minifyFile(path.join(distJsDir, file));
    });
  
  // Minify component JS files
  if (fs.existsSync(distComponentsDir)) {
    fs.readdirSync(distComponentsDir)
      .filter(file => file.endsWith('.js') && !file.endsWith('.min.js'))
      .forEach(file => {
        minifyFile(path.join(distComponentsDir, file));
      });
  }
  
  // Create combined file
  combineJsFiles();
}

// Run the process
console.log('Creating minified versions of JavaScript files...');
processAllFiles();
console.log('Done!'); 