'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CraftCtrl
 * @description
 * # CraftCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('CraftCtrl', ['$scope', function($scope) {
        $('#lnkAbout').removeClass('active');
        $('#lnkContact').removeClass('active');
        $('#lnkHome').removeClass('active');
        $('#lnkFind').removeClass('active');
        $('#lnkVolunteer').removeClass('active');
        $('#lnkTickets').removeClass('active');
        $('#lnkGoodCauses').removeClass('active');
        $('#lnkMusic').removeClass('active');
        $('#lnkCider').removeClass('active');
        $('#lnkBeer').removeClass('active');
        $('#lnkCraft').addClass('active');

        //example for js unit tests:
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        };

        $scope.craftList = [
          {
            'Brewery': 'Beatnikz Republic',
            'Name': 'Boardwalk (gf)',
            'ABV': '4.0%',
            'Notes': 'Full-bodied citrus pale with US hops.',
            'Website': ''
          },  
          {
              'Brewery': 'Geipel',
              'Name': 'Geipel Pilsner',
              'ABV': '4.6%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Geipel',
              'Name': 'Aloha from Bala',
              'ABV': '4.4%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Geipel',
              'Name': 'Hefeweizen',
              'ABV': '5.2%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Geipel',
              'Name': 'Zoigl',
              'ABV': '5.4%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Geipel',
              'Name': 'Bock',
              'ABV': '6.5%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Geipel',
              'Name': 'Golden Gate',
              'ABV': '5.0%',
              'Notes': '',
              'Website': 'https://www.geipel.co.uk/beers'
            },
            {
              'Brewery': 'Hawkshead',
              'Name': 'Lakeland Pilsner',
              'ABV': '5.0%',
              'Notes': '',
              'Website': 'http://www.hawksheadbrewery.co.uk/beers/151/hawkshead-lager--.aspx'
            },
            {
              'Brewery': 'Squawk',
              'Name': 'Brood',
              'ABV': '8.3%',
              'Notes': 'A huge juicy DIPA with Citra, Mosaic and Simcoe hops.',
              'Website': ''
            },
            {
              'Brewery': 'Squawk',
              'Name': 'Passer IPA',
              'ABV': '6.1%',
              'Notes': 'Dense haze and full-on crushed pineapple and grapefruit.',
              'Website': ''
            },
            {
              'Brewery': 'Squawk',
              'Name': 'Kori',
              'ABV': '9.0%',
              'Notes': 'Imperial Stout with sour cherries, cacao and vanilla.',
              'Website': ''
            },
            {
              'Brewery': 'Squawk',
              'Name': 'Cali DIPA',
              'ABV': '8.0%',
              'Notes': 'An intense tropical fruit hit.',
              'Website': ''
            },
            {
              'Brewery': 'Vocation',
              'Name': 'Life and Death',
              'ABV': '6.5%',
              'Notes': '',
              'Website': 'https://www.vocationbrewery.com'
            },
            {
              'Brewery': 'Fierce',
              'Name': 'Blackcurrant Tart',
              'ABV': '4.5%',
              'Notes': '',
              'Website': 'https://www.fiercebeer.com'
            },
            {
              'Brewery': 'Wild Beer Co',
              'Name': 'Bibble',
              'ABV': '4.2%',
              'Notes': '',
              'Website': 'https://www.wildbeerco.com/drinks/beers'
            },
            {
              'Brewery': 'Wild Beer Co',
              'Name': 'Fresh',
              'ABV': '5.5%',
              'Notes': '',
              'Website': 'https://www.wildbeerco.com/drinks/beers'
            },
            {
              'Brewery': 'Wild Beer Co',
              'Name': 'Millionaire',
              'ABV': '4.7%',
              'Notes': '',
              'Website': 'https://www.wildbeerco.com/drinks/beers'
            },
            {
              'Brewery': 'Wild Weather Ales',
              'Name': 'Curse of Threepwood',
              'ABV': '5.0%',
              'Notes': '',
              'Website': 'https://wildweatherales.com/beer/full-of-beans/'
            },
            {
              'Brewery': 'Vibrant Forest',
              'Name': 'Citra',
              'ABV': '5.0%',
              'Notes': 'Single Hop Pale Ale; the perfect balance between bitter citrus and tropical fruit.',
              'Website': ''
            },
            {
              'Brewery': 'Vibrant Forest',
              'Name': 'Black Forest Porter',
              'ABV': '4.9%',
              'Notes': 'Rich bittersweet porter with coffee, chocolate and oak.',
              'Website': ''
            },
            {
              'Brewery': 'Track',
              'Name': 'Sonoma',
              'ABV': '3.8%',
              'Notes': 'A juicy,  bright,  dry pale hopped extensively with Centennial, Citra and Mosaic. A taste of sunshine.',
              'Website': ''
            },
            {
              'Brewery': 'Burton Road',
              'Name': 'Pale Ale',
              'ABV': '4.8%',
              'Notes': '',
              'Website': 'https://www.burtonroadbrewing.co.uk'
            },
            {
              'Brewery': 'Burton Road',
              'Name': 'IPA',
              'ABV': '5.6%',
              'Notes': '',
              'Website': 'https://www.burtonroadbrewing.co.uk'
            },
            {
              'Brewery': 'Brotherhood Brewery',
              'Name': 'Back in the Day',
              'ABV': '6.2%',
              'Notes': '',
              'Website': 'https://www.brotherhood.co.uk'
            },
            {
              'Brewery': 'Brotherhood Brewery',
              'Name': 'Devil\'s Piano',
              'ABV': '6.6%',
              'Notes': '',
              'Website': 'https://www.brotherhood.co.uk'
            },
            {
              'Brewery': 'To The Moon',
              'Name': 'Apollo v3 (ve)',
              'ABV': '5.8%',
              'Notes': 'New England-style IPA with Simcoe and Enigma hops.',
              'Website': ''
            },
            {
              'Brewery': 'Moor',
              'Name': 'Nor\'Hop Ultra Pale',
              'ABV': '4.1%',
              'Notes': 'British floor malt with northern Hemisphere hops.',
              'Website': ''
            },
            {
              'Brewery': 'Marble',
              'Name': 'Lagonda',
              'ABV': '5.0%',
              'Notes': '',
              'Website': 'https://www.marblebeers.com/our-beers/lagonda-ipa/'
            },
            {
              'Brewery': 'Marble',
              'Name': 'Pint',
              'ABV': '3.9%',
              'Notes': '',
              'Website': 'https://www.marblebeers.com/our-beers/pint/'
            },
            {
              'Brewery': 'Northern Monk',
              'Name': 'New World IPA',
              'ABV': '6.2%',
              'Notes': '',
              'Website': 'https://northernmonk.com/product/new-world/'
            },
            {
              'Brewery': 'Neptune',
              'Name': 'Abyss Stout',
              'ABV': '5.0%',
              'Notes': '',
              'Website': 'https://www.neptunebrewery.com/keg'
            },
            {
              'Brewery': 'Tiny Rebel',
              'Name': 'Clwb Tropicana',
              'ABV': '5.5%',
              'Notes': '',
              'Website': 'https://www.tinyrebel.co.uk/beers/clwb-tropicana/'
            },
            {
              'Brewery': 'First Chop',
              'Name': 'Pop Citrus IPA (gf)',
              'ABV': '5.4%',
              'Notes': '',
              'Website': ' http://www.firstchop.co.uk/'
            },
            {
              'Brewery': 'First Chop',
              'Name': 'Jam Mango Pale (gf)',
              'ABV': '4.0%',
              'Notes': '',
              'Website': ' http://www.firstchop.co.uk/'
            },
            {
              'Brewery': 'Siren',
              'Name': 'Soundwave',
              'ABV': '5.6%',
              'Notes': 'Unfiltered IPA. Three malts and four American hops deliver fruit notes and subtle bitterness.',
              'Website': ''
            },
            {
              'Brewery': 'Siren',
              'Name': 'Pompelmocello',
              'ABV': '6.0%',
              'Notes': 'Grapefruity IPA. Sour, but with lactose for a smooth and sweet touch.',
              'Website': ''
            }
          ];
    }]);