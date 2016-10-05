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
        {link:'http://smcreditunion.co.uk/', img:'1.png', rank: 0.5 - Math.random()},
        {link:'http://www.bottonline.co.uk/', img:'2.png', rank: 0.5 - Math.random()},
        {link:'http://www.wearecreation.co.uk/', img:'3.png', rank: 0.5 - Math.random()},
        {link:'http://www.claytonhulme.co.uk/', img:'4.png', rank: 0.5 - Math.random()},
        {link:'https://twitter.com/Wheildons/', img:'5.png', rank: 0.5 - Math.random()},
        {link:'https://en-gb.facebook.com/M-J-Leeming-Opticians-158925407454109/', img:'6.png', rank: 0.5 - Math.random()},
        {link:'http://www.barneswalker.co.uk', img:'7.png', rank: 0.5 - Math.random()},
        {link:'http://www.aqua-check.co.uk/', img:'8.jpg', rank: 0.5 - Math.random()},
        {link:'http://www.manchestereveningnews.co.uk/', img:'9.png', rank: 0.5 - Math.random()},
        {link:'http://www.thebarbershopdidsbury.co.uk/', img:'10.png', rank: 0.5 - Math.random()},
        {link:'http://www.markbratttravel.com/', img:'11.png', rank: 0.5 - Math.random()}
      ];
      
      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
