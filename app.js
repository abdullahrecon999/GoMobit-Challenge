var createError = require("http-errors");
var express = require("express");
const path = require('path');
var cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();
var logger = require("morgan");
const cors = require('cors');
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

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '/client/build')));

app.use(cors());

app.use(logger("dev"));
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

app.use("/index", indexRouter);
app.use("/users", usersRouter);

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

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