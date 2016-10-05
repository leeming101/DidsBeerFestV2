'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('SponsorsCtrl', function ($scope) {   
      
      $scope.sponsorList = [
        '<a href="http://smcreditunion.co.uk/"><img src="images/sponsors/1.png"></a>',
        '<a href="http://www.bottonline.co.uk/"><img src="images/sponsors/2.png"></a>',
        '<a href="http://www.wearecreation.co.uk/"><img src="images/sponsors/3.png"></a>',
        '<a href="http://www.claytonhulme.co.uk/"><img src="images/sponsors/4.png"></a>',
        '<a href="https://twitter.com/Wheildons/"><img src="images/sponsors/5.png"></a>',
        '<img src="images/sponsors/6.png">',
        '<a href="http://www.barneswalker.co.uk"><img src="images/sponsors/7.png"></a>',
        '<a href="http://www.aqua-check.co.uk/"><img src="images/sponsors/8.jpg"></a>',
        '<a href="http://www.manchestereveningnews.co.uk/"><img src="images/sponsors/9.png"></a>',
        '<a href="http://www.thebarbershopdidsbury.co.uk/"><img src="images/sponsors/10.png"></a>',
        '<a href="http://www.markbratttravel.com/"><img src="images/sponsors/11.png"></a>'
      ];

      $scope.random = function() {
        return 0.5 - Math.random();
      };
      
      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
