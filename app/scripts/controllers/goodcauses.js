'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:GoodCausesCtrl
 * @description
 * # GoodCausesCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('GoodCausesCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').addClass('active');
      $('#lnkMusic').removeClass('active');
      $('#lnkCider').removeClass('active');
      $('#lnkBeer').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
