'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('BeerCtrl', ['$scope', function($scope) {
        $('#lnkAbout').removeClass('active');
        $('#lnkContact').removeClass('active');
        $('#lnkHome').removeClass('active');
        $('#lnkFind').removeClass('active');
        $('#lnkVolunteer').removeClass('active');
        $('#lnkTickets').removeClass('active');
        $('#lnkGoodCauses').removeClass('active');
        $('#lnkMusic').removeClass('active');
        $('#lnkCider').removeClass('active');
        $('#lnkBeer').addClass('active');
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

        $scope.beerList =  [
          {
            'Brewery': 'Abbeydale',
            'Name': 'Absolution',
            'ABV': 5.3,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Abbeydale',
            'Name': 'Daily Bread',
            'ABV': 3.8,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Beatnikz Republic',
            'Name': 'Tropic Fiesta DDH',
            'ABV': 4.0,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'Beatnikz Republic',
            'Name': 'Boardwalk (gluten free)',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Beatnikz Republic',
            'Name': 'Beach Bum',
            'ABV': 5.0,
            'Type': 'APA'
          },
          {
            'Brewery': 'Beatnikz Republic',
            'Name': 'Crimson Flare (collab with Rivington)',
            'ABV': 5.2,
            'Type': 'Red'
          },
          {
            'Brewery': 'Beer Nouveau',
            'Name': 'Manchester Green Hop',
            'ABV': 'TBC',
            'Type': 'Pale'
          },
          {
            'Brewery': 'Beer Nouveau',
            'Name': 'Sunny Lowry',
            'ABV': 'TBC',
            'Type': 'Pale'
          },
          {
            'Brewery': 'Binghams',
            'Name': 'Vanilla Stout',
            'ABV': 5.0,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Blackjack',
            'Name': 'Small Saison',
            'ABV': 4.5,
            'Type': 'Saison'
          },
          {
            'Brewery': 'Blackjack',
            'Name': 'Peach of a Summer',
            'ABV': 5.8,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'White Nancy',
            'ABV': 3.6,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'Long Hop',
            'ABV': 3.9,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'Bollington Best',
            'ABV': 4.2,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'Eastern Nights',
            'ABV': 5.6,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'Oat Mill Stout',
            'ABV': 5.0,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Bollington',
            'Name': 'Bragging Rights',
            'ABV': 4.2,
            'Type': 'Ruby'
          },
          {
            'Brewery': 'Born in the Borders',
            'Name': 'Dark Horse',
            'ABV': 4.5,
            'Type': 'Dark'
          },
          {
            'Brewery': 'Born in the Borders',
            'Name': 'Game Bird',
            'ABV': 4.0,
            'Type': 'Amber'
          },
          {
            'Brewery': 'Brightside',
            'Name': 'NEIPA',
            'ABV': 6.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Brightside',
            'Name': 'Brightside Best',
            'ABV': 4.3,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Brightside',
            'Name': 'Oktoberfest',
            'ABV': 4.5,
            'Type': 'German Lager'
          },
          {
            'Brewery': 'Brightside',
            'Name': 'Bavaria',
            'ABV': 5.0,
            'Type': 'Blonde'
          },
          {
            'Brewery': 'Brightside',
            'Name': 'Maverick',
            'ABV': 4.8,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Brotherhood',
            'Name': 'India Pale Ale',
            'ABV': 5.6,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Brotherhood',
            'Name': 'Mango Pale Ale',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Burton Road',
            'Name': 'Pale',
            'ABV': 4.8,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Cairngorm',
            'Name': 'Trade Winds',
            'ABV': 4.3,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Cairngorm',
            'Name': 'Sheepshaggers Gold',
            'ABV': 4.5,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Cairngorm',
            'Name': 'Stag',
            'ABV': 4.1,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Didsbury Beer Festival',
            'ABV': 4.1,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Special Reserve',
            'ABV': 6.3,
            'Type': 'Strong Bitter'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Diamond Black',
            'ABV': 4.5,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'New York Pale',
            'ABV': 3.9,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Iron and Steel',
            'ABV': 4.0,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Full Moon',
            'ABV': 4.2,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Chantry',
            'Name': 'Kaldo Pale',
            'ABV': 5.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Cloudwater',
            'Name': 'What Do The Numbers Say?',
            'ABV': 3.8,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Cumbrian Legendary Ales',
            'Name': 'Loweswater Gold',
            'ABV': 4.3,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Darkstar',
            'Name': 'American Pale Ale',
            'ABV': 4.7,
            'Type': 'APA'
          },
          {
            'Brewery': 'Downton',
            'Name': 'Chocolate Orange Delight',
            'ABV': 5.8,
            'Type': 'Dark'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Chocolate Cherry Mild',
            'ABV': 3.8,
            'Type': 'Mild'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Castle Hilll',
            'ABV': 3.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Stamford',
            'ABV': 4.2,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Winter Warmer',
            'ABV': 6.6,
            'Type': 'Strong Ale'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Ruby Sunset',
            'ABV': 4.1,
            'Type': 'Red'
          },
          {
            'Brewery': 'Dunham Massey',
            'Name': 'Gold',
            'ABV': 7.2,
            'Type': 'Belgian'
          },
          {
            'Brewery': 'Durham',
            'Name': 'Black Bishop',
            'ABV': 4.1,
            'Type': 'Stout'
          },
          {
            'Brewery': 'First Chop',
            'Name': 'MCR (gluten free)',
            'ABV': 4.4,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'First Chop',
            'Name': 'SUP (gluten free)',
            'ABV': 3.9,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'First Chop',
            'Name': 'JAM (with mango, gluten free)',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Five Points',
            'Name': 'XPA',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Five Points',
            'Name': 'Citrus Pale',
            'ABV': 4.4,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Four Kings',
            'Name': 'Gold',
            'ABV': 4.0,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Four Kings',
            'Name': 'IPA',
            'ABV': 4.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Hawkshead',
            'Name': 'Windermere Pale',
            'ABV': 3.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Hawkshead',
            'Name': 'Lakeland Gold',
            'ABV': 4.4,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Hawkshead',
            'Name': 'Five Hop',
            'ABV': 5.0,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Hawkshead',
            'Name': 'NZPA',
            'ABV': 6.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Hawkshead',
            'Name': 'Red',
            'ABV': 4.2,
            'Type': 'Red'
          },
          {
            'Brewery': 'Howard Town',
            'Name': 'Shining Clough',
            'ABV': 5.3,
            'Type': 'Amber'
          },
          {
            'Brewery': 'Howard Town',
            'Name': 'Lords-a-Leaping',
            'ABV': 6.0,
            'Type': 'Porter'
          },
          {
            'Brewery': 'Howard Town',
            'Name': 'Longendale Lights',
            'ABV': 3.9,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Howard Town',
            'Name': 'Superfortress',
            'ABV': 4.4,
            'Type': 'Ruby'
          },
          {
            'Brewery': 'Howling Hops',
            'Name': 'House IPA',
            'ABV': 6.9,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Howling Hops',
            'Name': 'Pale XX',
            'ABV': 5.1,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Howling Hops',
            'Name': 'Tropical Deluxe',
            'ABV': 3.8,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Lecale',
            'Name': 'White Knight',
            'ABV': 4.5,
            'Type': 'Irish Lager'
          },
          {
            'Brewery': 'Lecale',
            'Name': 'Legbiter Ale',
            'ABV': 4.5,
            'Type': 'Irish Red'
          },
          {
            'Brewery': 'Mantle',
            'Name': 'Moho',
            'ABV': 4.3,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Millstone',
            'Name': 'Tiger Rut',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Millstone',
            'Name': 'Grain Storm',
            'ABV': 4.2,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Millstone',
            'Name': 'Stout',
            'ABV': 4.5,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Millstone',
            'Name': 'True Grit',
            'ABV': 5.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Neptune',
            'Name': 'Pothos (with passionfruit)',
            'ABV': 4.2,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Neptune',
            'Name': 'Mosaic',
            'ABV': 4.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Neptune',
            'Name': 'Shifting Sands',
            'ABV': 4.3,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'Neptune',
            'Name': 'Silenus',
            'ABV': 5.5,
            'Type': 'ESB'
          },
          {
            'Brewery': 'New Bristol',
            'Name': 'The Boogie Below (Galaxy Milkshake)',
            'ABV': 5.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Nook',
            'Name': 'Funky Banana (with banana)',
            'ABV': 4.5,
            'Type': 'Fruit'
          },
          {
            'Brewery': 'Nook',
            'Name': 'Peachy Pale (with peach)',
            'ABV': 3.8,
            'Type': 'Fruit'
          },
          {
            'Brewery': 'Nook',
            'Name': 'Sky Blue Blond (with blueberry)',
            'ABV': 4.5,
            'Type': 'Fruit'
          },
          {
            'Brewery': 'North Riding',
            'Name': 'Tiramisu Porter',
            'ABV': 4.5,
            'Type': 'Porter'
          },
          {
            'Brewery': 'North Riding',
            'Name': 'Rum & Raisin Dark Mild',
            'ABV': 4.3,
            'Type': 'Mild'
          },
          {
            'Brewery': 'North Riding',
            'Name': 'US IPA',
            'ABV': 5.5,
            'Type': 'IPA'
          },
          {
            'Brewery': 'North Riding',
            'Name': 'Mosaic Pale',
            'ABV': 4.3,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Orkney',
            'Name': 'Red MacGregor',
            'ABV': 4.0,
            'Type': 'Ruby'
          },
          {
            'Brewery': 'Ossett',
            'Name': 'Lemondrop',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Ossett',
            'Name': 'Yorkshire Blonde',
            'ABV': 3.9,
            'Type': 'Blonde'
          },
          {
            'Brewery': 'Ossett',
            'Name': 'Silver King',
            'ABV': 4.3,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Outstanding',
            'Name': 'Red',
            'ABV': 4.4,
            'Type': 'Red'
          },
          {
            'Brewery': 'Outstanding',
            'Name': 'Blond',
            'ABV': 4.5,
            'Type': 'Blonde'
          },
          {
            'Brewery': 'Outstanding',
            'Name': 'Ratatosk',
            'ABV': 3.7,
            'Type': 'Blonde'
          },
          {
            'Brewery': 'Phoenix',
            'Name': 'Wobbly Bob',
            'ABV': 6.0,
            'Type': 'Strong Ale'
          },
          {
            'Brewery': 'Redwillow',
            'Name': 'Robust Porter',
            'ABV': 5.3,
            'Type': 'Porter'
          },
          {
            'Brewery': 'Redwillow',
            'Name': 'Jester Green Hop Pale Ale',
            'ABV': 5.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Redwillow',
            'Name': 'Weightless',
            'ABV': 4.2,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'Redwillow',
            'Name': 'Shameless',
            'ABV': 5.9,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Redwillow',
            'Name': 'Feckless',
            'ABV': 4.1,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Riverhead',
            'Name': 'Sherbet Lemon',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Riverhead',
            'Name': 'Butterley Bitter',
            'ABV': 3.8,
            'Type': 'Amber'
          },
          {
            'Brewery': 'Roosters',
            'Name': 'Cashmere',
            'ABV': 4.3,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Roosters',
            'Name': 'Twenty Four Seven',
            'ABV': 4.7,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Roosters',
            'Name': 'The Italian Job (with black pepper and lemongrass)',
            'ABV': 4.7,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Roosters',
            'Name': 'Scrambler (with watermelon)',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Rudgate',
            'Name': 'Ruby Mild',
            'ABV': 4.4,
            'Type': 'Mild'
          },
          {
            'Brewery': 'Rudgate',
            'Name': 'Viking',
            'ABV': 3.8,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Slater’s',
            'Name': '1 Hop',
            'ABV': 4.0,
            'Type': 'Blonde'
          },
          {
            'Brewery': 'Slater’s',
            'Name': 'Haka',
            'ABV': 5.2,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Slater’s',
            'Name': 'Western',
            'ABV': 4.9,
            'Type': 'APA'
          },
          {
            'Brewery': 'Slater’s',
            'Name': 'Green Hop IPA',
            'ABV': 5.9,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Stubborn Mule',
            'Name': 'Bad Asstra (Lemon Meringue Pale Ale)',
            'ABV': 5.9,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Stubborn Mule',
            'Name': 'Feckin A IPA (Milkshake IPA)',
            'ABV': 5.2,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Stubborn Mule',
            'Name': 'Gingerbread Milk Stout',
            'ABV': 5.0,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Stubborn Mule',
            'Name': 'WA15 Magnum',
            'ABV': 7.2,
            'Type': 'Red IPA'
          },
          {
            'Brewery': 'Surrey Hills',
            'Name': 'Shere Drop (CAMRA Champion Beer)',
            'ABV': 4.2,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Swannay',
            'Name': 'Scapa Special',
            'ABV': 4.4,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Thirst Class',
            'Name': 'Hoppy-Go-Lucky (DBF 2018 gold winner)',
            'ABV': 4.1,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Thirst Class',
            'Name': 'Elephant Hawk IPA',
            'ABV': 6.5,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Thirst Class',
            'Name': 'American Brown',
            'ABV': 5.3,
            'Type': 'Brown'
          },
          {
            'Brewery': 'Tiny Rebel',
            'Name': 'Cwtch',
            'ABV': 4.6,
            'Type': 'Red'
          },
          {
            'Brewery': 'Tiny Rebel',
            'Name': 'Lush',
            'ABV': 4.0,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'Tiny Rebel',
            'Name': 'Pump up the Jam',
            'ABV': 5.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Tiny Rebel',
            'Name': 'Juicy',
            'ABV': 4.8,
            'Type': 'Golden'
          },
          {
            'Brewery': 'Titanic',
            'Name': 'Plum Porter',
            'ABV': 4.9,
            'Type': 'Porter'
          },
          {
            'Brewery': 'Top Rope',
            'Name': 'Overkill',
            'ABV': 5.7,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Top Rope',
            'Name': 'Cherry \"The King\" Lawler',
            'ABV': 5.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Top Rope',
            'Name': 'Papa Mango',
            'ABV': 5.1,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Top Rope',
            'Name': 'New World Order',
            'ABV': 5.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Tring',
            'Name': 'Lapsang Souchong',
            'ABV': 4.0,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Uprising',
            'Name': 'Treason',
            'ABV': 5.8,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Uprising',
            'Name': 'White Riot',
            'ABV': 5.3,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Uprising',
            'Name': 'Marula Matata',
            'ABV': 5.0,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Summerlands',
            'ABV': 3.5,
            'Type': 'Session IPA'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Leyana',
            'ABV': 4.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Barbarella (Rhubarb IPA)',
            'ABV': 6.2,
            'Type': 'IPA'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Metamorph',
            'ABV': 5.5,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Cacaophony',
            'ABV': 8.4,
            'Type': 'Choc Stout'
          },
          {
            'Brewery': 'Vibrant Forest',
            'Name': 'Zephyr (with peach and raspberry)',
            'ABV': 5.0,
            'Type': 'Saison'
          },
          {
            'Brewery': 'Vocation',
            'Name': 'Chop and Change',
            'ABV': 4.1,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Vocation',
            'Name': 'Breakfast Club (Waffle and Blueberry Breakfast Stout)',
            'ABV': 6.9,
            'Type': 'Stout'
          },
          {
            'Brewery': 'Vocation',
            'Name': 'Bread and Butter',
            'ABV': 3.9,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Wincle',
            'Name': 'Sir Philip',
            'ABV': 4.2,
            'Type': 'Amber'
          },
          {
            'Brewery': 'Wincle',
            'Name': 'Old Hag',
            'ABV': 5.2,
            'Type': 'Stout Porter'
          },
          {
            'Brewery': 'Wincle',
            'Name': 'Life of Riley',
            'ABV': 4.8,
            'Type': 'Pale'
          },
          {
            'Brewery': 'Windsor & Eton',
            'Name': 'Angel\'s Share (matured in whisky casks)',
            'ABV': 5.0,
            'Type': 'Bitter'
          },
          {
            'Brewery': 'Windsor & Eton',
            'Name': 'Guardsman (green hops)',
            'ABV': 4.2,
            'Type': 'Amber'
          },
          {
            'Brewery': 'York',
            'Name': 'Guzzler',
            'ABV': 3.6,
            'Type': 'Golden'
          }
        ];
    }]);