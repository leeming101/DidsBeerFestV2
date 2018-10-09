'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CiderCtrl
 * @description
 * # CiderCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('CiderCtrl', function($scope) {
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
                'Brewer': 'Biddenden',
                'Name': 'Med',
                'Type': '',
                'ABV': 8,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Moonshine',
                'Type': '',
                'ABV': 7.5,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': 7.5,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Mango Cider',
                'Type': 'Cider',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Pheasant Plucker',
                'Type': '',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Strawberry Cider',
                'Type': 'Cider',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Lilly the Pink',
                'Type': '',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Thundering Molly',
                'Type': '',
                'ABV': 5.2,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Nell Gwynne',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Ruby Tuesday',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Slightly Foxed',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Countryman',
                'Name': 'Dry Cider',
                'Type': 'Cider',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Cleeve Orchard',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Crossmans',
                'Name': 'Dry',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Double Vision',
                'Name': 'Cider',
                'Type': 'Cider',
                'ABV': 7.4,
                'Description': ''
            },
            {
                'Brewer': 'Double Vision',
                'Name': 'Impeared Vision',
                'Type': '',
                'ABV': 7.4,
                'Description': ''
            },
            {
                'Brewer': 'Double Vision',
                'Name': 'Strawberry',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Green Valley',
                'Name': 'Sweet',
                'Type': '',
                'ABV': 6.8,
                'Description': ''
            },
            {
                'Brewer': 'Green Valley',
                'Name': 'Vintage',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Gwatkins',
                'Name': 'Red Diesel',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Gwatkins',
                'Name': 'Yarlington Mill',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'GyD',
                'Name': 'Autumn Magic',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'GyD',
                'Name': 'Black dragon',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'GyD',
                'Name': '2 Trees Perry',
                'Type': 'Perry',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Hecks',
                'Name': 'Port Wine',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Mad Hatters',
                'Name': 'Farting Dog',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Rich\'s',
                'Name': 'Farmhouse',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Rich\'s',
                'Name': 'Legbender',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Ross on Wye',
                'Name': 'Cider',
                'Type': 'Cider',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Ross on Wye',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Blackberry and Elderflower',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Raspberry',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Sweet',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Elderflower G and T',
                'Type': '',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Fruit Bat',
                'Type': '',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Rhubarb',
                'Type': '',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Mango',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Strawberry and Lime',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Ginger',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Pink Grapefruit',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Thatchers',
                'Name': 'Trad',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Thatchers',
                'Name': 'Cheddar Valley ',
                'Type': 'Medium',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'West C',
                'Name': 'Janets Jungle Juice',
                'Type': '',
                'ABV': 6,
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Family Reserve',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Flat Tyre',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Handbrake',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Old Rosie',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Westons Country',
                'Name': 'Rosies Pig',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Winkleigh',
                'Name': 'Autumn Scrumpy',
                'Type': '',
                'ABV': '',
                'Description': ''
            },
            {
                'Brewer': 'Winkleigh',
                'Name': 'Sams Blackcurrant',
                'Type': '',
                'ABV': '',
                'Description': ''
            }
        ];
    });