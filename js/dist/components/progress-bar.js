"use strict";
// Progress Bar
var ProgressBar = ()(),  = (void 0)["use strict"];
// Handle Progress Bar
var handleProgressBar = ()(), $ = (void 0).$;
(document).ready(()(), {
    $: function () { },
    : .each(()(), {
        : .appear(()(), {
            : .animate({
                opacity: 1,
                left: '0'
            }, 800),
            var: w = $(this).find('.progress-bar').attr('data-width'),
            var: h = $(this).find('.progress-bar').attr('data-height'),
            : .find('.progress-bar').animate({
                width: w + '%',
                height: h + '%'
            }, 100, 'linear')
        })
    })
});
return {
    init: ()()
};
{
    handleProgressBar(); // initial setup for Progress Bar
}
();
$(document).ready(()(), {
    ProgressBar: ProgressBar,
    : .init()
});
