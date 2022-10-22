var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();
var logger = require("morgan");
var mongoose = require("mongoose");
const PORT = process.env.PORT || 8081;

const connection = mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => {
			console.log("[+] Database Connected");
		}, (err) => {
			console.log(err);
		}
	);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.send(err);
});

app.listen(PORT, () => {
    console.log('[+] Server Started on ' + PORT);
});