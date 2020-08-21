$(function () {

  $('.weekly__items').slick({
    arrows: true,
    autoplay: 6000,
    dots: false,
    infinite: true,
    draggable: false,
    prevArrow: '<button class="slick-arrow product-arrow product-arrow--prev slick-arrow--prev button" type="button"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow product-arrow product-arrow--next slick-arrow--next button" type="button"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.weekly__arrows-wrapper',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      }
    ],
  });

  $('.feed__items').slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: 10000,
    draggable: false,
    prevArrow: '<button class="slick-arrow product-arrow product-arrow--prev feed__arrow button" type="button"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow product-arrow product-arrow--next feed__arrow button" type="button"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.feed__arrows-wrapper',
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  });

  $('.clients__items').slick({
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-arrow--prev clients__arrow button" type="button"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next clients__arrow clients__arrow--next button" type="button"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.clients__inner',
    dots: false,
    infinite: true,
    autoplay: 7000,
    draggable: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.product__stars').rateYo({
    rating: 4.5,
    starWidth: '12px',
    ratedFill: "#ffc000",
    spacing: '4px',
    readOnly: true
  });

  $('.header__burger-btn').click(function () {
    $('.header__menu-items').slideToggle();
    $('.header__burger-btn').toggleClass("active");
  });

  $('.header__pages-close').click(function () {
    $('.header__pages-categories').toggleClass("closed");
  });

  var mixer = mixitup('.newest__items');

});