$( document ).ready(function() {

  $('.carousel').carousel({
      pause: "false"
  });

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if($('.nav-bar').offset().top > 0) {
      $('.nav-bar').css({
        "background-color": "#00bcf2",
        "transition": "all ease-in-out 0.5s"
      })
    }
    else {
      $('.nav-bar').css({
        "background-color": "transparent",
        "transition": "all ease-in-out 0.5s"
      })
    }

});
});
