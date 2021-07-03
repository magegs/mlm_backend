var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlm",
});

router.get("/", function (req, res, next) {
  const category = req.body.category;
  connection.query(
    "SELECT * FROM product WHERE product_id='PRO2' ",

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
