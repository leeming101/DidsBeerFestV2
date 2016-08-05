'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('MainCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').addClass('active');
      $('#lnkFind').removeClass('active');

      $('.mainContainer').removeClass('fullBg');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
     var dateNow = new Date(2016, 9, 27, 19, 0, 0, 0);
    var dateFuture = new Date();
    var dif = dateNow.getTime() - dateFuture.getTime();

    var secondsFromNowToFuture = dif / 1000;
    var secondsBetweenDates = Math.abs(secondsFromNowToFuture);

    var clock = $('.clock').FlipClock(secondsBetweenDates, {
        clockFace: 'DailyCounter',
        countdown: true
    });
  });
