'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CraftCtrl
 * @description
 * # CraftCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('CraftCtrl', function ($scope) {
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

    $scope.filterFunction = function (element) {
      return element.name.match(/^Ma/) ? true : false;
    };

    $scope.craftList = [
      {
        'Brewer': 'Beavertown',
        'Name': 'Beavertown IPA',
        'Type': 'IPA',
        'ABV': 5.4,
        'Description': 'The concept was to create a juicy tropical beer. Rammed with juicy malts and huge tropical aromas of mango and grapefruit. Whole leaf American hops are added at the end of the boil to give huge hop flavour. The beer is then dry hopped for days, driving the punchy aroma so you can smell it from miles away.'
      },
      {
        'Brewer': 'Burton Rd',
        'Name': 'Burton Rd Pale Ale',
        'Type': 'IPA',
        'ABV': 4.6,
        'Description': '\"Our debut beer festival, and very excited about it. Our pale ale is light and refreshing with a biscuity aftertaste. But we want your thoughts on the taste so tweet to @burtonrdbrewing and we\'ll choose the best descriptions for our next festival. And there may be a prize for our favourite one.\" Kindly Sponsored By Burton Rd Brewery, Didsbury'
      },
      {
        'Brewer': 'Geipel',
        'Name': 'Aloha',
        'Type': 'Pilsner',
        'ABV': 4.4,
        'Description': 'A collaboration with Heavy Industry Brewing - a hazy golden pilsner which has been dry-hopped for an exotic aroma. It reminded us of a nearby tropical paradise: North Wales\' Bala Lake. Crisp pilsner flavour with an edge of sourness. Exotic hop bite and papaya-like aroma.'
      },
      {
        'Brewer': 'Geipel',
        'Name': 'Hefeweizen',
        'Type': 'Wheat',
        'ABV': 5.6,
        'Description': 'A golden wheat beer in the traditional Bavarian style. 75% wheat malt and Spalt Select hops. Gentle wheat malt notes and rich aroma of banana and coriander. Refreshing, lingering finish with some lemon citrus notes.'
      },
      {
        'Brewer': 'Geipel',
        'Name': 'Pilsner',
        'Type': 'Pilsner',
        'ABV': 4.4,
        'Description': 'A golden lager with depth and complexity, brewed with Pearle hops. Slightly floral, hoppy perfume aroma. Dry refreshing taste and finish with hints of fruit.'
      },
      {
        'Brewer': 'Geipel',
        'Name': 'Zoigl',
        'Type': 'Amber',
        'ABV': 5.4,
        'Description': 'A malty amber lager inspired by the traditional communal brews of North-Eastern Bavaria. Brewed from Hersbucker hops giving a biscuity malty flavour withe arthy hops underlying chocolate cherry fruit in the lingering finish.'
      },
      {
        'Brewer': 'Hawkshead',
        'Name': 'Lakeland Lager',
        'Type': 'Lager',
        'ABV': 5.0,
        'Description': 'A crisp refreshing premium beer, brewed with lager malt, wheat, European hops, soft Lakeland water and ale yeast, top fermented for maximum flavour.'
      },
      {
        'Brewer': 'The Kernel',
        'Name': 'Table Beer',
        'Type': 'Pale Ale',
        'ABV': 3.3,
        'Description': 'Brewed in Bermondsey with Columbus, Summit and Citra hops. Citrus and tropical fruit chracters with a dry moderately bitter finish. Kindly Sponsored By The Epicurian, Didsbury'
      },
      {
        'Brewer': 'Liverpool Craft Beer Co',
        'Name': 'Love Lane Pale Ale',
        'Type': 'Pale Ale',
        'ABV': 4.4,
        'Description': 'Originally brewed under a railway bridge on the famous Liverpool Love Lane. The biscuit malt balances the whole leaf citrus hops for a refreshing lasting taste. Kindly Sponsored By Greens Restaurant, Didsbury'
      },
      {
        'Brewer': 'Marble',
        'Name': 'Legonda',
        'Type': 'IPA',
        'ABV': 5,
        'Description': 'Craft India Pale Ale with a golden malt base complementing a quadruple addition of hops. A floral and bitter finish.'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'Outstanding IPA',
        'Type': 'IPA',
        'ABV': 5.5,
        'Description': 'Dry and bitter with a good load of hop. Kindly Sponsored By Outstanding Brewery, Bury'
      },
      {
        'Brewer': 'Powderkeg',
        'Name': 'Mosaic RyePA',
        'Type': 'IPA',
        'ABV': 5,
        'Description': 'This is a pale ale/IPA crossover with the addition of rye that adds a touch of spice and complexity to the fulsome malt character. It is then dry hopped with the stunning Mosaic hop from Americato give big tropical fruit aromas and general all-round awesomeness. Kindly Sponsored By Bottle, Heaton Moor'
      }
    ];
  });