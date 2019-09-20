var vv = {
	show(){
		console.log("show ");
	},
	display(){
		console.log("display");
	}
}

vv.show();
vv.display();

function loop(){
	
	console.log(i + " "+h);
	for(var i = 1; i<=10; i++){
		if(i==5){
			var h = 100;
		}
	}
}


var obj = require("calcapptest");
/*var a = 100;
var b = 200;
*/
var str = `ghdfjkhgdfhgdkjhgdjkhfghdkhgjkdfgkjhgfhk
ghdfkjgkdfjhgjhdfjhkgdjfkhghkjd
gdfhjkhgdhjkghdfkghjkdfh`;
var obj2 = {x:100,y:200,z:300,e:999};

var {x,z}=obj2;
console.log(`X is ${x} and z is ${z}`);
var bb=[10,20,30,40,50];
var [gg,,nn,,yy]=bb;

var [a,b]=[100,200];
[a,b]=[b,a];
var c = obj.add(a,b);
//console.log("A is "+a+" And B is "+b+" C is "+c);
console.log(`A is ${a} and B is ${b} and c is ${c}`);


//console.log("Sum is "+obj.add(100,200));
console.log(obj.multiply(100,200));