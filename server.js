
// Dependencies
// =============================================================
var express = require("express");  
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));



// Routes
// =============================================================
require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRouting.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
