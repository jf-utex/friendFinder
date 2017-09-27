var mysql = require("mysql");


var keys = process.env.JAWSDB_URL || require('../keys.js')


var connection = mysql.createConnection(keys);


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
