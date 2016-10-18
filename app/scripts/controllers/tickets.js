'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:TicketsCtrl
 * @description
 * # TicketsCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('TicketsCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').addClass('active');
      $('#lnkGoodCauses').removeClass('active');
      $('#lnkMusic').removeClass('active');
      $('#lnkCider').removeClass('active');
      $('#lnkBeer').removeClass('active');
      $('#lnkCraft').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
