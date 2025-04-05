// Portfolio
var Portfolio = function(): void () {
  'use strict';

  // Handle Portfolio
  var handlePortfolio = function(): void () {
    // init cubeportfolio
    $('.js__grid-faq').cubeportfolio({
        filters: '.js__filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });
  }

  return {
    init: function(): void () {
      handlePortfolio(); // initial setup for Portfolio
    }
  }
}();

$(document).ready(function(): void () {
  Portfolio.init();
});