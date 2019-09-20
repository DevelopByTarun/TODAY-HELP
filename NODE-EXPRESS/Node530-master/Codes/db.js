class User{
	constructor(userid, pwd){
		this.userid = userid;
		this.pwd = pwd;
	}
}
function prepareUser(){
var users = [];
var user1 = new User("amit","123");
var user2 = new User("ram","321");
var user3 = new User("shyam","456");
users.push(user1);
users.push(user2);
users.push(user3);
return users;	
}

module.exports= prepareUser;
