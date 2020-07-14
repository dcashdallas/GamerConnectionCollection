// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });

$(document).ready(function () {
  // Getting a reference to the input field where user adds a new todo
  var $newItemInput = $("input.new-item");
  // Our new todos will go inside the gameContainer
  var $gameContainer = $(".game-container");
  // Adding event listeners for deleting, adding games
  $(document).on("click", "button.delete", deleteGame);
  $(document).on("submit", "#game-form", insertGame);

  // Our initial todos array
  var games = [];

  // Getting todos from database when page loads
  getGames();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $gameContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < games.length; i++) {
      rowsToAdd.push(createNewRow(games[i]));
    }
    $gameContainer.prepend(rowsToAdd);
    // res.render("index", data);
  }

  // This function grabs todos from the database and updates the view
  function getGames() {
    $.get("/api/games", function (data) {
      games = data;
      initializeRows();
      // res.render("index", data);
      // location.reload();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteGame(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/games/" + id
    }).then(getGames);
    // res.render("index", data);
    location.reload();

  }

  // This function constructs a game-item row
  function createNewRow(game) {
    var $newInputRow = $(
      [

        "<li class='list-group-item game-item'>",
        "<span>",
        game.text,
        // "<div class='rw-ui-container'></div>",
        "</span>",

        "<button class='delete btn btn-danger'>Sold It</button>",
        "</li>"
      ].join("")

    );

    $newInputRow.find("button.delete").data("id", game.id);
    $newInputRow.data("game", game);
    if (game.complete) {
      // $newInputRow.find("span").html("<div class='rw-ui-container'></div>",);
    }
    return $newInputRow;

  }

  // This function inserts a new game into our database and then updates the view
  function insertGame(event) {
    event.preventDefault();
    var game = {
      text: $newItemInput.val().trim(),
      complete: false,


    };

    $.post("/api/games", game, getGames);
    $newItemInput.val("");
    location.reload();
  }
  // res.render("index", data);
});
