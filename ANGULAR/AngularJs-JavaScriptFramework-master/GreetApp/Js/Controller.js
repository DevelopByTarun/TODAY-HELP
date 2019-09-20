app.controller("GreetController", ($scope, GreetFactory) => {
    $scope.show = () => {
        var result = "Welcome " + GreetFactory.initCap($scope.fname) + "" + GreetFactory.initCap($scope.lname);
        $scope.message = result;
    }
});