//MVC is an architectural activity


/*

use SRP : single responsibility principal and DRY rule for dont repeat yourself

*/
window.addEventListener("load",function(){
//or we can create init function 
//document.getElementById("addBt").addEventListener("click",addNumber);
//
//document.getElementById("subtractBt").addEventListener("click",subNumber);

    var arrayLikeObject=document.getElementsByClassName("opr");
    Array.prototype.forEach.apply(arrayLikeObject,[function(button){
        button.addEventListener("click",compute);
    }]);
    
});

function compute(){
    var currentOperation = this.getAttribute("data-operation");
   
//    var operator=this.innerHTML;
    var firstno= document.getElementById("firstno").value;
    var secondno= document.getElementById("secondno").value;
//   output= calculate(firstno,secondno,operator);
    var output=calcObject[currentOperation](firstno,secondno);
    
//    if(currentButton=="+"){
//        output=add(firstno,secondno);
//    }
//    else if(currentButton=="-"){
//        output=subtract(firstno,secondno);
//    }
//    else if(currentButton=="*"){
//        output=multiply(firstno,secondno);
//    }
//    else if(currentButton=="/"){
//        output=divide(firstno,secondno);
//    }
//    
    document.getElementById("result").innerHTML=output;
}

//function addNumber(){
//   var firstno= document.getElementById("firstno").value;
//     var secondno= document.getElementById("secondno").value;
//    var output=add(firstno,secondno);
//    document.getElementById("result").innerHTML=output;
//}
//
//function subNumber(){
//   var firstno= document.getElementById("firstno").value;
//     var secondno= document.getElementById("secondno").value;
//    var output=subtract(firstno,secondno);
//    document.getElementById("result").innerHTML=output;
//}