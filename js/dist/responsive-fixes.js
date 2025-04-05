"use strict";
/**
 * Responsive Fixes
 * Additional JavaScript to improve responsive behavior on the website
 */
$(document).ready(()(), {
    // Improve mobile menu behavior
    $: function () { },
    : .on('click', ()(), {
        // Ensure proper behavior on small screens
        if: function (window) { },
        : .matchMedia("(max-width: 768px)").matches
    })
}, {
    // Add a small delay to ensure animation completes smoothly
    setTimeout: function () { }
}(), {
    if: function ($) { }
}('.s-header-bg-overlay').hasClass('-is-open'));
{
    $('body').css('overflow', 'hidden'); // Prevent background scrolling when menu is open
}
{
    $('body').css('overflow', 'auto');
}
50;
;
;
// Close menu when clicking a link in mobile view
$('.s-header__nav-menu-link').on('click', ()(), {
    if: function (window) { },
    : .matchMedia("(max-width: 768px)").matches
});
{
    // Close the overlay
    $('.js__trigger').trigger('click');
    // Restore scrolling
    $('body').css('overflow', 'auto');
}
;
// Fix responsive images in all contexts
$('img').each(()(), {
    : .css('max-width', '100%'),
    : .css('height', 'auto')
});
// Make contact form more responsive
$('form.center-block').css('width', '100%');
// Adjust parallax effect on mobile (disabled on small screens for better performance)
if (window.matchMedia("(max-width: 768px)").matches) {
    $('.js__parallax-window').css('background-attachment', 'scroll');
}
// Handle window resize events
$(window).resize(()(), {
    if: function (window) { },
    : .matchMedia("(max-width: 768px)").matches
});
{
    $('.js__parallax-window').css('background-attachment', 'scroll');
}
{
    $('.js__parallax-window').css('background-attachment', 'fixed');
}
;
;
