app.controller("CalculatorController", ($scope, CalculatorFactory) => {
    $scope.addition = () => {
        var result = CalculatorFactory.plus($scope.firstno, $scope.secondno);
        console.log("result " + result);
        $scope.message = result;
    }
    $scope.subtraction = () => {
        var result = CalculatorFactory.minus($scope.firstno, $scope.secondno);
        console.log("result " + result);
        $scope.message = result;
    }
    $scope.multiplication = () => {
        var result = CalculatorFactory.multiply($scope.firstno, $scope.secondno);
        console.log("result " + result);
        $scope.message = result;
    }
    $scope.division = () => {
        var result = CalculatorFactory.divide($scope.firstno, $scope.secondno);
        console.log("result " + result);
        $scope.message = result;
    }
});