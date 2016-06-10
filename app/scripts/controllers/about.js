'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('AboutCtrl', function () {
      $('#lnkAbout').addClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
