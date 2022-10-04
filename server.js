const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const client = new Client({
  connectionString: "postgres://qdyuodaxrolgjb:40d0c9eceda93438fbe662067436e0e5d1d5e3e6f95c5099844b38a8e645bca9@ec2-52-70-86-157.compute-1.amazonaws.com:5432/de3s7pn71jrsv",
  ssl: { rejectUnauthorized: false },
}) 

client.connect();

var myapp = express();
const path = require('path');
const router = express.Router(); 

myapp.use(function(req, res, next){
req.headers['content-type'] = "application/json"; 
next();
});

myapp.get('/', function(req, res){
   res.sendFile( __dirname);
   res.sendFile(path.join(__dirname + '/commerce/index.html'));
});
myapp.use(express.static(__dirname + '/commerce'));




const portr = process.env.PORT || 3000;

myapp.listen(portr);
