$(document).ready(function () {
  $("ul.level-2").children().css("background-color", "red");

  $(".third-item").prev().css("background-color", "blue");
  $("span").parent().css("background-color", "green");

  var t = $("body").children().first().text();
  $("body").children().eq(1).text(t);
});
