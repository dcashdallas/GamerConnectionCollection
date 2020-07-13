// var express = require("express");

// var router = express.Router();

// var game = require("../models/games.js");

// router.get('/', function (req, res) {
//     res.redirect('/index');
// });

// router.get('/index', function (req, res) {
//     // game.selectAll(function (data) {
//     // var hbsObject = { games: data };
//     //console.log(hbsObject);
//     res.render('index', {});
// });
// // });

// router.get('/login', function (req, res) {
//     // game.selectAll(function (data) {
//     //     var hbsObject = { games: data };
//     //     //console.log(hbsObject);
//     res.render('login', {});
//     // });
// });

// router.post('/game/create', function (req, res) {
//     // game.insertOne(req.body.game_name, function () {
//     res.redirect('/index');
// });
// // });

// router.post('/game/own/:id', function (req, res) {
//     // game.updateOne(req.params.id, function () {
//     res.redirect('/index');
// });
// // });

// module.exports = router;