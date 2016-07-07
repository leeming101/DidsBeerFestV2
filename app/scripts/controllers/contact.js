'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('ContactCtrl', function () {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').addClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');

      $('.mainContainer').removeClass('fullBg');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
