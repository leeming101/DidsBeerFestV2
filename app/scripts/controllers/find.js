'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:FindCtrl
 * @description
 * # FindCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('FindCtrl', function () {
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').addClass('active');

      $('.mainContainer').addClass('fullBg');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
