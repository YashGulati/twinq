$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#mainNav').fadeIn();
  } else {
    $('#mainNav').fadeOut();
  }
});
