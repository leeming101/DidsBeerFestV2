'use strict';
/*global initializeClock */
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('MainCtrl', function() {
        $('#lnkAbout').removeClass('active');
        $('#lnkContact').removeClass('active');
        $('#lnkHome').addClass('active');
        $('#lnkFind').removeClass('active');
        $('#lnkVolunteer').removeClass('active');
        $('#lnkTickets').removeClass('active');
        $('#lnkGoodCauses').removeClass('active');
        $('#lnkMusic').removeClass('active');
        $('#lnkCider').removeClass('active');
        $('#lnkBeer').removeClass('active');
        $('#lnkCraft').removeClass('active');

        //example for js unit tests:
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

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

        var dateNow = new Date(2017, 9, 26, 19, 0, 0, 0);

        initializeClock('clockdiv', dateNow);

    });