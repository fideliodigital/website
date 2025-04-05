// Header Sticky
var HeaderSticky = function(): void () {
  'use strict';

  // Handle Header Sticky
  var handleHeaderSticky = function(): void () {
    // Check if the device is mobile or desktop
    var isMobile = window.matchMedia("(max-width: 768px)").matches;
    var stickyThreshold = isMobile ? 5 : 15; // Use a smaller threshold for mobile devices

    // On loading, check to see if more than threshold, then add the class
    if ($('.js__header-sticky').offset().top > stickyThreshold) {
      $('.js__header-sticky').addClass('s-header__shrink');
    }

    // On scrolling, check to see if more than threshold, then add the class
    $(window).on('scroll', function(): void () {
      if ($('.js__header-sticky').offset().top > stickyThreshold) {
        $('.js__header-sticky').addClass('s-header__shrink');
      } else {
        $('.js__header-sticky').removeClass('s-header__shrink');
      }
    });

    // Re-check on resize for responsive behavior
    $(window).on('resize', function(): void () {
      isMobile = window.matchMedia("(max-width: 768px)").matches;
      stickyThreshold = isMobile ? 5 : 15;
    });
  }

  return {
    init: function(): void () {
      handleHeaderSticky(); // initial setup for Header Sticky
    }
  }
}();

$(document).ready(function(): void () {
  HeaderSticky.init();
});