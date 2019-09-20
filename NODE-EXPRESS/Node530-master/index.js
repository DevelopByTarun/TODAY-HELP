class W{
	constructor(x,y){
		this.x = x;
		this.y = y;
		console.log("W Cns Call "+this.x +" "+this.y);
	}
	show(){
		console.log("Show is ",(this.x + this.y));
	}
}
class Emp extends W{
	
	constructor(a,b){
	super(1000,2000);	
	this.a  = a;
	this.b = b;	
		
	}
	print(){
		super.show();
		console.log("A is "+this.a+" b is "+this.b+" X is "+this.x+" "+this.y);
		console.log("Sum is "+(this.x + this.y + this.a + this.b ));
	}
}

const ram = new Emp(100,200);
ram.print();

//const add = (a,b)=>{
//	console.log("A is ",a);
//	console.log("B is ",b);
//	return a + b;
//}
//const add = (a,b)=> a+ b;
//const add=function(a,b) {
//const a = 100;
//const b = 200;
 //return a + b;
	//a= 20000;
//var c  = a + b;
//console.log("Hello Node ",c);
//}
//var z = add(100,200);
//console.log(z);