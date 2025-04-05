// Masonry
var Masonry = function(): void () {
  'use strict';

  // Handle Masonry
  var handleMasonry = function(): void () {
    var $container = $('.js__masonry');
    // initialize Masonry after all images have loaded
    $container.imagesLoaded( function(): void () {
      $container.masonry({
        itemSelector: '.js__masonry-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.js__masonry-sizer',
        percentPosition: true
      });
    });
    $.fn.masonryImagesReveal = function(): void ( $items ) {
      var msnry = this.data('masonry');
      var itemSelector = msnry.options.itemSelector;
      // hide by default
      $items.hide();
      // append to container
      this.append( $items );
      $items.imagesLoaded().progress( function(): void ( imgLoad, image ) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $( image.img ).parents( itemSelector );
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended( $item );
      });
      return this;
    };
  }

  return {
    init: function(): void () {
      handleMasonry(); // initial setup for Masonry
    }
  }
}();

$(document).ready(function(): void () {
  Masonry.init();
});
