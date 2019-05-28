'use strict';

/**
 * @ngdoc function
 * @name didsBeerFestV2App.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the didsBeerFestV2App
 */
angular.module('didsBeerFestV2App')
    .controller('BeerCtrl', ['$scope', function($scope) {
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
                'Name': 'Daily Bread',
                'Type': 'Bitter',
                'ABV': 3.8,
                'Description': 'Classic English bitter: copper coloured, well balanced, malty flavours and a smooth bitter finish'
            },
            {
                'Brewer': 'Abbeydale',
                'Name': 'Absolution',
                'Type': 'Golden',
                'ABV': 5.3,
                'Description': 'A deceptively easy-drinking strong beer, subtle and easy-going, fruity and gorgeous.'
            },
            {
                'Brewer': 'Abbeydale',
                'Name': 'Dr Morton\'s Perfect Number',
                'Type': 'Pale',
                'ABV': 4.8,
                'Description': 'Pale with Amarillo and Simcoe hops from America and Southern Cross and Green Bullet hops from New Zealand'
            },
            {
                'Brewer': 'Bristol Beer Factory',
                'Name': 'Independence',
                'Type': 'US Pale',
                'ABV': 4.6,
                'Description': 'A distinctive American pale ale full of big hop character but without the strong bitterness'
            },
            {
                'Brewer': 'Bristol Beer Factory',
                'Name': 'Nova',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'A light malt base; Maris Otter, CaraPils and wheat malt allows the bright, fresh and zesty hop aromas to shine - underpinned by herbal and floral notes'
            },
            {
                'Brewer': 'Bristol Beer Factory',
                'Name': 'Dove From Above',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'A Dual Hop Series beer. French Aramis is full of aroma but very different from the dank, resinous US Eureka and the two create a unique blend of flavours'
            },
            {
                'Brewer': 'Box Steam',
                'Name': 'Ghost Train',
                'Type': 'Ruby',
                'ABV': 4.8,
                'Description': 'Featuring black pepper and liquorice flavours, its roasted malts and Colombus hops conspire to take you on a ride you won\'t forget.'
            },
            {
                'Brewer': 'Box Steam',
                'Name': 'Piston Broke',
                'Type': 'Golden',
                'ABV': 4.5,
                'Description': 'A fine, full-bodied golden ale with a clean, refreshing bittersweet taste and a fruity, hoppy aroma'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Chinook and Grapefruit',
                'Type': 'Pale',
                'ABV': 3.6,
                'Description': 'Fresh Grapefruit zest and juice pair perfectly with punchy Chinook hops to make this pale ale essential summer (or even autumn) drinking'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Ginger Brew',
                'Type': 'Pale',
                'ABV': 4.1,
                'Description': 'A classic ginger bitter, pale hoppy bitter flavour, a smooth taste with fresh root ginger added at the end.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Long Hop',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'Pale lager style bitter with fruity refreshing hops, former summer special brewed for cricket lovers now a permanent beer.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Bollington Best',
                'Type': 'Bitter',
                'ABV': 4.2,
                'Description': 'A delightfully hoppy bitter. Clean & Crisp with a light golden colour and refreshing bitter aftertaste.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Oat Mill Stout',
                'Type': '',
                'ABV': 5,
                'Description': 'An Oatmeal Stout with a twist. Hoppiness with a hint of bitterness keeps the sweetness in check and allows for a great dark stout.'
            },
            {
                'Brewer': 'Bollington',
                'Name': 'Dinner Ale',
                'Type': 'Pale',
                'ABV': 4.3,
                'Description': 'Deep copper coloured beer with a fresh slightly fruity nose, a traditional style bitter with a dry hoppy finish.'
            },
            {
                'Brewer': 'Binghams',
                'Name': 'Vanilla Stout',
                'Type': 'Stout',
                'ABV': 5,
                'Description': 'This stout is infused with vanilla pods which complement the dark malts to create a smooth drinking, deliciously dark stout.'
            },
            {
                'Brewer': 'Blackjack',
                'Name': 'Devilfish',
                'Type': 'Saison',
                'ABV': 5,
                'Description': 'A thirst quenching saison hopped mainly with Amarillo and orange peel'
            },
            {
                'Brewer': 'Blackjack',
                'Name': 'Huell Melon IPA',
                'Type': 'IPA',
                'ABV': 5.2,
                'Description': 'Pale malt base showcasing the German hop Huell Melon which has very distinct flavors of honeydew melon and strawberry'
            },
            {
                'Brewer': 'Blackjack',
                'Name': 'Jack and Gill',
                'Type': 'IPA',
                'ABV': 6.8,
                'Description': 'A Brut IPA colab with Lough Gill from Sligo. Hopped with Nelson Sauvin and Hallertau Blanc and a cheeky addition of fresh Irish Bog Myrtle'
            },
            {
                'Brewer': 'Brightside',
                'Name': 'Four Horseman',
                'Type': 'Oat Stout',
                'ABV': 5,
                'Description': 'Brewed with just over 10% oat malt (rather than flakes) in the grist, this stout shows a silkier body and denser head than a regular stout; perfect for a comforting pint as the colder nights draw in!'
            },
            {
                'Brewer': 'Brightside',
                'Name': 'Topaz',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'Single hop IPA showcasing the best of the Topaz hop flavour profile. Fresh resinous aromatics, juicy fruit and a thirst quenching citrusy bitterness matched with a rich malty base are a winning combination'
            },
            {
                'Brewer': 'Brightside',
                'Name': 'Pale',
                'Type': 'Pale',
                'ABV': 4.5,
                'Description': 'Generous late hopping from Columbus, Comet and Citra produces bold, integrated hop flavours and aromatics, and a moderately bitter finish to our light copper coloured pale ale'
            },
            {
                'Brewer': 'Brightside',
                'Name': 'Uncle Dunkel',
                'Type': 'Dark Lager',
                'ABV': 5,
                'Description': 'Brewed with a shed-load of tasty dark malts, it\'s predictably one for the malted milk biscuit lover! On the hops side of things we kept it mainly classic with Hallertauer Mittelfruh & Hallertauer Blanc, but with an additional pop of colour from the Polaris.'
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
                'Description': 'Maverick IPA is American in style and multi-national in hop content (mostly US with a touch of NZ)! Lightly caramelized malts provide the central core, but the American Cascade is the main attraction bringing bold grapefruit and floral aromas to the beer, which finishes with a clean, refreshing bitterness.'
            },
            {
                'Brewer': 'Brotherhood',
                'Name': 'India Pale Ale',
                'Type': 'IPA',
                'ABV': 5.6,
                'Description': 'Strong Malty IPA'
            },
            {
                'Brewer': 'Brotherhood',
                'Name': 'Mango Pale Ale',
                'Type': 'Pale',
                'ABV': 4,
                'Description': '100 pureed mangoes help bring out the sun with this smooth, easy drinking pale. Perle and Mosaic help bring out the fruity flavours, with malt complexity from Caramalt and Crystal 150.\''
            },
            {
                'Brewer': 'Brinkburn St',
                'Name': 'Tyne Titans',
                'Type': 'Session IPA',
                'ABV': 4.2,
                'Description': 'Refreshing beer with a golden and reddish hue. Cara Ruby and Cara Red malt, with wheat and four different American hops (Citra, Mount Hood, Simcoe and Willamette) which will leave you with a fruity-dry mouth feel'
            },
            {
                'Brewer': 'Brinkburn St',
                'Name': 'Byker Brown Ale',
                'Type': 'Brown',
                'ABV': 4.8,
                'Description': 'Their take on a traditional Newcastle brown ale'
            },
            {
                'Brewer': 'Brinkburn St',
                'Name': 'House of the Rising Sun',
                'Type': 'Choc Rasp Porter',
                'ABV': 7.2,
                'Description': 'This luxurious and decadent chocolate raspberry porter has been designed for those who like the finer things in life, like beer, raspberries, and chocolate.\''
            },
            {
                'Brewer': 'Charnwood',
                'Name': 'Salvation',
                'Type': 'Golden',
                'ABV': 3.8,
                'Description': 'A light refreshing golden beer, with tropical fruit, citrus, and floral flavours. American Cascade and Amarillo hops create a citrus aroma, and crisp clean bitterness on the finish.'
            },
            {
                'Brewer': 'Charnwood',
                'Name': 'Hubble Bubble',
                'Type': 'Amber',
                'ABV': 4.4,
                'Description': 'A copper autumnal ale with hints of honey, spice, and marmalade. The crystal malts give a subtle bitter-sweet flavour to balance the spicy, orangey hops.'
            },
            {
                'Brewer': 'Cross bay',
                'Name': 'Green Eyed Monster',
                'Type': 'Pale (green hop)',
                'ABV': 4.1,
                'Description': 'Their first \'Green Hopped Beer\' (brewed with hops fresh off the vine). With a light, refreshing colour, this beer has a rich malty taste and is generously hopped for full flavour'
            },
            {
                'Brewer': 'Cross bay',
                'Name': 'Witching Hour',
                'Type': 'Wheat',
                'ABV': 4.4,
                'Description': 'A crystal wheat beer, which is clear and refreshing with a strong malty body, only moderately hopped to add a delicious finish.'
            },
            {
                'Brewer': 'Cross bay',
                'Name': 'R.I.P.A.',
                'Type': 'Red IPA',
                'ABV': 4,
                'Description': 'A session IPA brewed with a blend of English malts generous additions of Simcoe hops for a passion fruit, pine and berries flavour and aroma.'
            },
            {
                'Brewer': 'Chapter',
                'Name': 'Dead Man\'s Fist',
                'Type': 'Smoked Porter',
                'ABV': 5.5,
                'Description': 'This smoked porter slinks smoothly past before being followed by the crack and heat of fiery black pepper'
            },
            {
                'Brewer': 'Chapter',
                'Name': 'Parabola',
                'Type': 'Pale',
                'ABV': 4.7,
                'Description': 'Parabola is a punchy, fragrant APA with a huge Columbus burst that complements the smooth malt bill'
            },
            {
                'Brewer': 'Chapter',
                'Name': 'Temos Tanta',
                'Type': 'Pale',
                'ABV': 4.4,
                'Description': 'A bitter brewed with English hops (Admiral and First Gold) as well as curacao for a deliciously subtle marmalade undertone.'
            },
            {
                'Brewer': 'Cumbrian',
                'Name': 'Loweswater Gold',
                'Type': 'Golden',
                'ABV': 4.3,
                'Description': 'A golden ale made with mainly lager malt and German hops producing a tropical fruit aroma and flavour'
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
                'Description': 'Pale Ale brewed using 7 different USA hops. Subtle sweet fruit and floral flavours are complimented with a strong hoppy bitterness which is packed with taste from the first sip to last.'
            },
            {
                'Brewer': 'Chantry',
                'Name': 'Diamond Black',
                'Type': 'Stout',
                'ABV': 4.5,
                'Description': 'A distinctive full bodied stout with liquorice tones and subtle hints of chocolate and coffee. Brewed using the finest Yorkshire malt and roast barley, deliciously smooth and creamy.'
            },
            {
                'Brewer': 'Chantry',
                'Name': 'Special Reserve',
                'Type': 'Strong Bitter',
                'ABV': 6.3,
                'Description': 'Rich and full bodied with undertones of liquorice and toffee, brewed with Yorkshire malts and Worcester hops. Maris Otter, crystal wheat and chocolate malts are combined with a double hop to produce a very drinkable malty beer.'
            },
            {
                'Brewer': 'Chantry',
                'Name': 'New York Pale',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'Refreshing pale ale with a hint of citrus flavours and a crisp dry finish. A combination of cascade and centennial American hops blended with the finest Maris Otter malt deliver this deliciously refreshing pale ale.'
            },
            {
                'Brewer': 'Downlands',
                'Name': 'Red October',
                'Type': 'Red',
                'ABV': 5.2,
                'Description': 'Citra and Centennial provide a glorious topnote to the spicy sweet malts. Won best beer of festival 2016'
            },
            {
                'Brewer': 'Downlands',
                'Name': 'Hop Contract #10',
                'Type': 'Pale',
                'ABV': 4.3,
                'Description': 'A gentle rye spicyness supports the fruity coconut hop aromas'
            },
            {
                'Brewer': 'Downlands',
                'Name': 'Green Hopped Root Thirteen',
                'Type': 'Pale green hopped',
                'ABV': 3.6,
                'Description': 'Green Hops freshly harvested in Henfield and Steyning are added to the copper to capture the wonderfully fresh aroma.'
            },
            {
                'Brewer': 'Downlands',
                'Name': 'Bramber',
                'Type': 'American Amber',
                'ABV': 4.5,
                'Description': 'Punchy tropical hop aromas sit atop a caramel toffee amber malt base'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Deer Beer',
                'Type': 'Amber',
                'ABV': 4.5,
                'Description': 'Deer Beer is a clean full bodied, malty English ale, with hints of toffee and a distinct hop finish.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Dark Mild',
                'Type': 'Mild',
                'ABV': 3.8,
                'Description': 'Dunham Dark is a multi-award winning traditional North Western dark mild. Smooth and easy drinking.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'Chocolate Cherry Mild',
                'Type': 'Mild',
                'ABV': 3.8,
                'Description': 'Chocolate Cherry is a multi-award winning speciality mild. It has all the class of Dunham Dark, with a dry hint of cherry that cuts through the malt flavours.'
            },
            {
                'Brewer': 'Dunham Massey',
                'Name': 'East India Pale Ale',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'East India Pale Ale is a stronger IPA brewed in the traditional East India style, but using all English ingredients. Light and hoppy.'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'APA',
                'Type': 'American Pale',
                'ABV': 3.8,
                'Description': 'Pairing Chinook and Columbus hops in the kettle produces a wonderful dry grapefruit and citrus flavour. The beer is left slightly sweeter thanks to a higher finishing gravity which brings out its subtle pine flavours.'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'Cotton Clouds',
                'Type': 'Session Pale',
                'ABV': 4,
                'Description': 'Dry-hopped with Admiral, Citra and Cascade, all backed up by a surprisingly large malt bill for the low strength of beer'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'Javanilla',
                'Type': 'Coffee&Vanilla Stout',
                'ABV': 5,
                'Description': '6 different malts including a huge amount of oats to give a wonderfully rich body. The stout is then matured in cask with java espresso coffee beans and natural vanilla pods'
            },
            {
                'Brewer': 'Donkeystone',
                'Name': 'Bray',
                'Type': 'Amber',
                'ABV': 4,
                'Description': 'Traditional deep amber bitter. Predominantly UK hops with a small amount of US Cascade'
            },
            {
                'Brewer': 'ELB',
                'Name': 'Jamboree',
                'Type': 'Golden',
                'ABV': 4.8,
                'Description': 'A golden beer using English hops throughout, in particular Bramling Cross, Jamboree has a blend of lager, pale and wheat malt, giving a smooth but refreshing mouthfeel.'
            },
            {
                'Brewer': 'ELB',
                'Name': 'Orchid',
                'Type': 'Mild',
                'ABV': 3.6,
                'Description': 'Dark mild, lightly spiced with vanilla.'
            },
            {
                'Brewer': 'ELB',
                'Name': 'Walthamstow Beer',
                'Type': 'Green hop pale',
                'ABV': 4.4,
                'Description': 'Made from green hops grown in the gardens and allotments of Walthamstow.'
            },
            {
                'Brewer': 'First Chop',
                'Name': 'PIP',
                'Type': 'Grapefruit saison',
                'ABV': 6.3,
                'Description': 'Classic fruity saison flavours from the yeast, hints of banana, oranges and grapefruits. Spicy and herbal notes with peaches and limes from the hops and a blast of grapefruit from the cold pressed grapefruit oil.'
            },
            {
                'Brewer': 'First Chop',
                'Name': 'POP',
                'Type': 'IPA',
                'ABV': 5.4,
                'Description': 'A big hoppy US style IPA, pale amber in colour with orange and spicy hop notes, blessed with an extra orange citrus burst from a \'dry hopping\' with orange oils.'
            },
            {
                'Brewer': 'First Chop',
                'Name': 'RED',
                'Type': 'Red',
                'ABV': 4.6,
                'Description': 'Rich spicy red ale. Fruity and spicy with big hop flavours and a pleasant lingering bitterness. Dry hopped with Columbus.'
            },
            {
                'Brewer': 'Flagship',
                'Name': 'Level',
                'Type': 'Bitter',
                'ABV': 4.2,
                'Description': 'Down-to-earth balanced bitter. Medium roasted notes, toffee and caramel, soft fruitiness.'
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
                'Description': 'A pale yellow ale. With a fruity & raspberry hint on the palate. A citrus& zesty nose. A refreshing session Ale with a smooth bitter aftertaste'
            },
            {
                'Brewer': 'Grafton',
                'Name': 'Coco Loco',
                'Type': 'Speciality',
                'ABV': 5,
                'Description': 'A dark porter/stout type ale infused with a hint of coconut.'
            },
            {
                'Brewer': 'Heritage',
                'Name': 'St Modwen',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'The Heritage Brewing Company, established in the heart of the National Brewery Centre (Museum & Visitor Centre) has a mission to recreate classic beers of the past for a modern audience. A crisp and refreshing blonde beer, not too bitter with a subtle malted wheat biscuit taste.'
            },
            {
                'Brewer': 'Holden\'s',
                'Name': 'Golden Glow',
                'Type': 'Golden',
                'ABV': 4.4,
                'Description': 'Brewed using the finest English Maris Otter malts and choicest Fuggles, Golden Glow is a thirst quenchingly refreshing beer.'
            },
            {
                'Brewer': 'Hop and Stagger',
                'Name': 'Bridgnorth Porter',
                'Type': 'Porter',
                'ABV': 5,
                'Description': 'A beautifully balanced dark beer with complex layers of taste that gives your taste buds hints of chocolate with some dark fruit notes coming through alongside the suggestion of caramel'
            },
            {
                'Brewer': 'Hop and Stagger',
                'Name': 'Triple Hop IPA',
                'Type': 'IPA',
                'ABV': 5,
                'Description': 'This is a fine balance of three distinct hop varieties that are brought together to create a veritable symphony of subtle hoppiness. First Gold, Target & Celeia'
            },
            {
                'Brewer': 'Hop and Stagger',
                'Name': 'Solstice Rouge',
                'Type': 'Belgium Style',
                'ABV': 6.8,
                'Description': 'Dark ruby red'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Great White',
                'Type': 'Wheat',
                'ABV': 4.8,
                'Description': 'A spiced, cloudy, wheat beer. Brewed with wheat, Maris Otter barley, coriander seeds, dried Seville Orange peel and Motueka hops from New Zealand, to produce a delicately hopped, crisp, highly refreshing beer.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Red',
                'Type': 'Red',
                'ABV': 4.2,
                'Description': 'A rich, malt-forward Red Ale brewed with English Maris Otter malted barley and whole cone English hops'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'Windermere Pale',
                'Type': 'Pale',
                'ABV': 3.5,
                'Description': 'A very pale ale bursting with hop flavour from the signature hop - Citra. Brewed with soft Lakeland water, Maris Otter malted barley and whole cone hops.'
            },
            {
                'Brewer': 'Hawkshead',
                'Name': 'NZPA',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'A full bodied and aromatic IPA that showcases the unique hops of New Zealand. Created by our Kiwi, Head Brewer Matt Clarke. Passionfruit, mango and apricot aromas and a citrus bitterness are balanced by the sweetness of English Maris Otter barley.'
            },
            {
                'Brewer': 'Inveralmond',
                'Name': 'Daracha',
                'Type': 'Ruby',
                'ABV': 5.2,
                'Description': 'DARACHA, pronounced \'Da-Ra-Ca\', is a ruby ale brewed with Amber malts and Roast Barley to give a dry, malty base beer with a lovely ruby red colour. We\'ve then oak matured the beer to impart flavours and aromas of toffee, vanilla and tobacco.\''
            },
            {
                'Brewer': 'Inveralmond',
                'Name': 'Ossian',
                'Type': 'Golden',
                'ABV': 4.1,
                'Description': 'Flavour packed, slow kilned ale malt, caramalt and biscuity malted wheat used to craft a malt backbone which is then beautifully complemented by a heady hop aroma of zesty lemon and orange citrus'
            },
            {
                'Brewer': 'Inveralmond',
                'Name': 'Lia Fail',
                'Type': 'Dark',
                'ABV': 4.7,
                'Description': 'Flavour packed dark crystal and chocolate malts. This combination creates a warming malty body bursting with nutty, chocolate notes that we have balanced with spicy aromas from Cascade and Fuggles hops. It finishes full, mellow and satisfying.'
            },
            {
                'Brewer': 'Ilkley',
                'Name': 'Ultravox',
                'Type': 'Lager',
                'ABV': 5.2,
                'Description': 'Pouring soft with a slight red hue, the malt leads, but the expected bitter finish is tempered by gentle fruit. Tangerine and peach aromas.'
            },
            {
                'Brewer': 'Ilkley',
                'Name': 'Tribus',
                'Type': 'Pale',
                'ABV': 4.4,
                'Description': 'Showcasing a new-to-market hop, in this case Kolibri from Slovenia. In fact, this whole beer is Slovenian in terms of hops, with the wonderfully named Wolf and Fox hops. Kolibri brings a floral nose, Wolf a tropical punch and Fox a sly hint of lemongrass.'
            },
            {
                'Brewer': 'Ilkley',
                'Name': 'Blonde',
                'Type': 'Blonde',
                'ABV': 3.9,
                'Description': 'Brewed with new, fruity European hops, the traditional golden bitter has had a makeover. Hints of citrus compliment the soft biscuit, and there\'s a fruity finish. Offering a different outlook to the very many hoppy punchy pales in our arsenal.'
            },
            {
                'Brewer': 'Ilkley',
                'Name': 'Mangoes Overboard',
                'Type': 'Wit',
                'ABV': 4.9,
                'Description': 'A spicy wit beer with aromas of banana and cloves and a lasting bitter finish. Soft tropical flavours are balanced by a bready yeast character.'
            },
            {
                'Brewer': 'Lecale',
                'Name': 'Legbiter',
                'Type': 'Red',
                'ABV': 4.5,
                'Description': 'Legbiter Ale is made with the best of barley and Vienna malt and has a unique taste of its own.'
            },
            {
                'Brewer': 'Lecale',
                'Name': 'White Knight',
                'Type': 'Lager',
                'ABV': 4.5,
                'Description': 'White Knight Lager is made with the best of barley and Vienna malt and has a sharp crisp flavour.'
            },
            {
                'Brewer': 'Long Man',
                'Name': 'Old Man',
                'Type': 'Dark',
                'ABV': 4.3,
                'Description': 'This original dark beer has soft malt notes of coffee and chocolate that combine with a pleasant light hoppiness to create a rich, full tasting Old Ale of times gone by.'
            },
            {
                'Brewer': 'Ludlow',
                'Name': 'Gold',
                'Type': 'Golden',
                'ABV': 4.2,
                'Description': 'This has a golden ale complexion with a papaya, pineapple and lemon aroma. Gold has a soft, full bodied creamy taste.'
            },
            {
                'Brewer': 'Millstone',
                'Name': 'True Grit',
                'Type': 'Pale',
                'ABV': 5,
                'Description': 'A very pale and hoppy strong ale. Well hopped using only Chinnook hop; the mellow bitters make way for a distinctive citrus/grapefruit aroma.'
            },
            {
                'Brewer': 'Mantle',
                'Name': 'Moho',
                'Type': 'Pale',
                'ABV': 4.3,
                'Description': 'Aromatic Welsh Pale Ale, hopped with two different American varieties. A light coloured Ale, bursting with flavour'
            },
            {
                'Brewer': 'Mantle',
                'Name': 'Rock Steady',
                'Type': 'Golden',
                'ABV': 3.8,
                'Description': 'Very drinkable Golden Session Ale, with a good dose of British hops for a crisp and refreshing finish'
            },
            {
                'Brewer': 'Milestone',
                'Name': 'Raspberry Wheat',
                'Type': 'Wheat',
                'ABV': 5.6,
                'Description': 'Continental style beer with orange zest'
            },
            {
                'Brewer': 'Nook',
                'Name': 'Funky Banana',
                'Type': 'Fruit',
                'ABV': 4.5,
                'Description': 'Pale ale with a distinctive tropical fruit flavour that will send your taste buds bananas'
            },
            {
                'Brewer': 'Nook',
                'Name': 'Elderflower',
                'Type': 'Fruit',
                'ABV': 4.5,
                'Description': 'Sweet and refreshing pale ale with the fragrant floral aroma of elderflower'
            },
            {
                'Brewer': 'Nook',
                'Name': 'Peachy Pale',
                'Type': 'Fruit',
                'ABV': 3.8,
                'Description': 'A light and sweet pale malt base balanced with citrussy cascade hops and sweet and juicy peach flavours'
            },
            {
                'Brewer': 'Northern Monk (collab)',
                'Name': 'Don\'t Mess With MCR',
                'Type': 'Pale Ale',
                'ABV': 4.5,
                'Description': 'Collaboration with Cloudwater, Track, Marble, Runaway and Blackjack'
            },
            {
                'Brewer': 'Neptune',
                'Name': 'On the Bounty',
                'Type': 'Stout',
                'ABV': 5.8,
                'Description': 'Chocolate and Coconut Stout'
            },
            {
                'Brewer': 'Neptune',
                'Name': 'Bolska',
                'Type': 'IPA',
                'ABV': 5.5,
                'Description': 'English style IPA. Slovenian hopped with Cardinal and Wolf'
            },
            {
                'Brewer': 'Neptune',
                'Name': 'Big Sur',
                'Type': 'Pale',
                'ABV': 4.5,
                'Description': 'West Coast Pale Ale'
            },
            {
                'Brewer': 'Neptune',
                'Name': 'King of the Sea',
                'Type': 'Bitter',
                'ABV': 4.4,
                'Description': 'English bitter with Northern Brewery, Williamette and Cascade hops'
            },
            {
                'Brewer': 'Orkney',
                'Name': 'Red MacGregor',
                'Type': 'Ruby',
                'ABV': 4,
                'Description': 'Deliciously-perfumed with hints of spiciness and toasted malts. Rich hop fruits give way to a clean dry refreshing hop bitterness'
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
                'Description': 'Orkney brewery\'s flagship beer. Flavours of dark chocolate, dried fruit, figs and nuts from the combination of roasted malts and rich hops'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Blond',
                'Type': 'Blond',
                'ABV': 4.5,
                'Description': 'Pale, citrusy, refreshing'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Stout',
                'Type': 'Stout',
                'ABV': 5.5,
                'Description': 'Jet black, thick, roast and liquorice flavours'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Red',
                'Type': 'Red',
                'ABV': 4.4,
                'Description': 'Copper-coloured, mellow, biscuity'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Imperial IPA',
                'Type': 'IPA',
                'ABV': 7.4,
                'Description': 'Golden, dry, strong, implausibly-hopped'
            },
            {
                'Brewer': 'Outstanding',
                'Name': 'Hallelujah',
                'Type': 'Rye',
                'ABV': 4.2,
                'Description': 'Rye Pale Ale'
            },
            {
                'Brewer': 'Pomona Island',
                'Name': 'APA',
                'Type': 'Pale',
                'ABV': 5.3,
                'Description': 'Mosaic, Citra and Centennial'
            },
            {
                'Brewer': 'Pomona Island',
                'Name': 'Pale',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'Chinook and Citra'
            },
            {
                'Brewer': 'Pomona Island',
                'Name': 'Session IPA',
                'Type': 'Session IPA',
                'ABV': 4.5,
                'Description': 'Amarillo, Centennial and Summit'
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
                'Description': 'Golden premium bitter'
            },
            {
                'Brewer': 'Raw',
                'Name': 'Grey Ghost IPA',
                'Type': 'IPA',
                'ABV': 5.9,
                'Description': 'Powerful American hopped IPA with citrus and grapefruit flavours. Smooth and deceptively easy to drink'
            },
            {
                'Brewer': 'Redwillow',
                'Name': 'Faithless 91: Centennial/Simcoe Pale',
                'Type': 'Pale',
                'ABV': 4.3,
                'Description': 'Easy-drinking pale ale with a delicate bitterness to finish'
            },
            {
                'Brewer': 'Redwillow',
                'Name': 'Shameless',
                'Type': 'IPA',
                'ABV': 5.9,
                'Description': 'Tropical fruit and a clean grapefruit finish from Mosaic and Simcoe'
            },
            {
                'Brewer': 'Redwillow',
                'Name': 'Smokey Maple Stout',
                'Type': 'Stout',
                'ABV': 5.2,
                'Description': 'Brewed with a smorgasbord of nine malts including oats, a little smoked oat, and Canadian maple syrup for a get up and go breakfast'
            },
            {
                'Brewer': 'Slater\'s',
                'Name': 'Autumn Red',
                'Type': 'Red',
                'ABV': 5,
                'Description': 'Full-bodied mahogany beer with Fuggles, Liberty and Mount Hood hops'
            },
            {
                'Brewer': 'Slater\'s',
                'Name': 'Premium Best Bitter',
                'Type': 'Best Bitter',
                'ABV': 4.4,
                'Description': 'Rich amber-coloured beer with hints of caramel, malt and a complex fruity hop aroma'
            },
            {
                'Brewer': 'Silver Brewhouse',
                'Name': 'Brickworks Bitter',
                'Type': 'Bitter',
                'ABV': 4,
                'Description': 'English Bitter'
            },
            {
                'Brewer': 'Siren',
                'Name': 'Broken Dream',
                'Type': 'Stout',
                'ABV': 6.5,
                'Description': 'CAMRA Champion Beer of Britain 2018. Breakfast stout with a gentle touch of smoke, coffee and chocolate.'
            },
            {
                'Brewer': 'Siren',
                'Name': 'Undercurrent',
                'Type': 'Pale',
                'ABV': 4.5,
                'Description': 'Oatmeal Pale Ale'
            },
            {
                'Brewer': 'Siren',
                'Name': 'Yulu',
                'Type': 'Pale',
                'ABV': 3.6,
                'Description': 'Loose leaf pale ale brewed with Earl Grey Tea and Lemon Zest and hopped with an all-star American hop profile of Chinook, Citra, Amarillo and Simcoe'
            },
            {
                'Brewer': 'Siren',
                'Name': 'Suspended in Cereal',
                'Type': 'Pale',
                'ABV': 4,
                'Description': 'Citra, Simcoe, Amarillo & Mosaic combine with a whole load of flaked barley to accentuate mouthfeel and body, and add just a touch of sweetness. Juicy, hazy and mean.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'Li\'l Napoleon Pale Ale',
                'Type': 'Pale',
                'ABV': 3.9,
                'Description': 'Prepare for a tropical, citrus orange finish with a fruity mid-range bitterness, an easy drinkin\' Pale Ale that\'s happy to hog the limelight all day long.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'Pre-Prohibition Cream Ale',
                'Type': 'Pale',
                'ABV': 5.5,
                'Description': 'Liberty hops add a refreshing essence of citrus, grapes, peaches and vanilla.\'Crash cooled for a clean finish the perfectly timed drop of honey along with a double dose of hops makes this an interesting yet easy drinker for all.'
            },
            {
                'Brewer': 'Stubborn Mule',
                'Name': 'IPA Single Hop',
                'Type': 'IPA',
                'ABV': 5.7,
                'Description': 'Caramel, tangerine, orange citrus, tropical fruit and grapefruit \' it\'s got the lot.'
            },
            {
                'Brewer': 'Seven Bro7hers',
                'Name': 'EPA',
                'Type': 'Pale',
                'ABV': 4.8,
                'Description': 'A classic English Pale Ale with a toasted malt base \' floral and green tea undertones'
            },
            {
                'Brewer': 'Seven Bro7hers',
                'Name': 'Session',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'A delicious session ale that delivers massive citrus aromas \' tropical flavours'
            },
            {
                'Brewer': 'Seven Bro7hers',
                'Name': 'Marshmallow Stout',
                'Type': 'Stout',
                'ABV': 4,
                'Description': 'Sweet marshmallow stout'
            },
            {
                'Brewer': 'Thirst Class',
                'Name': 'Ghost Juice',
                'Type': 'APA',
                'ABV': 4.6,
                'Description': 'This golden pale is packed with American hops Citra, Centennial and Cascade'
            },
            {
                'Brewer': 'Thirst Class',
                'Name': 'Cherry Cross the Mersey',
                'Type': 'Cherry Stout',
                'ABV': 4.7,
                'Description': 'Official Beer for Stockport Beer Week and this is it! A Cherry Stout made by brewing a luscious stout and adding cherry puree to the fermenter'
            },
            {
                'Brewer': 'Thirst Class',
                'Name': 'Hoppy Go Lucky',
                'Type': 'Session Pale',
                'ABV': 4.1,
                'Description': 'Hoppy session Pale Ale brewed with US hops Amarillo, Citra, Centennial and Cascade. Fruity citrus with a subtle malt backbone'
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Cwtch',
                'Type': 'Red',
                'ABV': 4.6,
                'Description': 'Not your average bitter. Some of the most aromatic and tangy hops from the other side of the pond are used to give this red a fresh hit that complements the caramel flavours of the malts that gives this beer its colour.'
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Stay Puft',
                'Type': 'Marshmallow Porter',
                'ABV': 5.2,
                'Description': 'This marshmallow porter has the classic roasty qualities of a proper dark ale, whilst the marshmallow gives it a smooth sweetness, both combining for a delightful, S\'mores-like ale. A sweet treat for the cold winter nights.'
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Citra Milkshake',
                'Type': 'Speciality',
                'ABV': 4.2,
                'Description': 'The sweetness of the lactose combines with the citrus flavour of the hop for a smooth, citrus flavour and a perfect balance between bitter and sweet. Creamy, juicy, fruity, delicious beer.\''
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'Fugg Life',
                'Type': 'British Pale',
                'ABV': 4.2,
                'Description': 'Wholly hopped using British hops. Rather than the fruity, citrussy flavours imparted by American and Pacific hops, their British cousins give an earthy, woody flavour that makes for perfect bittering.\''
            },
            {
                'Brewer': 'Tiny Rebel',
                'Name': 'FUBAR',
                'Type': 'Pale',
                'ABV': 4.4,
                'Description': 'If you\'re used to fizzy lagers or boring bitters, challenge your perceptions with this gateway beer, and open your eyes and your tastebuds to a world of quaffable, flavourful session ale with FUBAR'
            },
            {
                'Brewer': 'Titanic',
                'Name': 'Plum Porter',
                'Type': 'Fruit Porter',
                'ABV': 4.9,
                'Description': 'Well-rounded\'porter\'with fruity, sweet notes over a backdrop of hoppy flavour'
            },
            {
                'Brewer': 'Track',
                'Name': 'Sonoma',
                'Type': 'Pale',
                'ABV': 3.8,
                'Description': 'Juicy, bright, dry pale. Hopped extensively with Centennial, Citra and Mosaic hops at flame out & dry hop. Here\'s your chance to see if you prefer keg or cask beer. Exactly the same beer is available in keg form in the keg bar.'
            },
            {
                'Brewer': 'Thornbridge',
                'Name': 'Jaipur',
                'Type': 'IPA',
                'ABV': 5.9,
                'Description': 'A citrus dominated India Pale Ale, its immediate impression is soft and smooth yet builds to a crescendo of massive hoppiness accentuated by honey. An enduring, bitter finish.'
            },
            {
                'Brewer': 'Uprising',
                'Name': 'Treason',
                'Type': 'IPA',
                'ABV': 5.8,
                'Description': 'West Coast IPA. Best beer of festival 2017'
            },
            {
                'Brewer': 'Uprising',
                'Name': 'All Day Pale',
                'Type': 'Pale',
                'ABV': 2.7,
                'Description': 'Where else can you buy a 2.7% beer that has been, Copper Hopped and Late Hopped, then run through a Hop Back and finally dry hopped \' using the best of the best including Amarillo; Citra; Ella; Galaxy; Mosaic and Simcoe. Light on alcohol; \' BIG on flavour!'
            },
            {
                'Brewer': 'Windsor & Eton',
                'Name': 'Knight of the Garter',
                'Type': 'Golden Ale',
                'ABV': 3.8,
                'Description': 'A straw coloured golden ale with an initial hit of cut grapefruit zest giving way to a deliciously sharp sherbet finish.'
            },
            {
                'Brewer': 'Windsor & Eton',
                'Name': 'Conqueror',
                'Type': 'Black IPA',
                'ABV': 5,
                'Description': 'Packed with 5 speciality malts for a wonderful combination of roasted flavours and unlike a stout, this beer packs a mighty punch of flavour derived from Summit and Cascade hops.'
            },
            {
                'Brewer': 'Wild Weather',
                'Name': 'The Tropical',
                'Type': 'IPA',
                'ABV': 6,
                'Description': 'Packed with Mango, Orange, Tangerine & Strawberry. The Tropical packs a fruit punch into every sip. With a massive fruit punch nose, making way for a gentle bitter finish.'
            },
            {
                'Brewer': 'Wild Weather',
                'Name': 'Serendipity',
                'Type': 'APA',
                'ABV': 3.9,
                'Description': 'An explosively fruity American Pale ale. Transporting the mind back to penny sweets and that spangle smack-like hit'
            },
            {
                'Brewer': 'Wild Weather',
                'Name': 'Never Forget Your First Time',
                'Type': 'IPA',
                'ABV': 5.5,
                'Description': 'West Coast IPA'
            },
            {
                'Brewer': 'Wincle',
                'Name': 'Sir Philip',
                'Type': 'Best Bitter',
                'ABV': 4.2,
                'Description': 'Amber in colour, this premium bitter has light malty overtone, balanced with the classic pairing of Fuggles and Target hops'
            },
            {
                'Brewer': 'Wincle',
                'Name': 'Rambler',
                'Type': 'Amber',
                'ABV': 4,
                'Description': 'Plenty of Crystal Malt and Bramling Cross hops gives this beer a subtle balance of malt and autumn fruit hoppiness.'
            },
            {
                'Brewer': 'Wincle',
                'Name': 'Full Fat',
                'Type': 'Milk Porter',
                'ABV': 4.6,
                'Description': 'A big hit of chocolate with hints of treacle & liquorice in its flavour.'
            }
        ];
    }]);