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
              'Brewer': 'Abbeydale',
              'Name': 'Daily Bread',
              'Type': 'Bitter',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Abbeydale',
              'Name': 'Absolution',
              'Type': 'Golden',
              'ABV': 5.3,
              'Description': ''
            },
            {
              'Brewer': 'Abbeydale',
              'Name': 'Dr Morton\'s Perfect Number',
              'Type': 'Pale',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Bristol Beer Factory',
              'Name': 'Independence',
              'Type': 'US Pale',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewer': 'Bristol Beer Factory',
              'Name': 'Nova',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Bristol Beer Factory',
              'Name': 'Dove From Above',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Box Steam',
              'Name': 'Ghost Train',
              'Type': 'Ruby',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Box Steam',
              'Name': 'Piston Broke',
              'Type': 'Golden',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Chinook and Grapefruit',
              'Type': 'Pale',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Ginger Brew',
              'Type': 'Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Long Hop',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Bollington Best',
              'Type': 'Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Oat Mill Stout',
              'Type': '',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Bollington',
              'Name': 'Dinner Ale',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Binghams',
              'Name': 'Vanilla Stout',
              'Type': 'Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Blackjack',
              'Name': 'Devilfish',
              'Type': 'Saison',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Blackjack',
              'Name': 'Huell Melon IPA',
              'Type': 'IPA',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Blackjack',
              'Name': 'Jack and Gill',
              'Type': 'IPA',
              'ABV': 6.8,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Four Horseman',
              'Type': 'Oat Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Topaz',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Pale',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Uncle Dunkel',
              'Type': 'Dark Lager',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Gateway to Heaven',
              'Type': 'Blonde',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Brightside',
              'Name': 'Maverick',
              'Type': 'IPA',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Brotherhood',
              'Name': 'India Pale Ale',
              'Type': 'IPA',
              'ABV': 5.6,
              'Description': ''
            },
            {
              'Brewer': 'Brotherhood',
              'Name': 'Mango Pale Ale',
              'Type': 'Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Brinkburn St',
              'Name': 'Tyne Titans',
              'Type': 'Session IPA',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Brinkburn St',
              'Name': 'Byker Brown Ale',
              'Type': 'Brown',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Brinkburn St',
              'Name': 'House of the Rising Sun',
              'Type': 'Choc Rasp Porter',
              'ABV': 7.2,
              'Description': ''
            },
            {
              'Brewer': 'Charnwood',
              'Name': 'Salvation',
              'Type': 'Golden',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Charnwood',
              'Name': 'Hubble Bubble',
              'Type': 'Amber',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Cross bay',
              'Name': 'Green Eyed Monster',
              'Type': 'Pale (green hop)',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewer': 'Cross bay',
              'Name': 'Witching Hour',
              'Type': 'Wheat',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Cross bay',
              'Name': 'R.I.P.A.',
              'Type': 'Red IPA',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Chapter',
              'Name': 'Dead Man\'s Fist',
              'Type': 'Smoked Porter',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewer': 'Chapter',
              'Name': 'Parabola',
              'Type': 'Pale',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewer': 'Chapter',
              'Name': 'Temos Tanta',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Cumbrian',
              'Name': 'Loweswater Gold',
              'Type': 'Golden',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Chantry',
              'Name': 'Didsbury Beer Festival',
              'Type': 'Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewer': 'Chantry',
              'Name': 'Snoqualmie',
              'Type': 'Pale',
              'ABV': 5.1,
              'Description': ''
            },
            {
              'Brewer': 'Chantry',
              'Name': 'Diamond Black',
              'Type': 'Stout',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Chantry',
              'Name': 'Special Reserve',
              'Type': 'Strong Bitter',
              'ABV': 6.3,
              'Description': ''
            },
            {
              'Brewer': 'Chantry',
              'Name': 'New York Pale',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewer': 'Downlands',
              'Name': 'Red October',
              'Type': 'Red',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Downlands',
              'Name': 'Hop Contract #10',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Downlands',
              'Name': 'Green Hopped Root Thirteen',
              'Type': 'Pale green hopped',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewer': 'Downlands',
              'Name': 'Bramber',
              'Type': 'American Amber',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Dunham Massey',
              'Name': 'Deer Beer',
              'Type': 'Amber',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Dunham Massey',
              'Name': 'Dark Mild',
              'Type': 'Mild',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Dunham Massey',
              'Name': 'Chocolate Cherry Mild',
              'Type': 'Mild',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Dunham Massey',
              'Name': 'East India Pale Ale',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewer': 'Donkeystone',
              'Name': 'APA',
              'Type': 'American Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Donkeystone',
              'Name': 'Cotton Clouds',
              'Type': 'Session Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Donkeystone',
              'Name': 'Javanilla',
              'Type': 'Coffee&Vanilla Stout',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Donkeystone',
              'Name': 'Bray',
              'Type': 'Amber',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'ELB',
              'Name': 'Jamboree',
              'Type': 'Golden',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'ELB',
              'Name': 'Orchid',
              'Type': 'Mild',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewer': 'ELB',
              'Name': 'Walthamstow Beer',
              'Type': 'Green hop pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'First Chop',
              'Name': 'PIP',
              'Type': 'Grapefruit saison',
              'ABV': 6.3,
              'Description': ''
            },
            {
              'Brewer': 'First Chop',
              'Name': 'POP',
              'Type': 'IPA',
              'ABV': 5.4,
              'Description': ''
            },
            {
              'Brewer': 'First Chop',
              'Name': 'RED',
              'Type': 'Red',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewer': 'Flagship',
              'Name': 'Level',
              'Type': 'Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Flagship',
              'Name': 'Century',
              'Type': 'IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Grafton',
              'Name': 'Framboise',
              'Type': 'Speciality',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Grafton',
              'Name': 'Coco Loco',
              'Type': 'Speciality',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Heritage',
              'Name': 'St Modwen',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Holden\'s',
              'Name': 'Golden Glow',
              'Type': 'Golden',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Hop and Stagger',
              'Name': 'Bridgnorth Porter',
              'Type': 'Porter',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Hop and Stagger',
              'Name': 'Triple Hop IPA',
              'Type': 'IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Hop and Stagger',
              'Name': 'Solstice Rouge',
              'Type': 'Belgium Style',
              'ABV': 6.8,
              'Description': ''
            },
            {
              'Brewer': 'Hawkshead',
              'Name': 'Great White',
              'Type': 'Wheat',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Hawkshead',
              'Name': 'Red',
              'Type': 'Red',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Hawkshead',
              'Name': 'Windermere Pale',
              'Type': 'Pale',
              'ABV': 3.5,
              'Description': ''
            },
            {
              'Brewer': 'Hawkshead',
              'Name': 'NZPA',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewer': 'Inveralmond',
              'Name': 'Daracha',
              'Type': 'Ruby',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Inveralmond',
              'Name': 'Ossian',
              'Type': 'Golden',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewer': 'Inveralmond',
              'Name': 'Lia Fail',
              'Type': 'Dark',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewer': 'Ilkley',
              'Name': 'Ultravox',
              'Type': 'Lager',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Ilkley',
              'Name': 'Tribus',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Ilkley',
              'Name': 'Blonde',
              'Type': 'Blonde',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewer': 'Ilkley',
              'Name': 'Mangoes Overboard',
              'Type': 'Wit',
              'ABV': 4.9,
              'Description': ''
            },
            {
              'Brewer': 'Lecale',
              'Name': 'Legbiter',
              'Type': 'Red',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Lecale',
              'Name': 'White Knight',
              'Type': 'Lager',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Long Man',
              'Name': 'Old Man',
              'Type': 'Dark',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Ludlow',
              'Name': 'Gold',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Millstone',
              'Name': 'True Grit',
              'Type': 'Pale',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Mantle',
              'Name': 'Moho',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Mantle',
              'Name': 'Rock Steady',
              'Type': 'Golden',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Milestone',
              'Name': 'Raspberry Wheat',
              'Type': 'Wheat',
              'ABV': 5.6,
              'Description': ''
            },
            {
              'Brewer': 'Nook',
              'Name': 'Funky Banana',
              'Type': 'Fruit',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Nook',
              'Name': 'Elderflower',
              'Type': 'Fruit',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Nook',
              'Name': 'Peachy Pale',
              'Type': 'Fruit',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Northern Monk (collab)',
              'Name': 'Don\'t Mess With MCR',
              'Type': 'Pale Ale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Neptune',
              'Name': 'On the Bounty',
              'Type': 'Stout',
              'ABV': 5.8,
              'Description': ''
            },
            {
              'Brewer': 'Neptune',
              'Name': 'Bolska',
              'Type': 'IPA',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewer': 'Neptune',
              'Name': 'Big Sur',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Neptune',
              'Name': 'King of the Sea',
              'Type': 'Bitter',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Orkney',
              'Name': 'Red MacGregor',
              'Type': 'Ruby',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Orkney',
              'Name': 'Red MacGregor',
              'Type': 'Ruby',
              'ABV': '',
              'Description': ''
            },
            {
              'Brewer': 'Orkney',
              'Name': 'Dark Island',
              'Type': 'Dark',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewer': 'Outstanding',
              'Name': 'Blond',
              'Type': 'Blond',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Outstanding',
              'Name': 'Stout',
              'Type': 'Stout',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewer': 'Outstanding',
              'Name': 'Red',
              'Type': 'Red',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Outstanding',
              'Name': 'Imperial IPA',
              'Type': 'IPA',
              'ABV': 7.4,
              'Description': ''
            },
            {
              'Brewer': 'Outstanding',
              'Name': 'Hallelujah',
              'Type': 'Rye',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Pomona Island',
              'Name': 'APA',
              'Type': 'Pale',
              'ABV': 5.3,
              'Description': ''
            },
            {
              'Brewer': 'Pomona Island',
              'Name': 'Pale',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Pomona Island',
              'Name': 'Session IPA',
              'Type': 'Session IPA',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Pomona Island',
              'Name': 'Stout',
              'Type': 'Stout',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Phoenix',
              'Name': 'Wobbly Bob',
              'Type': 'English Strong',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewer': 'Purple Moose',
              'Name': 'Glaslyn Ale',
              'Type': 'Golden',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Raw',
              'Name': 'Grey Ghost IPA',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewer': 'Redwillow',
              'Name': 'Faithless 91: Centennial/Simcoe Pale',
              'Type': 'Pale',
              'ABV': 4.3,
              'Description': ''
            },
            {
              'Brewer': 'Redwillow',
              'Name': 'Shameless',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewer': 'Redwillow',
              'Name': 'Smokey Maple Stout',
              'Type': 'Stout',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Slater\'s',
              'Name': 'Autumn Red',
              'Type': 'Red',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Slater\'s',
              'Name': 'Premium Best Bitter',
              'Type': 'Best Bitter',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Silver Brewhouse',
              'Name': 'Brickworks Bitter',
              'Type': 'Bitter',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Siren',
              'Name': 'Broken Dream',
              'Type': 'Stout',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewer': 'Siren',
              'Name': 'Undercurrent',
              'Type': 'Pale',
              'ABV': 4.5,
              'Description': ''
            },
            {
              'Brewer': 'Siren',
              'Name': 'Yulu',
              'Type': 'Pale',
              'ABV': 3.6,
              'Description': ''
            },
            {
              'Brewer': 'Siren',
              'Name': 'Suspended in Cereal',
              'Type': 'Pale',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Stubborn Mule',
              'Name': 'Li\'l Napoleon Pale Ale',
              'Type': 'Pale',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewer': 'Stubborn Mule',
              'Name': 'Pre-Prohibition Cream Ale',
              'Type': 'Pale',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewer': 'Stubborn Mule',
              'Name': 'IPA Single Hop',
              'Type': 'IPA',
              'ABV': 5.7,
              'Description': ''
            },
            {
              'Brewer': 'Seven Bro7hers',
              'Name': 'EPA',
              'Type': 'Pale',
              'ABV': 4.8,
              'Description': ''
            },
            {
              'Brewer': 'Seven Bro7hers',
              'Name': 'Session',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Seven Bro7hers',
              'Name': 'Marshmallow Stout',
              'Type': 'Stout',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Thirst Class',
              'Name': 'Ghost Juice',
              'Type': 'APA',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewer': 'Thirst Class',
              'Name': 'Cherry Cross the Mersey',
              'Type': 'Cherry Stout',
              'ABV': 4.7,
              'Description': ''
            },
            {
              'Brewer': 'Thirst Class',
              'Name': 'Hoppy Go Lucky',
              'Type': 'Session Pale',
              'ABV': 4.1,
              'Description': ''
            },
            {
              'Brewer': 'Tiny Rebel',
              'Name': 'Cwtch',
              'Type': 'Red',
              'ABV': 4.6,
              'Description': ''
            },
            {
              'Brewer': 'Tiny Rebel',
              'Name': 'Stay Puft',
              'Type': 'Marshmallow Porter',
              'ABV': 5.2,
              'Description': ''
            },
            {
              'Brewer': 'Tiny Rebel',
              'Name': 'Citra Milkshake',
              'Type': 'Speciality',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Tiny Rebel',
              'Name': 'Fugg Life',
              'Type': 'British Pale',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Tiny Rebel',
              'Name': 'FUBAR',
              'Type': 'Pale',
              'ABV': 4.4,
              'Description': ''
            },
            {
              'Brewer': 'Titanic',
              'Name': 'Plum Porter',
              'Type': 'Fruit Porter',
              'ABV': 4.9,
              'Description': ''
            },
            {
              'Brewer': 'Track',
              'Name': 'Sonoma',
              'Type': 'Pale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Thornbridge',
              'Name': 'Jaipur',
              'Type': 'IPA',
              'ABV': 5.9,
              'Description': ''
            },
            {
              'Brewer': 'Uprising',
              'Name': 'Treason',
              'Type': 'IPA',
              'ABV': 5.8,
              'Description': ''
            },
            {
              'Brewer': 'Uprising',
              'Name': 'All Day Pale',
              'Type': 'Pale',
              'ABV': 2.7,
              'Description': ''
            },
            {
              'Brewer': 'Windsor & Eton',
              'Name': 'Knight of the Garter',
              'Type': 'Golden Ale',
              'ABV': 3.8,
              'Description': ''
            },
            {
              'Brewer': 'Windsor & Eton',
              'Name': 'Conqueror',
              'Type': 'Black IPA',
              'ABV': 5,
              'Description': ''
            },
            {
              'Brewer': 'Wild Weather',
              'Name': 'The Tropical',
              'Type': 'IPA',
              'ABV': 6,
              'Description': ''
            },
            {
              'Brewer': 'Wild Weather',
              'Name': 'Serendipity',
              'Type': 'APA',
              'ABV': 3.9,
              'Description': ''
            },
            {
              'Brewer': 'Wild Weather',
              'Name': 'Never Forget Your First Time',
              'Type': 'IPA',
              'ABV': 5.5,
              'Description': ''
            },
            {
              'Brewer': 'Wincle',
              'Name': 'Sir Philip',
              'Type': 'Best Bitter',
              'ABV': 4.2,
              'Description': ''
            },
            {
              'Brewer': 'Wincle',
              'Name': 'Rambler',
              'Type': 'Amber',
              'ABV': 4,
              'Description': ''
            },
            {
              'Brewer': 'Wincle',
              'Name': 'Full Fat',
              'Type': 'Milk Porter',
              'ABV': 4.6,
              'Description': ''
            }
          ];
    });