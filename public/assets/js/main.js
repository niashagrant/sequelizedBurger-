$(function () {
  $("#inputDessert").on("submit", function (event) {
    event.preventDefault();

    var newDessert = {
      name: $("#newDessert").val().trim(),
    };
    console.log(newDessert);
    $.ajax("/api/burger", {
      type: "POST",
      data: newDessert,
    }).then(function () {
      console.log("Added new dessert");
      location.reload();
    });
  });

  $(".eatDessert").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newState = $(this).data("devoured");
    var devouredState = {
      devoured: newState,
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("dessert eaten");
      location.reload();
    });
  });

  $("#delete").on("click", function (event) {
    event.preventDefault();
    console.log("delete is clicked");
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
