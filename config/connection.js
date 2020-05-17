var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db",
  });
}

db.connect(function (err) {
  if (err) {
    console.error("error db: " + err.stack);
    return;
  }
  console.log("db as id " + db.threadId);
});

module.exports = db;
