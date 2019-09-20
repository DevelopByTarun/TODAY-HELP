const express = require("express");
var router = express.Router();
router.get("/welcome",(req,res)=>{
res.send("Hello User");
});
router.post('/login',(req,res)=>{
	console.log(req);
	res.send("Welcome User "+req.body.userid);
});
router.post("/register",(req,res)=>{
	res.send("Register Code");
});
module.exports = router;