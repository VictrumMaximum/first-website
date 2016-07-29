var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = 3000;
var server;

app.use("/login", express.static(__dirname + "/login"));
app.use("/home", express.static(__dirname + "/home"));

app.post("/loginTry", urlencodedParser, function(req, res) {
	console.log(req.body);
	console.log(req.body.uname);
	console.log(req.body.pwd);
	
})

http.createServer(app).listen(port);