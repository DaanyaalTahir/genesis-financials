var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
const mysql = require("mysql2");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var transactionsRouter = require("./routes/transactions");
var statementsRouter = require("./routes/statements");
var insightsRouter = require("./routes/insights");
var contactRouter = require("./routes/contact");
var loansRouter = require("./routes/loans");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/transactions", transactionsRouter);
app.use("/statements", statementsRouter);
app.use("/insights", insightsRouter);

app.use("/contact", contactRouter);
app.use("/loans", loansRouter);

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
