const express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/",(req,res)=>{
res.send("Hello User");
});
app.get('/welcome',(req,res)=>{
	res.send("Welcome User");
})
app.listen("1234",()=>{
console.log("Server Start...");
})