var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlm",
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  var id = "admin";
  connection.query(
    "SELECT * FROM msg WHERE to_id = ? ",
    [id],
    function (err, row, field) {
      if (err) {
        console.log(err);
        // res.send({ success: false, message: "error in database" });
      }
      if (row.length > 0) {
        res.send(row);
      } else {
        res.send("noooo");
      }
    }
  );
});

module.exports = router;
