# JavaScript Optimization

## Combined and Minified JavaScript

This project now uses a combined and minified JavaScript file for improved performance. We've created a script that combines all component JavaScript files and the global.js file into a single minified file called `fidelio.min.js` located in the `js/dist` directory.

## How to Use

In each HTML file, replace all the individual component JavaScript files with the combined file:

```html
<!-- JS Plugins -->
<script type="text/javascript" src="js/dist/fidelio.min.js"></script>

<!-- Comment out or remove these individual files -->
<!-- 
<script type="text/javascript" src="js/global.min.js"></script>
<script type="text/javascript" src="js/components/header-sticky.min.js"></script>
<script type="text/javascript" src="js/components/scrollbar.min.js"></script>
etc...
-->
```

## How to Update

If you make changes to any JavaScript files, run the following command to rebuild the combined file:

```
npm run combine-js
```

This will regenerate the `fidelio.min.js` file with all the latest changes.

## Benefits

- Reduced HTTP requests (from many JS files to just one)
- Smaller overall file size due to minification
- Improved page load times
- Better caching efficiency 