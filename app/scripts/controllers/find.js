'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:FindCtrl
 * @description
 * # FindCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('FindCtrl', ['$scope', '$window', 'uiGmapGoogleMapApi', function($scope, $window, uiGmapGoogleMapApi) {
        $('#lnkAbout').removeClass('active');
        $('#lnkContact').removeClass('active');
        $('#lnkHome').removeClass('active');
        $('#lnkFind').addClass('active');
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



        $scope.map = { center: { latitude: 53.416528, longitude: -2.222119 }, zoom: 16 };

        $scope.marker = {
            id: 0,
            coords: {
                latitude: 53.416528,
                longitude: -2.222119
            },
            options: {
                draggable: false,
                clickable: true,
                icon: 'images/mapmarker.png'
            }
        };

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function(maps) {

        });

        $scope.openMap = function() {
            if ($window.confirm('Open in Google Maps?')) {
                $window.location.href = 'http://maps.google.com/maps?z=15&q=53.416528,-2.222119';
            }
        };
    }]);