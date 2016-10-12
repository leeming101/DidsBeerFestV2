'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('VolunteerCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').addClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').removeClass('active');
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
