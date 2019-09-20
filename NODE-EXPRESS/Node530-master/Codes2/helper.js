var db = require("./db");
function isUserExist(userObject){
	
	var users = db.getUsers();
	var subArray = users.filter(function(obj){
		return obj.userid == userObject.uid && obj.pwd ==userObject.pwd;
	});
	return subArray.length>0?"Record Found":"Record Not Found...";
}
function addNewUser(userid, pwd){
	db.prepareUser();
	var result =  db.addUser(userid,pwd);
	console.log(db.getUsers());
	return result;
	
}
module.exports.userexist = isUserExist;
module.exports.adduser= addNewUser;