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
      .when('/lastyear', {
        redirectTo: '/lastyear'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
