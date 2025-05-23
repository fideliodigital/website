// TypeScript version of original JavaScript file
// Masonry
var Masonry = function() {
  'use strict';

  // Handle Masonry
  var handleMasonry = function() {
    var $container = $('.js__masonry');
    // initialize Masonry after all images have loaded
    $container.imagesLoaded( function() {
      $container.masonry({
        itemSelector: '.js__masonry-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.js__masonry-sizer',
        percentPosition: true
      });
    });
    $.fn.masonryImagesReveal = function( $items ) {
      var msnry = this.data('masonry');
      var itemSelector = msnry.options.itemSelector;
      // hide by default
      $items.hide();
      // append to container
      this.append( $items );
      $items.imagesLoaded().progress( function( imgLoad, image ) {
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
    init: function() {
      handleMasonry(); // initial setup for Masonry
    }
  }
}();

$(document).ready(function() {
  Masonry.init();
});
