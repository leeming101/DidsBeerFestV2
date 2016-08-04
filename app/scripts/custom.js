'use strict';

$(document).ready(function () {
    $('#slider').bxSlider({
        ticker: true,
        tickerSpeed: 3500,
        tickerHover: true
    });

    var dateNow = new Date(2016, 9, 27, 19, 0, 0, 0);
    var dateFuture = new Date();
    var dif = dateNow.getTime() - dateFuture.getTime();

    var secondsFromNowToFuture = dif / 1000;
    var secondsBetweenDates = Math.abs(secondsFromNowToFuture);

    var clock = $('.clock').FlipClock(secondsBetweenDates, {
        clockFace: 'DailyCounter',
        countdown: true
    });
    clock.start();
});