// JavaScript Document


var today = new Date();

$(document).ready(function() {
  $(".view_timer").each(function(index, target) {
    var startDate = $(this).attr("data-start-date");
    var endDate = $(this).attr("data-end-date");

    if (startDate) {
      startDate = new Date(startDate);
    }
    else {
      startDate = today;
    }
    if (endDate) {
      endDate = new Date(endDate);
    }

    if (startDate <= today && (!endDate || today <= endDate)) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
});
