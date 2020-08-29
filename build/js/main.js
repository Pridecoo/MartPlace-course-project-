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

    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    }],
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

    responsive: [{
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

    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });

  $('.product__stars').rateYo({
    rating: 4.5,
    starWidth: '14px',
    ratedFill: "#ffc000",
    spacing: '4px',
    readOnly: true
  });

  $('.header__burger-btn').click(function () {
    $('.header__menu-items').slideToggle();
    $('.header__burger-btn').toggleClass('active');
  });

  $('.header__pages-close').click(function () {
    $('.header__pages-categories').toggleClass('closed');
  });

  $('#categories').click(function () {
    $('#categories-list').slideToggle();
    $('#categories').toggleClass('active');
  });

  $('#filters-radio').click(function () {
    $('#radio-list').slideToggle();
    $('#filters-radio').toggleClass('active');
  });

  $('#price-filter').click(function () {
    $('.price-range').slideToggle();
    $('#price-filter').toggleClass('active');
  });

  $(".price-range__slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 320,
    from: 30,
    to: 300,
    prefix: "$",
  });

  $('#list-view').click(function () {
    $('.product').addClass('list');
    $('#list-view').addClass('active');
    $('#grid-view').removeClass('active');

    $('.product__info').each(function () {
      $(this).parents('.product').find('.product__content-middle').append($(this));
    });

    $('.product__sells').each(function () {
      $(this).parents('.product').find('.product__content-bottom').append($(this));
    });

    $('.product__info-category').each(function () {
      $(this).parents('.product').find('.product__content-top').append($(this));
    });
  });

  $('#grid-view').click(function () {
    $('.product').removeClass('list');
    $('#grid-view').addClass('active');
    $('#list-view').removeClass('active');

    $('.product__info').each(function () {
      $(this).parents('.product').find('.product__content-top').append($(this));
    });

    $('.product__sells').each(function () {
      $(this).parents('.product').find('.product__content-middle').append($(this));
    });

    $('.product__info-category').each(function () {
      $(this).parents('.product').find('.product__stats').append($(this));
    });
  });

  $('#filters').click(function () {
    $('.products-page__aside').addClass('active');
    $('.menu-overlay').addClass('active');
    $('body').addClass('noscroll');
  });

  $('.products-page__filters-btn--sorting').click(function () {
    $('.products-heading').addClass('active');
    $('.menu-overlay').addClass('active');
    $('body').addClass('noscroll');
  });

  $('.menu-overlay').click(function () {
    $('.products-page__aside').removeClass('active');
    $('.products-heading').removeClass('active');
    $('.menu-overlay').removeClass('active');
    $('body').removeClass('noscroll');
  });

  if ($('.newest__items').length) {
    var mixer = mixitup('.newest__items');
  } else if ($('.products-page__items').length) {
    var mixer = mixitup('.products-page__items');
  }

});