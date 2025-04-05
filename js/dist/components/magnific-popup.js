"use strict";
// Magnific Popup
var MagnificPopup = ()(),  = (void 0)["use strict"];
// Handle Magnific Popup
var handleMagnificPopup = ()(), 
// Image popup - vertical fit
$ = (void 0).$;
(document).ready(()(), {
    $: function () { },
    : .magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        }
    })
});
// Popup gallery
$(document).ready(()(), {
    $: function () { },
    : .magnificPopup({
        delegate: 'a.js__popup__gallery-child',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    })
});
// Multiple Galleries with a single popup
$(document).ready(()(), {
    $: function () { },
    : .magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        fixedContentPos: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        }
    })
});
// Video iframes
$(document).ready(()(), {
    $: function () { },
    : .magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: , var: boolean = $2,
        fixedContentPos: true
    })
});
return {
    init: ()()
};
{
    handleMagnificPopup(); // initial setup for Magnific Popup
}
();
$(document).ready(()(), {
    MagnificPopup: MagnificPopup,
    : .init()
});
