/**
 * Responsive Fixes
 * Additional JavaScript to improve responsive behavior on the website
 */

$(document).ready(function(): void () {
  // Improve mobile menu behavior
  $('.js__trigger').on('click', function(): void () {
    // Ensure proper behavior on small screens
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Add a small delay to ensure animation completes smoothly
      setTimeout(function(): void () {
        if ($('.s-header-bg-overlay').hasClass('-is-open')) {
          $('body').css('overflow', 'hidden'); // Prevent background scrolling when menu is open
        } else {
          $('body').css('overflow', 'auto');
        }
      }, 50);
    }
  });

  // Close menu when clicking a link in mobile view
  $('.s-header__nav-menu-link').on('click', function(): void () {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Close the overlay
      $('.js__trigger').trigger('click');
      // Restore scrolling
      $('body').css('overflow', 'auto');
    }
  });

  // Fix responsive images in all contexts
  $('img').each(function(): void () {
    $(this).css('max-width', '100%');
    $(this).css('height', 'auto');
  });

  // Make contact form more responsive
  $('form.center-block').css('width', '100%');

  // Adjust parallax effect on mobile (disabled on small screens for better performance)
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.js__parallax-window').css('background-attachment', 'scroll');
  }

  // Handle window resize events
  $(window).resize(function(): void () {
    if (window.matchMedia("(max-width: 768px)").matches) {
      $('.js__parallax-window').css('background-attachment', 'scroll');
    } else {
      $('.js__parallax-window').css('background-attachment', 'fixed');
    }
  });
});
