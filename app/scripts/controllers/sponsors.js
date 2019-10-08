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
            // { link: 'https://twitter.com/TheFletcherMoss', img: 'images/sponsors/17.png', rank: 0.5 - Math.random() },
            { link: 'https://en-gb.facebook.com/M-J-Leeming-Opticians-158925407454109/', img: 'images/sponsors/6.png', rank: 0.5 - Math.random() },
            { link: 'http://www.barneswalker.co.uk', img: 'images/sponsors/7.png', rank: 0.5 - Math.random() },
            { link: 'http://www.hine.co.uk', img: 'images/sponsors/41.png', rank: 0.5 - Math.random() },
            // { link: 'http://www.thebarbershopdidsbury.co.uk/', img: 'images/sponsors/10.png', rank: 0.5 - Math.random() },
            // { link: 'https://elmhousetreeservices.co.uk/', img: 'images/sponsors/36.png', rank: 0.5 - Math.random() },
            // { link: 'https://southmanchesternews.co.uk/', img: 'images/sponsors/35.png', rank: 0.5 - Math.random() },
            { link: 'http://www.eclectichotels.co.uk/didsbury-house/', img: 'images/sponsors/40.jpg', rank: 0.5 - Math.random() },
            { link: 'https://www.yell.com/biz/burns-partnership-llp-manchester-1120012/', img: 'images/sponsors/37.svg', rank: 0.5 - Math.random() },
            { link: 'http://www.geipel.co.uk/', img: 'images/sponsors/13.png', rank: 0.5 - Math.random() },
            { link: 'http://www.bollingtonbrewing.co.uk/', img: 'images/sponsors/19.png', rank: 0.5 - Math.random() },
            { link: 'http://www.chantrybrewery.co.uk/', img: 'images/sponsors/20.png', rank: 0.5 - Math.random() },
            { link: 'http://www.hireequip.co.uk/', img: 'images/sponsors/21.jpg', rank: 0.5 - Math.random() },
            { link: 'https://twitter.com/DidsburyGinFest', img: 'images/sponsors/38.png', rank: 0.5 - Math.random() },
            { link: 'http://www.didsburytraders.co.uk/', img: 'images/sponsors/39.png', rank: 0.5 - Math.random() },
            //{ link: 'https://www.beer52.com/', img: 'images/sponsors/42.png', rank: 0.5 - Math.random() },
            { link: 'https://www.facebook.com/thechippyonburtonroad/', img: 'images/sponsors/43.png', rank: 0.5 - Math.random() },
            // { link: 'http://wdc-creative.com/', img: 'images/sponsors/24.png', rank: 0.5 - Math.random() }

            
            //{link:'http://www.aqua-check.co.uk/', img:'images/sponsors/8.jpg', rank: 0.5 - Math.random()},
            //{link:'http://www.manchestereveningnews.co.uk/', img:'images/sponsors/9.png', rank: 0.5 - Math.random()},
            //{link:'http://www.thebarbershopdidsbury.co.uk/', img:'images/sponsors/10.png', rank: 0.5 - Math.random()},
            //{link:'http://www.markbratttravel.com/', img:'images/sponsors/11.png', rank: 0.5 - Math.random()},
            {link:'http://www.avaloncaredentalpractice.co.uk/', img:'images/sponsors/12.png', rank: 0.5 - Math.random()},
            /*
            {link:'http://www.lewisphipps.co.uk/', img:'images/sponsors/15.png', rank: 0.5 - Math.random()},
            {link:'http://www.ghd.com/united-kingdom/', img:'images/sponsors/16.png', rank: 0.5 - Math.random()},
            {link:'http://www.theparrswoodhotel.co.uk/', img:'images/sponsors/18.png', rank: 0.5 - Math.random()},
            {link:'http://www.impact-signs.co.uk/', img:'images/sponsors/22.png', rank: 0.5 - Math.random()},
            {link:'http://www.venture-out.co.uk/', img:'images/sponsors/23.png', rank: 0.5 - Math.random()},
            {link:'http://www.dogpartridgepub.co.uk/', img:'images/sponsors/25.png', rank: 0.5 - Math.random()},
            {link:'http://namaste-nepal.co.uk/wordpress/', img:'images/sponsors/26.png', rank: 0.5 - Math.random()},
            {link:'http://www.outstandingbeers.co.uk/', img:'images/sponsors/27.png', rank: 0.5 - Math.random()},
            {link:'http://www.thealbertclub.co.uk/', img:'images/sponsors/28.jpg', rank: 0.5 - Math.random()},
            {link:'http://www.yeoldecock-didsbury.co.uk/', img:'images/sponsors/29.png', rank: 0.5 - Math.random()},
            {link:'https://twitter.com/bottlestockport', img:'images/sponsors/30.png', rank: 0.5 - Math.random()},
            {link:'https://www.theepicureanbeers.co.uk/', img:'images/sponsors/31.png', rank: 0.5 - Math.random()},
            {link:'http://www.greensdidsbury.co.uk/', img:'images/sponsors/32.png', rank: 0.5 - Math.random()},
            {link:'http://stockportbrewingcompany.com/', img:'images/sponsors/33.png', rank: 0.5 - Math.random()},
            {link:'https://burtonroadbrewing.co.uk/', img:'images/sponsors/34.png', rank: 0.5 - Math.random()},
            */
        ];

        //example for js unit tests:
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);