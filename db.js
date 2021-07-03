// // var connection = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "mlm",
// // });

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mlm",
//   multipleStatements: true,
// });
// connection.connect((err) => {
//   if (!err) {
//     console.log("Connected success");
//   } else {
//     console.log("Connection failed");
//   }
// });

var express = require("express");
var router = express.Router();
var mysql = require("mysql");
// var db = require("../db");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlm",
});
