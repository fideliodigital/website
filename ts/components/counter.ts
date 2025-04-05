// Counter
var Counter = function(): void () {
  'use strict';

  // Handle Counter
  var handleCounter = function(): void () {
    $('.js__counter').counterUp();
  }

  return {
    init: function(): void () {
      handleCounter(); // initial setup for Counter
    }
  }
}();

$(document).ready(function(): void () {
  Counter.init();
});