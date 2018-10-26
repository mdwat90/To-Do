// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newComplete = $(this).data("complete");

    var completedState = {
      complete: newComplete
    };

  

    // Send the PUT request.
    $.ajax("/api/todos/" + id, {
      type: "PUT",
      data: completedState,
    }).then(
      function() {
        console.log("changed completed state to", newComplete);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTodo = {
      todo: $("#ca").val().trim(),
      complete: false
    };

    // Send the POST request.
    $.ajax("/api/todos", {
      type: "POST",
      data: newTodo
    }).then(
      function() {
        console.log("created new todo");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/todos/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted todo", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
