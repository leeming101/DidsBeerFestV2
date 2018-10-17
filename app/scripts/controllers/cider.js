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

        $scope.ciderList = [{
                'Brewer': 'Broadoak',
                'Name': 'Mango Cider',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Pheasant Plucker',
                'Type': 'Fruity Cider',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Strawberry',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Lily The Pink',
                'Type': 'Fruity Cider',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Nell Gwynne',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Ruby Tuesday',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Slighty Foxed',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Gwatkins',
                'Name': 'Red Diesel',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Gwynt y Ddraig',
                'Name': 'Autumn Magic',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Blackberry/Elderflower',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Raspberry',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Pink Grapefruit',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Strawberry/Lime',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Elderflower Gin/Tonic',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Fruit Bat Blackcurrant',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Tumbledown Fruit Bat',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Ginger',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Snailsbank',
                'Name': 'Rhubarb',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Handbrake Damson',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Flat Tyre',
                'Type': 'Fruity Cider',
                'ABV': 4,
                'Description': ''
            },
            {
                'Brewer': 'Winkleigh',
                'Name': 'Sams Blackcurrant',
                'Type': 'Fruity Cider',
                'ABV': 4,
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
                'Brewer': 'Gwynt y Ddraig',
                'Name': '2 Trees',
                'Type': 'Perry',
                'ABV': 4.5,
                'Description': ''
            },
            {
                'Brewer': 'Ross on Wye',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': 6.5,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': 7.4,
                'Description': ''
            },
            {
                'Brewer': 'Cleeve Orchard',
                'Name': 'Perry',
                'Type': 'Perry',
                'ABV': 6.5,
                'Description': ''
            },
            {
                'Brewer': 'Biddenden',
                'Name': 'Perry',
                'Type': 'Cider',
                'ABV': 8,
                'Description': ''
            },
            {
                'Brewer': 'Broadoak',
                'Name': 'Moonshine',
                'Type': 'Cider',
                'ABV': 7.5,
                'Description': ''
            },
            {
                'Brewer': 'Celtic Marches',
                'Name': 'Thundering Molly',
                'Type': 'Cider',
                'ABV': 5.2,
                'Description': ''
            },
            {
                'Brewer': 'Countryman',
                'Name': 'Dry',
                'Type': 'Cider',
                'ABV': 6.5,
                'Description': ''
            },
            {
                'Brewer': 'Crossmans',
                'Name': 'Dry',
                'Type': 'Cider',
                'ABV': 6,
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
                'Name': 'Impeared',
                'Type': 'Cider',
                'ABV': 7.4,
                'Description': ''
            },
            {
                'Brewer': 'Double Vision',
                'Name': 'Strawberry',
                'Type': 'Cider',
                'ABV': 5.3,
                'Description': ''
            },
            {
                'Brewer': 'Green Valley',
                'Name': 'Sweet',
                'Type': 'Cider',
                'ABV': 5.5,
                'Description': ''
            },
            {
                'Brewer': 'Green Valley',
                'Name': 'Vintage',
                'Type': 'Cider',
                'ABV': 8.3,
                'Description': ''
            },
            {
                'Brewer': 'Gwatkins',
                'Name': 'Yarlington Mill',
                'Type': 'Cider',
                'ABV': 7.5,
                'Description': ''
            },
            {
                'Brewer': 'Gwynt y Ddraig',
                'Name': 'Black Dragon',
                'Type': 'Cider',
                'ABV': 7.2,
                'Description': ''
            },
            {
                'Brewer': 'Hecks',
                'Name': 'Port Wine',
                'Type': 'Cider',
                'ABV': 5,
                'Description': ''
            },
            {
                'Brewer': 'Mad Hatters',
                'Name': 'Farting Dog',
                'Type': 'Cider',
                'ABV': 6.5,
                'Description': ''
            },
            {
                'Brewer': 'Rich\'s ',
                'Name': 'Farmhouse',
                'Type': 'Cider',
                'ABV': 6,
                'Description': ''
            },
            {
                'Brewer': 'Rich\'s ',
                'Name': 'Legbender',
                'Type': 'Cider',
                'ABV': 6,
                'Description': ''
            },
            {
                'Brewer': 'Ross on Wye',
                'Name': 'Cider',
                'Type': 'Cider',
                'ABV': 5.5,
                'Description': ''
            },
            {
                'Brewer': 'Sheppys',
                'Name': 'Sweet',
                'Type': 'Cider',
                'ABV': 5,
                'Description': ''
            },
            {
                'Brewer': 'Thatchers',
                'Name': 'Traditional',
                'Type': 'Cider',
                'ABV': 6,
                'Description': ''
            },
            {
                'Brewer': 'Thatchers',
                'Name': 'Chedder Valley',
                'Type': 'Cider',
                'ABV': 6,
                'Description': ''
            },
            {
                'Brewer': 'W.C.',
                'Name': 'Janets Jungle Juice',
                'Type': 'Cider',
                'ABV': 6.5,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Family Reserve',
                'Type': 'Cider',
                'ABV': 5,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Old Rosie',
                'Type': 'Cider',
                'ABV': 7.3,
                'Description': ''
            },
            {
                'Brewer': 'Westons',
                'Name': 'Rosies Pig',
                'Type': 'Cider',
                'ABV': 4.8,
                'Description': ''
            },
            {
                'Brewer': 'Winkleigh',
                'Name': 'Autumn Scrumpy',
                'Type': 'Cider',
                'ABV': 7.4,
                'Description': ''
            }
        ];
    });