function isUserExist(userObject){
	var db = require("./db");
	var users = db();
	var subArray = users.filter(function(obj){
		return obj.userid == userObject.uid && obj.pwd ==userObject.pwd;
	});
	return subArray.length>0?"Record Found":"Record Not Found...";
}
module.exports = isUserExist;