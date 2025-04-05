// TypeScript version of original JavaScript file
// Header Sticky
var HeaderSticky = function() {
  'use strict';

  // Handle Header Sticky
  var handleHeaderSticky = function() {
    // Check if the device is mobile or desktop
    var isMobile = window.matchMedia("(max-width: 768px)").matches;
    var stickyThreshold = isMobile ? 5 : 15; // Use a smaller threshold for mobile devices

    // On loading, check to see if more than threshold, then add the class
    if ($('.js__header-sticky').offset().top > stickyThreshold) {
      $('.js__header-sticky').addClass('s-header__shrink');
    }

    // On scrolling, check to see if more than threshold, then add the class
    $(window).on('scroll', function() {
      if ($('.js__header-sticky').offset().top > stickyThreshold) {
        $('.js__header-sticky').addClass('s-header__shrink');
      } else {
        $('.js__header-sticky').removeClass('s-header__shrink');
      }
    });

    // Re-check on resize for responsive behavior
    $(window).on('resize', function() {
      isMobile = window.matchMedia("(max-width: 768px)").matches;
      stickyThreshold = isMobile ? 5 : 15;
    });
  }

  return {
    init: function() {
      handleHeaderSticky(); // initial setup for Header Sticky
    }
  }
}();

$(document).ready(function() {
  HeaderSticky.init();
});