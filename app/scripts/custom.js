// jscs:disable
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