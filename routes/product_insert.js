var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlm",
  multipleStatements: true,
});
router.post("/", function (req, res, next) {
  const p_id = req.body.p_id;
  const p_name = req.body.p_name;
  const p_dec = req.body.p_dec;
  const p_status = req.body.p_status;
  const p_cat = req.body.p_cat;
  var last_id = "";
  var new_id = "";
  var id = "";

  con.query(
    "SELECT * FROM product ORDER by 	product_id  desc limit 1",
    function (err, row, field) {
      // if (err) {
      //   console.log(err);
      //   // res.send({ success: false, message: "error in database" });
      // }
      if (!row.length > 0) {
        var id = "PRO001";

        // console.log(new_id);
        // res.send(new_id);
      } else {
        last_id = row[0].product_id;
        new_id = last_id.substr(3);
        new_id = parseFloat(new_id);
        new_id = new_id + 1;
        id = "PRO" + new_id;

        // console.log(id);
        // res.send(id);
      }
      con.query(
        "INSERT INTO product(product_id,product_name,product_desc,product_category,status) VALUES (?,?,?,?,?)",
        [id, p_name, p_dec, p_cat, p_status],
        function (err, row, fields) {
          if (err) {
            throw err;
          } else {
            res.send({
              success: true,
              // user: row[0].username,
              message: "Inserted Successfully..!",
            });
            // res.send(row);
            console.log(row);
            console.log("Inserted");
          }
        }
      );
    }
  );
});
module.exports = router;
