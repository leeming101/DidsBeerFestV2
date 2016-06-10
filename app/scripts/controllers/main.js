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
  });
