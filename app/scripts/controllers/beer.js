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

        $scope.beerList = [{
                'Brewer': 'Abbeydale',
                'Name': 'Absolution',
                'Type': 'Golden',
                'ABV': 5.3,
                'Description': 'Straw-coloured beer with tropical fruit aromas toffee-apple and banana flavours.  Sweetish but not cloying.'
            },
            {
                'Brewer': 'Abbeydale',
                'Name': 'Dr. Morton\'s Reality Filter',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'Brimming with New Zealand hops this pale beer has fabulous fresh pine needles and lemon grass aroma with a full herbal lemon zesty taste with maybe a hint of black pepper filtering through on flavour.'
            },
            {
                'Brewer': 'Abbeydale',
                'Name': 'Pilgrim',
                'Type': 'Amber',
                'ABV': 5,
                'Description': 'A refreshing pumpkin spiced beer full bodied and golden with grapefruit and herbal tones - spiced to perfection with cinnamon nutmeg and allspice.  Expect pumpkin pie in a glass.'
            },
            {
                'Brewer': 'Adnams',
                'Name': 'Broadside',
                'Type': 'Malty',
                'ABV': 4.7,
                'Description': 'Rich fruitcake aromas - almonds zest and conserved fruit. A wonderful balance of malt and hop flavours.  A pint to savour.  An easy drinking pint rich in flavour.'
            },
            {
                'Brewer': 'Belleville ',
                'Name': 'Calif-Oregon Pale Ale ',
                'Type': 'Amber',
                'ABV': 4.2,
                'Description': 'A rich deep malty ale with the inner glow of a Californian self-help guru.  A cool Pacific breeze from Magnum Amarillo and Willamette hops help to give it the necessary zip.  THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Belleville ',
                'Name': 'Commonside Pale Ale',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'Fresh as newly mown grass - golden and sparkling; the Horizon and Amarillo hops from the Willamette and Yakima valleys of Oregon lie at the heart of this U.S. style Pale Ale.  THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Belleville ',
                'Name': 'Picnic Session IPA',
                'Type': 'IPA',
                'ABV': 4.4,
                'Description': 'Eight different hops combine to give this easy-drinking IPA its citrusy-piney blast of aroma and palate tingling bitterness.  Andy (our beer connoisseur from the south) says this is his favourite. THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Binghams ',
                'Name': 'Vanilla Stout',
                'Type': 'Stout',
                'ABV': 5,
                'Description': 'CAMRA Supreme Champion Beer of Britain 2016.  Dark stout brewed using dark malts and infused with vanilla pods.  '
            },
            {
                'Brewer': 'Black Jack ',
                'Name': 'Curse of Mexico',
                'Type': 'Pale',
                'ABV': 3.5,
                'Description': 'A Blush Pale Ale.  Brewed with Rye, Melanoidin and Cara Red malt.  Hopped with a hell of a lot of Mosaic, Ella and Chinook Hops.'
            },
            {
                'Brewer': 'Black Jack ',
                'Name': 'Schafkopf ',
                'Type': 'Wheat',
                'ABV': 5,
                'Description': 'A Bavarian style Wheat Beer.  Schafkopf is an easy drinking german wheat beer but with the added bonus of some ginger and lemongrass.'
            },
            {
                'Brewer': 'Bollington',
                'Name': '3 Peaks',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'New Zealand Pale Ale with big hits of citrus and tangerine.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Bollington Best',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'A delightfully hoppy bitter. Clean & crisp with a light golden colour and a refreshing bitter aftertaste. '
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Chinook & Grapefruit',
                'Type': 'Pale',
                'ABV': 3.6,
                'Description': 'A pale ale with fresh grapefruit zest and juice to pair perfectly with punchy Chinook hops.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Dinner Ale',
                'Type': 'Amber',
                'ABV': 4.3,
                'Description': 'Deep copper coloured beer with a fresh slightly fruity nose.  A traditional style bitter with a dry hoppy finish. '
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Ginger Brew',
                'Type': 'Golden',
                'ABV': 4.1,
                'Description': 'A classic ginger bitter - dark golden hoppy bitter flavour with a smooth taste and fresh root ginger added at the end. '
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Long Hop',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'Pale lager style bitter with fruity refreshing hops. Summer special brewed for cricket lovers all year round.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'White Nancy',
                'Type': 'Pale',
                'ABV': 4.1,
                'Description': 'Very pale light bitter with a good hoppiness and light body.'
            },
            {
                'Brewer': 'Bradfield ',
                'Name': 'Cherry Beer',
                'Type': 'Fruit',
                'ABV': 4.2,
                'Description': 'A light on the palate beer with a hint of cherry leaving a dry aftertaste.'
            },
            {
                'Brewer': 'Bradfield ',
                'Name': 'Farmers Brown Cow',
                'Type': 'Dark',
                'ABV': 4.2,
                'Description': 'A rich deep chestnut coloured ale with a beautifully smooth creamy head. A citrus aftertaste gives way to a long dry finish.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'Brightside Best ',
                'Type': 'Amber',
                'ABV': 4.3,
                'Description': 'This mid-amber coloured English style bitter is brewed using hops from our continental cousins to give it a slightly more modern feel. American Willamette and Slovenian Bobek are genetically related to Fuggles, but have a more pronounced character, showing subtle fruit and citrus flavours as well as the usual earthy and spicy notes you\'d expect in a bitter.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'Manchester Skyline',
                'Type': 'Golden',
                'ABV': 4.6,
                'Description': 'Lager malt wheat and three speciality malts give a rich golden colour and complex flavour which, when combined with vibrant American and New Zealand hops, make this award winning beer a fuller flavoured golden ale.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'Maverick',
                'Type': 'IPA',
                'ABV': 4.8,
                'Description': 'Our CAMRA award winning IPA is light amber in colour and refreshingly hoppy with a mouth watering bitterness to the finish. Made predominantly with US Cascade, expect grapefruit flavours and floral aromas with a light base of malt to balance.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'Odin',
                'Type': 'Blonde',
                'ABV': 3.8,
                'Description': 'Our best selling beer in cask, Odin is a fresh, light bodied pale blonde ale brewed with the Czech noble hop Saaz and the highly sought after US hop Amarillo, together with rising stars from New Zealand. Expect a fruity, citrus flavour and moderately bitter finish.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'The Mancunian',
                'Type': 'Blonde',
                'ABV': 4.5,
                'Description': 'The most recent iteration of The Mancunian recipe saw an evolution in style; it\'s now more of a blonde - IPA hybrid, drawing on the best of both styles, and as a result more popular than it\'s ever been. Amber and Crystal malts included in the purposefully delicately flavoured malt bill give a blonde with more depth, onto which we layer full flavoured Cascade, Columbus, Citra and Comet hops.'
            },
            {
                'Brewer': 'Brightside ',
                'Name': 'Unobtainium',
                'Type': 'Golden',
                'ABV': 5.5,
                'Description': 'Unobtanium is an extremely rare and therefore difficult or impossible resource to get hold of...just like Citra and Simcoe were when we first brewed this in late 2016. Now these hops aren\'t quite so rare but to keep true to the beer\'s name we\'ve also dry hopped in the fermenting vessel with Nelson Sauvin and Citra. Classic American & NZ hop characteristics shine through this deep gold coloured tasty and refreshing beer, so expect lots of citrus and tropical hop flavours and aromatics. '
            },
            {
                'Brewer': 'Brotherhood',
                'Name': 'American Red Ale',
                'Type': 'Ruby',
                'ABV': 4.5,
                'Description': 'Pure all-American muscle from the first thirsty sip. Citrus notes of orange and tangerine are topped off with an almighty drop-kick of zesty grapefruit thrown in for good measure, all thanks to the Summit hops of the great States.'
            },
            {
                'Brewer': 'Brotherhood',
                'Name': 'IPA',
                'Type': 'IPA',
                'ABV': 5.6,
                'Description': 'The delicious legacy of the British Navy lives on!  Breathe it in: spicy, fresh, zesty and fruity. It\'s all there.  With a heady mix of Chinook, Summit and Brewer\'s Gold this hoppy brew delivers modicums of juicy blackcurrant, tangy citrus and invigorating pine flavours.'
            },
            {
                'Brewer': 'Brotherhood',
                'Name': 'Session Ale',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'Put the hood down and let the engine purr. This thirst quenching pale ale, descending from America\'s hop-bounteous Cascade mountain range, will hit the spot with its pleasant citrus and spice nose with a cheeky hint of grapefruit to boot. '
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'DBF10',
                'Type': 'Pale',
                'ABV': 4.1,
                'Description': 'Our friends at Chantry Brewery have again come up trumps brewing our special festival ale.  With well balanced flavours, it is fresh and easy to drink and has light and subtle citrus aromas of sweet orange, apricot and blackcurrant. Enjoy!'
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'Diamond Black Stout',
                'Type': 'Stout',
                'ABV': 4.5,
                'Description': 'A full bodied dry stout with a bitter finish spicy with hints of liquorice and dark berries. Brewed using the finest Yorkshire malts and roast barley. Our chief beermeister Phil says this is his favourite beer.'
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'Iron & Steel',
                'Type': 'Amber',
                'ABV': 4,
                'Description': 'Chestnut coloured complex spicy flavours of dark fruits with a clean finish. An easy drinking true Yorkshire session bitter.'
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'New York Pale',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'A pale session bitter with a refreshing citrus taste and a crisp bitter finish. Brewed using the flavoursome Cascade and Centennial american hops and finest Maris Otter malt.'
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'Snoqualmie',
                'Type': 'IPA',
                'ABV': 5.1,
                'Description': 'Named after the North American Snoqualmie Indians, it is a pale ale brewed using 7 different USA hops. Subtle sweet fruit and floral flavours are complimented with a strong hoppy bitterness which is packed with taste from the first sip to last.  '
            },
            {
                'Brewer': 'Chantry ',
                'Name': 'Special Reserve',
                'Type': 'Amber',
                'ABV': 6.3,
                'Description': 'Award winning rich and full bodied with undertones of liquorice and toffee, brewed with Yorkshire malts and Worcester hops. Maris Otter, crystal wheat and chocolate malts are combined with a double hop to produce a very drinkable malty beer. Get in quick before Stuart drinks it all.'
            },
            {
                'Brewer': 'Church End ',
                'Name': 'Goat\'s Milk',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'CAMRA Supreme Champion Beer of Britain 2017.  Golden yellow nectar. Pale barley crystal malt and oats blend to fill the palate with flavour. Aromatic hops dance over the tongue for a gentle hop finish.'
            },
            {
                'Brewer': 'Cross Bay ',
                'Name': 'Sunset',
                'Type': 'Blonde',
                'ABV': 4.2,
                'Description': 'Sunset bursts onto the palate with a crisp and refreshing start.  It then smoothly transforms into an orange and lemon rind aftertaste to leave lovers of blonde ales feeling truly satisfied.'
            },
            {
                'Brewer': 'Cross Bay ',
                'Name': 'Zenith',
                'Type': 'IPA',
                'ABV': 5,
                'Description': 'Zenith is a reasonably strong IPA which is light and refreshing in colour with a distinct tropical aroma. Zesty fruit flavours are followed by a hefty kick from the triple blend of hops which makes this ale particularly special.'
            },
            {
                'Brewer': 'Cross Borders ',
                'Name': 'Braw',
                'Type': 'Pale',
                'ABV': 5.2,
                'Description': 'Citrus - tropical - pale - Braw! As they say north of the border.'
            },
            {
                'Brewer': 'Cross Borders ',
                'Name': 'Pale',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'Expect notes of mint and lemon on the nose with a balanced citrus bitter finish. Our signature and flagship pale ale. Best enjoyed anytime you\'re in the mood for a cracking pint of pale that\'ll carry you through the day/night. '
            },
            {
                'Brewer': 'Cross Borders ',
                'Name': 'Porter',
                'Type': 'Porter',
                'ABV': 4.2,
                'Description': 'The addition of a generous helping of oats combines with a selection of malts to create a delightfully roasted and smooth mouthfeel. Flavours of coffee chocolate and subtle spice come through in the finish of this easily drinkable porter. Best enjoyed sat in a big cosy armchair by a roaring fire. Or by a campfire with mates. Or at a fireworks celebration. Basically anywhere you can find a fire. Or if no fire, then at Didsbury Beer Festival!'
            },
            {
                'Brewer': 'Cumbrian Legendary Ales',
                'Name': 'Esthwaite',
                'Type': 'Golden',
                'ABV': 3.8,
                'Description': 'A golden bitter with the distinctive flavour and aroma of American Cascade hops. '
            },
            {
                'Brewer': 'Cumbrian Legendary Ales',
                'Name': 'Langdale',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'Fruity refreshing bitter with an amazing orange citrus flavour.'
            },
            {
                'Brewer': 'Cumbrian Legendary Ales',
                'Name': 'Loweswater Gold',
                'Type': 'Golden',
                'ABV': 4.3,
                'Description': 'A true golden ale it is brewed using three malts including lager and Maris Otter together with German hops. Bursting with tropical flavour it is an outstanding beer. A benchmark beer according to our beer team!'
            },
            {
                'Brewer': 'Dark Star ',
                'Name': 'Espresso',
                'Type': 'Stout',
                'ABV': 4.2,
                'Description': 'A black beer brewed with roasted barley malt and challenger hops with freshly ground espresso coffee beans also added to the copper for a few minutes to provide a rich and complementary coffee aroma.'
            },
            {
                'Brewer': 'Dent ',
                'Name': 'Aviator',
                'Type': 'Amber',
                'ABV': 4,
                'Description': 'This amber-coloured ale with strong hints of citrus and a hoppy full flavour develops into an enjoyable bitter finish.'
            },
            {
                'Brewer': 'Dent ',
                'Name': 'Kamikaze',
                'Type': 'Golden',
                'ABV': 5,
                'Description': 'Hops and fruit dominate this full-bodied gold-coloured strong bitter with a pleasant dryness and a hint of citrus and honey in the finsh leading to a bitter after taste.'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'DPA',
                'Type': 'Pale',
                'ABV': 4.7,
                'Description': 'A pale ale which uses American hops and yeast. Chinhook is used for the aroma hop to create the wonderful citrus, grapefruit and pine flavours. Once the brewing process is finished, we hit it with hugh amounts of dry hop pellets to give an exceptional hoppy finish.'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'Hoppinsesh',
                'Type': 'Pale',
                'ABV': 3.7,
                'Description': 'This beer has big flavour.  It is our way of showing that a crisp, clean and full bodied hoppy ale doesn\'t have to come with a high ABV. We utilised some of the best ingredients from both the USA and UK to produce the wonderfully hoppy session ale.  Kettle hops come solely from the US in the form of Chinook, then this little beauty is heavily dry hopped with UK Admiral and US Cascade hops, all backed up by a surprising high malt bill for the low strength of this beer.'
            },
            {
                'Brewer': 'Downlands ',
                'Name': 'Hop Contract #5',
                'Type': 'Pale',
                'ABV': 4.4,
                'Description': 'Blackcurrant lime and a soft peppery undercurrent combine in this powerfully hopped pale.'
            },
            {
                'Brewer': 'Downlands ',
                'Name': 'Red October',
                'Type': 'Ruby',
                'ABV': 5.2,
                'Description': 'Citra and Centennial provide a hoppy kick across the intriguing malt base of this American Red style beer.  If you know Jeff, you\'d know why this is his favourite. This was the gold winning beer at Didsbury Beer Festival 2016 - try it again!'
            },
            {
                'Brewer': 'Drone Valley',
                'Name': 'Dronny Bottom',
                'Type': 'Copper',
                'ABV': 3.7,
                'Description': 'Award winning traditional malty full-bodied bitter from a unique brewery. It is the only independent Community Brewery in the UK. The brewery was built by local people in Dronfield (between Sheffield and Chestefield) and all the beers are brewed by volunteers to award winning recipes. It is run by a membership who own the brewery and all profits are passed to good causes in its local area.'
            },
            {
                'Brewer': 'Drone Valley',
                'Name': 'Gosforth Gold',
                'Type': 'Golden',
                'ABV': 4,
                'Description': 'Balanced, grassy, and robust.  '
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Big Tree ',
                'Type': 'Golden',
                'ABV': 3.9,
                'Description': 'A session bitter. It is a golden full bodied bitter with a good balance of hops and malt.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Chocolate Cherry Mild',
                'Type': 'Mild',
                'ABV': 3.8,
                'Description': 'Has all the class of \'Dunham Dark\' with a dry hint of cherry that cuts through the beer.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Deer Beer',
                'Type': 'Malty',
                'ABV': 4.5,
                'Description': 'A strong malty bitter. It is a clean full bodied English ale with a slight hint of toffee and is very moreish.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Milk Stout',
                'Type': 'Stout',
                'ABV': 4,
                'Description': 'A classic full bodied sweet stout with a creamy roast malt character.'
            },
            {
                'Brewer': 'Ennerdale',
                'Name': 'Blonde',
                'Type': 'Blonde',
                'ABV': 3.8,
                'Description': 'A vivid blonde golden beer with a heady burst of floral hop aroma and a satisfying clean bitterness. Blonde was first brewed as a summer special but it proved so popular that it is now one of our permanent beers. '
            },
            {
                'Brewer': 'Ennerdale',
                'Name': 'Copper',
                'Type': 'Copper',
                'ABV': 4.4,
                'Description': 'A traditional golden ale with a biscuity malt body, delicate herbal bitterness and a floral perfumed aroma.'
            },
            {
                'Brewer': 'Ennerdale',
                'Name': 'Darkest',
                'Type': 'Porter',
                'ABV': 4.2,
                'Description': 'A rich old English porter which is lightly hopped to create a smooth and creamy ale with a delicious toffee finish. With a rich velvety texture, a definite chocolate flavour and a creamy head this beer has converted hundreds of \'light beer\' drinkers to the \'dark side\'.'
            },
            {
                'Brewer': 'Ennerdale',
                'Name': 'Maple Fall',
                'Type': 'Amber',
                'ABV': 4.5,
                'Description': 'Full bodied dark amber ale with notes of toffee and sweet maple syrup, a smooth slightly spicy nutty finish.'
            },
            {
                'Brewer': 'First Chop ',
                'Name': 'Manchester Bitter',
                'Type': 'Amber',
                'ABV': 3.8,
                'Description': 'Rich and malty with lingering bitterness and tropical fruit and citrus hop notes coming through. THIS BEER IS VEGAN AND GLUTEN FREE.'
            },
            {
                'Brewer': 'First Chop ',
                'Name': 'Salford Pale Ale',
                'Type': 'Pale',
                'ABV': 4.5,
                'Description': 'Special beer brewed for Salford Festival 2017.  THIS BEER IS VEGAN AND GLUTEN FREE.'
            },
            {
                'Brewer': 'Hambleton Ales',
                'Name': 'Stud Blonde',
                'Type': 'Pale',
                'ABV': 4.3,
                'Description': 'A refreshing golden easy drinking blonde.  THIS BEER IS GLUTEN FREE.'
            },
            {
                'Brewer': 'Harviestoun ',
                'Name': 'Bitter & Twisted',
                'Type': 'Golden',
                'ABV': 3.8,
                'Description': 'A superbly balanced refreshingly lively beer. It has a malty-sweet aroma with a floral fruity hoppiness and a zingy zesty flavour. Complex rounded sweet and dry; this is the connoisseurs\' session beer par excellence!'
            },
            {
                'Brewer': 'Harviestoun ',
                'Name': 'Schiehallion',
                'Type': 'Pale',
                'ABV': 4.8,
                'Description': 'Lager beer - crisp, dry and airy with a fresh grapefruity taste.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Dry Stone Stout',
                'Type': 'Stout',
                'ABV': 4.5,
                'Description': 'A traditional dry oatmeal stout and as dark as lakeland slate. Named in celebration of one of the defining features of The Lake District landscape - dry stone walls.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Great White',
                'Type': 'Wheat',
                'ABV': 4.8,
                'Description': 'Great White is a spiced wheat beer served cloudy. It is brewed with coriander seeds, seville orange peel and Motueka hops from New Zealand.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Red',
                'Type': 'Ruby',
                'ABV': 4.2,
                'Description': 'A rich and fruity red ale with sweetness from dark crystal malts and a long dry finish.  This is one of Steve\'s favourite beers.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Iti',
                'Type': 'Pale',
                'ABV': 3.5,
                'Description': 'Named after the Maori word for \'little\', this is NZPA\'s little brother. Brewed with low colour Maris Otter pale malt and several NZ hops including Nelson Sauvin Motueka and Green Bullet.  Crisp with citrus and floral aromas on the nose and huge flavours of gooseberry grapefruit & tropical fruit.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Windermere Pale',
                'Type': 'Pale',
                'ABV': 3.5,
                'Description': 'Summer pale ale that just slips down. Maris Otter Pale Ale malt with a bit of wheat. Loads of fruity hop flavours from a medley of traditional and modern hops. Not as bitter as our other pale beers.'
            },
            {
                'Brewer': 'HopJacker',
                'Name': 'Javahoppy',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'Coffee IPA.  This will be good!'
            },
            {
                'Brewer': 'HopJacker',
                'Name': 'Pyrites',
                'Type': 'Golden',
                'ABV': 4.1,
                'Description': 'Light, golden and fruity.'
            },
            {
                'Brewer': 'HopJacker',
                'Name': 'Snake Oil',
                'Type': 'Ginger',
                'ABV': 4.6,
                'Description': 'Rich and malty with a gentle bitterness and a fiery finish from fresh ginger added in the boil fermenter and in cask. Dry hopped with Summit hops for tangerine notes on the nose.'
            },
            {
                'Brewer': 'Leeds',
                'Name': 'Leeds Pale',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'An easy drinking pale ale. Light and hoppy with delicate floral notes and a well balanced finish.'
            },
            {
                'Brewer': 'Long Man ',
                'Name': 'Best Bitter',
                'Type': 'Amber',
                'ABV': 4,
                'Description': 'Perfectly balanced with a complex bittersweet malty taste, fragrant hops and a characteristic long deep finish. A traditional Sussex style Best Bitter.'
            },
            {
                'Brewer': 'Long Man ',
                'Name': 'Long Blonde',
                'Type': 'Blonde',
                'ABV': 3.8,
                'Description': 'A light coloured golden ale with a distinctive hoppy aroma and crisp clean bitterness on the finish. Smooth, light and refreshing. Claire discovered this beer on a sunny Spring day down south, added it to her favourites list and brought it to Didsbury Beer Festival.'
            },
            {
                'Brewer': 'Long Man ',
                'Name': 'Scary Man',
                'Type': 'Malty',
                'ABV': 4.3,
                'Description': 'A full-bodied malty monster beer with undertones of molasses and hoppy aromas.'
            },
            {
                'Brewer': 'Ludlow',
                'Name': 'Gold',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'Golden ale with papaya, pineapple and lemon aroma and a soft full bodied creamy taste.'
            },
            {
                'Brewer': 'Ludlow',
                'Name': 'The Boiling Well',
                'Type': 'Malty',
                'ABV': 4.7,
                'Description': 'Uses Marris Otter pale malt and Fuggles and Goldings hops, but they\'ve added a bit of crystal malt which provides a malty flavour and a darker hue. '
            },
            {
                'Brewer': 'Lymestone',
                'Name': 'Cherry Stone',
                'Type': 'Golden',
                'ABV': 5.2,
                'Description': 'Pale ale and cherries.'
            },
            {
                'Brewer': 'Lymestone',
                'Name': 'Ein Stein',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'This lingering combination of pale Maris Otter malts and choice German hops may make you pause for thought. As you contemplate the gentle biscuit malts, fresh Hersbrucker hops seduce the taste buds, educating and enlightening the palate. '
            },
            {
                'Brewer': 'Mantle ',
                'Name': 'Cwrw Teifi',
                'Type': 'Copper',
                'ABV': 4.5,
                'Description': 'Full bodied malt driven best bitter, with a well balanced and pleasant hop finish.'
            },
            {
                'Brewer': 'Millstone ',
                'Name': 'Three Shires Bitter',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'A very pale hoppy bitter. Full hop aroma with a crisp, fruity taste followed by a smooth bitter finish.'
            },
            {
                'Brewer': 'Millstone ',
                'Name': 'True Grit',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'A very pale and hoppy, strong ale. Well hopped using only Chinnook hop; the mellow bitters make way for a distinctive citrus/grapefruit aroma. '
            },
            {
                'Brewer': 'Moor',
                'Name': 'Nor\'Hop',
                'Type': 'Pale',
                'ABV': 4.1,
                'Description': 'Ultra Pale Ale. Unfined and naturally hazy. '
            },
            {
                'Brewer': 'Moor',
                'Name': 'Revival',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'A very hoppy and refreshing bitter brewed to celebrate the revival of the brewery and meant to revive you when you need it. Light in colour but not flavour thanks to a blend of Pale Lager Cara Crystal and Wheat malts. The hops are a blend of American varieties with American-style yeast providing a crisp finish.  For a beer relatively low in alcohol it has a very full flavour and drinks well above its strength earning it a multitude of awards and setting the standard for the style.  A modern classic! Unfined and naturally hazy.'
            },
            {
                'Brewer': 'Oakham Ales',
                'Name': 'Citra',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'Refreshing golden ale bursting with flavour and a bitter finish.'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Blond',
                'Type': 'Blonde',
                'ABV': 4.5,
                'Description': 'Only Marris Otter low colour malt gives this beer a very pale appearance that looks like a lager but is definitely an ale. Lightly bittered with a heavy concentration of flavour towards citrus and floral nose and mouth feel.'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Ratatosk',
                'Type': 'Pale',
                'ABV': 3.7,
                'Description': 'A creamy malty ale with a fruity aroma and flavour with a bitter finish.'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Stout',
                'Type': 'Stout',
                'ABV': 5.5,
                'Description': 'A true representation of the beer style. Thick jet black bitter with liquorice and strong roast flavours in the finish.'
            },
            {
                'Brewer': 'Purity ',
                'Name': 'Pure Gold',
                'Type': 'Golden',
                'ABV': 3.8,
                'Description': 'A refreshing golden ale.  Easy-drinking with a dry and bitter finish.'
            },
            {
                'Brewer': 'Purity ',
                'Name': 'Mad Goose',
                'Type': 'Pale',
                'ABV': 4.2,
                'Description': 'A zesty, light-copper pale ale.'
            },
            {
                'Brewer': 'Purity ',
                'Name': 'Pure UBU',
                'Type': 'Malty',
                'ABV': 4.5,
                'Description': 'Using English Maris Otter malt with Pilgrim and Cascade hops creates a balanced, full flavoured beer that is a pleasure to drink.'
            },
            {
                'Brewer': 'RedWillow ',
                'Name': 'Effortless',
                'Type': 'Pale',
                'ABV': 3.7,
                'Description': 'Just the beer we want to drink after a hot and long day in the brewery. Ultra pale with lots of body brewed with Vermont Ale Yeast and gratuitously hopped with Nelson Sauvin for a full fruity flavour. '
            },
            {
                'Brewer': 'RedWillow ',
                'Name': 'Faithless 73',
                'Type': 'IPA',
                'ABV': 5.2,
                'Description': 'Hazy orange, packed with our favourite aroma hops and a restrained bitterness, what\'s not to like?!'
            },
            {
                'Brewer': 'Saltaire',
                'Name': 'Elderflower Blonde',
                'Type': 'Blonde',
                'ABV': 4,
                'Description': 'A refreshing blonde ale infused with the delicate flavour of elderflower. '
            },
            {
                'Brewer': 'Saltaire',
                'Name': 'Raspberry Blonde',
                'Type': 'Blonde',
                'ABV': 4,
                'Description': 'A refreshing blonde ale delicately infused with raspberry flavours. '
            },
            {
                'Brewer': 'Sandstone ',
                'Name': 'Celtic Light',
                'Type': 'Golden',
                'ABV': 3.6,
                'Description': 'A light well-rounded session ale.'
            },
            {
                'Brewer': 'Sandstone ',
                'Name': 'Steam Dragon',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'Light refreshing pale ale. A fusion of German and British hops with Magnum for bittering and the addition of Fuggles and Bramling Cross providing the late flavours.'
            },
            {
                'Brewer': 'Sarah Hughes',
                'Name': 'Dark Ruby',
                'Type': 'Mild',
                'ABV': 6,
                'Description': 'It is intensely dark almost black in colour with a red tinge. A famous beer.'
            },
            {
                'Brewer': 'Sentinel',
                'Name': 'APA ',
                'Type': 'Pale',
                'ABV': 4.2,
                'Description': 'American Pale Ale - tropical and limey with Citra and Amarillo hops. Recomended by the head brewer, this beer is definetly worth trying.'
            },
            {
                'Brewer': 'Sentinel',
                'Name': 'EU IPA',
                'Type': 'IPA',
                'ABV': 6.5,
                'Description': 'Breweed using the best European hops. Bright straw-amber body with a lasting off-white head. Fruity spicy aromas with hints of lemon tangerine and grapefruit over caramel malts. Full sweet and salty with a deep balancing bitterness.'
            },
            {
                'Brewer': 'Sentinel',
                'Name': 'xHf Hefeweizen',
                'Type': 'Wheat',
                'ABV': 5.3,
                'Description': 'This beer is a HopfenWeiss using the gorgeous US Sorachi Ace hop which brings a distinctive coconut & lemon note that finds a natural home in the HefeWeizen style. Normally in keg but specially put in cask for Didsbury Beer Festival.  You won\'t get it anywhere else!'
            },
            {
                'Brewer': 'SEVEN BRO7HERS',
                'Name': 'IPA',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'A classic American Style India Pale Ale that is bittery rather than sweet. Massive amounts of hops are added to this beer giving it a rich and flavoursome base. Grapefruit and floral undertones are released as you enjoy and the generosity in hop addition results in a full aroma bursting with citrus.'
            },
            {
                'Brewer': 'Storm ',
                'Name': 'Bosley Cloud',
                'Type': 'Golden',
                'ABV': 4.1,
                'Description': 'Wheat lager and pale malts and American Cluster and Fuggles hops produce this award winning ale.'
            },
            {
                'Brewer': 'Storm',
                'Name': 'Desert Storm',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'This refreshing session ale is brewed using the finest pale crystal and chocolate malts with Fuggles and Golding hops.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'Absolute Banker',
                'Type': 'Pale',
                'ABV': 4.7,
                'Description': 'You might have gathered, we love our US hops, this is our take on a US Pale Ale\nThe IBUs are at the top end of the range, but come on, they could be higher. It\'s the bitterness in our beers that gives them their character and we\'re not about to hold back now. A resinous, earthy intensity from the Magnum hops and some spiciness from the Liberty, allows the citrus characteristics of the legendary Cascade hops shine through. The clean, crisp profile of the US-05 yeast provides a great platform to showcase this beer - and in our opinion it does just that. THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'Chocolate Stout',
                'Type': 'Stout',
                'ABV': 5.8,
                'Description': 'Originally brewed as a Father\'s Day request for a Manchester chocolatier, this stout has a chocolate backbone without ever coming over too sweet.  Malts kilned until they have developed a chocolate flavour, the rawest form of chocolate and a good helping of the best cacao powder makes this an extremely drinkable mid-abv stout. Originally thought of as a limited edition, this beer quite literally forced its way into our line-up. Like any great mule it comes with an ingrained sense of self-preservation.  THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'IPA Single Hop',
                'Type': 'IPA',
                'ABV': 5.7,
                'Description': 'Hoppy? Some beers are confused - not this single hop IPA.  With a strength hidden beneath its smooth caramel notes, the layers of pungent Amarillo hops will help you understand exactly why this classic American hop is a go-to hop at our Brewery.  Caramel, tangerine, orange citrus, tropical fruit and grapefruit - it\'s got the lot.  THIS BEER IS VEGAN.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'Pre-Prohibition Cream Ale',
                'Type': 'Pale',
                'ABV': 5.5,
                'Description': 'Despite the dark insinuation prohibition might be looming, this pilsner/pale ale hybrid is a refreshingly light & crisp beer. The recipe is a nod to the US pre-prohibition era so its Liberty hops to add a refreshing essence of citrus, grapes, peaches and vanilla. Crash cooled for a clean finish the perfectly timed drop of honey along with a double dose of hops makes this an interesting yet easy drinker for all.'
            },
            {
                'Brewer': 'Tatton ',
                'Name': 'Tatton Gold',
                'Type': 'Golden',
                'ABV': 4.5,
                'Description': 'A full-tasting satisfying deep golden special ale. This is a beer with a generous maltiness backed up by a robust hop character. '
            },
            {
                'Brewer': 'Tatton ',
                'Name': 'Yeti',
                'Type': 'Ruby',
                'ABV': 4.5,
                'Description': 'A rich fireside copper-coloured winter ale with a distinctive warming flavour and classic British hop aroma. Overall Silver Medal Champion Beer of Cheshire 2016.'
            },
            {
                'Brewer': 'Thornbridge ',
                'Name': 'Jaipur',
                'Type': 'IPA',
                'ABV': 5.9,
                'Description': 'Strong India Pale Ale with a full hoppiness tinged with honey and a powerful enduring bitter finish.  Top quality beer - just ask Josh (it\'s his favourite).'
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Cwtch',
                'Type': 'Amber',
                'ABV': 4.6,
                'Description': 'CAMRA Supreme Champion Beer of Britain 2015. Probably the best word ever. Cwtch (rhymes with butch) can mean either cuddle or cubbyhole. Grab a glass, relax and cwtch up with this untraditional Welsh red ale - a perfect blend of six caramelly malts and three citrussy American hops. It isn\'t your average bitter - the hops do more to this deep amber coloured beer than just provide bite. Any old hop can do that! We\'ve selected some of the most aromatic and tangy hops from the other side of the pond to give this red a fresh hit that complements the caramel flavours of the malts that gives this beer its colour. Drinkability and balance makes this beer.'
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Dirty Stop Out',
                'Type': 'Stout',
                'ABV': 5,
                'Description': 'Dirty Stop Out is our smoked oat stout that has all the characteristics of a heavy night out - complex dark with hints of smokiness and perfume aromas. A blend of 9 malts matched up with a firmly hopped back bone make this a very self assured stout.'
            },
            {
                'Brewer': 'Titanic',
                'Name': 'Plum Porter',
                'Type': 'Porter',
                'ABV': 4.9,
                'Description': 'Multi award winning strong and well rounded porter with a natural plum flavouring with a richness balanced with goldings hops.'
            },
            {
                'Brewer': 'Uprising',
                'Name': 'Treason',
                'Type': 'Ruby',
                'ABV': 6,
                'Description': 'The West Coast - an untamed frontier where storms blow in and winds whisper words of treason. The start of the uprising.Treason is an awesome west coast IPA. Burning bronze in colour with a big hop aroma that gives way to a lingering spicy bitterness.'
            },
            {
                'Brewer': 'Uprising',
                'Name': 'Wasteland',
                'Type': 'DIPA',
                'ABV': 10,
                'Description': 'Double IPA. 10 hops. 10%. Say no more.'
            },
            {
                'Brewer': 'Uprising',
                'Name': 'White Riot',
                'Type': 'Pale',
                'ABV': 5.3,
                'Description': 'A riot on its own. Shout it out, spread the word, there\'s a new face in town and the riot has started. With new world hops and a handful of orange zest, it\'s not a pure IPA and not a wheat beer - it\'s a bold riot of a beer on its own.'
            },
            {
                'Brewer': 'Wildside ',
                'Name': 'Cafe Miel',
                'Type': 'Stout',
                'ABV': 4.8,
                'Description': 'Coffee and spicy and lovely.  We ground 25kg of Arabica & Robusta coffee beans (half a kilo per cask) and brewed it with raw Bulgarian honey and cinnamon sticks to bring you this delicious coffee stout inspired by European spiced coffee.  THIS BEER IS GLUTEN FREE.'
            },
            {
                'Brewer': 'Wildside ',
                'Name': 'Session V2',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'Drink me it\'s sesh o\'clock! The first Session was so well received we thought we\'d make it a regular beer; same method and general base but each time there will be a variation to the recipe. It\'s once again brewed with fat juicy hops and finished with dry hopping via our hop rocket.  This time we`ve used Simcoe and Calypso. Grab a glass it\'s sesh o\'clock! THIS BEER IS GLUTEN FREE.'
            },
            {
                'Brewer': 'Wincle ',
                'Name': 'Sir Philip',
                'Type': 'Copper',
                'ABV': 4.2,
                'Description': 'Amber in colour, this premium bitter has light malty overtone balanced with the classic pairing of Fuggles and Target hops.'
            },
            {
                'Brewer': 'Wincle ',
                'Name': 'Wincle Waller',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'A pale and refreshing beer with distinctive hop character. Ideal for quenching a well earned thirst. '
            },
            {
                'Brewer': 'Wychwood ',
                'Name': 'Hobgoblin Gold',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'A combination of six hop varieties and an infusion of wheat and malted barley has resulted in the perfect golden beer with a huge hop punch.'
            }
        ];
    });