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
  const p_id = req.body.p_id;
  console.log(p_id);
  // res.send({
  //   success: true,
  //   message: p_id,
  // });
  connection.query(
    "SELECT * FROM product WHERE product_id =?",
    [p_id],
    function (err, row, field) {
      if (err) {
        console.log(err);
        // res.send({ success: false, message: "error in database" });
      }
      if (row.length > 0) {
        console.log(row);
        res.send(row);
        // res.send({
        //   success: true,
        //   user: row[0].username,
        //   message: "Login Success..!",
        // });
      } else {
        console.log("noooo");

        res.send({ success: false, message: "user not founded" });
      }
    }
  );
});

module.exports = router;

// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "okkkk" });
// });

// module.exports = router;
