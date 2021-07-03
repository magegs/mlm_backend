var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlm",
});

router.post("/", function (req, res, next) {
  const level = req.body.f_value1;
  const status = req.body.f_value2;
  if (status == "Completed") {
    connection.query(
      "SELECT * FROM levels WHERE 	completed_level	>= ? ",
      [level],
      function (err, row, field) {
        if (err) {
          console.log(err);
          res.send({ success: false, message: "DataBase Error😴" });
        }
        if (row.length > 0) {
          console.log(row.length);
          res.send(row);
        } else {
          console.log("noooo");
          res.send({ success: false, message: "No Data Found 🚶‍♂️🚶‍♂..." });
        }
      }
    );
  } else if (status == "Pending") {
    connection.query(
      "SELECT * FROM levels WHERE 	completed_level	<= ? ",
      [level],
      function (err, row, field) {
        if (err) {
          console.log(err);
          res.send({ success: false, message: "DataBase Error😴" });
        }
        if (row.length > 0) {
          console.log(row);
          res.send(row);
        } else {
          console.log("noooo");
          res.send({ success: false, message: "No Data Found 🚶‍♂️🚶‍♂..." });
        }
      }
    );
  }
});

module.exports = router;
