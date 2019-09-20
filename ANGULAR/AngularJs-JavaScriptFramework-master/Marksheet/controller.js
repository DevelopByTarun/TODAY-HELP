app.controller("myctrl",($scope,myfactory)=>{
    $scope.print = ()=>{
      myfactory.create($scope.name,$scope.physics,$scope.chemistry,$scope.maths)  
      $scope.total = myfactory.totalmarks($scope.physics,$scope.chemistry,$scope.maths)
      $scope.percent = myfactory.percentage($scope.physics,$scope.chemistry,$scope.maths);
    }
$scope.add= ()=>{
    $scope.arr = myfactory.getarray();
}
$scope.getchange = ()=>{
    if($scope.checkselect==true){
        $scope.result=true;
    }
    else
        $scope.result=false;
}
})