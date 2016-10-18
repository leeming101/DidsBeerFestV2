'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
  .controller('BeerCtrl', function ($scope) { 
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
        'Brewer': 'Abbeydale Brewery',
        'Name': 'Absolution',
        'Type': 'Pale',
        'ABV': 5.3,
        'Description': 'Straw coloured with aromas of tropical fruit. Sweet clean tasting beer with bitterness at the finish. Flavours are fruity with toffee-apples and bananas. '
      },
      {
        'Brewer': 'Storm Brewing',
        'Name': 'Ale Force',
        'Type': 'Amber',
        'ABV': 0,
        'Description': 'Awaiting tasting notes from brewer.'
      },
      {
        'Brewer': 'Dark Star Brewery',
        'Name': 'American Pale Ale',
        'Type': 'Pale',
        'ABV': 4.7,
        'Description': 'Classic dry and hoppy American style pale ale using specially imported yeast and Cascade and Centennial hops.'
      },
      {
        'Brewer': 'Nook Brewhouse',
        'Name': 'Berry Blonde',
        'Type': 'Blonde',
        'ABV': 4.5,
        'Description': 'A rich biscuity sweet pale malt base balanced with citrussy cascade hops and sweet and tangy raspberry flavours.'
      },
      {
        'Brewer': 'Hambleton Ales',
        'Name': 'Best Bitter',
        'Type': 'Golden',
        'ABV': 3.8,
        'Description': 'A golden bitter with a perfect balance of malty and refreshing citrus notes '
      },
      {
        'Brewer': 'Harviestoun Brewery',
        'Name': 'Bitter & Twisted',
        'Type': 'Golden',
        'ABV': 3.8,
        'Description': 'Bitter & Twisted is a superbly-balanced refreshingly-lively beer. It has a malty-sweet aroma with a floral fruity hoppiness and a zingy zesty flavour. Complex rounded sweet and dry; this is the connoisseurs\' session beer par excellence!'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'Black IPA',
        'Type': 'Amber',
        'ABV': 0,
        'Description': 'Awaiting tasting notes from brewer.'
      },
      {
        'Brewer': 'Happy Valley',
        'Name': 'Black Out XO',
        'Type': 'Dark',
        'ABV': 4.4,
        'Description': 'Dark Roasted Malts blend with Barbadian rum. This Ale has a  Deep intense richness with a lasting Run Aroma'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'Blond',
        'Type': 'Blonde',
        'ABV': 4.5,
        'Description': 'Only Marris Otter low colour malt gives this beer a very pale appearance that looks like a lager but is definitely an ale. Lightly bittered with a heavy concentration of flavour towards citrus and floral nose and mouth feel.'
      },
      {
        'Brewer': 'Ennerdale',
        'Name': 'Blonde',
        'Type': 'Blonde',
        'ABV': 3.8,
        'Description': 'A fruity golden beer with a heady burst of floral hop aroma and a satisfying clean bitterness. Blonde was first brewed as a summer special` but it proved so popular that it is now one of our permanent beers. A blonde for bitter drinkers it`s our best-seller.'
      },
      {
        'Brewer': 'Wilson Potter Brewery LLP',
        'Name': 'Bon Don Doon',
        'Type': 'Blonde',
        'ABV': 4.2,
        'Description': 'Refreshing blonde beer made with Columbus and Perle hops.'
      },
      {
        'Brewer': 'Wincle Beer Company Ltd',
        'Name': 'burkes special',
        'Type': 'Amber',
        'ABV': 5,
        'Description': 'A deeply satisfying chestnut coloured English Special Bitter. The beer is distinctly English in character with a full malty and fruity taste.'
      },
      {
        'Brewer': 'Stockport Brewing Co',
        'Name': 'Cascade',
        'Type': 'Pale',
        'ABV': 4,
        'Description': 'Very light in colour gently hopped with English cascade which gives a slight citrusy flavour.'
      },
      {
        'Brewer': 'Titanic Brewery',
        'Name': 'Cherry Dark',
        'Type': 'Mild',
        'ABV': 4.4,
        'Description': 'A dark mild not too far from a porter with rich dark chocolate flavors with a lovely cherry aroma black forest gateau anyone ?  '
      },
      {
        'Brewer': 'Dunham Massey',
        'Name': 'Cheshire IPA',
        'Type': 'IPA',
        'ABV': 4.7,
        'Description': 'A strong pale hoppy bitter beer based on the IPA\'s of old.'
      },
      {
        'Brewer': 'Dunham Massey',
        'Name': 'Chocolate Cherry Mild',
        'Type': 'Mild',
        'ABV': 3.8,
        'Description': 'Chocolate Cherry Mild has all the class of \'Dunham Dark\' with a dry hint of cherry that cuts through the beer.'
      },
      {
        'Brewer': 'Stockport Brewing Co',
        'Name': 'Crown Best Bitter',
        'Type': 'Amber',
        'ABV': 4.2,
        'Description': 'Pale copper in colour with a vibrant fruity hop smell. Flavour is dry with toffee apples and a bitter finish.'
      },
      {
        'Brewer': 'Tiny Rebel',
        'Name': 'Cwtch',
        'Type': 'Amber',
        'ABV': 4.6,
        'Description': 'Welsh Red Ale. Unique beer with 6 malts 2 US hops. Champion Beer of Britain 2015.'
      },
      {
        'Brewer': 'Abbeydale Brewery',
        'Name': 'Daily Bread',
        'Type': 'Malty',
        'ABV': 3.8,
        'Description': 'A classic English bitter. Well-balanced copper colored beer with malt flavors and a smooth bitter finish. Subtle hop characteristics from traditional Fuggles hops. Brewed originally for our own pub and now released into the trade.'
      },
      {
        'Brewer': 'Downton',
        'Name': 'Dark Delight',
        'Type': 'Dark',
        'ABV': 5.5,
        'Description': 'A complex dark brown ale combining subtle coffee and chocolate flavours with a rich hoppy aroma. Dark roasted berry and caramel characters sink deep into fantastic roasted bitter flavours which linger long into the finish.'
      },
      {
        'Brewer': 'Ennerdale',
        'Name': 'Darkest',
        'Type': 'Dark',
        'ABV': 4.2,
        'Description': 'A dark bitter it is a more potent brew than our other beers but it remains remarkably quaffable. With a rich velvety texture a definite chocolate flavour and a creamy head this beer has converted hundreds of \'light beer\' drinkers to the \'dark side\'.'
      },
      {
        'Brewer': 'Black Jack Beers',
        'Name': 'Dead Man\'s Hand',
        'Type': 'Amber',
        'ABV': 4.1,
        'Description': 'A light and drinkable Session IPA'
      },
      {
        'Brewer': 'Dunham Massey',
        'Name': 'Deer Beer',
        'Type': 'Malty',
        'ABV': 4.5,
        'Description': 'Dunham Massey Deer Beer is a strong malty bitter. It is a clean full bodied English ale with a slight hint of toffee and is very moreish.'
      },
      {
        'Brewer': 'Storm Brewing',
        'Name': 'Desert Storm',
        'Type': 'Pale',
        'ABV': 4,
        'Description': 'This refreshing session ale is brewed using the finest pale crystal and chocolate malts with Fuggles and Golding hops '
      },
      {
        'Brewer': 'Chantry Brewery',
        'Name': 'Diamond Black Stout',
        'Type': 'Stout',
        'ABV': 4.5,
        'Description': 'Diamond Black Stout: 4.5% ABV - full bodied dry stout with a bitter finish spicy with hints of liquorice and dark berries. Brewed using the finest Yorkshire malts and roast barley.aiting tasting notes from brewer.'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'Dinner Ale',
        'Type': 'Amber',
        'ABV': 4.3,
        'Description': 'Deep copper coloured beer with a fresh slightly fruity nose a traditional style bitter with a dry hoppy finish. '
      },
      {
        'Brewer': 'Wilson Potter Brewery LLP',
        'Name': 'Don\'t Fall',
        'Type': 'Blonde',
        'ABV': 3.9,
        'Description': ' A lovely pale hoppy blonde'
      },
      {
        'Brewer': 'Hawkshead',
        'Name': 'Dry Stone Stout',
        'Type': 'Stout',
        'ABV': 4.5,
        'Description': 'A traditional dry oatmeal stout & as dark as lakeland slate. Named in celebration of one of the defining features of The Lake District landscape - dry stone walls.'
      },
      {
        'Brewer': 'Dunham Massey',
        'Name': 'Dunham Porter',
        'Type': 'Porter',
        'ABV': 5.2,
        'Description': 'A classic old style English porter. Dark creamy full bodied and packed with falvour.Supreme champion 2014'
      },
      {
        'Brewer': 'Dunham Massey',
        'Name': 'Dunham Stout',
        'Type': 'Stout',
        'ABV': 4.2,
        'Description': 'At 4.2% Dunham Stout is a creamy full bodied all English dry stout with a classic bitter burnt dark roast flavour.In 2008 Dunham Stout won a Bronze award at Surrey Oaks Beer Festival.'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'Eastern Nights',
        'Type': 'Copper',
        'ABV': 5.6,
        'Description': 'Exotic Indian Pale Ale with a combination of hops that give a deep flavour and aroma.'
      },
      {
        'Brewer': 'Nook Brewhouse',
        'Name': 'Elderflower Blond',
        'Type': 'Blonde',
        'ABV': 4.5,
        'Description': 'A sweet pale ale refreshing light and a perfect contrast for winter.'
      },
      {
        'Brewer': 'Dark Star Brewery',
        'Name': 'Espresso',
        'Type': 'Stout',
        'ABV': 4.2,
        'Description': 'A black beer brewed with roasted barley malt and challenger hops with freshly ground espresso coffee beans also added to the copper for a few minutes to provide a rich and complementary coffee aroma'
      },
      {
        'Brewer': 'Bradfield',
        'Name': 'Farmers Bitter',
        'Type': 'Malty',
        'ABV': 3.9,
        'Description': 'A copper coloured malt ale using the finest English hops to produce both a floral and smooth aroma but still have a sharp finish.'
      },
      {
        'Brewer': 'Bradfield',
        'Name': 'Farmers Blonde',
        'Type': 'Blonde',
        'ABV': 4,
        'Description': 'A very pale brilliant blonde beer. Has citrus and summer fruit aromas making it an extremely refreshing ale. '
      },
      {
        'Brewer': 'Bradfield',
        'Name': 'Farmers Pale Ale',
        'Type': 'Pale',
        'ABV': 5,
        'Description': 'A distinctive fruity Pale Ale well balanced with a powerful floral bouquet full-bodied and a predominantly dry aftertaste.'
      },
      {
        'Brewer': 'Happy Valley',
        'Name': 'Five Rings',
        'Type': 'Pale',
        'ABV': 4,
        'Description': 'A Pale coloured  ale of 4.0% with three aroma hopsSummit Columbus and Cascade. Great Summer session ale!'
      },
      {
        'Brewer': 'Nook Brewhouse',
        'Name': 'Funky Banana',
        'Type': 'Blonde',
        'ABV': 4.5,
        'Description': 'One funky brew! A deliciously light taste that will send your taste buds BANANAS!!'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'Ginger Brew',
        'Type': 'Golden',
        'ABV': 4.1,
        'Description': 'A classic ginger bitter dark golden hoppy bitter flavour a smooth taste with fresh root ginger added at the end. '
      },
      {
        'Brewer': 'Stockport Brewing Co',
        'Name': 'Ginger Tinge',
        'Type': 'Amber',
        'ABV': 4.3,
        'Description': 'Cloudy golden coloured with floral hops and a full ginger finish.'
      },
      {
        'Brewer': 'Wilson Potter Brewery LLP',
        'Name': 'Gingery Does It',
        'Type': 'Blonde',
        'ABV': 3.5,
        'Description': 'An extra pale blonde beer made with American hops and a touch of ginger.'
      },
      {
        'Brewer': 'Purple Moose Brewery',
        'Name': 'Glaslyn Ale',
        'Type': 'Golden',
        'ABV': 4.2,
        'Description': 'Premium BitterSEE - Yellow StrawSMELL - Lemon Pineapple MangoTASTE - Sweet Tropical Fruits SmoothBitter 3/5Sweet 3/5'
      },
      {
        'Brewer': 'Tatton Brewery',
        'Name': 'Gold',
        'Type': 'Golden',
        'ABV': 4.8,
        'Description': 'A full-tasting satisfying deep golden special ale. This is a beer with a generous maltiness backed up by a robust hop character.  '
      },
      {
        'Brewer': 'Cumbrian',
        'Name': 'Grasmoor Dark ',
        'Type': 'Dark',
        'ABV': 4.3,
        'Description': 'A dark ale full of complex roasted flavours. Smooth with a lovel malty balance.'
      },
      {
        'Brewer': 'Hawkshead',
        'Name': 'Great White',
        'Type': 'Wheat',
        'ABV': 4.8,
        'Description': 'Great White is a spiced wheat beer served cloudy at 4.8% abv. It is brewed with coriander seeds Seville orange peel and Motueka hops from New Zealand.'
      },
      {
        'Brewer': 'Brightside Brewing Company',
        'Name': 'Gridlock New World Amber IPA',
        'Type': 'IPA',
        'ABV': 6.5,
        'Description': 'Made with 3 hops from the USA New Zealand and Australia it\'s a malty hoppy mouthful. Huge beer with big flavours.'
      },
      {
        'Brewer': 'RedWillow Brewery',
        'Name': 'Headless',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'Refreshingly floral Pale Ale with a restrained orange led bitterness and a light straw-hued colour. A very easy drinking session ale.'
      },
      {
        'Brewer': 'RedWillow Brewery',
        'Name': 'Heartless',
        'Type': 'Stout',
        'ABV': 4.9,
        'Description': 'Colombian Chocolate Stout'
      },
      {
        'Brewer': 'Stockport Brewing Co',
        'Name': 'Heaton Rifles',
        'Type': 'Pale',
        'ABV': 6.6,
        'Description': 'Extra premium strong pale ale very light in colour with a subtle hoppy flavour; deceptively drinkable.'
      },
      {
        'Brewer': 'Dark Star Brewery',
        'Name': 'Hophead',
        'Type': 'Pale',
        'ABV': 3.8,
        'Description': 'An extremely clean-drinking pale gold coloured ale with a strong floral aroma and elderflower notes. '
      },
      {
        'Brewer': 'Titanic Brewery',
        'Name': 'Iceberg',
        'Type': 'Wheat',
        'ABV': 4.1,
        'Description': 'A combination of Maris Otter pale malt and fine wheat malt give this refreshing beer real zest. Add fresh tasting Yakima Galena and Cascade hops and what you get is a fantastic wheat beer that will hole any passing thirst.'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'IPA',
        'Type': 'IPA',
        'ABV': 5.5,
        'Description': 'Four diverse hop varieties drawn from across the globe combine to create complex yet well-balanced golden dry IPA style beer.'
      },
      {
        'Brewer': 'SEVEN BRO7HERS',
        'Name': 'IPA',
        'Type': 'Pale',
        'ABV': 5,
        'Description': 'A classic American Style India Pale Ale that is bittery rather than sweet. Massive amounts of hops are added to this beer giving it a rich and flavoursome base. Grapefruit and floral undertones are released as you enjoy and the generosity in hop addition results in a full aroma bursting with citrus.'
      },
      {
        'Brewer': 'Chantry Brewery',
        'Name': 'Iron & Steel',
        'Type': 'Amber',
        'ABV': 4,
        'Description': 'Chestnut coloured complex spicy flavours of dark fruits with a clean finish. An easy drinking true Yorkshire session bitter.'
      },
      {
        'Brewer': 'Thornbridge Brewery',
        'Name': 'Jaipur',
        'Type': 'IPA',
        'ABV': 5.9,
        'Description': 'A citrus dominated India Pale Ale its immediate impression is soft and smooth yet builds to a crescendo of massive hoppiness accentuated by honey. An enduring bitter finish.'
      },
      {
        'Brewer': 'Chantry Brewery',
        'Name': 'Kaldo',
        'Type': 'Pale',
        'ABV': 5.5,
        'Description': 'Premium Worcester hops combined with Yorkshire Malt to give a well balanced zesty lemon taste with hints of orange & grapefruit. A classic English Pale Ale.'
      },
      {
        'Brewer': 'Hawkshead',
        'Name': 'Lakeland Gold',
        'Type': 'Golden',
        'ABV': 4.4,
        'Description': 'Golden Ale. Hoppy and uncompromisingly bitter with complex fruit flavours from the blending of a modern English hop First Gold with the outrageously fruity American hop Cascade.A hopheads\' beer... with balance.'
      },
      {
        'Brewer': 'Cumbrian',
        'Name': 'Langdale',
        'Type': 'Pale',
        'ABV': 4,
        'Description': 'Fruity refreshing 4% bitter with an amazing orange citrus flavour.'
      },
      {
        'Brewer': 'Happy Valley',
        'Name': 'Little Rascal',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'This hop extravaganza is well balanced with lingering citrus and grapefruit aftertaste. A great session ale.'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'Long Hop',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'Pale lager style bitter with fruity refreshing hops. Summer special brewed for cricket lovers all year round.'
      },
      {
        'Brewer': 'Thornbridge Brewery',
        'Name': 'Lord Marples',
        'Type': 'Malty',
        'ABV': 4,
        'Description': 'Surprisingly smooth with light toffee and caramel characters a mixture of floral and spicy hop notes and a pleasing bitter finish'
      },
      {
        'Brewer': 'Cumbrian',
        'Name': 'Loweswater Gold',
        'Type': 'Golden',
        'ABV': 4.3,
        'Description': 'A true golden ale it is brewed using three malts including lager and Maris Otter together with German hops. Bursting with tropical flavour it is an outstanding beer.'
      },
      {
        'Brewer': 'Ludlow',
        'Name': 'Ludlow Best',
        'Type': 'Malty',
        'ABV': 3.7,
        'Description': 'A copper coloured well balanced session beer. We use Maris Otter pale malt along with Fuggles & Goldings hops.'
      },
      {
        'Brewer': 'Brightside Brewing Company',
        'Name': 'Maverick IPA',
        'Type': 'IPA',
        'ABV': 4.8,
        'Description': 'Our CAMRA award winning IPA is light amber in colour refreshingly hoppy with a mouth watering bitterness to the finish. Made predominantly with US Cascade expect grapefruit flavours and floral aromas with a light base of malt to balance.'
      },
      {
        'Brewer': 'Great Heck Brewing Co Ltd',
        'Name': 'Mercy',
        'Type': 'Amber',
        'ABV': 4,
        'Description': 'Awaiting tasting notes from brewer.'
      },
      {
        'Brewer': 'Titanic Brewery',
        'Name': 'Mild',
        'Type': 'Mild',
        'ABV': 3.5,
        'Description': 'A mild of classic style full of roast malt and balanced by delicate hops. True to type it has a rounded sweetness and a smooth dry finish.'
      },
      {
        'Brewer': 'Downton',
        'Name': 'Nelson\'s Delight',
        'Type': 'Amber',
        'ABV': 4.5,
        'Description': 'A well hopped yet mellow amber bitter. The subtle aroma and flavour of dark rum adds sweetness to this well balanced premium brew.'
      },
      {
        'Brewer': 'Chantry Brewery',
        'Name': 'New York Pale',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'A pale session bitter with a refreshing citrus taste and a crisp bitter finish. Brewed using the flavoursome cascade and centennial American hops and finest Maris Otter malt.'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'Oat Mill Stout',
        'Type': 'Stout',
        'ABV': 5,
        'Description': 'An Oatmeal Stout with a twist. A hoppy bitter taste keeps the sweetness in check and allows for a great dark beer. '
      },
      {
        'Brewer': 'Brightside Brewing Company',
        'Name': 'Odin',
        'Type': 'Blonde',
        'ABV': 3.8,
        'Description': 'Our best selling beer Odin is a fresh light bodied pale blonde ale brewed with a blend of American & European hops to give a fruity citrus flavour and moderately bitter finish.'
      },
      {
        'Brewer': 'Tiny Rebel',
        'Name': 'One Inch Punch',
        'Type': 'Golden',
        'ABV': 3.9,
        'Description': 'Hopped and dry hopped with fruit-filled Mosaic hops this deep golden session beer is low in alcohol but packs a massive hit of flavour'
      },
      {
        'Brewer': 'Hornbeam',
        'Name': 'Orange Blossom',
        'Type': 'Amber',
        'ABV': 3.8,
        'Description': 'Zesty golden pale ale'
      },
      {
        'Brewer': 'Brightside Brewing Company',
        'Name': 'Outback',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'Brewed with 6 different malts Topaz and Waimea hops this golden session ale is fruity and zingy with a lovely lightly malted base.'
      },
      {
        'Brewer': 'Thornbridge Brewery',
        'Name': 'Peverel',
        'Type': 'Amber',
        'ABV': 4.5,
        'Description': 'The brew is a 4.5% Session IPA brewed entirely with Mosaic hops from the USA! Expect explosive tropical fruits a little tangy grapefruit you might even get some blueberry all with a balanced and tastebud teasing bitterness at a hugely quaffable strength'
      },
      {
        'Brewer': 'Titanic Brewery',
        'Name': 'Plum Porter',
        'Type': 'Porter',
        'ABV': 4.9,
        'Description': 'Strong and well rounded with a natural plum flavouring. Beer of the year 2015!!'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'Ratatosk',
        'Type': 'Pale',
        'ABV': 3.7,
        'Description': 'A creamy malty ale with a fruity aroma and flavour with a bitter finish'
      },
      {
        'Brewer': 'Downlands Brewery',
        'Name': 'Red October',
        'Type': 'Ruby',
        'ABV': 5.2,
        'Description': 'Citra and Centennial provide a hoppy kick across the intriguing malt base of this American Red style beer'
      },
      {
        'Brewer': 'Downlands Brewery',
        'Name': 'Root Thirteen',
        'Type': 'Pale',
        'ABV': 3.6,
        'Description': 'Light hoppy refreshing '
      },
      {
        'Brewer': 'Black Jack Beers',
        'Name': 'Royal Flush',
        'Type': 'Pale',
        'ABV': 5,
        'Description': 'English hopped pale ale'
      },
      {
        'Brewer': 'Harviestoun Brewery',
        'Name': 'Schiehallion',
        'Type': 'Lager',
        'ABV': 4.8,
        'Description': 'Schiehallion is a stunning lager with elegant head and luscious lacing. It has \'aromas and flavours of fresh-cut grass brown sugar lychee and green mango\' [Melissa Cole] with a crisp palate and a lingering fresh grapefruity finish.'
      },
      {
        'Brewer': 'SEVEN BRO7HERS',
        'Name': 'Session Ale',
        'Type': 'Amber',
        'ABV': 3.8,
        'Description': 'A delicious and thirst quenching session Ae that delivers massive citrus aromas and tropical fruit flavours.'
      },
      {
        'Brewer': 'RedWillow Brewery',
        'Name': 'Shameless',
        'Type': 'IPA',
        'ABV': 5.9,
        'Description': 'Floral aroma with some tropical fruit. Taste is refreshing grape and peach with a bit of a spice in the aftertaste.'
      },
      {
        'Brewer': 'Great Heck Brewing Co Ltd',
        'Name': 'Shankar IPA',
        'Type': 'IPA',
        'ABV': 5.9,
        'Description': 'Pale IPA with good bitterness using lots of American Columbus Chinook Cascade and Citra for flavour and aroma and dry hopped during fermentation with Columbus Willamette and Cascade.  A bold hoppy beer you`d expect from Great Heck!'
      },
      {
        'Brewer': 'Storm Brewing',
        'Name': 'Silk of Amnesia',
        'Type': 'Dark',
        'ABV': 4.7,
        'Description': 'This champion dark beer produces a rich chocolate palate with a clean bitter finish.'
      },
      {
        'Brewer': 'Wincle Beer Company Ltd',
        'Name': 'Sir Philip',
        'Type': 'Copper',
        'ABV': 4.2,
        'Description': 'Amber in colour this premium bitter has light malty overtone balanced with the classic pairing of Fuggles and Target hops.'
      },
      {
        'Brewer': 'RedWillow Brewery',
        'Name': 'Smokeless',
        'Type': 'Porter',
        'ABV': 5.7,
        'Description': 'A surprisingly approachable smoked porter velvet smooth with a robust malt backbone. This is infused with Chipotles to give even more smokiness and a subtle hint of heat.'
      },
      {
        'Brewer': 'Purple Moose Brewery',
        'Name': 'Snowdonia Ale',
        'Type': 'Golden',
        'ABV': 3.6,
        'Description': 'Golden Pale Ale with lemon and peaches and a soft refreshing taste. '
      },
      {
        'Brewer': 'Stockport Brewing Co',
        'Name': 'Stockporter',
        'Type': 'Porter',
        'ABV': 4.8,
        'Description': 'A great ale with subtle hints of liquorice dark chocolate and coffee. Warm cosy and delicious.'
      },
      {
        'Brewer': 'Millstone Brewery',
        'Name': 'Stout ',
        'Type': 'Stout',
        'ABV': 4.5,
        'Description': 'A traditional dry Stout; the English Phoenix hop provides a smooth bitterness and subtle hints of treacle in the aroma.'
      },
      {
        'Brewer': 'Outstanding',
        'Name': 'Stout',
        'Type': 'Stout',
        'ABV': 5.5,
        'Description': 'A true representation of the beer style Thick jet black bitter with liquorice and strong roast flavours in the finish.'
      },
      {
        'Brewer': 'Hambleton Ales',
        'Name': 'Stud',
        'Type': 'Pale',
        'ABV': 4.3,
        'Description': 'A refreshing golden easy drinking blonde '
      },
      {
        'Brewer': 'Happy Valley',
        'Name': 'Sworn Secret',
        'Type': 'Pale',
        'ABV': 3.8,
        'Description': 'A Pale Straw coloured Ale with a low ABV it punches well above its weight!'
      },
      {
        'Brewer': 'Tatton Brewery',
        'Name': 'Tatton Ale',
        'Type': 'Copper',
        'ABV': 3.7,
        'Description': 'An easy drinking session ale with a rich copper colour. It has a full malty/toffee flavour for its gravity balanced by a soft bitterness and hoppy fruity taste and aroma.'
      },
      {
        'Brewer': 'Tatton Brewery',
        'Name': 'Tatton Blonde',
        'Type': 'Blonde',
        'ABV': 4,
        'Description': 'A clean-tasting smooth pale ale with a fine New World citrus hop aroma.'
      },
      {
        'Brewer': 'Brightside Brewing Company',
        'Name': 'TFI Friday',
        'Type': 'Amber',
        'ABV': 4.6,
        'Description': 'Inspired by a particularly arduous week this beer is designed to be the first beer you grab at the end of the week as you relax into the weekend! Made with Azacca and Eureka! hops it`s more full bodied and flavoursome than your traditional best bitter whist still staying within the style. '
      },
      {
        'Brewer': 'Ludlow',
        'Name': 'The Boiling Well',
        'Type': 'Malty',
        'ABV': 4.7,
        'Description': 'Uses Marris Otter pale malt Fuggles & Goldings hops but we add a bit of crystal malt which provides a malty flavour and a darker hue. '
      },
      {
        'Brewer': 'Brains Brewery',
        'Name': 'The Rev James Gold',
        'Type': 'Golden',
        'ABV': 4.1,
        'Description': 'crisp and sweet with fresh fruit flavours that are balanced by an intriguing depth and a light malty aroma. Brewed with our exclusive Buckleys yeast they each deliver a signature taste with a surprising finish.'
      },
      {
        'Brewer': 'Millstone Brewery',
        'Name': 'Tiger Rut',
        'Type': 'Pale',
        'ABV': 4,
        'Description': 'Pale hoppy bitter full-bodied with distinctive citrus grapefruit aroma.'
      },
      {
        'Brewer': 'Hornbeam',
        'Name': 'Top Hop Best Bitter',
        'Type': 'Malty',
        'ABV': 4.2,
        'Description': 'This superb palatable ale is full bodied with malt appeal and ample bitterness. An excellent bright premium bitter.'
      },
      {
        'Brewer': 'Millstone Brewery',
        'Name': 'True Grit',
        'Type': 'Pale',
        'ABV': 5,
        'Description': 'A very pale and hoppy strong ale. Well hopped using only Chinnook hop; the mellow bitters make way for a distinctive citrus/grapefruit aroma. '
      },
      {
        'Brewer': 'Siren Craft Brew',
        'Name': 'Undercurrent ',
        'Type': 'Pale',
        'ABV': 4.5,
        'Description': 'A 4.5% pale ale with spicy grassy aromas and a taste of grapefruit and apricot.Undercurrent is part pale part oats and part caramel barley. Her swirls of bold bready and nutty malt whirl into a concoction of spicy citrus floral hops. Mystery lurks in those cascade and palisade hops. '
      },
      {
        'Brewer': 'Millstone Brewery',
        'Name': 'Vale Mill',
        'Type': 'Pale',
        'ABV': 3.9,
        'Description': 'pale gold floral spicy aroma crisp refreshing taste.'
      },
      {
        'Brewer': 'Binghams Brewery',
        'Name': 'Vanilla Stout',
        'Type': 'Stout',
        'ABV': 5,
        'Description': 'Dark stout brewed using dark malts and infused with vanilla pods. Won Gold in the CAMRA Supreme Champion Beer of Britain 2016 after winning Gold in the Speciality beer category. '
      },
      {
        'Brewer': 'Siren Craft Brew',
        'Name': 'Vermont Tea Party',
        'Type': 'Pale',
        'ABV': 3.6,
        'Description': 'Loose leaf pale ale brewed with Earl Grey Tea and Lemon Zest and hopped with Chinook Equinox Amarillo and Citra. '
      },
      {
        'Brewer': 'Great Heck Brewing Co Ltd',
        'Name': 'Voodoo Mild',
        'Type': 'Mild',
        'ABV': 4.3,
        'Description': 'Very dark mild brewed with a blend of speciality dark malts.  Lightly hopped this rich and smooth beer is all about complex chocolate and roasty malt forward flavours'
      },
      {
        'Brewer': 'Bollington Brewing Company',
        'Name': 'White Nancy',
        'Type': 'Pale',
        'ABV': 4.1,
        'Description': 'Very pale light bitter with a good hoppiness and light body.'
      },
      {
        'Brewer': 'Ennerdale',
        'Name': 'Wild Ennerdale',
        'Type': 'Amber',
        'ABV': 4.2,
        'Description': 'An amber coloured beer well-hopped with two varieties of English grown hops yielding a good hop aroma and well rounded bitterness'
      },
      {
        'Brewer': 'Wincle Beer Company Ltd',
        'Name': 'Wincle Waller',
        'Type': 'Pale',
        'ABV': 3.8,
        'Description': 'A pale and refreshing beer with distinctive hop character. Ideal for quenching a well earned thirst. '
      },
      {
        'Brewer': 'Hawkshead',
        'Name': 'Windermere Pale',
        'Type': 'Pale',
        'ABV': 3.5,
        'Description': 'Summer ale low gravity very pale just slips down. Maris Otter Pale Ale malt with a bit of wheat. Loads of fruity hop flavours from a medley of traditional and modern hops. Not as bitter as our other pale beers.'
      },
      {
        'Brewer': 'XT Brewing Co',
        'Name': 'XT 1',
        'Type': 'Blonde',
        'ABV': 4.2,
        'Description': 'Citrus and fruity hops flirt with reserved English barley and some very naughty Bohemian malts to make a characterful blonde ale that you\'ll want to meet again.'
      },
      {
        'Brewer': 'Tatton Brewery',
        'Name': 'Yeti',
        'Type': 'Ruby',
        'ABV': 4.5,
        'Description': 'A rich fireside copper-coloured winter ale with a distinctive warming flavour and classic British hop aroma.'
      }];
  });
