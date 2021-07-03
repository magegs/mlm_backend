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
  const category = req.body.category;
  connection.query(
    "SELECT * FROM product WHERE product_category=? ",
    [category],
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
});

module.exports = router;
