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
  connection.query(
    "SELECT user_details.User_id,user_details.name,user_details.dob,user_details.into_id,user_details.mobile_number,user_details.adhar_number,	levels.level1,levels.level2,levels.level3,levels.level4,levels.level5,levels.level6,levels.level7,bank_details.Acc_no,bank_details.bank_name,bank_details.branch,bank_details.ifsc_code FROM user_details INNER JOIN levels ON  user_details.User_id=levels.user_id  INNER JOIN bank_details on levels.user_id=bank_details.user_id WHERE user_details.User_id=?",
    [user_id],

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
});

module.exports = router;
