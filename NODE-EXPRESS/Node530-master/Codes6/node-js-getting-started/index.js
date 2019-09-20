const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var session = require("express-session");
var cookieParser = require('cookie-parser');
app.set('port', (process.env.PORT || 5000));
app.use(session({
  secret: 'keyboard cat',
  	cookie: { secure: false,maxAge: 60000,expires:false }  // 6 min session
}));
app.use(cookieParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var userroutes = require("./userroutes");
app.use('/admin', userroutes);
/*app.get("/welcome",(req,res)=>{
res.send("Hello User");
});
app.post('/login',(req,res)=>{
	console.log(req);
	res.send("Welcome User "+req.body.userid);
});
app.post("/register",(req,res)=>{
	res.send("Register Code");
});*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
