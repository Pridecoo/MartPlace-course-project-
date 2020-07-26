$(function(){

  $('.weekly__items').slick({
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    prevArrow: '<button class="slick-arrow slick-arrow--prev button" type="button"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next button" type="button"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.weekly__arrows-wrapper',
  });

  $('.feed__items').slick({
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    prevArrow: '<button class="slick-arrow slick-arrow--prev feed__arrow button" type="button"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next feed__arrow button" type="button"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.feed__arrows-wrapper',
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  $('.clients__items').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: 7000,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $('.product__stars').rateYo({
    rating: 4.5,
    starWidth: '12px',
    ratedFill: "#ffc000",
    spacing: '4px',
    readOnly: true
  });

  var mixer = mixitup('.newest__items');

});