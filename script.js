$(document).ready(function () {
  //Goes to portfolio
  $("#portfolio-button").click(function(){
    $('html, body').animate({
      scrollTop:$("#portfolio").offset().top - 100
    }, 1000);
  });
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight() ;
    $(".project-img").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(450,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(450,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
