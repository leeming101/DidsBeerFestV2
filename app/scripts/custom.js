'use strict';

$(document).ready(function () {
    $('#slider').bxSlider({
        ticker: true,
        tickerSpeed: 3500,
        tickerHover: true
    });

    var  mn = $('.main-nav');
    var logo = $('#navLogo');
    var hdr = $('.header').height();

    $(window).scroll(function() {
    if( $(this).scrollTop() > hdr && $('.navbar-toggle').is(':hidden')) {
        mn.addClass('main-nav-scrolled');
        logo.show();
    } else {
        mn.removeClass('main-nav-scrolled');
        logo.hide();
    }
    });

    $('.youtubePopup').magnificPopup({type:'iframe'});
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});