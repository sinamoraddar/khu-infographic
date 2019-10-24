(function($) {
  let activeSlide = 1;
  let totalSlides = $(".slider").length;
  // sliding functionality
  const slide = position => {
    //assign a number to the position variable based on the value of
    // the arrow icon
    if (position === "right") {
      position = parseInt(activeSlide) - 1;
    } else if (position === "left") {
      position = parseInt(activeSlide) + 1;
    }
    //only do the slide effect if it's in the total page range
    if (position > 0 && position <= totalSlides) {
      $(".slider").css("transform", `translateX(+${(position - 1) * 100}%)`);
      activeSlide = position;
    }
  };
  //pagination buttons' click event
  $(".pagination__button").click(function() {
    slide($(this).val());
  });
  //arrow key event handler
  $(document).keydown(function(e) {
    switch (e.key) {
      case "ArrowLeft": {
        slide("left");
        break;
      }
      case "ArrowRight": {
        slide('right');
        break;
      }
      default:
    }
  });
})(jQuery);
