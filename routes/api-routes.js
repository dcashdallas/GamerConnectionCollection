// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/games", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Game.findAll({}).then(function (dbGame) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbGame);
    });
  });

  // POST route for saving a new todo
  app.post("/api/games", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Game.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbGame) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbGame);

    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/games/:id", function (req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbGame) {
      res.json(dbGame);
    });

  });




};
