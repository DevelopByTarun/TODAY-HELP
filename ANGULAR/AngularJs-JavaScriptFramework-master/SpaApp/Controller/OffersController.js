app.controller("offersCtrl", function($scope, $routeParams, offersFactory) {

    $scope.title = "You Have " + $routeParams.count + " Offers and Discount is " + $routeParams.discount + "%";

    var promise = offersFactory.callServer($scope.search);
    console.log("I Got the Promise...");
    for (var i = 1; i <= 5; i++) {
        console.log("Remaining Time ", 17 * i);
    }
    promise.then(function(data) {
        $scope.result = data;
        console.log("Get the Data in Promise...")
    }, function(err) {
        $scope.result = err;
        console.log("Get the Err in Promise...");
    });

});