(function($) {
  let activeSlide = 1;
  let totalSlides = $(".slider").length;
  console.log(totalSlides);
  $("#goLeft").click(() => {
    console.log("leftButton--before", activeSlide);
    var viewPortWidth = $(window).width();
    console.log(viewPortWidth);
    if (activeSlide < totalSlides) {
      $(".slider").css("transform", `translateX(+${activeSlide * 100}%)`);
      activeSlide++;
    }
    console.log("leftButton--after", activeSlide);
  });
  $("#goRight").click(() => {
    console.log("rightButton--before", activeSlide);
    var viewPortWidth = $(window).width();
    console.log(viewPortWidth);
    $(".slider").css("transform", `translateX(-${(activeSlide - 2) * 100}%)`);
    if (activeSlide > 1) {
      activeSlide--;
    }
    console.log("rightButton--after", activeSlide);
  });
})(jQuery);

/* visible->selected
    enter-right class
    enter-left class
    leave-right class
    leave-left class
*/
