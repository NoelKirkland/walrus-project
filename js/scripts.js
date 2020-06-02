$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable2").click(function() {
    $(".seefirst").slideToggle();
    $(".seesecond").slideToggle();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("p").click(function() {
    $("p").removeClass("unhighlight");
    $("p").addClass("highlight");
  });
  $("p").click(function() {
    $("p").removeClass("highlight");
    $("p").addClass("unhighlight");
  });
});