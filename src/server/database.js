var mysql = require("mysql2");
var db = mysql.createConnection({
  user: "user",
  host: "149.56.14.33",
  password: "uL4RZEjpb4ce3N3Kriq7szXppXszAs",
  database: "genesis_financial",
  port: "3306",
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
