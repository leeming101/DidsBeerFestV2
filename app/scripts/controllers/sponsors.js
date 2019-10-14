'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('SponsorsCtrl', ['$scope', function($scope) {

        $scope.sponsorList = [
            { link: 'http://www.bottonline.co.uk/', img: 'images/sponsors/2.png', rank: 0.5 - Math.random() },
            { link: 'http://www.wearecreation.co.uk/', img: 'images/sponsors/3.png', rank: 0.5 - Math.random() },
            { link: 'http://smcreditunion.co.uk/', img: 'images/sponsors/1.png', rank: 0.5 - Math.random() },
            { link: 'https://twitter.com/Wheildons/', img: 'images/sponsors/5.png', rank: 0.5 - Math.random() },
            { link: 'http://www.claytonhulme.co.uk/', img: 'images/sponsors/4.png', rank: 0.5 - Math.random() },
            { link: 'https://en-gb.facebook.com/M-J-Leeming-Opticians-158925407454109/', img: 'images/sponsors/6.png', rank: 0.5 - Math.random() },
            { link: 'http://www.barneswalker.co.uk', img: 'images/sponsors/7.png', rank: 0.5 - Math.random() },
            { link: 'http://www.hine.co.uk', img: 'images/sponsors/41.png', rank: 0.5 - Math.random() },
            { link: 'http://www.eclectichotels.co.uk/didsbury-house/', img: 'images/sponsors/40.jpg', rank: 0.5 - Math.random() },
            { link: 'https://www.yell.com/biz/burns-partnership-llp-manchester-1120012/', img: 'images/sponsors/37.svg', rank: 0.5 - Math.random() },
            { link: 'http://www.geipel.co.uk/', img: 'images/sponsors/13.png', rank: 0.5 - Math.random() },
            { link: 'http://www.bollingtonbrewing.co.uk/', img: 'images/sponsors/19.png', rank: 0.5 - Math.random() },
            { link: 'http://www.chantrybrewery.co.uk/', img: 'images/sponsors/20.png', rank: 0.5 - Math.random() },
            { link: 'http://www.hireequip.co.uk/', img: 'images/sponsors/21.jpg', rank: 0.5 - Math.random() },
            { link: 'https://twitter.com/DidsburyGinFest', img: 'images/sponsors/38.png', rank: 0.5 - Math.random() },
            { link: 'http://www.didsburytraders.co.uk/', img: 'images/sponsors/39.png', rank: 0.5 - Math.random() },
            { link: 'https://www.facebook.com/thechippyonburtonroad/', img: 'images/sponsors/43.png', rank: 0.5 - Math.random() },
            { link: 'http://www.brianpope.com/', img: 'images/sponsors/47.jpg', rank: 0.5 - Math.random() },
            { link: 'http://www.avaloncaredentalpractice.co.uk/', img:'images/sponsors/12.png', rank: 0.5 - Math.random()}
        ];

        //example for js unit tests:
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);