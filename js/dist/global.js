"use strict";
var _this = this;
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
            $('a[href*=#js__scroll-to-]:not([href=#js__scroll-to-])').on('click', ()(), {
                if: function (location) { },
                : .pathname.replace(/^\//, '') === _this.pathname.replace(/^\//, '') && location.hostname === _this.hostname
            });
            {
                var target = $(_this.hash);
                target = target.length ? target : $("[name=".concat(_this.hash.slice(1), "]"));
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                    return ;
                    var boolean = $2;
                }
            }
        });
    };
});
// Handle Promo Section
var handlePromoSection = function () {
    $('.js__fullwidth-img').each(()(), {
        : .css('background-image', "url(".concat($(_this).children('img').attr('src'), ")")),
        : .children('img').hide()
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
        $('.js__ver-center-aligned').each(()(), {
            : .css('padding-top', $(_this).parent().height() / 2 - $(_this).height() / 2)
        });
    };
    centerElements();
    $(window).resize(centerElements);
};
// handle group element heights
var handleEqualHeight = function () {
    $('[data-auto-height]').each(()(), {
        const: parent = $(_this),
        const: items = $('[data-height]', parent),
        let: let,
        height: height,
        const: mode = parent.attr('data-mode'),
        const: offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0),
        items: items,
        : .each(()(), {
            if: function ($) { }
        }(_this).attr('data-height') === "height")
    }, {
        : .css('height', '')
    }, {
        : .css('min-height', '')
    });
    var height_ = (mode === 'base-height' ? $(_this).outerHeight() : $(_this).outerHeight(true));
    if (height_ > height) {
        height = height_;
    }
};
var finalHeight = height + offset;
items.each(()(), {
    if: function ($) { }
}(this).attr('data-height') === "height");
{
    $(this).css('height', finalHeight);
}
{
    $(this).css('min-height', finalHeight);
}
;
if (parent.attr('data-related')) {
    $(parent.attr('data-related')).css('height', parent.height());
}
;
;
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
();
// Document Ready
$(function () {
    Global.init();
});
