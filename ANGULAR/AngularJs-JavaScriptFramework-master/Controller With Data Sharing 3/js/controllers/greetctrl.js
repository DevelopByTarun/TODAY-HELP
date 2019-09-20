// Create a Controller
        // In Controller we injected the $scope
        // and $scope is predfine in angularjs
        // also injected the factory
        app.controller("greetctrl",function($scope,$rootScope,myfactory,modulefactory){
            $scope.firstname="Hey";
            $scope.sayWelcome1="Hello1" + $scope.firstname;
            $rootScope.roottext="This is app level text";
            $scope.commonfactory=myfactory.factoryvariable;
            
            $scope.moduleage=modulefactory.age;
        });

     app.controller("greetctrl2",function($scope,myfactory){
            $scope.sayWelcome2=$scope.sayWelcome1+"Hello2";
            $scope.commonfactory=myfactory.factoryvariable;
            
        });

      app.controller("greetctrl3",function($scope,myfactory){
            $scope.sayWelcome3=$scope.roottext+"Hello3";
          $scope.commonfactory=myfactory.factoryvariable;
          
            
        });