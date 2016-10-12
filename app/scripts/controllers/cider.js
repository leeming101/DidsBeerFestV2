'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CiderCtrl
 * @description
 * # CiderCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('CiderCtrl', function ($scope) {   
      $('#lnkAbout').removeClass('active');
      $('#lnkContact').removeClass('active');
      $('#lnkHome').removeClass('active');
      $('#lnkFind').removeClass('active');
      $('#lnkVolunteer').removeClass('active');
      $('#lnkTickets').removeClass('active');
      $('#lnkGoodCauses').removeClass('active');
      $('#lnkMusic').removeClass('active');
      $('#lnkCider').addClass('active');
      $('#lnkBeer').removeClass('active');

      //example for js unit tests:
      this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      ];

      $scope.ciderList = [
        { name: 'Gwynt y Draig 2 Trees perry', abv: '' },
        { name: 'Winkleigh sams Autumn Scrumpy m/sw', abv: '' },
        { name: 'Biddenden Strong Med', abv: '' },
        { name: 'Broadoak Bristol port', abv: '' },
        { name: 'Broadoak Moonshine', abv: '' },
        { name: 'Broadoak Perry', abv: '' },
        { name: 'Burrow Hill dry cider', abv: '' },
        { name: 'Celtic Marches Lily the Pink', abv: '' },
        { name: 'Celtic Marches Ruby Tuesday', abv: '' },
        { name: 'Celtic Marches Thundering Molly', abv: '' },
        { name: 'Countryman cider dry', abv: '' },
        { name: 'Crossmans dry', abv: '' },
        { name: 'Double Vision cider', abv: '' },
        { name: 'Double Vision Impeared Vision Elderflower', abv: '' },
        { name: 'Double Vision Impeared Vision perry', abv: '' },
        { name: 'Double Vision Strawberry', abv: '' },
        { name: 'Gwatkins F/house perry', abv: '' },
        { name: 'Gwatkins Farmhouse perry', abv: '' },
        { name: 'Gwynt y Ddraig Autumn Magic (blackberry)', abv: '' },
        { name: 'Gwynt y Ddraig Black Dragon', abv: '' },
        { name: 'Gwynt y Ddraig Celtic warrior sweet', abv: '' },
        { name: 'Hecks Kingston Black', abv: '' },
        { name: 'Heck\'s Port Wine', abv: '' },
        { name: 'Mays cider', abv: '' },
        { name: 'Once upon a Tree Tumpy ground', abv: '' },
        { name: 'Parsons Choice sweet', abv: '' },
        { name: 'Richs Farmhouse', abv: '' },
        { name: 'Richs Legbender', abv: '' },
        { name: 'Ross on Wye medium cider', abv: '' },
        { name: 'Ross on Wye perry', abv: '' },
        { name: 'Sheppys cider with blackberry & elderflower', abv: '' },
        { name: 'Sheppys cider with raspberry', abv: '' },
        { name: 'Sheppys sweet', abv: '' },
        { name: 'Snailsbank elderflower,gin and tonic', abv: '' },
        { name: 'Snailsbank Ginger', abv: '' },
        { name: 'Snailsbank perry', abv: '' },
        { name: 'Snailsbank Pigsqueal', abv: '' },
        { name: 'Snailsbank pink grapefruit & pineapple', abv: '' },
        { name: 'Snailsbank Rhubarb', abv: '' },
        { name: 'Snailsbank strawberry and lime', abv: '' },
        { name: 'Snailsbank Tumbledown cider', abv: '' },
        { name: 'Snailsbank Tumbledown Fruit Bat', abv: '' },
        { name: 'Thatchers Cheddar Valley &Traditional', abv: '' },
        { name: 'West Croft Janets Jungle Juice', abv: '' },
        { name: 'Westons  Wyldwood Organic', abv: '' },
        { name: 'Westons Country perry', abv: '' },
        { name: 'Westons Family Reserve', abv: '' },
        { name: 'Westons Flat Tyre Rhubarb', abv: '' },
        { name: 'Westons Handbrake Damson', abv: '' },
        { name: 'Westons Old Banger Raspberry', abv: '' },
        { name: 'Westons Old Rosie', abv: '' },
        { name: 'Westons Rosies Pig', abv: '' },
        { name: 'Winkleigh Sams blackcurrant', abv: '' },
        { name: 'Winkleigh Sams sweet', abv: '' }
    ];

    $scope.filterFunction = function(element) {
    return element.name.match(/^Ma/) ? true : false;
  };
  });