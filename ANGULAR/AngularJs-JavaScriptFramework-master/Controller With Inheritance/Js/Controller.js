//data sharing with inhertitance
app.controller("SalaryController1", ($scope) => {

});
app.controller("SalaryController2", ($scope) => {
    $scope.hra = 100.12;
    $scope.ta = 200.24;
    $scope.da = 300.36;
});