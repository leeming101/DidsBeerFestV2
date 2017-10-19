'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CraftCtrl
 * @description
 * # CraftCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('CraftCtrl', function($scope) {
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
                'Name': 'Lakeland Lager',
                'Type': 'Lager',
                'ABV': 5,
                'Description': 'Crisp pilsner-style lager with a clean, refreshing flavour from Lakeland water.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Pilsner',
                'Type': 'Pilsner',
                'ABV': 4.6,
                'Description': 'A golden lager with depth and complexity.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Hefeweisse',
                'Type': 'Wheat Beer',
                'ABV': 5.6,
                'Description': 'Golden wheat beer in the traditional Bavarian style. Wheat malt and Spalt hops.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Dunkelweisse',
                'Type': 'Wheat Beer',
                'ABV': 5.4,
                'Description': 'A smokier wheat beer.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Aloha',
                'Type': 'Pilsner',
                'ABV': 4.4,
                'Description': 'Collaboration with Heavy Industry brewery. Hazy golden pilsner dry-hopped for an exotic aroma.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Zoigl',
                'Type': 'Amber',
                'ABV': 5.4,
                'Description': 'A malty amber lager inspired by the traditional brews of North-Eastern Bavaria. Brewed with Hersbrucker hops.'
            },
            {
                'Brewer': 'Geipel',
                'Name': 'Golden Gate',
                'Type': 'Amber',
                'ABV': 5,
                'Description': 'San Francisco-style amber lager. Full-bodied malt balanced with American hops.'
            },
            {
                'Brewer': 'Freedom',
                'Name': 'Pacific',
                'Type': 'Pale Ale',
                'ABV': 4.4,
                'Description': 'A deep golden fruity pale made with pilsner malt and caramalt alongside Motueka, Pacific Jade and Rakau hops. SPONSORED BY BOTANIST BAR AND RESTAURANT, DIDSBURY.'
            },
            {
                'Brewer': 'Beatnikz Republic',
                'Name': 'Beach Bum',
                'Type': 'American Pale Ale',
                'ABV': 5,
                'Description': 'Beer for drinking in the sun, preferably in California. American Pale Ale with Mosaic and Azacca hops.'
            },
            {
                'Brewer': 'Beatnikz Republic',
                'Name': 'Generation',
                'Type': 'IPA',
                'ABV': 6.5,
                'Description': 'The malt base is simple, the hops big and intense. Mosaic, Simcoe and Ekuanot hops give full flavour and a bitter finish.'
            },
            {
                'Brewer': 'Beatnikz Republic',
                'Name': 'Riviera Dreamer',
                'Type': 'Wheat Beer',
                'ABV': 4.5,
                'Description': 'A medium-bodied citrus-forward wheat beer packed with grapefruit freshness.'
            },
            {
                'Brewer': 'Beatnikz Republic',
                'Name': 'Russian Riot',
                'Type': 'Stout',
                'ABV': 9,
                'Description': 'Massive stout with muscovado sugar, cherries and bourbon oak. Full of depth and character.'
            },
            {
                'Brewer': 'Brightside',
                'Name': 'Wildside V2 Session Pale Ale',
                'Type': 'Pale Ale',
                'ABV': 4,
                'Description': 'From Brightside brewery, pale ale brewed with juicy Simcoe and Calypso hops on a malt and wheat base, with dry hopping for an extra boost. GLUTEN FREE.'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'Table Beer',
                'Type': 'Pale Ale',
                'ABV': 3.3,
                'Description': 'A medium-bodied, hop-forward pale ale that belies its low ABV. Controlled fermentation produces a robust and refreshing beer.'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Pineapple',
                'Type': 'IPA',
                'ABV': 7.5,
                'Description': 'A double IPA fermented with pineapple and dry hopped with Galaxy and Citra. Brewed in collaboration with The Veil.'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Lychee Pale',
                'Type': 'IPA',
                'ABV': 6.5,
                'Description': 'Brewed in collaboration with Beijing\'s Jing-A brewery, this IPA is made with masses of lychees, and is dry hopped with Citra.'
            },
            {
                'Brewer': 'Cloudwater',
                'Name': 'Black Forest Stout',
                'Type': 'Stout',
                'ABV': 11.5,
                'Description': 'Brewed in collaboration with Norway\'s Lervig brewery, this full-bodied Imperial Stout is made with both sour and sweet cherry juice and plenty of ground Tonka beans.'
            },
            {
                'Brewer': 'Marble Beers',
                'Name': 'Lagonda',
                'Type': 'IPA',
                'ABV': 5,
                'Description': 'Classic IPA with citrus and floral hop notes and a dry, bitter finish.'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'Squawk IPA',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'Bold citrus flavours of orange peel, grapefruit and lychee, balanced with bready malt.'
            },
            {
                'Brewer': 'Squawk',
                'Name': 'Espresso Stout',
                'Type': 'Stout',
                'ABV': 6,
                'Description': 'Smooth stout with hints of caramel, coffee and chocolate.'
            },
            {
                'Brewer': 'Track Brewing Co',
                'Name': 'Sonoma',
                'Type': 'Pale Ale',
                'ABV': 3.8,
                'Description': 'Pale ale hopped with Centennial, Citra and Mosaic.'
            },
            {
                'Brewer': 'Alphabet',
                'Name': 'Charlie Don\'t Surf',
                'Type': 'IPA',
                'ABV': 4,
                'Description': 'Session IPA packed full of Antipodean hops with a nice bitter finish.'
            },
            {
                'Brewer': 'Alphabet',
                'Name': 'A to the K',
                'Type': 'Pale Ale',
                'ABV': 5.6,
                'Description': 'Oatmeal pale ale full of fresh hop bitterness and tempered with tropical fruit flavours. Very drinkable.'
            }
        ];
    });