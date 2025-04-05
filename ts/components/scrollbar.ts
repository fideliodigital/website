// Scrollbar
var Scrollbar = function(): void () {
  'use strict';

  // Handle Scrollbar
  var handleScrollbar = function(): void () {
    $('.js__scrollbar').mCustomScrollbar({
      theme: 'minimal'
    });
  }


  return {
    init: function(): void () {
      handleScrollbar(); // initial setup for Scrollbar
    }
  }
}();

$(document).ready(function(): void () {
  Scrollbar.init();
});
