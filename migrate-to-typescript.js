/**
 * TypeScript Migration Script
 * This script will:
 * 1. Set up the TypeScript project structure
 * 2. Copy all JavaScript files to TypeScript format
 * 3. Compile TypeScript to JavaScript
 * 4. Minify the generated JavaScript files
 * 5. Update HTML files to reference new JavaScript files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const UglifyJS = require('uglify-js');

// Config
const jsDir = path.join(__dirname, 'js');
const jsComponentsDir = path.join(jsDir, 'components');
const srcDir = path.join(__dirname, 'src');
const srcComponentsDir = path.join(srcDir, 'components');
const distDir = path.join(__dirname, 'dist');
const distJsDir = path.join(distDir, 'js');
const distComponentsDir = path.join(distJsDir, 'components');

// Create directory structure
console.log('Creating TypeScript directory structure...');
[srcDir, srcComponentsDir, distDir, distJsDir, distComponentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper function to convert JS to TS
function convertJsToTs(filePath, outputPath) {
  console.log(`Converting ${filePath} to ${outputPath}`);
  
  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add type annotations (optional)
  content = '// TypeScript version of original JavaScript file\n' + content;
  
  // Write the file as TypeScript
  fs.writeFileSync(outputPath, content);
  
  return outputPath;
}

// Convert all JS files to TS
function migrateJsFilesToTs() {
  console.log('Migrating JavaScript files to TypeScript...');
  
  // Convert root JS files
  const rootJsFiles = fs.readdirSync(jsDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js') && file !== 'desktop.ini');
  
  rootJsFiles.forEach(file => {
    const jsFilePath = path.join(jsDir, file);
    const tsFilePath = path.join(srcDir, file.replace('.js', '.ts'));
    
    // Skip files that already exist to preserve manual edits
    if (!fs.existsSync(tsFilePath)) {
      convertJsToTs(jsFilePath, tsFilePath);
    } else {
      console.log(`Skipping ${tsFilePath} (already exists)`);
    }
  });
  
  // Convert component JS files
  const componentJsFiles = fs.readdirSync(jsComponentsDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js') && file !== 'desktop.ini');
  
  componentJsFiles.forEach(file => {
    const jsFilePath = path.join(jsComponentsDir, file);
    const tsFilePath = path.join(srcComponentsDir, file.replace('.js', '.ts'));
    
    // Skip files that already exist to preserve manual edits
    if (!fs.existsSync(tsFilePath)) {
      convertJsToTs(jsFilePath, tsFilePath);
    } else {
      console.log(`Skipping ${tsFilePath} (already exists)`);
    }
  });
}

// Compile TypeScript files
function compileTypeScript() {
  console.log('Compiling TypeScript files...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('TypeScript compilation successful!');
    return true;
  } catch (error) {
    console.error('Error compiling TypeScript:', error);
    return false;
  }
}

// Minify compiled JavaScript files
function minifyJavaScriptFiles() {
  console.log('Minifying compiled JavaScript files...');
  
  // Function to minify a file
  const minifyFile = (filePath) => {
    if (!filePath.endsWith('.js') || filePath.endsWith('.min.js')) return;
    
    const minFilePath = filePath.replace('.js', '.min.js');
    console.log(`Minifying ${filePath} -> ${minFilePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = UglifyJS.minify(content);
    
    if (minified.error) {
      console.error(`Error minifying ${filePath}:`, minified.error);
      return;
    }
    
    fs.writeFileSync(minFilePath, minified.code);
  };
  
  // Minify root files
  fs.readdirSync(distJsDir)
    .map(file => path.join(distJsDir, file))
    .filter(file => fs.statSync(file).isFile())
    .forEach(minifyFile);
  
  // Minify component files
  if (fs.existsSync(distComponentsDir)) {
    fs.readdirSync(distComponentsDir)
      .map(file => path.join(distComponentsDir, file))
      .filter(file => fs.statSync(file).isFile())
      .forEach(minifyFile);
  }
}

// Create a new branch
function createBranch() {
  console.log('Creating or using typescript-migration branch...');
  try {
    // First check if we're already on the typescript-migration branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    if (currentBranch === 'typescript-migration') {
      console.log('Already on typescript-migration branch');
      return true;
    }

    // Try to checkout an existing branch
    try {
      execSync('git checkout typescript-migration', { stdio: 'inherit' });
      console.log('Checked out existing typescript-migration branch');
      return true;
    } catch (checkoutError) {
      // If checkout fails, try to create a new branch
      try {
        execSync('git checkout -b typescript-migration', { stdio: 'inherit' });
        console.log('Created typescript-migration branch');
        return true;
      } catch (createError) {
        console.error('Error creating or switching to branch:', createError);
        return false;
      }
    }
  } catch (error) {
    console.error('Error checking current branch:', error);
    return false;
  }
}

// Update HTML files to reference new JS files
function updateHtmlFiles() {
  const htmlFiles = ['index.html', 'contacto.html', 'nosotros.html'];
  
  htmlFiles.forEach(htmlFile => {
    const filePath = path.join(__dirname, htmlFile);
    if (fs.existsSync(filePath)) {
      console.log(`Updating references in ${htmlFile}`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Update JS references
      content = content.replace(/src="js\/(\w+)\.js"/g, 'src="dist/js/$1.js"');
      content = content.replace(/src="js\/(\w+)\.min\.js"/g, 'src="dist/js/$1.min.js"');
      content = content.replace(/src="js\/components\/(\w+)\.js"/g, 'src="dist/js/components/$1.js"');
      content = content.replace(/src="js\/components\/(\w+)\.min\.js"/g, 'src="dist/js/components/$1.min.js"');
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// Combine all JavaScript files
function combineJsFiles() {
  console.log('Combining JavaScript files...');
  
  // Read all component files
  const componentDir = path.join(distJsDir, 'components');
  const componentFiles = fs.readdirSync(componentDir)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js'))
    .map(file => path.join(componentDir, file));
  
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

// Delete old JavaScript files
function cleanupJsFiles() {
  console.log('Would you like to delete the original JavaScript files? (This step is not automatically performed)');
  console.log('To delete the original files, run:');
  console.log('  rm -rf js/*.js js/components/*.js');
  console.log('Make sure everything is working correctly before doing this!');
}

// Main migration process
function migrateToTypeScript() {
  console.log('Starting TypeScript migration...');
  
  if (createBranch()) {
    migrateJsFilesToTs();
    
    if (compileTypeScript()) {
      minifyJavaScriptFiles();
      combineJsFiles();
      updateHtmlFiles();
      
      console.log(`
TypeScript migration completed!

Next steps:
1. Test the website to ensure everything works correctly
2. Fix any TypeScript errors
3. Consider deleting the original JS files once everything is working

You can run: "npm run build" to rebuild the TypeScript files.
`);
      
      cleanupJsFiles();
    }
  }
}

// Run the migration
migrateToTypeScript(); 