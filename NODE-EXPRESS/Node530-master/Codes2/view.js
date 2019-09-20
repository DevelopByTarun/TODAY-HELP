var userid = "tom";
var pwd = "8989";
var userObject = {uid:userid,pwd:pwd};
var helper = require("./helper");
console.log(helper.adduser(userid,pwd));
var message = helper.userexist(userObject);

console.log(message);
