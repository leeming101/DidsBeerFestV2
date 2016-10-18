'use strict';
/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:CiderCtrl
 * @description
 * # CiderCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('CiderCtrl', function ($scope) {
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

    //example for js unit tests:
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.filterFunction = function (element) {
      return element.name.match(/^Ma/) ? true : false;
    };

    $scope.ciderList = [
      {
        'Brewer': 'Gwynt Y Ddraig',
        'Name': 'Autumn Magic',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Autumn Magic Cider & Blackberry bursts with a fruity aroma reminiscent of them good old autumn days.'
      },
      {
        'Brewer': 'Gwynt Y Ddraig',
        'Name': 'Black Dragon',
        'Type': 'Cider',
        'ABV': 7.2,
        'Description': ' Matured in oak barrels to producea cider rich in colour body and flavour with a fresh fruity aroma. Cider with the strength of wine.'
      },
      {
        'Brewer': 'Broad Oak Cider',
        'Name': 'Bristol Port',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'a fruity plum-coloured cider with an apple aroma.'
      },
      {
        'Brewer': 'Gwynt Y Ddraig',
        'Name': 'Celtic Warrior',
        'Type': 'Cider',
        'ABV': 5.5,
        'Description': 'An exquisite rich and golden colour with a crisp medium/sweet taste'
      },
      {
        'Brewer': 'Thatchers',
        'Name': 'Cheddar Valley',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'Naturally cloudy cider with a robust and distinctive taste From Sandford Somerset.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Country Perry',
        'Type': 'Cider',
        'ABV': 4.5,
        'Description': 'English perry made in Herefordshire.  Fermented and fully matured in old oak vats to develop an exquisite delicate light and fruity character.  Softly floral with a clear natural pale straw colour.'
      },
      {
        'Brewer': 'Crossmans Prime Farmhouse Cider',
        'Name': 'Crossmans Dry cider',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'A stiil dry cider made with a blend of apple varieties'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Elderflower Gin & Tonic',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Subtle apple aromas mixed with a delicate bitterness from the G&T and a fruity sweetness from the Elderflower. Perfect English Refreshment.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Family Reserve',
        'Type': 'Cider',
        'ABV': 5,
        'Description': 'Henry Westons Family Reserve is a tantalising smooth mellow cider. Its apple finish leaves a mature refreshing taste of bittersweet apples on the palate.'
      },
      {
        'Brewer': 'Gwatkin Cider',
        'Name': 'Farmhouse Perry',
        'Type': 'Perry',
        'ABV': 7,
        'Description': 'Gwatkins Farmhouse Perry is made from a blend of old fashioned varieties of pears harvested from the few remaining pear orchards of rural Herefordshire.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Flat Tyre Rhubarb Cider',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Medium-sweet cloudy cider paired with a refreshing infusion of rhubarb juice.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Hand Brake Damson Cider',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Made from Hereford apples with a generous helping of fruity damson juice. Hints of cherry and hedgerow fruits.'
      },
      {
        'Brewer': 'Hecks',
        'Name': 'Hecks Port Wine of Glastonbury',
        'Type': 'Cider',
        'ABV': 6.5,
        'Description': 'Produced from the port wine apples grown in the orchards overlooked by Glastonbury Tor to produce a traditional medium sweet cider'
      },
      {
        'Brewer': 'Double Vision Cider Co',
        'Name': 'Impeared Vision',
        'Type': 'Perry',
        'ABV': 7.4,
        'Description': ''
      },
      {
        'Brewer': 'Westcroft',
        'Name': 'Janet\'s Jungle Juice',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'Rich full bodied medium sweet cider. Made from 100% Somerset cider apple varieties.'
      },
      {
        'Brewer': 'Biddenden',
        'Name': 'Kentish  Strong Cider',
        'Type': 'Cider',
        'ABV': 8,
        'Description': 'Biddenden’s famous Strong Kentish cider is still and smooth with an exceptionally refreshing apple taste. Created using the traditional Barnes’ family recipe all Biddenden’s ciders are produced from a delicious blend of farm-pressed quality Kentish culinary and dessert apples. Available in Medium or Dry flavours.'
      },
      {
        'Brewer': 'Hecks',
        'Name': 'Kingston Black',
        'Type': 'Cider',
        'ABV': 6.5,
        'Description': 'Single variety sparkling medium cider made from the famous Kingston Black apple by sixth generation cider-makers the Hecks family in Street.'
      },
      {
        'Brewer': 'Rich\'s Cider',
        'Name': 'Legbender',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'Sweet Cider produced from local Somerset Apples aged in oak vats.'
      },
      {
        'Brewer': 'Celtic Marches',
        'Name': 'Lily the Pink',
        'Type': 'Cider',
        'ABV': 4.5,
        'Description': 'A medium fruity cider  gorgeous pink colour  made from 100% cider apples on our Herefordshire farm  intense fruity aroma  very drinkable.'
      },
      {
        'Brewer': 'Double Vision Cider Co',
        'Name': 'Medium Cider',
        'Type': 'Cider',
        'ABV': 7.4,
        'Description': 'From famous Kentish cider maker Double Vision in Marlpit Farm near Maidstone Kent. This dry cider is unfiltered clear pale yellow in colour sugary aroma with sweet cooking apples.'
      },
      {
        'Brewer': 'Broad Oak Cider',
        'Name': 'Moonshine',
        'Type': 'Cider',
        'ABV': 7.5,
        'Description': 'A classic cider skilfully blended with a crisp refreshing taste.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Old Banger',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Medium dry cloudy and slowly matured cider bursting with Herefordshire apples mixed with rich raspberry juice.'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Pig Ginger',
        'Type': 'Cider',
        'ABV': 4,
        'Description': ' Home / Ciders / Pig GingerPig Ginger£65.00 A clear and refreshing medium cider pepped up with freshly ground root ginger for a fiery kick!!'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Pig Squeal',
        'Type': 'Cider',
        'ABV': 7,
        'Description': 'A rich bronze cider that is smooth as it is tasty. Beautifully balanced with a satisfyingly rounded finish'
      },
      {
        'Brewer': 'Broad Oak Cider',
        'Name': 'Premium Perry',
        'Type': 'Perry',
        'ABV': 7.5,
        'Description': 'A sweet but refreshing perry with a fresh tasting pear flavour and a wonderful pear aroma. A CAMRA Gold Award winner in 2009.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Rosie\'s Pig',
        'Type': 'Cider',
        'ABV': 4.8,
        'Description': 'An easy drinking traditional cloudy medium dry cider blended to give a fresh apple flavour with hints of citrus and spice'
      },
      {
        'Brewer': 'Celtic Marches',
        'Name': 'Ruby Tuesday',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Produced by Celtic Marches in Herefordshire Abrahalls Ruby Tuesday is a delicious combination of apple and British raspberry juice and at 4% ABV it makes perfect refreshing drinking during summer days and nights.'
      },
      {
        'Brewer': 'Sheppy\'s Cider Ltd',
        'Name': 'Sheppy\'s Cider with Blackberries',
        'Type': 'Cider',
        'ABV': 5.4,
        'Description': 'a delicious blend of dessert apple cider and blackberry juice.  This artful combination captures the perfection of Autumn`s bountiful harvest in a rosy red sparkling medium cider.'
      },
      {
        'Brewer': 'Sheppy\'s Cider Ltd',
        'Name': 'Sheppy\'s Raspberry Cider',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'A refreshing fruity cider based on a traditional cider blend with a hint of raspberry.  Medium-sweet.  Also in 20 litre bag-in-box.'
      },
      {
        'Brewer': 'Double Vision Cider Co',
        'Name': 'Strawberry',
        'Type': 'Cider',
        'ABV': 5.3,
        'Description': 'Medium sweet Cider made with Strawberrys for a wonderful sweet taste to complement the Apple. Made in Kent.'
      },
      {
        'Brewer': 'Celtic Marches',
        'Name': 'Thundering Molly',
        'Type': 'Cider',
        'ABV': 5.2,
        'Description': 'Thundering Molly 5.2% vol is a well rounded medium cider.Fresh and fruity with a lovely apple aroma.Gorgeous golden colour and a well balanced finish.Made on our Herefordshire farm from 100% cider apples'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Tumbledown',
        'Type': 'Cider',
        'ABV': 5.2,
        'Description': 'A slightly more challenging drink & also our best seller. It retains plenty of apple flavour tempered by the natural tannins that occur in traditional cider fruit.'
      },
      {
        'Brewer': 'Once Upon A Tree',
        'Name': 'Tumpy Ground',
        'Type': 'Cider',
        'ABV': 7,
        'Description': 'This still cider is clear & golden in colour medium in style and made from a blend of cider varieties (Somerset Redstreak Dabinett Ellis Bitter & Browns Apple).  Aromas of blackberry leaf melon and pineapple following onto the palate with rich mouth-filling apple a hint of tropical fruits and a full body.  Plentiful soft tannins and a gentle sweetness to the finish.  An unusual and distinctive cider.'
      },
      {
        'Brewer': 'Gwynt Y Ddraig',
        'Name': 'Two Trees',
        'Type': 'Perry',
        'ABV': 4.5,
        'Description': 'A pale fruity perry with anaroma of fruit and a hint ofhoney on the palate.'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Very Perry',
        'Type': 'Perry',
        'ABV': 5,
        'Description': 'A fruity medium Perry with a complex yet balanced flavor only found in real Perry. This little number is made from Stinking Bishop Perry pears and has all the hall marks of a top quality Perry.'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Wyld Wood Organic',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'A medium dry still cider made using organically grown cider apples from a single year\'s crop and matured in old oak vats where it develops a clean fresh taste with rich fruity flavours.'
      },
      {
        'Brewer': 'The Somerset Cider Brandy Company',
        'Name': 'Burrow Hill Dry Cider',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Countryman',
        'Name': 'Countryman Dry Cider',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'May\'s Cider Company',
        'Name': 'May\'s Cider',
        'Type': 'Cider',
        'ABV': 5.5,
        'Description': 'A superb medium cider, traditionally made using nothing but 100% pure juice from renowned cider apple varieties such as Dabinett and Yarlington Mill.'
      },
      {
        'Brewer': 'Parsons Choice',
        'Name': 'Parsons Choice Sweet Cider',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Rich\'s Cider',
        'Name': 'Traditional Farmhouse Cider',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'A true taste of Somerset.'
      },
      {
        'Brewer': 'Ross on Wye',
        'Name': 'Ross on Wye Medium Cider',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Ross on Wye',
        'Name': 'Ross on Wye Perry',
        'Type': 'Perry',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Sheppy\'s',
        'Name': 'Sheppy\'s Sweet Cider',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Pineapple & Pink Grapefruit',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'The sweet tasty Pineapple is balanced out by the tangy Grapefruit. English cider with a tropical twist!!'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Rhubarb',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'A real apple cider infused with tart Rhubarb and blended with vanilla for a smooth session cider.'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Fruit Bat',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Crisp apple cider blended with Strawberry, Raspberry and Blackcurrant. Perfect over ice on a freshly mowed lawn.'
      },
      {
        'Brewer': 'Snails Bank Cider',
        'Name': 'Strawberry & Lime',
        'Type': 'Cider',
        'ABV': 0,
        'Description': ''
      },
      {
        'Brewer': 'Winkleigh',
        'Name': 'Sam\'s Cider with Blackcurrant',
        'Type': 'Cider',
        'ABV': 4,
        'Description': 'Sam\’s Cider with Blackcurrant is made from a combination of our finest Sam\’s Cider and blackcurrants, the cider adds balance to the blackcurrants acidity and sweetness which leaves an after taste which is fresh and sharply cleansing to the palate.'
      },
      {
        'Brewer': 'Winkleigh',
        'Name': 'Sam\'s Autumn Scrumpy',
        'Type': 'Cider',
        'ABV': 7.4,
        'Description': 'Premium quality and slightly sparkling Autumn Scrumpy has a wine like character that gives it a touch of luxury, resulting in a clean and refreshing taste. It\'s light in colour and releases a wonderful apple aroma.'
      },
      {
        'Brewer': 'Winkleigh',
        'Name': 'Sam\'s Sweet Cider',
        'Type': 'Cider',
        'ABV': 6,
        'Description': 'Tis a Devon Thing'
      },
      {
        'Brewer': 'Westons Cider',
        'Name': 'Old Rosie',
        'Type': 'Cider',
        'ABV': 7.3,
        'Description': 'Mid golden and straw-like in colour, Old Rosie is a cloudy, medium-bodied fruity cider that has a wonderful aroma of wild berry-fruits, honey and vintage cider-barrels.'
      }
    ];
  });