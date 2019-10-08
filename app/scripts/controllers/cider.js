'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CiderCtrl
 * @description
 * # CiderCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('CiderCtrl', ['$scope', function($scope) {
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
        $('#lnkCraft').removeClass('active');

        //example for js unit tests:
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        };

        $scope.ciderList = [
  {
    'Brewery': 'Mad Hatters',
    'Name': 'Farting Dog',
    'ABV': '6.5%'
  },
  {
    'Brewery': 'Hunts',
    'Name': 'Barn Screacher',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Hunts',
    'Name': 'Bull Walloper',
    'ABV': '7.2%'
  },
  {
    'Brewery': 'Sams',
    'Name': 'Medium',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Sams',
    'Name': 'Autumn Scrumpy',
    'ABV': '7.5%'
  },
  {
    'Brewery': 'Double Vision',
    'Name': 'Cider',
    'ABV': '7.4%'
  },
  {
    'Brewery': 'Double Vision',
    'Name': 'Impeared Vision Perry',
    'ABV': '7.4%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Thundering Molly',
    'ABV': '5.2%'
  },
  {
    'Brewery': 'Cleeve',
    'Name': 'Orchard Perry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Gwatkins',
    'Name': 'Farmhouse Perry',
    'ABV': '7.0%'
  },
  {
    'Brewery': 'Newtons',
    'Name': 'Gasping Goose Cider',
    'ABV': '5.8%'
  },
  {
    'Brewery': 'Ross on Wye',
    'Name': 'Perry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Westons',
    'Name': 'Old Rosie',
    'ABV': '7.3%'
  },
  {
    'Brewery': 'Westons',
    'Name': 'Rosies Pig',
    'ABV': '4.8%'
  },
  {
    'Brewery': 'Broadoak',
    'Name': 'Moonshine',
    'ABV': '7.5%'
  },
  {
    'Brewery': 'Broadoak',
    'Name': 'Perry',
    'ABV': '7.5%'
  },
  {
    'Brewery': 'Crossmans',
    'Name': 'Dry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Harry\'s',
    'Name': 'Scrummage',
    'ABV': '6.2%'
  },
  {
    'Brewery': 'Hecks',
    'Name': 'Glastonbury Gold',
    'ABV': '6.5%'
  },
  {
    'Brewery': 'Mad Apple',
    'Name': 'Enok's Old Faithful',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Rich\'s',
    'Name': 'Legbender',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Sheppys',
    'Name': 'Sweet',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'West Croft',
    'Name': 'Janets Jungle Juice',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Wilkins',
    'Name': 'Cider Dry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Hurst View',
    'Name': 'Jibber Jabber',
    'ABV': '7.2%'
  },
  {
    'Brewery': 'Gwynt y Ddraig',
    'Name': 'Black Dragon',
    'ABV': '7.3%'
  },
  {
    'Brewery': 'Gwynt y Ddraig',
    'Name': '2 Trees perry',
    'ABV': '4.5%'
  },
  {
    'Brewery': 'Ralph\'s',
    'Name': 'Perry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Barkers',
    'Name': 'Perry',
    'ABV': '6.0%'
  },
  {
    'Brewery': 'Broadoak',
    'Name': 'Mango Cider',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Broadoak',
    'Name': 'Rhubarb',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Broadoak',
    'Name': 'Strawberry Cider',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Lily the Pink',
    'ABV': '4.6%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Nell Gwyne (orange and cinnamon)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Ruby Tuesday (Raspberry)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Loubi Lou (cherry and pineapple)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Celtic Marches',
    'Name': 'Tutti Frutti (pomegranate and rose)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Celtic',
    'Name': 'Tiger (orange and pineapple)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Slightly Foxed',
    'Name': 'Mango',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'English Fruit Cider',
    'Name': 'Rapple (raspberry)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'English Fruit Cider',
    'Name': 'Briar Patch Blackberry',
    'ABV': ''
  },
  {
    'Brewery': 'Gwatkins',
    'Name': 'Red Diesel strawberry cider',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Gwatkins',
    'Name': 'Barb Wire rhubarb cider',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Gwynt y Ddraig',
    'Name': 'Autumn Magic (blackberry)',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Hurst View',
    'Name': 'Penkside Passion',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Sheppys',
    'Name': 'Cider with Blackberry & Elderflower',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Sheppys',
    'Name': 'Cider with Raspberry 4.0%',
    'ABV': ''
  },
  {
    'Brewery': 'Westons',
    'Name': 'Rosies Pig Strawberry with Elderflower',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Westons',
    'Name': 'Rosies Pig Raspberry with Cucumber',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Westons',
    'Name': 'Rosies Pig Rhubarb',
    'ABV': '4.0%'
  },
  {
    'Brewery': 'Winkleigh Sams',
    'Name': 'Blackcurrant',
    'ABV': '4.0%'
  }
];
    }]);