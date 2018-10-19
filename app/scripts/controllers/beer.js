'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('BeerCtrl', function($scope) {
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

        $scope.beerList = [
            {
              'Brewery': 'Abbeydale',
              'Beer': 'Daily Bread',
              'Type': 'Bitter',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Abbeydale',
              'Beer': 'Absolution',
              'Type': 'Golden',
              'ABV': 5.3,
              'Description': ''
            },
            {
              'Brewery': 'Abbeydale',
              'Beer': 'Dr Morton\'s Perfect Number',
              'Type': 'Pale',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Bristol Beer Factory',
              'Beer': 'Independence',
              'Type': 'US Pale',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewery': 'Bristol Beer Factory',
              'Beer': 'Nova',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Bristol Beer Factory',
              'Beer': 'Dove From Above',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Box Steam',
              'Beer': 'Ghost Train',
              'Type': 'Ruby',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Box Steam',
              'Beer': 'Piston Broke',
              'Type': 'Golden',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Chinook and Grapefruit',
              'Type': 'Pale',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Ginger Brew',
              'Type': 'Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Long Hop',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Bollington Best',
              'Type': 'Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Oat Mill Stout',
              'Type': '',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Bollington',
              'Beer': 'Dinner Ale',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Binghams',
              'Beer': 'Vanilla Stout',
              'Type': 'Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Blackjack',
              'Beer': 'Devilfish',
              'Type': 'Saison',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Blackjack',
              'Beer': 'Huell Melon IPA',
              'Type': 'IPA',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Blackjack',
              'Beer': 'Jack and Gill',
              'Type': 'IPA',
              'ABV': 6.8,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Four Horseman',
              'Type': 'Oat Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Topaz',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Pale',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Uncle Dunkel',
              'Type': 'Dark Lager',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Gateway to Heaven',
              'Type': 'Blonde',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Brightside',
              'Beer': 'Maverick',
              'Type': 'IPA',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Brotherhood',
              'Beer': 'India Pale Ale',
              'Type': 'IPA',
              'ABV': 5.6,
              'Description': ''
            },
            {
              'Brewery': 'Brotherhood',
              'Beer': 'Mango Pale Ale',
              'Type': 'Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Brinkburn St',
              'Beer': 'Tyne Titans',
              'Type': 'Session IPA',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Brinkburn St',
              'Beer': 'Byker Brown Ale',
              'Type': 'Brown',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Brinkburn St',
              'Beer': 'House of the Rising Sun',
              'Type': 'Choc Rasp Porter',
              'ABV': 7.2,
              'Description': ''
            },
            {
              'Brewery': 'Charnwood',
              'Beer': 'Salvation',
              'Type': 'Golden',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Charnwood',
              'Beer': 'Hubble Bubble',
              'Type': 'Amber',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Cross bay',
              'Beer': 'Green Eyed Monster',
              'Type': 'Pale (green hop)',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewery': 'Cross bay',
              'Beer': 'Witching Hour',
              'Type': 'Wheat',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Cross bay',
              'Beer': 'R.I.P.A.',
              'Type': 'Red IPA',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Chapter',
              'Beer': 'Dead Man\'s Fist',
              'Type': 'Smoked Porter',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewery': 'Chapter',
              'Beer': 'Parabola',
              'Type': 'Pale',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewery': 'Chapter',
              'Beer': 'Temos Tanta',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Cumbrian',
              'Beer': 'Loweswater Gold',
              'Type': 'Golden',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Chantry',
              'Beer': 'Didsbury Beer Festival',
              'Type': 'Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewery': 'Chantry',
              'Beer': 'Snoqualmie',
              'Type': 'Pale',
              'ABV': 5.1,
              'Description': ''
            },
            {
              'Brewery': 'Chantry',
              'Beer': 'Diamond Black',
              'Type': 'Stout',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Chantry',
              'Beer': 'Special Reserve',
              'Type': 'Strong Bitter',
              'ABV': 6.3,
              'Description': ''
            },
            {
              'Brewery': 'Chantry',
              'Beer': 'New York Pale',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewery': 'Downlands',
              'Beer': 'Red October',
              'Type': 'Red',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Downlands',
              'Beer': 'Hop Contract #10',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Downlands',
              'Beer': 'Green Hopped Root Thirteen',
              'Type': 'Pale green hopped',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewery': 'Downlands',
              'Beer': 'Bramber',
              'Type': 'American Amber',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Dunham Massey',
              'Beer': 'Deer Beer',
              'Type': 'Amber',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Dunham Massey',
              'Beer': 'Dark Mild',
              'Type': 'Mild',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Dunham Massey',
              'Beer': 'Chocolate Cherry Mild',
              'Type': 'Mild',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Dunham Massey',
              'Beer': 'East India Pale Ale',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewery': 'Donkeystone',
              'Beer': 'APA',
              'Type': 'American Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Donkeystone',
              'Beer': 'Cotton Clouds',
              'Type': 'Session Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Donkeystone',
              'Beer': 'Javanilla',
              'Type': 'Coffee&Vanilla Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Donkeystone',
              'Beer': 'Bray',
              'Type': 'Amber',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'ELB',
              'Beer': 'Jamboree',
              'Type': 'Golden',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'ELB',
              'Beer': 'Orchid',
              'Type': 'Mild',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewery': 'ELB',
              'Beer': 'Walthamstow Beer',
              'Type': 'Green hop pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'First Chop',
              'Beer': 'PIP',
              'Type': 'Grapefruit saison',
              'ABV': 6.3,
              'Description': ''
            },
            {
              'Brewery': 'First Chop',
              'Beer': 'POP',
              'Type': 'IPA',
              'ABV': 5.4,
              'Description': ''
            },
            {
              'Brewery': 'First Chop',
              'Beer': 'RED',
              'Type': 'Red',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewery': 'Flagship',
              'Beer': 'Level',
              'Type': 'Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Flagship',
              'Beer': 'Century',
              'Type': 'IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Grafton',
              'Beer': 'Framboise',
              'Type': 'Speciality',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Grafton',
              'Beer': 'Coco Loco',
              'Type': 'Speciality',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Heritage',
              'Beer': 'St Modwen',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Holden\'s',
              'Beer': 'Golden Glow',
              'Type': 'Golden',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Hop and Stagger',
              'Beer': 'Bridgnorth Porter',
              'Type': 'Porter',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Hop and Stagger',
              'Beer': 'Triple Hop IPA',
              'Type': 'IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Hop and Stagger',
              'Beer': 'Solstice Rouge',
              'Type': 'Belgium Style',
              'ABV': 6.8,
              'Description': ''
            },
            {
              'Brewery': 'Hawkshead',
              'Beer': 'Great White',
              'Type': 'Wheat',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Hawkshead',
              'Beer': 'Red',
              'Type': 'Red',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Hawkshead',
              'Beer': 'Windermere Pale',
              'Type': 'Pale',
              'ABV': 3.5,
              'Description': ''
            },
            {
              'Brewery': 'Hawkshead',
              'Beer': 'NZPA',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewery': 'Inveralmond',
              'Beer': 'Daracha',
              'Type': 'Ruby',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Inveralmond',
              'Beer': 'Ossian',
              'Type': 'Golden',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewery': 'Inveralmond',
              'Beer': 'Lia Fail',
              'Type': 'Dark',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewery': 'Ilkley',
              'Beer': 'Ultravox',
              'Type': 'Lager',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Ilkley',
              'Beer': 'Tribus',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Ilkley',
              'Beer': 'Blonde',
              'Type': 'Blonde',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewery': 'Ilkley',
              'Beer': 'Mangoes Overboard',
              'Type': 'Wit',
              'ABV': 4.9,
              'Description': ''
            },
            {
              'Brewery': 'Lecale',
              'Beer': 'Legbiter',
              'Type': 'Red',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Lecale',
              'Beer': 'White Knight',
              'Type': 'Lager',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Long Man',
              'Beer': 'Old Man',
              'Type': 'Dark',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Ludlow',
              'Beer': 'Gold',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Millstone',
              'Beer': 'True Grit',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Mantle',
              'Beer': 'Moho',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Mantle',
              'Beer': 'Rock Steady',
              'Type': 'Golden',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Milestone',
              'Beer': 'Raspberry Wheat',
              'Type': 'Wheat',
              'ABV': 5.6,
              'Description': ''
            },
            {
              'Brewery': 'Nook',
              'Beer': 'Funky Banana',
              'Type': 'Fruit',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Nook',
              'Beer': 'Elderflower',
              'Type': 'Fruit',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Nook',
              'Beer': 'Peachy Pale',
              'Type': 'Fruit',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Northern Monk (collab)',
              'Beer': 'Don\'t Mess With MCR',
              'Type': 'Pale Ale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Neptune',
              'Beer': 'On the Bounty',
              'Type': 'Stout',
              'ABV': 5.8,
              'Description': ''
            },
            {
              'Brewery': 'Neptune',
              'Beer': 'Bolska',
              'Type': 'IPA',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewery': 'Neptune',
              'Beer': 'Big Sur',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Neptune',
              'Beer': 'King of the Sea',
              'Type': 'Bitter',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Orkney',
              'Beer': 'Red MacGregor',
              'Type': 'Ruby',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Orkney',
              'Beer': 'Red MacGregor',
              'Type': 'Ruby',
              'ABV': '',
              'Description': ''
            },
            {
              'Brewery': 'Orkney',
              'Beer': 'Dark Island',
              'Type': 'Dark',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewery': 'Outstanding',
              'Beer': 'Blond',
              'Type': 'Blond',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Outstanding',
              'Beer': 'Stout',
              'Type': 'Stout',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewery': 'Outstanding',
              'Beer': 'Red',
              'Type': 'Red',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Outstanding',
              'Beer': 'Imperial IPA',
              'Type': 'IPA',
              'ABV': 7.4,
              'Description': ''
            },
            {
              'Brewery': 'Outstanding',
              'Beer': 'Hallelujah',
              'Type': 'Rye',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Pomona Island',
              'Beer': 'APA',
              'Type': 'Pale',
              'ABV': 5.3,
              'Description': ''
            },
            {
              'Brewery': 'Pomona Island',
              'Beer': 'Pale',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Pomona Island',
              'Beer': 'Session IPA',
              'Type': 'Session IPA',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Pomona Island',
              'Beer': 'Stout',
              'Type': 'Stout',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Phoenix',
              'Beer': 'Wobbly Bob',
              'Type': 'English Strong',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewery': 'Purple Moose',
              'Beer': 'Glaslyn Ale',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Raw',
              'Beer': 'Grey Ghost IPA',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewery': 'Redwillow',
              'Beer': 'Faithless 91: Centennial/Simcoe Pale',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewery': 'Redwillow',
              'Beer': 'Shameless',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewery': 'Redwillow',
              'Beer': 'Smokey Maple Stout',
              'Type': 'Stout',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Slater\'s',
              'Beer': 'Autumn Red',
              'Type': 'Red',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Slater\'s',
              'Beer': 'Premium Best Bitter',
              'Type': 'Best Bitter',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Silver Brewhouse',
              'Beer': 'Brickworks Bitter',
              'Type': 'Bitter',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Siren',
              'Beer': 'Broken Dream',
              'Type': 'Stout',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewery': 'Siren',
              'Beer': 'Undercurrent',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewery': 'Siren',
              'Beer': 'Yulu',
              'Type': 'Pale',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewery': 'Siren',
              'Beer': 'Suspended in Cereal',
              'Type': 'Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Stubborn Mule',
              'Beer': 'Li\'l Napoleon Pale Ale',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewery': 'Stubborn Mule',
              'Beer': 'Pre-Prohibition Cream Ale',
              'Type': 'Pale',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewery': 'Stubborn Mule',
              'Beer': 'IPA Single Hop',
              'Type': 'IPA',
              'ABV': 5.7,
              'Description': ''
            },
            {
              'Brewery': 'Seven Bro7hers',
              'Beer': 'EPA',
              'Type': 'Pale',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewery': 'Seven Bro7hers',
              'Beer': 'Session',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Seven Bro7hers',
              'Beer': 'Marshmallow Stout',
              'Type': 'Stout',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Thirst Class',
              'Beer': 'Ghost Juice',
              'Type': 'APA',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewery': 'Thirst Class',
              'Beer': 'Cherry Cross the Mersey',
              'Type': 'Cherry Stout',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewery': 'Thirst Class',
              'Beer': 'Hoppy Go Lucky',
              'Type': 'Session Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewery': 'Tiny Rebel',
              'Beer': 'Cwtch',
              'Type': 'Red',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewery': 'Tiny Rebel',
              'Beer': 'Stay Puft',
              'Type': 'Marshmallow Porter',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewery': 'Tiny Rebel',
              'Beer': 'Citra Milkshake',
              'Type': 'Speciality',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Tiny Rebel',
              'Beer': 'Fugg Life',
              'Type': 'British Pale',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Tiny Rebel',
              'Beer': 'FUBAR',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewery': 'Titanic',
              'Beer': 'Plum Porter',
              'Type': 'Fruit Porter',
              'ABV': 4.9,
              'Description': ''
            },
            {
              'Brewery': 'Track',
              'Beer': 'Sonoma',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Thornbridge',
              'Beer': 'Jaipur',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewery': 'Uprising',
              'Beer': 'Treason',
              'Type': 'IPA',
              'ABV': 5.8,
              'Description': ''
            },
            {
              'Brewery': 'Uprising',
              'Beer': 'All Day Pale',
              'Type': 'Pale',
              'ABV': 2.7,
              'Description': ''
            },
            {
              'Brewery': 'Windsor & Eton',
              'Beer': 'Knight of the Garter',
              'Type': 'Golden Ale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewery': 'Windsor & Eton',
              'Beer': 'Conqueror',
              'Type': 'Black IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewery': 'Wild Weather',
              'Beer': 'The Tropical',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewery': 'Wild Weather',
              'Beer': 'Serendipity',
              'Type': 'APA',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewery': 'Wild Weather',
              'Beer': 'Never Forget Your First Time',
              'Type': 'IPA',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewery': 'Wincle',
              'Beer': 'Sir Philip',
              'Type': 'Best Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewery': 'Wincle',
              'Beer': 'Rambler',
              'Type': 'Amber',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewery': 'Wincle',
              'Beer': 'Full Fat',
              'Type': 'Milk Porter',
              'ABV': 4.6,
              'Description': ''
            }
          ];
    });