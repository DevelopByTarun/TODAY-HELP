var userid = "amit";
var pwd = "8989";
var userObject = {uid:userid,pwd:pwd};
var helper = require("./helper");
var message = helper(userObject);
console.log(message);