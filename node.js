var express = require('express');
var app = express();
var http = require('http');
var port = 3000;
var server;

app.use("/login", express.static(__dirname + "/login"));
app.use("/home", express.static(__dirname + "/home"));

http.createServer(app).listen(port);