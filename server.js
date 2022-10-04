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

myapp.post('/commerce/signup',function(){
client.connect();

var datae = {};
var user = {};
var username = req.body.username;
var password = req.body.password;
var email= req.body.email;
var reg_date = req.body.reg_date;
var last_login = req.body.last_login;
var maId = 3;

user['email'] = mamail;
user['secretKey'] = mapassword;


const text = "INSERT INTO accounts(id,username,password,email,reg_date,last_login,) VALUES ('','"+ username +"','"+ password +"','"+ email +"','"+ reg_date +"','"+ last_login +"') RETURNING id;";

client.query(text, (err, resp) => {
if (err){
datae['status']= 404;
datae['erroe'] = "Error: Problem occur when signing up...";
res.send(datae);
}else{

datae['status'] = 200;
var arr = ();
arr['id'] = resp.rows[0].id;
arr['first_name'] = username;
arr['email'] = email;
arr['token'] = token;
arr['secretKey'] = password;
arr['reg_date'] = reg_date;

datae['data'] = arr;
res.send(datae);
}
});

});



const portr = process.env.PORT || 3000;

myapp.listen(portr);
