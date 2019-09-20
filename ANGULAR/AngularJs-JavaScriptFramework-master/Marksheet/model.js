app.factory("myfactory",()=>{
    var object = {
        arr : [],
        create : function(name,phy,chem,maths){
            var obj = new construct(name,phy,chem,maths)
            this.arr.push(obj);
            console.log(this.arr)
        },
        totalmarks : function(phy,chem,maths){
        var sum =parseInt(phy)+parseInt(chem)+parseInt(maths)
 return sum;
    },
    percentage : function(phy,chem,maths){
        return this.totalmarks(phy,chem,maths)/3
    },
        getarray : function(){
        return this.arr;
    }
   }
    return object;
})
function construct(name,phy,chem,maths){
          this.name= name;
    this.phy = phy;
    this.chem = chem
    this.maths = maths
}
