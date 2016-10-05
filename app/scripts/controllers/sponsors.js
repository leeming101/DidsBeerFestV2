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
        {link:'http://smcreditunion.co.uk/', img:'images/sponsors/1.png', rank: 0.5 - Math.random()},
        {link:'http://www.bottonline.co.uk/', img:'images/sponsors/2.png', rank: 0.5 - Math.random()},
        {link:'http://www.wearecreation.co.uk/', img:'images/sponsors/3.png', rank: 0.5 - Math.random()},
        {link:'http://www.claytonhulme.co.uk/', img:'images/sponsors/4.png', rank: 0.5 - Math.random()},
        {link:'https://twitter.com/Wheildons/', img:'images/sponsors/5.png', rank: 0.5 - Math.random()},
        {link:'https://en-gb.facebook.com/M-J-Leeming-Opticians-158925407454109/', img:'images/sponsors/6.png', rank: 0.5 - Math.random()},
        {link:'http://www.barneswalker.co.uk', img:'images/sponsors/7.png', rank: 0.5 - Math.random()},
        {link:'http://www.aqua-check.co.uk/', img:'images/sponsors/8.jpg', rank: 0.5 - Math.random()},
        {link:'http://www.manchestereveningnews.co.uk/', img:'images/sponsors/9.png', rank: 0.5 - Math.random()},
        {link:'http://www.thebarbershopdidsbury.co.uk/', img:'images/sponsors/10.png', rank: 0.5 - Math.random()},
        {link:'http://www.markbratttravel.com/', img:'images/sponsors/11.png', rank: 0.5 - Math.random()}
      ];
      
      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
