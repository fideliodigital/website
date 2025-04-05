// TypeScript version of original JavaScript file
// This script combines all component JavaScript files into a single minified file
var fs = require('fs');
var path = require('path');
var UglifyJS = require('uglify-js');
// Create the combined files directory if it doesn't exist
var distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}
// Function to combine and minify component files
function combineComponents() {
    var componentsDir = path.join(__dirname, 'components');
    var files = fs.readdirSync(componentsDir)
        .filter(function (file) { return file.endsWith('.js') && !file.endsWith('.min.js') && file !== 'desktop.ini'; })
        .map(function (file) { return path.join(componentsDir, file); });
    // Read all component files (not minified versions)
    var filesContent = {};
    files.forEach(function (file) {
        filesContent[file] = fs.readFileSync(file, 'utf8');
    });
    // Add global.js to the beginning
    var globalJsPath = path.join(__dirname, 'global.js');
    if (fs.existsSync(globalJsPath)) {
        filesContent[globalJsPath] = fs.readFileSync(globalJsPath, 'utf8');
    }
    // Minify the combined content
    var minified = UglifyJS.minify(filesContent);
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
//# sourceMappingURL=combine.js.map