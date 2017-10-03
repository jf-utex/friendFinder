
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use("public", express.static('public'))

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================
require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRouting.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
