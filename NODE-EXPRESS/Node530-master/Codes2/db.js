class User{
	constructor(userid, pwd){
		this.userid = userid;
		this.pwd = pwd;
	}
}
var userDB= {
users : [],
addUser:function (userid, pwd){
	var userObject = new User(userid, pwd);
	this.users.push(userObject);
	return "Record Added...";
},
getUsers:function(){
return this.users;	
},	
prepareUser:function (){

var user1 = new User("amit","123");
var user2 = new User("ram","321");
var user3 = new User("shyam","456");
this.users.push(user1);
this.users.push(user2);
this.users.push(user3);
	
}
}

module.exports= userDB;
