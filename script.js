$(document).ready(function () {
  //Goes to portfolio
  $("#portfolio-button").click(function(){
    $('html, body').animate({
      scrollTop:$("#portfolio").offset().top - 100
    }, 1000);
  });
});


$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".project")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    }
    else {
      $(tag).removeClass("visible")
      }
  }
})
