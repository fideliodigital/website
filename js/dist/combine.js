"use strict";
// This script combines all component TypeScript files into a single minified file
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var UglifyJS = __importStar(require("uglify-js"));
// Create the combined files directory if it doesn't exist
var distDir = path.join(__dirname, '../js/dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}
// Function to combine and minify component files
function combineComponents() {
    var componentsDir = path.join(__dirname, 'components');
    var files = fs.readdirSync(componentsDir)
        .filter(function (file) { return file.endsWith('.ts') && !file.endsWith('.min.ts') && file !== 'desktop.ini'; })
        .map(function (file) { return path.join(componentsDir, file); });
    // Read all component files (not minified versions)
    var filesContent = {};
    files.forEach(function (file) {
        filesContent[file] = fs.readFileSync(file, 'utf8');
    });
    // Add global.ts to the beginning
    var globalTsPath = path.join(__dirname, 'global.ts');
    if (fs.existsSync(globalTsPath)) {
        filesContent[globalTsPath] = fs.readFileSync(globalTsPath, 'utf8');
    }
    // Minify the combined content
    var minified = UglifyJS.minify(filesContent);
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
