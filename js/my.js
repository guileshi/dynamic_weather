var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {

        celular = true;
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        tablet = true;
    } else if (window.screen.width > 1025) {

    }
});
