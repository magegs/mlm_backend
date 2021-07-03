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
router.post("/", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  connection.query(
    "SELECT * FROM login WHERE username = ? AND  password = ?",
    [username, password],
    function (err, row, field) {
      if (err) {
        console.log(err);
        res.send({ success: false, message: "error in database" });
      }
      if (row.length > 0) {
        res.send({
          success: true,
          user: row[0].username,
          message: "Login Success..!",
          role: row[0].role,
          id: row[0].id,
        });
        // console.log(row[0].role);
        // res.send(row);
      } else {
        res.send({ success: false, message: "user not founded" });
      }
    }
  );
});

module.exports = router;
