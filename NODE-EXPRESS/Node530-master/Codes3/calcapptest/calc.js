var calcOperations={
add:(x,y)=>x+y,
	
	multiply:(x,y)=>x*y,
	otherOpr :()=>{
		var obj = require("./mathoperations");
		console.log("Divide ",obj.divide(10,2));
	}
	
}
module.exports = calcOperations;