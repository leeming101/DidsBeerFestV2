'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('MusicCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').removeClass('active');
      $('#lnkMusic').addClass('active');
      $('#lnkCider').removeClass('active');
      $('#lnkBeer').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
