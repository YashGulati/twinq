
$(document).ready(function() {
  console.log($("body").scrollTop());

  setTimeout(function(){
    var top = jQuery('#about').offset().top;
    if ($("body").scrollTop() == 0) {
      $("body").animate({
        scrollTop:  top - 10
      });
    }
  }, 5000);
});


$("#downClick").on("click" ,function(){
  scrolled=scrolled+700;
  var top = jQuery('#about').offset().top;
	$("body").animate({
    scrollTop:  top - 10
  });
  scrolled = 0;
});
