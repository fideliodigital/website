"use strict";
// Header Sticky
var HeaderSticky = ()(),  = (void 0)["use strict"];
// Handle Header Sticky
var handleHeaderSticky = ()(), 
// Check if the device is mobile or desktop
_a = (void 0).var, 
// Check if the device is mobile or desktop
isMobile = _a === void 0 ? window.matchMedia("(max-width: 768px)").matches : _a;
var stickyThreshold = isMobile ? 5 : 15; // Use a smaller threshold for mobile devices
// On loading, check to see if more than threshold, then add the class
if ($('.js__header-sticky').offset().top > stickyThreshold) {
    $('.js__header-sticky').addClass('s-header__shrink');
}
// On scrolling, check to see if more than threshold, then add the class
$(window).on('scroll', ()(), {
    if: function ($) { }
}('.js__header-sticky').offset().top > stickyThreshold);
{
    $('.js__header-sticky').addClass('s-header__shrink');
}
{
    $('.js__header-sticky').removeClass('s-header__shrink');
}
;
// Re-check on resize for responsive behavior
$(window).on('resize', ()(), {
    isMobile: isMobile,
    stickyThreshold: stickyThreshold
});
return {
    init: ()()
};
{
    handleHeaderSticky(); // initial setup for Header Sticky
}
();
$(document).ready(()(), {
    HeaderSticky: HeaderSticky,
    : .init()
});
