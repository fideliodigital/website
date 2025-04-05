// Global Javascript Initialization
const Global = (() => {
  'use strict';

  // Bootstrap Components
  const handleBootstrapComponents = () => {
    // Bootstrap Carousel
    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
    });

    // Tooltips
    $('.tooltips').tooltip();
    $('.tooltips-show').tooltip('show');
    $('.tooltips-hide').tooltip('hide');
    $('.tooltips-toggle').tooltip('toggle');
    $('.tooltips-destroy').tooltip('destroy');

    // Popovers
    $('.popovers').popover();
    $('.popovers-show').popover('show');
    $('.popovers-hide').popover('hide');
    $('.popovers-toggle').popover('toggle');
    $('.popovers-destroy').popover('destroy');
  };

  // Scroll To Section
  const handleScrollToSection = () => {
    $(() => {
      $('a[href*=#js__scroll-to-]:not([href=#js__scroll-to-])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 1000);
            return false;
          }
        }
      });
    });
  };

  // Handle Promo Section
  const handlePromoSection = () => {
    $('.js__fullwidth-img').each(function() {
      $(this).css('background-image', `url(${$(this).children('img').attr('src')})`);
      $(this).children('img').hide();
    });
  };

  // Handle Overlay
  const handleOverlay = () => {
    const overlay = $('.js__bg-overlay');
    const headerOverlay = $('.js__header-overlay');
    const trigger = $('.js__trigger');

    trigger.on('click', () => {
      overlay.toggleClass('-is-open');
      headerOverlay.toggleClass('-is-open');
      trigger.toggleClass('-is-active');
    });
  };

  // Vertical Center Aligned
  // Note! This works only with promo block and background image via CSS.
  const handleVerticalCenterAligned = () => {
    const centerElements = () => {
      $('.js__ver-center-aligned').each(function() {
        $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
      });
    };
    
    centerElements();
    $(window).resize(centerElements);
  };

  // handle group element heights
  const handleEqualHeight = () => {
    $('[data-auto-height]').each(function() {
      const parent = $(this);
      const items = $('[data-height]', parent);
      let height = 0;
      const mode = parent.attr('data-mode');
      const offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

      items.each(function() {
        if ($(this).attr('data-height') === "height") {
          $(this).css('height', '');
        } else {
          $(this).css('min-height', '');
        }

        const height_ = (mode === 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
        if (height_ > height) {
          height = height_;
        }
      });

      const finalHeight = height + offset;

      items.each(function() {
        if ($(this).attr('data-height') === "height") {
          $(this).css('height', finalHeight);
        } else {
          $(this).css('min-height', finalHeight);
        }
      });

      if (parent.attr('data-related')) {
        $(parent.attr('data-related')).css('height', parent.height());
      }
    });       
  };

  return {
    init: () => {
      handleBootstrapComponents(); // initial setup for Bootstrap Components
      handleScrollToSection(); // initial setup for Scroll To Section
      handlePromoSection(); // initial setup for Promo Section
      handleOverlay(); // initial setup for Overlay
      handleVerticalCenterAligned(); // initial setup for Vertical Center Aligned
      handleEqualHeight(); // initial setup for Equal Height
    }
  };
})();

// Document Ready
$(() => {
  Global.init();
});
