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
  const u_name = req.body.u_name;
  const u_mobile = req.body.u_mobile;

  connection.query(
    "UPDATE user_details SET mobile_number=?,name=? WHERE User_id=?",
    [u_mobile, u_name, user_id],

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
