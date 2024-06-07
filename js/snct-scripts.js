// SNCT JavaScript Document
$(function () {
  $("main").click(function () {
    if ($(".collapse.show").is(":visible")) {
      $('.collapse').collapse('hide');
    }
  });
  if ($(".snct_slider").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $(".snct_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: true,
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        autoplay: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
      });
    });
  }
  if ($(".vmarquee").length > 0) {
    $.getScript("js/jquery.marquee.js").done(function () {
      $('.vmarquee').marquee({
        direction: 'up',
        speed: 30
      });
    });
  }
  if ($("#gotop").length > 0) {
    $("#gotop").click(function () {
      $('html,body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });
  }
});
