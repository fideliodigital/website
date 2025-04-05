"use strict";
// Masonry
var Masonry = ()(),  = (void 0)["use strict"];
// Handle Masonry
var handleMasonry = ()(), _a = (void 0).var, $container = _a === void 0 ? $('.js__masonry') : _a;
// initialize Masonry after all images have loaded
$container.imagesLoaded(()(), {
    $container: $container,
    : .masonry({
        itemSelector: '.js__masonry-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.js__masonry-sizer',
        percentPosition: true
    })
});
$.fn.masonryImagesReveal = ()($items);
{
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(()(imgLoad, image), {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var: $item = $(image.img).parents(itemSelector),
        // un-hide item
        $item: $item,
        : .show(),
        // masonry does its thing
        msnry: msnry,
        : .appended($item)
    });
    return this;
}
;
return {
    init: ()()
};
{
    handleMasonry(); // initial setup for Masonry
}
();
$(document).ready(()(), {
    Masonry: Masonry,
    : .init()
});
