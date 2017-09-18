
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var apiRoutes = require("./routing/apiRouting.js");
// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
  res.json(friendsArray);
});
require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRouting")(app);

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
