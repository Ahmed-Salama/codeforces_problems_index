"use strict";
var VERBOSE = true;

// external imports
var express = require('express');

var app = express();

// routes
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "http://codeforces.com");
	next();
});

app.use(express.static('.'));

app.listen(8080);
