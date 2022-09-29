const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require = ('jsonwebtoken');
const client = new Client({
  connectionString: "postgres://rxqflgqzxxycpv:1ae594f3eb4062ee8b04dfcba6edb7472e040f11995085c023ed876045facfb0@ec2-52-70-45-163.compute-1.amazonaws.com:5432/d6cipnmva3hkav",
  ssl; true,
}) 

client.connect();

var myapp = express();
const path = require('path');
const router = express.Router(); 

myapp.use(function(req, res, next){
req.headers['content-type'] = "application/json"; 
next();
});

myapp.get('/', function(req, res) {
    res.send("<h1>Hello World!</h1>");
});
myapp.use(express.static(__dirname + '/commerce'));

myapp.use(bodyParser.urlencoded({ extended:true }))
myapp.use(bodyParser.json());

const portr = process.env.PORT || 3000;

myapp.listen(portr);
