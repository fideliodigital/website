// Parallax
var Parallax = function(): void () {
  'use strict';

  // Handle Parallax
  var handleParallax = function(): void () {
    $('.js__parallax-window').parallax("50%", 0.1);
  }

  return {
    init: function(): void () {
      handleParallax(); // initial setup for Parallax
    }
  }
}();

$(document).ready(function(): void () {
  Parallax.init();
});