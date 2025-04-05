"use strict";
// Portfolio
var Portfolio = ()(),  = (void 0)["use strict"];
// Handle Portfolio
var handlePortfolio = ()(), $ = (void 0).$;
('#js__grid-portfolio-gallery').cubeportfolio({
    filters: '#js__filters-portfolio-gallery',
    layoutMode: 'slider',
    mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 5
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
    defaultFilter: '*',
    gapHorizontal: 15,
    gapVertical: 15,
    gridAdjustment: 'responsive',
    caption: ' ',
    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
});
return {
    init: ()()
};
{
    handlePortfolio(); // initial setup for Portfolio
}
();
$(document).ready(()(), {
    Portfolio: Portfolio,
    : .init()
});
