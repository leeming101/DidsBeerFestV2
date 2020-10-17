"use strict";

$(document).ready(function () {
  $("#slider").bxSlider({
    ticker: true,
    tickerSpeed: 6000,
    tickerHover: true,
  });

  var mn = $(".main-nav");
  var logo = $("#navLogo");
  var hdr = $(".header").height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > hdr && $(".navbar-toggle").is(":hidden")) {
      mn.addClass("main-nav-scrolled");
      logo.show();
    } else {
      mn.removeClass("main-nav-scrolled");
      logo.hide();
    }
  });

  $(".youtubePopup").magnificPopup({ type: "iframe" });

  $(".navbar-brand").click(function () {
    $(".navbar-collapse.in").collapse("hide");
  });

  // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $(".dropdown").on("show.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $(".dropdown").on("hide.bs.dropdown", function (e) {
    e.preventDefault();
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideUp(300, function () {
        $(this).parent().removeClass("open");
      });
  });
});

$(document).on("click", ".navbar-collapse.in", function (e) {
  if ($(e.target).is("a")) {
    $(this).collapse("hide");
  }
});

/*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'didsbury-beer-festival.myshopify.com',
            storefrontAccessToken: '2539fc6b31b5720da9bae86eb5f5f629',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
              id: '224929841318',
              node: document.getElementById('collection-component-1602963986272'),
              moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                "width": "calc(25% - 20px)"
              },
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            },
            "title": {
              "font-size": "16px"
            },
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": {
                "background-color": "#088b5d"
              },
              "background-color": "#099a67",
              ":focus": {
                "background-color": "#088b5d"
              },
              "border-radius": "0px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px"
            },
            "price": {
              "font-size": "17px"
            },
            "compareAt": {
              "font-size": "14.45px"
            },
            "unitPrice": {
              "font-size": "14.45px"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": {
                "background-color": "#088b5d"
              },
              "background-color": "#099a67",
              ":focus": {
                "background-color": "#088b5d"
              },
              "border-radius": "0px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": {
                "background-color": "#088b5d"
              },
              "background-color": "#099a67",
              ":focus": {
                "background-color": "#088b5d"
              },
              "border-radius": "0px"
            }
          },
          "text": {
            "total": "Subtotal",
            "notice": "",
            "button": "Checkout"
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#099a67",
              ":hover": {
                "background-color": "#088b5d"
              },
              ":focus": {
                "background-color": "#088b5d"
              }
            },
            "count": {
              "font-size": "18px"
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/