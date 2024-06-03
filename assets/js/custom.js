jQuery(function() {
    jQuery(".allbutton").click(function(){
        jQuery(".single").show();
    });
    jQuery(".button").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});

$('.slider-main').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    nextArrow:".next",
    prevArrow:".prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });