"use strict";function getTimeRemaining(a){var b=Date.parse(a)-Date.parse(new Date),c=Math.floor(b/1e3%60),d=Math.floor(b/1e3/60%60),e=Math.floor(b/36e5%24),f=Math.floor(b/864e5);return{total:b,days:f,hours:e,minutes:d,seconds:c}}function initializeClock(a,b){function c(){var a=getTimeRemaining(b);e.innerHTML=a.days,f.innerHTML=("0"+a.hours).slice(-2),g.innerHTML=("0"+a.minutes).slice(-2),h.innerHTML=("0"+a.seconds).slice(-2),a.total<=0&&clearInterval(i)}var d=document.getElementById(a),e=d.querySelector(".days"),f=d.querySelector(".hours"),g=d.querySelector(".minutes"),h=d.querySelector(".seconds");c();var i=setInterval(c,1e3)}angular.module("didsBeerFestV2App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngtweet","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/find",{templateUrl:"views/find.html",controller:"FindCtrl",controllerAs:"find"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/volunteer",{templateUrl:"views/volunteer.html",controller:"VolunteerCtrl",controllerAs:"volunteer"}).when("/tickets",{templateUrl:"views/tickets.html",controller:"TicketsCtrl",controllerAs:"tickets"}).when("/goodcauses",{templateUrl:"views/goodcauses.html",controller:"GoodCausesCtrl",controllerAs:"goodcauses"}).when("/music",{templateUrl:"views/music.html",controller:"MusicCtrl",controllerAs:"music"}).when("/lastyear",{redirectTo:"/lastyear"}).otherwise({redirectTo:"/"})}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({key:"AIzaSyDUIkZxzGxRGNEgCWdjOylusJhFetr6qv4",v:"3.23",libraries:"weather,geometry,visualization"})}]),angular.module("didsBeerFestV2App").controller("MainCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").addClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var a=new Date(2016,9,27,19,0,0,0);initializeClock("clockdiv",a)}),angular.module("didsBeerFestV2App").controller("AboutCtrl",function(){$("#lnkAbout").addClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("didsBeerFestV2App").controller("ContactCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").addClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("didsBeerFestV2App").controller("FindCtrl",["$scope","$window","uiGmapGoogleMapApi",function(a,b,c){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").addClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.map={center:{latitude:53.416528,longitude:-2.222119},zoom:16},a.marker={id:0,coords:{latitude:53.416528,longitude:-2.222119},options:{draggable:!1,clickable:!0,icon:"images/mapmarker.569a50dc.png"}},c.then(function(a){}),a.openMap=function(){b.confirm("Open in Google Maps?")&&(b.location.href="http://maps.google.com/maps?z=15&q=53.416528,-2.222119")}}]),angular.module("didsBeerFestV2App").controller("VolunteerCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").addClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("didsBeerFestV2App").controller("TicketsCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").addClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("didsBeerFestV2App").controller("GoodCausesCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").addClass("active"),$("#lnkMusic").removeClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("didsBeerFestV2App").controller("MusicCtrl",function(){$("#lnkAbout").removeClass("active"),$("#lnkContact").removeClass("active"),$("#lnkHome").removeClass("active"),$("#lnkFind").removeClass("active"),$("#lnkVolunteer").removeClass("active"),$("#lnkTickets").removeClass("active"),$("#lnkGoodCauses").removeClass("active"),$("#lnkMusic").addClass("active"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),function(a){a.fn.bxSlider=function(b){function c(b,c,d,e){var f=[],g=d,h=!1;for("backward"==e&&(b=a.makeArray(b),b.reverse());g>0;)a.each(b,function(b,d){return g>0&&void(h?(f.push(a(this).clone()),g--):b==c&&(h=!0,f.push(a(this).clone()),g--))});return f}function d(){var a=B.outerHeight()*b.displaySlideQty;return a}function e(){var a=B.outerWidth()*b.displaySlideQty;return a}function f(b,c){if("left"==c)var d=a(".pager",A).eq(b).position().left;else if("top"==c)var d=a(".pager",A).eq(b).position().top;return d}function g(){!b.infiniteLoop&&b.hideControlOnEnd&&(Q==Y?a(".bx-prev",A).hide():a(".bx-prev",A).show(),Q==Z?a(".bx-next",A).hide():a(".bx-next",A).show())}function h(c,d,e,f){I=a('<a href="" class="bx-start"></a>'),K="text"==c?d:'<img src="source/'+d+'" />',L="text"==e?f:'<img src="source/'+f+'" />',b.autoControlsSelector?a(b.autoControlsSelector).append(I):(A.append('<div class="bx-auto"></div>'),a(".bx-auto",A).html(I)),I.click(function(){return b.ticker?a(this).hasClass("stop")?w.stopTicker():a(this).hasClass("start")&&w.startTicker():a(this).hasClass("stop")?w.stopShow(!0):a(this).hasClass("start")&&w.startShow(!0),!1})}function i(){var c=a("img",z.eq(Q)).attr("title");""!=c?b.captionsSelector?a(b.captionsSelector).html(c):a(".bx-captions",A).html(c):b.captionsSelector?a(b.captionsSelector).html("� "):a(".bx-captions",A).html("� ")}function j(c){var d=z.length;b.moveSlideQty>1&&(d=z.length%b.moveSlideQty!=0?Math.ceil(z.length/b.moveSlideQty):z.length/b.moveSlideQty);var e="";if(b.buildPager)for(var f=0;f<d;f++)e+=b.buildPager(f,z.eq(f*b.moveSlideQty));else if("full"==c)for(var f=1;f<=d;f++)e+='<a href="" class="pager-link pager-'+f+'">'+f+"</a>";else"short"==c&&(e='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+z.length+"</span>");if(b.pagerSelector)a(b.pagerSelector).append(e),G=a(b.pagerSelector);else{var g=a('<div class="bx-pager"></div>');g.append(e),"top"==b.pagerLocation?A.prepend(g):"bottom"==b.pagerLocation&&A.append(g),G=a(".bx-pager",A)}G.children().click(function(){if("full"==b.pagerType){var a=G.children().index(this);b.moveSlideQty>1&&(a*=b.moveSlideQty),w.goToSlide(a)}return!1})}function k(c,d,e,f){var g=a('<a href="" class="bx-next"></a>'),h=a('<a href="" class="bx-prev"></a>');"text"==c?g.html(d):g.html('<img src="source/'+d+'" />'),"text"==e?h.html(f):h.html('<img src="source/'+f+'" />'),b.prevSelector?a(b.prevSelector).append(h):A.append(h),b.nextSelector?a(b.nextSelector).append(g):A.append(g),g.click(function(){return w.goToNextSlide(),!1}),h.click(function(){return w.goToPreviousSlide(),!1})}function l(c){"full"==b.pagerType&&b.pager?(a("a",G).removeClass(b.pagerActiveClass),a("a",G).eq(c).addClass(b.pagerActiveClass)):"short"==b.pagerType&&b.pager&&a(".bx-pager-current",G).html(Q+1)}function m(){z.not(":eq("+Q+")").fadeTo(b.speed,0).css("zIndex",98),z.eq(Q).css("zIndex",99).fadeTo(b.speed,1,function(){X=!1,jQuery.browser.msie&&z.eq(Q).get(0).style.removeAttribute("filter"),b.onAfterSlide(Q,z.length,z.eq(Q))})}function n(){x.hover(function(){M&&w.stopTicker(!1)},function(){M&&w.startTicker(!1)})}function o(){A.find(".bx-window").hover(function(){M&&w.stopShow(!1)},function(){M&&w.startShow(!1)})}function p(){""!=b.startImage?(startContent=b.startImage,startType="image"):(startContent=b.startText,startType="text"),""!=b.stopImage?(stopContent=b.stopImage,stopType="image"):(stopContent=b.stopText,stopType="text"),h(startType,startContent,stopType,stopContent)}function q(a,c,d){"horizontal"==b.mode?"next"==b.tickerDirection?x.animate({left:"-="+c+"px"},d,"linear",function(){x.css("left",a),q(a,T,b.tickerSpeed)}):"prev"==b.tickerDirection&&x.animate({left:"+="+c+"px"},d,"linear",function(){x.css("left",a),q(a,T,b.tickerSpeed)}):"vertical"==b.mode&&("next"==b.tickerDirection?x.animate({top:"-="+c+"px"},d,"linear",function(){x.css("top",a),q(a,U,b.tickerSpeed)}):"prev"==b.tickerDirection&&x.animate({top:"+="+c+"px"},d,"linear",function(){x.css("top",a),q(a,U,b.tickerSpeed)}))}function r(){b.auto?b.infiniteLoop?"next"==b.autoDirection?H=setInterval(function(){w.goToNextSlide(!1)},b.pause):"prev"==b.autoDirection&&(H=setInterval(function(){w.goToPreviousSlide(!1)},b.pause)):"next"==b.autoDirection?H=setInterval(function(){Q+=b.moveSlideQty,Q>Z&&(Q%=z.length),w.goToSlide(Q,!1)},b.pause):"prev"==b.autoDirection&&(H=setInterval(function(){Q-=b.moveSlideQty,Q<0&&(negativeOffset=Q%z.length,Q=0==negativeOffset?0:z.length+negativeOffset),w.goToSlide(Q,!1)},b.pause)):b.ticker&&(b.tickerSpeed*=10,a(".pager",A).each(function(b){T+=a(this).width(),U+=a(this).height()}),"prev"==b.tickerDirection&&"horizontal"==b.mode?x.css("left","-"+(T+R)+"px"):"prev"==b.tickerDirection&&"vertical"==b.mode&&x.css("top","-"+(U+S)+"px"),"horizontal"==b.mode?(V=parseInt(x.css("left")),q(V,T,b.tickerSpeed)):"vertical"==b.mode&&(W=parseInt(x.css("top")),q(W,U,b.tickerSpeed)),b.tickerHover&&n())}function s(){""!=b.nextImage?(nextContent=b.nextImage,nextType="image"):(nextContent=b.nextText,nextType="text"),""!=b.prevImage?(prevContent=b.prevImage,prevType="image"):(prevContent=b.prevText,prevType="text"),k(nextType,nextContent,prevType,prevContent)}function t(){if("horizontal"==b.mode||"vertical"==b.mode){var d=c(z,0,b.moveSlideQty,"backward");a.each(d,function(b){x.prepend(a(this))});var e=z.length+b.moveSlideQty-1,f=z.length-b.displaySlideQty,g=e-f,h=c(z,0,g,"forward");b.infiniteLoop&&a.each(h,function(b){x.append(a(this))})}}function u(){t(b.startingSlide),"horizontal"==b.mode?(x.wrap('<div class="'+b.wrapperClass+'" style="width:'+E+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+E+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+R+"px"}),x.children().css({width:C,float:"left",listStyle:"none"}),A=x.parent().parent(),z.addClass("pager")):"vertical"==b.mode?(x.wrap('<div class="'+b.wrapperClass+'" style="width:'+O+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+O+"px; height:"+F+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+S+"px"}),x.children().css({listStyle:"none",height:P}),A=x.parent().parent(),z.addClass("pager")):"fade"==b.mode&&(x.wrap('<div class="'+b.wrapperClass+'" style="width:'+O+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+P+"px; width:"+O+'px; position:relative; overflow:hidden;"></div>'),x.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98}),A=x.parent().parent(),z.not(":eq("+Q+")").fadeTo(0,0),z.eq(Q).css("zIndex",99)),b.captions&&null==b.captionsSelector&&A.append('<div class="bx-captions"></div>')}var v={mode:"horizontal",infiniteLoop:!0,hideControlOnEnd:!1,controls:!0,speed:500,easing:"swing",pager:!1,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:!1,captionsSelector:null,auto:!1,autoDirection:"next",autoControls:!1,autoControlsSelector:null,autoStart:!0,autoHover:!1,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:!1,tickerSpeed:5e3,tickerDirection:"next",tickerHover:!1,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:4,moveSlideQty:1,randomStart:!1,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null},b=a.extend(v,b),w=this,x="",y="",z="",A="",B="",C="",D="",E="",F="",G="",H="",I="",J="",K="",L="",M=!0,N=!1,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=!1,Y=0,Z=z.length-1;return this.goToSlide=function(a,c){if(!X){if(X=!0,Q=a,b.onBeforeSlide(Q,z.length,z.eq(Q)),"undefined"==typeof c)var c=!0;c&&b.auto&&w.stopShow(!0),slide=a,slide==Y&&b.onFirstSlide(Q,z.length,z.eq(Q)),slide==Z&&b.onLastSlide(Q,z.length,z.eq(Q)),"horizontal"==b.mode?x.animate({left:"-"+f(slide,"left")+"px"},b.speed,b.easing,function(){X=!1,b.onAfterSlide(Q,z.length,z.eq(Q))}):"vertical"==b.mode?x.animate({top:"-"+f(slide,"top")+"px"},b.speed,b.easing,function(){X=!1,b.onAfterSlide(Q,z.length,z.eq(Q))}):"fade"==b.mode&&m(),g(),b.moveSlideQty>1&&(a=Math.floor(a/b.moveSlideQty)),l(a),i()}},this.goToNextSlide=function(a){if("undefined"==typeof a)var a=!0;if(a&&b.auto&&w.stopShow(!0),b.infiniteLoop){if(!X){X=!0;var c=!1;if(Q+=b.moveSlideQty,Q>Z&&(Q%=z.length,c=!0),b.onNextSlide(Q,z.length,z.eq(Q)),b.onBeforeSlide(Q,z.length,z.eq(Q)),"horizontal"==b.mode){var d=b.moveSlideQty*D;x.animate({left:"-="+d+"px"},b.speed,b.easing,function(){X=!1,c&&x.css("left","-"+f(Q,"left")+"px"),b.onAfterSlide(Q,z.length,z.eq(Q))})}else if("vertical"==b.mode){var e=b.moveSlideQty*P;x.animate({top:"-="+e+"px"},b.speed,b.easing,function(){X=!1,c&&x.css("top","-"+f(Q,"top")+"px"),b.onAfterSlide(Q,z.length,z.eq(Q))})}else"fade"==b.mode&&m();l(b.moveSlideQty>1?Math.ceil(Q/b.moveSlideQty):Q),i()}}else if(!X){var c=!1;Q+=b.moveSlideQty,Q<=Z?(g(),b.onNextSlide(Q,z.length,z.eq(Q)),w.goToSlide(Q)):Q-=b.moveSlideQty}},this.goToPreviousSlide=function(c){if("undefined"==typeof c)var c=!0;if(c&&b.auto&&w.stopShow(!0),b.infiniteLoop){if(!X){X=!0;var d=!1;if(Q-=b.moveSlideQty,Q<0&&(negativeOffset=Q%z.length,Q=0==negativeOffset?0:z.length+negativeOffset,d=!0),b.onPrevSlide(Q,z.length,z.eq(Q)),b.onBeforeSlide(Q,z.length,z.eq(Q)),"horizontal"==b.mode){var e=b.moveSlideQty*D;x.animate({left:"+="+e+"px"},b.speed,b.easing,function(){X=!1,d&&x.css("left","-"+f(Q,"left")+"px"),b.onAfterSlide(Q,z.length,z.eq(Q))})}else if("vertical"==b.mode){var h=b.moveSlideQty*P;x.animate({top:"+="+h+"px"},b.speed,b.easing,function(){X=!1,d&&x.css("top","-"+f(Q,"top")+"px"),b.onAfterSlide(Q,z.length,z.eq(Q))})}else"fade"==b.mode&&m();l(b.moveSlideQty>1?Math.ceil(Q/b.moveSlideQty):Q),i()}}else if(!X){var d=!1;Q-=b.moveSlideQty,Q<0&&(Q=0,b.hideControlOnEnd&&a(".bx-prev",A).hide()),g(),b.onPrevSlide(Q,z.length,z.eq(Q)),w.goToSlide(Q)}},this.goToFirstSlide=function(a){if("undefined"==typeof a)var a=!0;w.goToSlide(Y,a)},this.goToLastSlide=function(){if("undefined"==typeof a)var a=!0;w.goToSlide(Z,a)},this.getCurrentSlide=function(){return Q},this.getSlideCount=function(){return z.length},this.stopShow=function(a){if(clearInterval(H),"undefined"==typeof a)var a=!0;a&&b.autoControls&&(I.html(K).removeClass("stop").addClass("start"),M=!1)},this.startShow=function(a){if("undefined"==typeof a)var a=!0;r(),a&&b.autoControls&&(I.html(L).removeClass("start").addClass("stop"),M=!0)},this.stopTicker=function(a){if(x.stop(),"undefined"==typeof a)var a=!0;a&&b.ticker&&(I.html(K).removeClass("stop").addClass("start"),M=!1)},this.startTicker=function(a){if("horizontal"==b.mode){if("next"==b.tickerDirection)var c=parseInt(x.css("left")),d=T+c+z.eq(0).width();else if("prev"==b.tickerDirection)var c=-parseInt(x.css("left")),d=c-z.eq(0).width();var e=d*b.tickerSpeed/T;q(V,d,e)}else if("vertical"==b.mode){if("next"==b.tickerDirection)var f=parseInt(x.css("top")),d=U+f+z.eq(0).height();else if("prev"==b.tickerDirection)var f=-parseInt(x.css("top")),d=f-z.eq(0).height();var e=d*b.tickerSpeed/U;if(q(W,d,e),"undefined"==typeof a)var a=!0;a&&b.ticker&&(I.html(L).removeClass("start").addClass("stop"),M=!0)}},this.initShow=function(){if(x=a(this),y=x.clone(),z=x.children(),A="",B=x.children(":first"),C=B.width(),O=0,D=B.outerWidth(),P=0,E=e(),F=d(),X=!1,G="",Q=0,R=0,S=0,H="",I="",J="",K="",L="",M=!0,N=!1,T=0,U=0,V=0,W=0,Y=0,Z=z.length-1,z.each(function(b){a(this).outerHeight()>P&&(P=a(this).outerHeight()),a(this).outerWidth()>O&&(O=a(this).outerWidth())}),b.randomStart){var c=Math.floor(Math.random()*z.length);Q=c,R=D*(b.moveSlideQty+c),S=P*(b.moveSlideQty+c)}else Q=b.startingSlide,R=D*(b.moveSlideQty+b.startingSlide),S=P*(b.moveSlideQty+b.startingSlide);u(),b.pager&&!b.ticker&&("full"==b.pagerType?j("full"):"short"==b.pagerType&&j("short")),b.controls&&!b.ticker&&s(),(b.auto||b.ticker)&&(b.autoControls&&p(),b.autoStart?setTimeout(function(){w.startShow(!0)},b.autoDelay):w.stopShow(!0),b.autoHover&&!b.ticker&&o()),l(b.moveSlideQty>1?Math.ceil(Q/b.moveSlideQty):Q),g(),b.captions&&i(),b.onAfterSlide(Q,z.length,z.eq(Q))},this.destroyShow=function(){clearInterval(H),a(".bx-next, .bx-prev, .bx-pager, .bx-auto",A).remove(),x.unwrap().unwrap().removeAttr("style"),x.children().removeAttr("style").not(".pager").remove(),z.removeClass("pager")},this.reloadShow=function(){w.destroyShow(),w.initShow()},this.each(function(){a(this).children().length>0&&w.initShow()}),this},jQuery.fx.prototype.cur=function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var a=parseFloat(jQuery.css(this.elem,this.prop));return a}}(jQuery),$(document).ready(function(){$("#slider").bxSlider({ticker:!0,tickerSpeed:3500,tickerHover:!0});var a=$(".main-nav"),b=$("#navLogo"),c=$(".header").height();$(window).scroll(function(){$(this).scrollTop()>c&&$(".navbar-toggle").is(":hidden")?(a.addClass("main-nav-scrolled"),b.show()):(a.removeClass("main-nav-scrolled"),b.hide())}),$(".youtubePopup").magnificPopup({type:"iframe"})}),angular.module("didsBeerFestV2App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p> "),a.put("views/contact.html",'<div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div> '),a.put("views/find.html",' <div class="map"> <a style="display:none" href="http://maps.google.com/?q=53.416528,%20-2.222119"><img class="mapImage" src="images/2016map.9da8b25e.png"></a> <ui-gmap-google-map center="map.center" zoom="map.zoom"> <ui-gmap-marker coords="marker.coords" options="marker.options" idkey="marker.id" click="openMap()"></ui-gmap-marker> </ui-gmap-google-map> </div>'),a.put("views/goodcauses.html",'<div class="col-md-6 rowPadding"> <div style="text-align: center"> <a class="lnkGoodCause" href="http://www.didsburygoodneighbours.org.uk/"> <h2>Didsbury Good Neighbours</h2> <img class="goodCauseImg" src="images/dgn.c37fb11c.jpg"> </a> <p>The core of our work is befriending isolated older people. We do this by recruiting and training volunteer befrienders; they are then matched with an older person who they visit regularly at home.</p> </div> </div> <div class="col-md-6 rowPadding"> <div style="text-align: center"> <a class="lnkGoodCause" href="http://www.st-catherines-didsbury.co.uk/community-centre.html"> <h2>St Catherines Social Club</h2> <img class="goodCauseImg" src="images/stcaths.83d2d309.jpg"> </a> <p>The parish Social Club was conceived over 40 years ago by the wonderful Fr Jack Fay, then parish priest. He envisaged the format to be run by a Committee to contribute to the spiritual and social development of the community.</p> </div> </div>'),a.put("views/main.html",'<div class="row marketing col-md-6 rowCountdown"> <div style="text-align: center"> <h4>The 9th Annual</h4> <h3 style="margin-top:0">Didsbury Beer Festival</h3> <h4>27th, 28th & 29th October 2016</h4> <br> </div> <div> <p> 100+ Beers, Ciders &amp; Perries, with great food &amp; music </p> <p> St Catherine\'s Social club<br> School Lane<br> Didsbury<br> Manchester<br> M20 6HS </p> <br> <div id="clockdiv"> <div> <span class="days"></span> <div class="smalltext">Days</div> </div> <div> <span class="hours"></span> <div class="smalltext">Hours</div> </div> <div> <span class="minutes"></span> <div class="smalltext">Minutes</div> </div> <div> <span class="seconds"></span> <div class="smalltext">Seconds</div> </div> </div> <p style="font-style:italic; text-align:center; font-size:14px">until Didsbury\'s Premier Social Event</p> </div> <br> <h4>Contact us</h4> <p> For all general enquiries, please email <a href="mailto:info@didsburybeerfestival.org.uk">info@didsburybeerfestival.org.uk</a> </p> </div> <div class="row marketing col-md-6" style="padding: 25px; text-align: center"> <twitter-widget> <a class="twitter-timeline" data-lang="en" data-height="350" data-theme="light" href="https://twitter.com/dbf_beer"></a> </twitter-widget> <h4>Press <a href="https://www.youtube.com/watch?v=BdoGr0ocBT4" class="youtubePopup"><span class="glyphicon glyphicon-play-circle"></span></a> to watch our video, or check out our social offerings</h4> <p style="font-size:30px"> <a href="https://twitter.com/dbf_beer"><i id="jv-twitter_alt" class="jv-twitter_alt"></i></a> <a href="https://www.facebook.com/pages/Didsbury-Beer-Festival/353791738079986"><i id="jv-facebook_alt" class="jv-facebook_alt"></i></a> <a href="http://www.flickr.com/photos/65526946@N08/"><i id="jv-flickr" class="jv-flickr"></i></a> <a href="http://www.youtube.com/user/Didsburybeerfestival"><i id="jv-youtube" class="jv-youtube"></i></a> <a href="http://didsburybeer.blogspot.co.uk/"><i id="jv-blogger" class="jv-blogger"></i></a> <a href="https://plus.google.com/111188242650217473870" rel="publisher"><i id="jv-google" class="jv-google"></i>+</a> </p> </div>'),a.put("views/music.html",'<div style="text-align:center"><h1>Thursday 27th</h1></div> <div style="width:80%; margin:auto"> <h3><a href="http://thecraickers.wix.com/thecraickers">The Craickers</a></h3> <p>Raucous Manchester Celtic rock</p> <img width="100%" src="images/craic.8960e513.jpg"> </div> <div style="width:100%; text-align:center"><img src="images/music.svg" alt="Picture"></div>--> <div style="text-align:center"><h1>Friday 28th</h1></div> <div style="width:80%; margin:auto"> <h3><a href="http://redcarpetcoyote.com/">Red Carpet Coyote</a></h3> <p>High energy blues/rock.</p> <img width="100%" src="images/rcc.884cf50f.jpg"> </div> <div style="text-align:center"><h1>Saturday 29th</h1></div> <div style="width:80%; margin:auto"> <h3><a href="https://www.facebook.com/SwinginAffair/">Swingin\' Affair</a></h3> <p>Big Band/Easy listening.</p> <img width="100%" src="images/sa.dc13e97f.jpg"> <br><br> <h3><a href="https://www.facebook.com/Crafty-Dog-189632137735789/">Crafty Dog</a></h3> <p>Classic rock and pop.</p> <img width="100%" src="images/cd.121797bd.jpg"> </div> <br><br>'),a.put("views/tickets.html",'<div class="col-md-6 rowPadding"> <div style="text-align: center"> <img id="beerImg" src="images/vipbeer_alt.30f545dc.png"> <h4>Normal Entry - £5</h4> </div> <p>For normal entry into Didsbury Beer Festival, just turn up on the day and pay at the door.</p> <span>Thursday 27th</span><span class="pull-right">7-11PM</span><br> <span>Friday 28th</span><span class="pull-right">6-11PM</span><br> <span>Saturday 29th</span><span class="pull-right">12-11PM</span><br> </div> <div class="col-md-6 rowPadding"> <div style="text-align: center"> <img id="ticketImg" src="images/vipticket_alt.97fc1ef5.png"> <h4>Friends Ticket - £15</h4> <p>On sale now!</p> <p>This ticket covers all three nights, with a glass and guaranteed entry with queue jumping rights!</p> <p>To be purchased in advance - <a title="Or email tessa.connolly@tiscali.co.uk" href="mailto:tessa.connolly@tiscali.co.uk?subject=Friends of DBF ticket request">click here</a> Or email tessa.connolly@tiscali.co.uk</p> </div> </div>'),a.put("views/volunteer.html",'<div class="row marketing col-md-12"> <h2>We need you.......</h2> <p>The Didsbury Beer Festival is managed and staffed entirely by volunteers and we are now looking for staff for this year. Volunteering at the festival is always great fun and many come back year after year, but we’re always looking for more.<br><br> So if you can spare anything from a couple of hours to a full weekend, we’d love to have you join us. The work can be hard but it is rewarding and obviously there are a few perks!<br><br></p> <ul> <li><p>You will be given refreshments, full training and support plus breaks whenever you need them.<br><br></p></li> <li><p>If you are a student and working towards Employability Awards we can provide a certificate of volunteering.<br><br></p></li> <li><p>Every volunteer gets a ‘limited edition’ festival t’shirt and glass to keep and an invite to our Festival Celebration party in January.</p></li> </ul> <p><br> If we reach the required numbers of staff needed on certain shifts these will be removed from the form and no longer available to book. So if you’ve selected the shifts you want and submitted the form ....YOU’RE IN!!</p> </div> <div class="row marketing col-md-12"> <p>Interested? <br><a href="https://docs.google.com/forms/d/1vkYD3_kposY61MoGgR3gu4XGcTLD71WzHwCqEgYQdGU/viewform">CLICK HERE</a> Please complete and submit the online Volunteer Registration Form and remember to make a note of your shifts as we are unable to contact everyone individually to confirm.</p> </div>')}]);