var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var port = 3000;
var server;

http.createServer(app).listen(port);
app.get("/greetme", function(req, res) {
	var query = url.parse(req.url, true).query;
	var name = (query["name"] != undefined ? query["name"] : "Anonymous");
	res.send("Greetings " + name);
});

app.get("/goodbye", function(req, res) {
	res.send("Goodbye!");
});