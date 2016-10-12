'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('BeerCtrl', function () { 
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').removeClass('active');
      $('#lnkMusic').removeClass('active');
      $('#lnkCider').removeClass('active');
      $('#lnkBeer').addClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
