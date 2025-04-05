// Equal Height
var EqualHeight = function(): void () {
  "use strict";

  // Handle Equal Height
  var handleEqualHeight = function(): void () {
    $(function(): void ($) {
      $('.js__form-eqaul-height-v1').responsiveEqualHeightGrid();
      $('.js__tab-eqaul-height-v1').responsiveEqualHeightGrid();
    });
  }

  return {
    init: function(): void () {
      handleEqualHeight(); // initial setup for equal height
    }
  }
}();

$(document).ready(function(): void () {
    EqualHeight.init();
});