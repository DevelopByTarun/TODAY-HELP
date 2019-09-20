app.controller("mycntrl",($scope,$rootScope,myfactory)=>{
   $scope.menus = myfactory.menu; 
   $scope.searchSection = true;    
   $scope.img = myfactory.img;
   $scope.sideMenu = myfactory.sideMenu; 
   $scope.Total=0;
   $scope.slider = myfactory.accordian;    
  $scope.showContent = (x)=>{
       $scope.searchSection = false;    
//      console.log(x);
        if(x=="shoeShow"){
        $rootScope.content = myfactory.shoeJSON;
        $rootScope.JSON = "shoeJSON";    
    }  
      else if(x=="shirtShow"){
          $rootScope.content = myfactory.shirtJSON;
          $rootScope.JSON = "shirtJSON";   
      }
      else if(x=="sportShow"){
          $rootScope.content = myfactory.sportJSON;
          $rootScope.JSON = "sportJSON";   
      }
      else if(x=="cartShow"){
          $rootScope.content = myfactory.cart;
      }
  };
    $scope.addToCart=(id,JSON)=>{
//       console.log(JSON);
       
         myfactory[JSON].forEach((x)=>{
            if(id==x.id){
                myfactory.cart.push(x);
                console.log(myfactory.cart);
                
            } 
         });
        
        $scope.Total = myfactory.ComputeTotal(myfactory.cart);    
//        console.log($scope.Total);
    }
});

