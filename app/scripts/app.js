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
    'ngtweet',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
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
      // .when('/beer', {
      //   templateUrl: 'views/beer.html',
      //   controller: 'BeerCtrl',
      //   controllerAs: 'beer'
      // })
       .when('/cider', {
         templateUrl: 'views/cider.html',
         controller: 'CiderCtrl',
         controllerAs: 'cider'
       })
      .when('/lastyear', {
        redirectTo: '/lastyear'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDUIkZxzGxRGNEgCWdjOylusJhFetr6qv4',
        v: '3.23', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  });