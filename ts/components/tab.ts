// Portfolio
var Portfolio = function(): void () {
  'use strict';

  // Handle Portfolio
  var handlePortfolio = function(): void () {
    // init cubeportfolio
    $('.js__grid-tabs').cubeportfolio({
      filters: '.js__filters-tabs',
      defaultFilter: '.-is-active',
      animationType: 'fadeOut',
      gridAdjustment: 'default',
      displayType: 'default',
      caption: '',
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