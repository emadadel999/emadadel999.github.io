var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "159753",
  database: "entries",
});

connection.connect();

module.exports = connection;
