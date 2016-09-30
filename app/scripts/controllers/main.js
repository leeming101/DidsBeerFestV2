'use strict';
/*global initializeClock */
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
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').removeClass('active');
      $('#lnkMusic').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     var dateNow = new Date(2016, 9, 27, 19, 0, 0, 0);
     
    initializeClock('clockdiv', dateNow);
  });
