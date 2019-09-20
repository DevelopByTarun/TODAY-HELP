// inheritance
app.controller("Ctrl1", ($scope) => {

});
app.controller("Ctrl2", ($scope) => {

});

// $rootscope
app.controller("Ctrl3", ($scope) => {

});
app.controller("Ctrl4", ($scope, $rootScope) => {
    $scope.passValue = () => {
        $rootScope.firstname = $scope.firstname;
        $rootScope.lastname = $scope.lastname;
    }
});
app.controller("Ctrl5", ($scope) => {

});

// Service / factory
app.controller("Ctrl6", ($scope, ControllerFactory) => {
    $scope.pushValue = () => {
        ControllerFactory.x = $scope.xval;
        ControllerFactory.y = $scope.yval;
    }
});
app.controller("Ctrl7", ($scope, ControllerFactory) => {
    $scope.pullValue = () => {
        $scope.xval = ControllerFactory.x;
        $scope.yval = ControllerFactory.y;
    }
});