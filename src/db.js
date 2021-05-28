var mysql = require("mysql");
require("dotenv").config();
// var process = require("dotenv");
// process.config();
// export var con = mysql.createConnection({
//     host: "hardy",
// })

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = con;
