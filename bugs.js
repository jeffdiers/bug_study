//dynamically get the year and add to the footer

$(document).ready(function(){

  $("#year").html(current_year);
  var current_year = new Date().getFullYear();

  var bug_list = ["butterfly", "ladybug", "mosquito", "pincher", "mantis"];

  var random_bug_number = Math.floor(Math.random() * bug_list.length + 1);
  $("#author").html(bug_list[random_bug_number]);

  for (var i = 0; i < bug_list.length; i++) {
    $("#bug_display").append("<li>"+bug_list[i]+"<img src='images/"+bug_list[i]+".jpg'/></li>");
  }

})
