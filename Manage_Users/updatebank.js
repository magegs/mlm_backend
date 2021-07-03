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
  const user_id = req.body.user_id;
  const b_name = req.body.b_name;
  const b_acc = req.body.b_acc;
  const b_ifsc = req.body.b_ifsc;
  const b_branch = req.body.b_branch;

  connection.query(
    "UPDATE bank_details SET Acc_no=?,bank_name=?,branch=?,ifsc_code=? WHERE user_id=?",
    [b_acc, b_name, b_branch, b_ifsc, user_id],

    function (err, result) {
      if (err) {
        console.log(err);
        res.send({ success: false, message: "DataBase Error😴" });
      }
      if (result) {
        res.send({ success: true, message: "Updated Success!..." });
      } else {
        console.log("noooo");
        res.send({ success: false, message: "Error🚶‍♂️🚶‍♂..." });
      }
    }
  );
});

module.exports = router;
