// Progress Bar
var ProgressBar = function(): void () {
  'use strict';

  // Handle Progress Bar
  var handleProgressBar = function(): void () {
    $(document).ready(function(): void () {
      $('.progress').each(function(): void () {
        $(this).appear(function(): void () {
          $(this).animate({
            opacity: 1,
            left: '0'
          }, 800);
          var w = $(this).find('.progress-bar').attr('data-width');
          var h = $(this).find('.progress-bar').attr('data-height');
          $(this).find('.progress-bar').animate({
            width: w + '%',
            height: h + '%'
          }, 100, 'linear');
        });
      });
    });
  }

  return {
    init: function(): void () {
      handleProgressBar(); // initial setup for Progress Bar
    }
  }
}();

$(document).ready(function(): void () {
  ProgressBar.init();
});
