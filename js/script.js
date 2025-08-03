// js
//AOS
AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: 'linear'
});

// flip
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

// counting2
wow = new WOW(
  {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 10,
    mobile: true,
    live: true
  }
)
wow.init();

// jq
// mix it up
$(document).ready(function () {

  // mix it up
  var mixer = mixitup('#hello', {
    animation: {
      duration: 300
    }
  });

  // lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  // preloader
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });

  // slick
  $('.wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });

  // // disable right-click
  // window.oncontextmenu = function () {
  //   return false;
  // }

  // curvedtext
  var arc = function (t) {
    return {
      x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
      y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
    };
  };

  $('#text1').curvedText({
    curve: arc,
    domain: [-0.2, 0.2],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
  });
  /**
   * Demo 2
   */
  var circle = function (t) {
    return {
      x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
      y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
    };
  };

  $('#text2').curvedText({
    curve: circle,
    domain: [0.0, 1.0],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
  });


  /**
   * Demo 3
   */
  var bezier = function (t) {
    var px = [100.0, 350.0, 500.0, 900.0],
      py = [400.0, 50.0, 500.0, 200.0],
      ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
      ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
      cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
      cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

    return {
      x: cx,
      y: cy
    };
  };

  $('#text3').curvedText({
    curve: bezier,
    domain: [0.0, 1.0],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
  });


  // wow js


  $("#dragg").draggable();

  $("#accordion").accordion({
    collapsible: true
  });

  let data = [
    "HTML",
    "CSS",
    "JQuery"
  ];

  $("#c_name").autocomplete({
    source: data
  });

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.count').numberAnimate({
    duration: 2000
  });



});

