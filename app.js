var port = 3000;

// load express module
var express = require('express');
var app = express();

var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

// for connecting to the postgres database
var pg = require('pg');
var conString = "postgres://postgres:passpost@localhost:5432/firstwebsite";

// open connection with database
var client = new pg.Client(conString);
client.connect();

// initialize parser for parsing json
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// define folders containing static files (html/css/js/images..)
app.use(express.static(path.join(__dirname, "/login")));
app.use("/home", express.static(path.join(__dirname, "/home")));

// handle post request for logging in
app.post("/loginTry", urlencodedParser, function(req, res) {
	console.log(req.body.uname);
	console.log(req.body.pwd);
	
	var query = client.query("SELECT id FROM users WHERE name = $1 AND pwd = $2", [req.body.uname, req.body.pwd]);
	
	query.on("row", function(row) {
		console.log(row);
		//send id back to client
		res.end(JSON.stringify(row));
	});
	
});

http.createServer(app).listen(port);