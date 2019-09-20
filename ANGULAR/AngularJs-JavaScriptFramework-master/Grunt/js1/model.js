//MVC pattern : model view pattern.... design strategy






//
//function calculate(firstno,secondno,operator){
//    
//       var expression = firstno + operator + secondno;
//       console.log("expression is ",expression);
//       return eval(expression);  //eval evaluate expression
//}












var calcObject={
    add:function(x,y){
    return parseInt(x)+parseInt(y);
},

    subtract:function(x,y){
    return x-y;
},

    multiply:function(x,y){
    return x*y;
},

     divide:function(x,y){
    return x/y;
}

}




//function add(x,y){
//    return parseInt(x)+parseInt(y);
//}
//
    //function subtract(x,y){
//    return x-y;
//}
//
//function multiply(x,y){
//    return x*y;
//}
//
//function divide(x,y){
//    return x/y;
//}