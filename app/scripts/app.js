'use strict';

/**
 * @ngdoc overview
 * @name didsBeerFestV2App
 * @description
 * # didsBeerFestV2App
 *
 * Main module of the application.
 */
angular
    .module('didsBeerFestV2App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngtweet'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/find', {
                templateUrl: 'views/find.html',
                controller: 'FindCtrl',
                controllerAs: 'find'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/privacy', {
                templateUrl: 'views/privacy.html'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/volunteer', {
                templateUrl: 'views/volunteer.html',
                controller: 'VolunteerCtrl',
                controllerAs: 'volunteer'
            })
            .when('/tickets', {
                templateUrl: 'views/tickets.html',
                controller: 'TicketsCtrl',
                controllerAs: 'tickets'
            })
            .when('/goodcauses', {
                templateUrl: 'views/goodcauses.html',
                controller: 'GoodCausesCtrl',
                controllerAs: 'goodcauses'
            })
            .when('/music', {
                templateUrl: 'views/music.html',
                controller: 'MusicCtrl',
                controllerAs: 'music'
            })
            .when('/beer', {
                templateUrl: 'views/beer.html',
                controller: 'BeerCtrl',
                controllerAs: 'beer'
            })
            .when('/cider', {
                templateUrl: 'views/cider.html',
                controller: 'CiderCtrl',
                controllerAs: 'cider'
            })
            .when('/craft', {
                templateUrl: 'views/craft.html',
                controller: 'CraftCtrl',
                controllerAs: 'craft'
            })
            .when('/raffle', {
                templateUrl: 'views/raffle.html'
            })
            .when('/lastyear', {
                redirectTo: '/lastyear'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

window.addEventListener('load', function(e) {
    if (window.applicationCache) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                window.applicationCache.swapCache();
                if (window.confirm('A new version of this site is available. Load it?')) {
                    window.location.reload(true);
                }
            } else {
                // Manifest didn't changed. Nothing new to server.
            }
        }, false);
    }
}, false);