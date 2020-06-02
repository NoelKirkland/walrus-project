$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});
$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".seefirst").slideToggle();
    $(".seesecond").slideToggle();
  });
});