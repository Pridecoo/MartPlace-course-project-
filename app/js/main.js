$(function(){

  $('.weekly__items').slick({
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    appendArrows: '.weekly__title',
  });


  $('.product__stars').rateYo({
    rating: 4.5,
    starWidth: '15px',
    ratedFill: "#ffc000",
    normalFill: "#eff1f5",
    spacing: '4px',
    readOnly: true
  });

  var mixer = mixitup('.newest__items');

});