$(document).ready(function () {
  $("#search").click(function (event) {
    event.preventDefault();

    var word = document.getElementById("word").value;
    $.post("http://localhost:5000/search", { word })
      .done(function (data) {
        console.log(data);
        showresult(data);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
});

function showresult(obj) {
  console.log(obj.length);
  $(".divTable").empty();
  for (let i = 0; i < obj.length; i++) {
    $(".divTable").append(
      `<div class="divRow">${i + 1}(${obj[i].wordtype}):: ${
        obj[i].definition
      }</div>`
    );
  }
}
/* Then the Server calls word.js to find the definition(s)
of the word in the SQL Dictionary, and then converts the definition(s) into JSON format and transmits it
back to the JavaScript in dict.js, where jQuery is used to display the definition(s) on the website. */
