// TypeScript version of original JavaScript file
// Portfolio
var Portfolio = function() {
  'use strict';

  // Handle Portfolio
  var handlePortfolio = function() {
    $('#js__grid-portfolio-gallery').cubeportfolio({
      filters: '#js__filters-portfolio-gallery',
      layoutMode: 'grid',
      mediaQueries: [{
        width: 1500,
        cols: 3
      }, {
        width: 1100,
        cols: 3
      }, {
        width: 800,
        cols: 3
      }, {
        width: 480,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      defaultFilter: '*',
      gapHorizontal: 2,
      gapVertical: 2,
      gridAdjustment: 'responsive',
      caption: ' ',

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
    });
  }

  return {
    init: function() {
      handlePortfolio(); // initial setup for Portfolio
    }
  }
}();

$(document).ready(function() {
  Portfolio.init();
});