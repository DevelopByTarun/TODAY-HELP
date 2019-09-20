app.controller("SMctrl", ($scope,SMfactory)=> {
    $scope.calculate = ()=> {
        $scope.total = SMfactory.totalMarks($scope.html, $scope.java, $scope.css, $scope.mean);
//        console.log("Total Marks :: ",total);
        $scope.percent = SMfactory.myPercentage();
        $scope.avg = SMfactory.myAverage();
//        console.log("Average :: ",avg);
        
//        console.log("Percentage :: ",percent);
    }
});