$(function(){

  $('.weekly__items').slick({
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    appendArrows: '.products-title--slider',
  });


  $('.product__stars').rateYo({
    rating: 4.5,
    starWidth: '13px',
    spacing: '4px',
    readOnly: true
  });

  var mixer = mixitup('.newest__items');

});