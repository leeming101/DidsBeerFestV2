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

        $scope.craftList = [{
                'Brewer': 'Hawkshead',
                'Name': 'Lakeland',
                'Type': 'Lager',
                'ABV': 5,
                'Description': 'Crisp pilsner-style lager with a clean, refreshing flavour from Lakeland water'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Pilsner',
                'Type': 'Pilsner',
                'ABV': 4.6,
                'Description': 'German-style unfiltered pilsner using top quality German malt and De Perle hops'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Dunkelweisse',
                'Type': 'Wheat',
                'ABV': 5.4,
                'Description': 'Smoked malt adds richness to this low-hopped dark wheat beer'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Golden Gate',
                'Type': 'Amber',
                'ABV': 5,
                'Description': 'San Francisco-style \'Steam-beer\' amber lager. Full-bodied malt balanced with American hops'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Chaolsch',
                'Type': 'Kolsch',
                'ABV': 6.9,
                'Description': 'A strong, modern Kolsch-style beer brewed in collaboration with Heavy Industry and Wild Horse breweries'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Aloha',
                'Type': 'Pilsner',
                'ABV': 4.4,
                'Description': 'Collaboration with Heavy Industry brewery. Hazy golden pilsner dry-hopped for an exotic aroma'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Bock',
                'Type': 'Lager',
                'ABV': 6.5,
                'Description': 'Traditional Munich strong beer, full of rich and complex flavours'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Hefeweizen',
                'Type': 'Wheat',
                'ABV': 5.6,
                'Description': 'Traditional cloudy wheat beer of Bavaria. Flavours of banana, clove and coriander'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Zolgl',
                'Type': 'Amber',
                'ABV': 5.4,
                'Description': 'A malty amber lager inspired by the traditional brews of North-Eastern Bavaria'
            },
            {
                'Brewer': 'Alphabet',
                'Name': 'A to the K',
                'Type': 'Pale',
                'ABV': 5.6,
                'Description': 'Oatmeal pale ale full of fresh hop bitterness and tempered with tropical fruit flavours. Very drinkable.'
            },
            {
                'Brewer': 'Alphabet',
                'Name': 'Charlie Don\'t Surf ',
                'Type': 'IPA',
                'ABV': 4,
                'Description': 'Session IPA packed full of Antipodean hops with a nice bitter finish.'
            },
            {
                'Brewer': 'Beatnikz Rep.',
                'Name': 'Kentucky Riot',
                'Type': 'Stout',
                'ABV': 5,
                'Description': 'Full flavoured stout that uses bourbon oak and muscovado sugar'
            },
            {
                'Brewer': 'Beatnikz Rep.',
                'Name': 'New England IPA',
                'Type': 'IPA',
                'ABV': '',
                'Description': 'Hazy and juicy IPA thats been aggresively hopped for a fruity/floral taste'
            },
            {
                'Brewer': 'Beatnikz Rep.',
                'Name': 'Tropical Fiesta',
                'Type': 'Session IPA',
                'ABV': 4,
                'Description': 'Tropical new world hops combined with lower ABV for keeping the party going'
            },
            {
                'Brewer': 'Burton Road',
                'Name': 'IPA',
                'Type': 'IPA',
                'ABV': 5.6,
                'Description': 'Dry and refreshing with fruit, citrus and pine flavours'
            },
            {
                'Brewer': 'Burton Road',
                'Name': 'Session IPA',
                'Type': 'Session IPA',
                'ABV': 4,
                'Description': 'Light citrus and floral backed by a crisp finish'
            },
            {
                'Brewer': 'Burton Road',
                'Name': 'Pale Ale',
                'Type': 'Pale',
                'ABV': 4.8,
                'Description': 'An easy drinking and smooth pale ale'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Amber',
                'Type': 'Amber',
                'ABV': 5.1,
                'Description': 'Citrus aroma, marmalade flavour and deep toffee colour. Limited edition'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Autumn Pale',
                'Type': 'IPA',
                'ABV': 4,
                'Description': 'Cloudwater continue their traditional seasonal journey with this special Autumn IPA'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Hoppy Porter',
                'Type': 'Porter',
                'ABV': 5.5,
                'Description': 'Hoppy enough that it\'s like a black IPA in disguise as a porter '
            },
            {
                'Brewer': 'Marble',
                'Name': 'Lagonda',
                'Type': 'IPA',
                'ABV': 5,
                'Description': 'Classic IPA with citrus and floral hop notes and a dry, bitter finish'
            },
            {
                'Brewer': 'Pomona',
                'Name': 'APA',
                'Type': 'Pale Ale',
                'ABV': 5.3,
                'Description': 'Clean and golden, with peachy, earthy hop flavours (Simcoe, Chinook, Mosaic)'
            },
            {
                'Brewer': 'Pomona',
                'Name': 'Victoria\'s Secret ',
                'Type': 'IPA',
                'ABV': 5.6,
                'Description': 'Brand new! Hints of blackcurrant and tropical stone fruit flavours are expected when finished brewing in their magicians workshop by Media City'
            },
            {
                'Brewer': 'Runaway',
                'Name': 'American Brown',
                'Type': 'Brown Ale',
                'ABV': 5.7,
                'Description': 'Moreish brown ale with caramel sweetness balanced by big flavour US hops'
            },
            {
                'Brewer': 'Runaway',
                'Name': 'Gingerbread Stout',
                'Type': 'Stout',
                'ABV': 7.2,
                'Description': 'Brewed with parkin flavours and ginger and aged in bourbon barrels'
            },
            {
                'Brewer': 'Runaway',
                'Name': 'Smoked Red',
                'Type': 'Red Ale',
                'ABV': 6.3,
                'Description': 'Full bodied dark red ale with rum barrel smoked malts'
            },
            {
                'Brewer': 'Seven Bro7hers',
                'Name': 'Red',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'A refreshing amber ale with a crisp, malty body with blueberry spice. There really are 7 brothers brewing! And they have 4 sisters who are making gin too!'
            },
            {
                'Brewer': 'Seven Bro7hers',
                'Name': 'Watermelon',
                'Type': 'Wheat',
                'ABV': 4.5,
                'Description': 'A celebration of summer flavours, a wheat beer with an infusion of fresh watermelon.'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'Cali DIPA',
                'Type': 'IPA',
                'ABV': 8,
                'Description': 'Double IPA with fresh tropical flavourings'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'New England IPA',
                'Type': 'IPA',
                'ABV': 5.6,
                'Description': 'Hazy straw coloured IPA with grapefruit and tangerine flavours'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'Morus Gose',
                'Type': 'Saison',
                'ABV': 3.9,
                'Description': 'Clear and golden with light passion fruit, lemon and sea salt'
            },
            {
                'Brewer': 'Track',
                'Name': 'Sonoma',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'Pale ale hopped with Centennial, Citra and Mosaic hops that give a juicy, bright pale ale'
            }
        ];
    }]);