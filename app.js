var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mysql = require("mysql");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/product");
var product_insertRouter = require("./routes/product_insert");
var product_detailsRouter = require("./routes/product_details");
var message = require("./routes/message");
var generateReport = require("./routes/pdf");
var filter = require("./routes/filter");
var Manage_User = require("./Manage_Users/user");
var Manage_User_details = require("./Manage_Users/user_details");
var update_details = require("./Manage_Users/updateuser");
var update_bank = require("./Manage_Users/updatebank");
var pdf = require("./Manage_Users/pdf");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/product_insert", product_insertRouter);
app.use("/product_details", product_detailsRouter);
app.use("/message", message);
app.use("/generateReport", generateReport);
app.use("/filter", filter);
app.use("/m_user", Manage_User);
app.use("/Manage_User_details", Manage_User_details);
app.use("/update_details", update_details);
app.use("/update_bank", update_bank);
app.use("/pdf", pdf);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
