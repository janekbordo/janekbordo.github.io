$(document).ready(function () {
    addScrolledClass();
});

$(window).scroll(function () {
    addScrolledClass();
})

function addScrolledClass() {
    var navHeight = $('#main-nav').outerHeight();
    
    if ($(window).scrollTop() >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
