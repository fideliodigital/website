// TypeScript version of original JavaScript file
// Global Javascript Initialization
var Global = (function () {
    'use strict';
    // Bootstrap Components
    var handleBootstrapComponents = function () {
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
    var handleScrollToSection = function () {
        $(function () {
            $('a[href*=#js__scroll-to-]:not([href=#js__scroll-to-])').on('click', function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=".concat(this.hash.slice(1), "]"));
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
    var handlePromoSection = function () {
        $('.js__fullwidth-img').each(function () {
            $(this).css('background-image', "url(".concat($(this).children('img').attr('src'), ")"));
            $(this).children('img').hide();
        });
    };
    // Handle Overlay
    var handleOverlay = function () {
        var overlay = $('.js__bg-overlay');
        var headerOverlay = $('.js__header-overlay');
        var trigger = $('.js__trigger');
        trigger.on('click', function () {
            overlay.toggleClass('-is-open');
            headerOverlay.toggleClass('-is-open');
            trigger.toggleClass('-is-active');
        });
    };
    // Vertical Center Aligned
    // Note! This works only with promo block and background image via CSS.
    var handleVerticalCenterAligned = function () {
        var centerElements = function () {
            $('.js__ver-center-aligned').each(function () {
                $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
            });
        };
        centerElements();
        $(window).resize(centerElements);
    };
    // handle group element heights
    var handleEqualHeight = function () {
        $('[data-auto-height]').each(function () {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
            var offsetAttr = parent.attr('data-offset');
            var offset = offsetAttr ? parseInt(offsetAttr) : 0;
            items.each(function () {
                if ($(this).attr('data-height') === "height") {
                    $(this).css('height', '');
                }
                else {
                    $(this).css('min-height', '');
                }
                var height_ = (mode === 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });
            var finalHeight = height + offset;
            items.each(function () {
                if ($(this).attr('data-height') === "height") {
                    $(this).css('height', finalHeight);
                }
                else {
                    $(this).css('min-height', finalHeight);
                }
            });
            if (parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
        });
    };
    return {
        init: function () {
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
$(function () {
    Global.init();
});
//# sourceMappingURL=global.js.map